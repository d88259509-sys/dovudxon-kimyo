import React, { useState } from 'react';
import { SubjectType } from '../../types';
import { GraduationCap, Printer, Sparkles, BookOpen, FileText, CheckCircle2, Download, Copy, RefreshCw } from 'lucide-react';

export const TeacherDashboard: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'plan' | 'worksheet' | 'formulas'>('plan');
  const [subject, setSubject] = useState<SubjectType>('kimyo');
  const [grade, setGrade] = useState<number>(8);
  const [topic, setTopic] = useState<string>('Mendeleyev davriy jadvali va atom tuzilishi');
  const [generatedPlan, setGeneratedPlan] = useState<string | null>(null);
  const [loading, setLoading] = useState<boolean>(false);
  const [copied, setCopied] = useState<boolean>(false);

  const handleGeneratePlan = async () => {
    setLoading(true);
    setGeneratedPlan(null);

    try {
      const res = await fetch('/api/explain-topic', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          subject,
          grade: `${grade}-sinf`,
          topicTitle: `O'qituvchi uchun 45 daqiqalik Dars Ishlanmasi va Konspekt (Mavzu: ${topic})`,
        }),
      });

      const data = await res.json();
      setGeneratedPlan(data.explanation || 'Dars ishlanmasini yaratib bo\'lmadi.');
    } catch (err) {
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  const copyPlan = () => {
    if (generatedPlan) {
      navigator.clipboard.writeText(generatedPlan);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  return (
    <div className="space-y-6">
      
      {/* Header */}
      <div className="bg-gradient-to-r from-indigo-950/90 via-slate-900 to-purple-950/90 border border-indigo-500/30 rounded-2xl p-6 shadow-xl text-slate-100 flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
        <div className="flex items-center gap-3">
          <div className="p-3 bg-indigo-600 text-white rounded-xl shadow-lg">
            <GraduationCap className="w-6 h-6" />
          </div>
          <div>
            <h3 className="text-xl font-bold text-white">O'qituvchilar Usta-Xonasi (Teacher Suite)</h3>
            <p className="text-xs text-slate-400">Dars ishlanmalari (Konspekt), tarqatma testlar va ko'rgazmali qurollar paneli</p>
          </div>
        </div>

        {/* Tab switchers */}
        <div className="flex gap-2">
          <button
            onClick={() => setActiveTab('plan')}
            className={`px-4 py-2.5 rounded-xl text-xs font-bold transition border ${
              activeTab === 'plan'
                ? 'bg-indigo-600 text-white border-indigo-400 shadow-md'
                : 'bg-slate-950 text-slate-400 border-slate-800'
            }`}
          >
            45 Daqiqalik Dars Ishlanmasi
          </button>
          <button
            onClick={() => setActiveTab('formulas')}
            className={`px-4 py-2.5 rounded-xl text-xs font-bold transition border ${
              activeTab === 'formulas'
                ? 'bg-indigo-600 text-white border-indigo-400 shadow-md'
                : 'bg-slate-950 text-slate-400 border-slate-800'
            }`}
          >
            Formulalar va Shpargalka
          </button>
        </div>
      </div>

      {/* Plan generator tab */}
      {activeTab === 'plan' && (
        <div className="bg-slate-900/90 border border-indigo-500/30 rounded-2xl p-6 shadow-xl text-slate-100">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-4">
            <div>
              <label className="block text-xs font-semibold text-slate-300 mb-1">Fan:</label>
              <select
                value={subject}
                onChange={(e) => setSubject(e.target.value as SubjectType)}
                className="w-full bg-slate-950 border border-slate-800 rounded-xl p-3 text-xs text-white focus:outline-none focus:ring-2 focus:ring-indigo-500"
              >
                <option value="kimyo">Kimyo</option>
                <option value="biologiya">Biologiya</option>
              </select>
            </div>

            <div>
              <label className="block text-xs font-semibold text-slate-300 mb-1">Sinf:</label>
              <select
                value={grade}
                onChange={(e) => setGrade(parseInt(e.target.value, 10))}
                className="w-full bg-slate-950 border border-slate-800 rounded-xl p-3 text-xs text-white focus:outline-none focus:ring-2 focus:ring-indigo-500"
              >
                {[5, 6, 7, 8, 9, 10, 11].map((g) => (
                  <option key={g} value={g}>{g}-Sinf</option>
                ))}
              </select>
            </div>

            <div>
              <label className="block text-xs font-semibold text-slate-300 mb-1">Mavzu nomi:</label>
              <input
                type="text"
                value={topic}
                onChange={(e) => setTopic(e.target.value)}
                placeholder="Mavzu nomini kiriting"
                className="w-full bg-slate-950 border border-slate-800 rounded-xl p-3 text-xs text-white focus:outline-none focus:ring-2 focus:ring-indigo-500"
              />
            </div>
          </div>

          <button
            onClick={handleGeneratePlan}
            disabled={loading}
            className="w-full py-3.5 bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-500 hover:to-purple-500 text-white font-bold text-xs rounded-xl shadow-lg transition flex items-center justify-center gap-2 disabled:opacity-50 mb-6"
          >
            {loading ? (
              <>
                <RefreshCw className="w-4 h-4 animate-spin" />
                Dars Ishlanmasi Yaratilmoqda...
              </>
            ) : (
              <>
                <Sparkles className="w-4 h-4" />
                O'qituvchi Uchun Dars Ishlanmasini Avtomatik Shakllantirish
              </>
            )}
          </button>

          {generatedPlan && (
            <div className="bg-slate-950 border border-indigo-500/40 rounded-2xl p-6 relative">
              <div className="flex justify-between items-center mb-4 border-b border-slate-800 pb-3">
                <span className="text-xs font-bold text-indigo-300 uppercase tracking-wider flex items-center gap-2">
                  <FileText className="w-4 h-4 text-emerald-400" />
                  Tayyor 45 Daqiqalik Dars Konspekti:
                </span>
                <div className="flex gap-2">
                  <button
                    onClick={copyPlan}
                    className="flex items-center gap-1.5 px-3 py-1.5 bg-slate-800 hover:bg-slate-700 text-slate-200 rounded-lg text-xs font-mono transition"
                  >
                    {copied ? <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
                    {copied ? 'Nusxalandi' : 'Nusxalash'}
                  </button>
                  <button
                    onClick={() => window.print()}
                    className="flex items-center gap-1.5 px-3 py-1.5 bg-indigo-600 hover:bg-indigo-500 text-white rounded-lg text-xs font-mono transition"
                  >
                    <Printer className="w-3.5 h-3.5" />
                    Chop Etish
                  </button>
                </div>
              </div>

              <div className="text-xs leading-relaxed text-slate-200 font-mono whitespace-pre-wrap">
                {generatedPlan}
              </div>
            </div>
          )}
        </div>
      )}

      {/* Formulas Cheat Sheet */}
      {activeTab === 'formulas' && (
        <div className="bg-slate-900/90 border border-indigo-500/30 rounded-2xl p-6 shadow-xl text-slate-100">
          <h4 className="text-base font-bold text-white mb-4 flex items-center gap-2">
            <BookOpen className="w-5 h-5 text-indigo-400" />
            Kimyo va Biologiya Fanlaridan Eng Kerakli Formulalar Plakati:
          </h4>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 font-mono text-xs">
            <div className="bg-slate-950 p-4 rounded-xl border border-indigo-500/30">
              <h5 className="font-bold text-indigo-300 border-b border-slate-800 pb-2 mb-3">
                KIMYO FORMULALARI
              </h5>
              <ul className="space-y-2">
                <li className="bg-slate-900 p-2 rounded">
                  <span className="text-emerald-300 font-bold block">Molar Massa:</span>
                  <span className="text-amber-300">M = m / n (g/mol)</span>
                </li>
                <li className="bg-slate-900 p-2 rounded">
                  <span className="text-emerald-300 font-bold block">Eritma Massa Ulushi:</span>
                  <span className="text-amber-300">w = (m_erigan / m_eritma) × 100%</span>
                </li>
                <li className="bg-slate-900 p-2 rounded">
                  <span className="text-emerald-300 font-bold block">Molyar Konsentratsiya:</span>
                  <span className="text-amber-300">C = n / V (mol/l)</span>
                </li>
                <li className="bg-slate-900 p-2 rounded">
                  <span className="text-emerald-300 font-bold block">Gaz Molar Hajmi (N.SH.):</span>
                  <span className="text-amber-300">Vm = 22.4 l/mol</span>
                </li>
              </ul>
            </div>

            <div className="bg-slate-950 p-4 rounded-xl border border-emerald-500/30">
              <h5 className="font-bold text-emerald-300 border-b border-slate-800 pb-2 mb-3">
                BIOLOGIYA FORMULALARI
              </h5>
              <ul className="space-y-2">
                <li className="bg-slate-900 p-2 rounded">
                  <span className="text-emerald-300 font-bold block">Chargaff Qoidasi (DNK):</span>
                  <span className="text-amber-300">A = T; G = C; (A+T+G+C) = 100%</span>
                </li>
                <li className="bg-slate-900 p-2 rounded">
                  <span className="text-emerald-300 font-bold block">DNK Uzunligi:</span>
                  <span className="text-amber-300">L = (N / 2) × 0.34 nm</span>
                </li>
                <li className="bg-slate-900 p-2 rounded">
                  <span className="text-emerald-300 font-bold block">Vodorod Bog'lari:</span>
                  <span className="text-amber-300">H = 2A + 3G</span>
                </li>
                <li className="bg-slate-900 p-2 rounded">
                  <span className="text-emerald-300 font-bold block">Lindeman Piramida Qoidasi:</span>
                  <span className="text-amber-300">M₂ = M₁ × 0.10</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      )}

    </div>
  );
};
