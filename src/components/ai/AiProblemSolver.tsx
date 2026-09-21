import React, { useState } from 'react';
import { SubjectType } from '../../types';
import { SAMPLE_PROBLEMS } from '../../data/sampleProblems';
import { Sparkles, Send, RefreshCw, Copy, Check, BookOpen, AlertCircle, Calculator, FileText } from 'lucide-react';

interface AiProblemSolverProps {
  initialSubject?: SubjectType;
  initialPrompt?: string;
}

export const AiProblemSolver: React.FC<AiProblemSolverProps> = ({
  initialSubject = 'kimyo',
  initialPrompt = ''
}) => {
  const [subject, setSubject] = useState<SubjectType>(initialSubject);
  const [grade, setGrade] = useState<number>(8);
  const [problemText, setProblemText] = useState<string>(initialPrompt);
  const [solution, setSolution] = useState<string | null>(null);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);
  const [copied, setCopied] = useState<boolean>(false);

  const sampleList = SAMPLE_PROBLEMS.filter((p) => p.subject === subject);

  const handleSolve = async () => {
    if (!problemText.trim()) {
      setError("Iltimos, masala yoki savol matnini kiriting!");
      return;
    }

    setLoading(true);
    setError(null);
    setSolution(null);

    try {
      const res = await fetch('/api/solve', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          subject,
          grade: `${grade}-sinf`,
          problemText,
        }),
      });

      const data = await res.json();
      if (!res.ok) {
        throw new Error(data.error || 'Server bilan aloqada xatolik yuz berdi.');
      }

      setSolution(data.solution);
    } catch (err: any) {
      console.error('Solve error:', err);
      setError(err.message || 'Masalani yechishda xatolik yuz berdi.');
    } finally {
      setLoading(false);
    }
  };

  const copySolution = () => {
    if (solution) {
      navigator.clipboard.writeText(solution);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  return (
    <div className="space-y-6">
      <div className="bg-slate-900/90 border border-purple-500/30 rounded-2xl p-6 shadow-xl text-slate-100">
        
        {/* Header */}
        <div className="flex items-center gap-3 mb-6">
          <div className="p-3 bg-gradient-to-r from-purple-600 to-indigo-600 text-white rounded-xl shadow-lg">
            <Sparkles className="w-6 h-6" />
          </div>
          <div>
            <h3 className="text-xl font-bold text-white">AI Masala va Misollar Yechuvchisi</h3>
            <p className="text-xs text-slate-400">Kimyo va Biologiya fanlaridan har qanday murakkablikdagi masalani bosqichma-bosqich yechib beradi</p>
          </div>
        </div>

        {/* Configuration Row */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
          <div>
            <label className="block text-xs font-semibold text-slate-300 mb-1">Fan:</label>
            <div className="flex gap-2">
              <button
                onClick={() => setSubject('kimyo')}
                className={`flex-1 py-2.5 rounded-xl font-bold text-xs transition border ${
                  subject === 'kimyo'
                    ? 'bg-indigo-600 text-white border-indigo-400 shadow-md'
                    : 'bg-slate-950 text-slate-400 border-slate-800'
                }`}
              >
                Kimyo
              </button>
              <button
                onClick={() => setSubject('biologiya')}
                className={`flex-1 py-2.5 rounded-xl font-bold text-xs transition border ${
                  subject === 'biologiya'
                    ? 'bg-emerald-600 text-white border-emerald-400 shadow-md'
                    : 'bg-slate-950 text-slate-400 border-slate-800'
                }`}
              >
                Biologiya
              </button>
            </div>
          </div>

          <div>
            <label className="block text-xs font-semibold text-slate-300 mb-1">Sinf darajasi:</label>
            <select
              value={grade}
              onChange={(e) => setGrade(parseInt(e.target.value, 10))}
              className="w-full bg-slate-950 border border-slate-800 rounded-xl p-2.5 text-xs text-white focus:outline-none focus:ring-2 focus:ring-indigo-500"
            >
              {[5, 6, 7, 8, 9, 10, 11].map((g) => (
                <option key={g} value={g}>
                  {g}-Sinf
                </option>
              ))}
            </select>
          </div>
        </div>

        {/* Input Textarea */}
        <div className="mb-4">
          <label className="block text-xs font-semibold text-slate-300 mb-1">
            Masala shartini yoki savolni kiriting:
          </label>
          <textarea
            rows={4}
            value={problemText}
            onChange={(e) => setProblemText(e.target.value)}
            placeholder={`Masalan: ${
              subject === 'kimyo'
                ? '500 ml 0.2 M li NaOH eritmasida necha gramm natriy gidroksid bor?'
                : 'DNK zanjirida 400 ta Adenin bor bo\'lib, bu umumiy nukleotidlarning 20% bo\'lsa, Vodorod bog\'lari sonini toping.'
            }`}
            className="w-full bg-slate-950 border border-slate-800 rounded-xl p-3.5 text-xs text-slate-200 placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-indigo-500 font-mono leading-relaxed"
          />
        </div>

        {/* Preset Sample Problems */}
        <div className="mb-6">
          <span className="text-[11px] text-slate-400 font-medium block mb-2">
            Tayyor masalalar namunasidan tanlang:
          </span>
          <div className="flex flex-wrap gap-2">
            {sampleList.map((sp) => (
              <button
                key={sp.id}
                onClick={() => setProblemText(sp.problemText)}
                className="text-[11px] bg-slate-950 hover:bg-slate-800 text-indigo-300 border border-slate-800 rounded-lg px-3 py-1.5 transition text-left line-clamp-1"
              >
                {sp.title}
              </button>
            ))}
          </div>
        </div>

        {/* Solve Action Button */}
        <button
          onClick={handleSolve}
          disabled={loading}
          className="w-full py-3.5 bg-gradient-to-r from-purple-600 via-indigo-600 to-blue-600 hover:from-purple-500 hover:to-blue-500 text-white font-bold text-xs rounded-xl shadow-lg transition flex items-center justify-center gap-2 disabled:opacity-50"
        >
          {loading ? (
            <>
              <RefreshCw className="w-4 h-4 animate-spin" />
              AI Masalani Yechmoqda va Tahlil Qilmoqda...
            </>
          ) : (
            <>
              <Send className="w-4 h-4" />
              Masalani Bosqichma-Bosqich Yechib Ber
            </>
          )}
        </button>

        {/* Error message */}
        {error && (
          <div className="mt-4 p-3 bg-red-950/80 border border-red-500/40 rounded-xl text-xs text-red-300 flex items-center gap-2">
            <AlertCircle className="w-4 h-4 flex-shrink-0" />
            <span>{error}</span>
          </div>
        )}

        {/* AI Solution Response */}
        {solution && (
          <div className="mt-6 bg-slate-950 border border-purple-500/40 rounded-2xl p-6 relative animate-in fade-in duration-200">
            <div className="flex justify-between items-center mb-4 border-b border-slate-800 pb-3">
              <span className="text-xs font-bold text-purple-300 uppercase tracking-wider flex items-center gap-2">
                <Check className="w-4 h-4 text-emerald-400" />
                AI O'qituvchining Yechimi:
              </span>
              <button
                onClick={copySolution}
                className="flex items-center gap-1.5 px-3 py-1.5 bg-slate-800 hover:bg-slate-700 text-slate-200 rounded-lg text-xs font-mono transition"
              >
                {copied ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
                {copied ? 'Nusxalandi!' : 'Nusxalash'}
              </button>
            </div>

            <div className="text-xs leading-relaxed text-slate-200 font-mono whitespace-pre-wrap space-y-2">
              {solution}
            </div>
          </div>
        )}

      </div>
    </div>
  );
};
