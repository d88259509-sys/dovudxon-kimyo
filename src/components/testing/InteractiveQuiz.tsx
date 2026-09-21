import React, { useState } from 'react';
import { QUIZZES_DATA } from '../../data/quizzesData';
import { QuizQuestion, SubjectType } from '../../types';
import { ElementMemoryGame } from './ElementMemoryGame';
import { CheckCircle2, XCircle, Sparkles, Trophy, RefreshCw, HelpCircle, BookOpen, Send, Zap } from 'lucide-react';

export const InteractiveQuiz: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'standard' | 'ai' | 'game'>('standard');
  const [selectedSubject, setSelectedSubject] = useState<SubjectType | 'all'>('all');
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState<number>(0);
  const [selectedOption, setSelectedOption] = useState<number | null>(null);
  const [isAnswerSubmitted, setIsAnswerSubmitted] = useState<boolean>(false);
  const [score, setScore] = useState<number>(0);
  const [quizCompleted, setQuizCompleted] = useState<boolean>(false);

  // AI Quiz state
  const [aiGrade, setAiGrade] = useState<number>(8);
  const [aiTopic, setAiTopic] = useState<string>('Mendeleyev jadvali va Atomlar');
  const [aiQuestions, setAiQuestions] = useState<QuizQuestion[]>([]);
  const [loadingAi, setLoadingAi] = useState<boolean>(false);

  // Standard Quiz list
  const filteredQuestions =
    selectedSubject === 'all'
      ? QUIZZES_DATA
      : QUIZZES_DATA.filter((q) => q.subject === selectedSubject);

  const questionsList = aiQuestions.length > 0 ? aiQuestions : filteredQuestions;
  const currentQuestion = questionsList[currentQuestionIndex];

  const handleSelectOption = (index: number) => {
    if (isAnswerSubmitted) return;
    setSelectedOption(index);
  };

  const handleSubmitAnswer = () => {
    if (selectedOption === null || !currentQuestion) return;
    setIsAnswerSubmitted(true);

    if (selectedOption === currentQuestion.correctIndex) {
      setScore((s) => s + 1);
    }
  };

  const handleNextQuestion = () => {
    setSelectedOption(null);
    setIsAnswerSubmitted(false);

    if (currentQuestionIndex + 1 < questionsList.length) {
      setCurrentQuestionIndex((idx) => idx + 1);
    } else {
      setQuizCompleted(true);
    }
  };

  const restartQuiz = () => {
    setCurrentQuestionIndex(0);
    setSelectedOption(null);
    setIsAnswerSubmitted(false);
    setScore(0);
    setQuizCompleted(false);
  };

  const handleGenerateAiQuiz = async () => {
    setLoadingAi(true);
    try {
      const res = await fetch('/api/generate-quiz', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          subject: selectedSubject === 'all' ? 'kimyo' : selectedSubject,
          grade: aiGrade,
          topic: aiTopic,
          count: 5,
        }),
      });

      const data = await res.json();
      if (data.questions && data.questions.length > 0) {
        const formatted: QuizQuestion[] = data.questions.map((q: any, i: number) => ({
          id: `ai-q-${i}`,
          subject: selectedSubject === 'all' ? 'kimyo' : selectedSubject,
          grade: aiGrade,
          topic: aiTopic,
          question: q.question,
          options: q.options,
          correctIndex: q.correctIndex,
          explanation: q.explanation,
          difficulty: "O'orta",
        }));
        setAiQuestions(formatted);
        restartQuiz();
      }
    } catch (err) {
      console.error('Error generating AI quiz:', err);
    } finally {
      setLoadingAi(false);
    }
  };

  return (
    <div className="space-y-6">
      
      {/* Quiz Navigation Mode Tabs */}
      <div className="bg-slate-900/90 border border-indigo-500/30 rounded-2xl p-4 shadow-xl flex flex-wrap gap-2 items-center justify-between">
        <div className="flex gap-2">
          <button
            onClick={() => { setActiveTab('standard'); restartQuiz(); }}
            className={`px-4 py-2.5 rounded-xl font-bold text-xs transition border ${
              activeTab === 'standard'
                ? 'bg-indigo-600 text-white border-indigo-400 shadow-md'
                : 'bg-slate-950 text-slate-400 border-slate-800'
            }`}
          >
            Standart Testlar
          </button>
          <button
            onClick={() => { setActiveTab('ai'); }}
            className={`px-4 py-2.5 rounded-xl font-bold text-xs transition border flex items-center gap-2 ${
              activeTab === 'ai'
                ? 'bg-purple-600 text-white border-purple-400 shadow-md'
                : 'bg-slate-950 text-slate-400 border-slate-800'
            }`}
          >
            <Sparkles className="w-3.5 h-3.5" />
            AI Moslashtirilgan Test
          </button>
          <button
            onClick={() => setActiveTab('game')}
            className={`px-4 py-2.5 rounded-xl font-bold text-xs transition border flex items-center gap-2 ${
              activeTab === 'game'
                ? 'bg-emerald-600 text-white border-emerald-400 shadow-md'
                : 'bg-slate-950 text-slate-400 border-slate-800'
            }`}
          >
            <Zap className="w-3.5 h-3.5 text-amber-300" />
            O'quv Mini-O'yini
          </button>
        </div>

        {/* Subject Filter (Kimyo / Biologiya / All) */}
        {activeTab !== 'game' && (
          <div className="flex gap-1.5 font-mono text-xs">
            <button
              onClick={() => { setSelectedSubject('all'); restartQuiz(); }}
              className={`px-3 py-1.5 rounded-lg border transition ${
                selectedSubject === 'all'
                  ? 'bg-slate-800 text-white border-slate-600'
                  : 'bg-slate-950 text-slate-400 border-slate-800'
              }`}
            >
              Barchasi
            </button>
            <button
              onClick={() => { setSelectedSubject('kimyo'); restartQuiz(); }}
              className={`px-3 py-1.5 rounded-lg border transition ${
                selectedSubject === 'kimyo'
                  ? 'bg-indigo-900/80 text-indigo-200 border-indigo-600'
                  : 'bg-slate-950 text-slate-400 border-slate-800'
              }`}
            >
              Kimyo
            </button>
            <button
              onClick={() => { setSelectedSubject('biologiya'); restartQuiz(); }}
              className={`px-3 py-1.5 rounded-lg border transition ${
                selectedSubject === 'biologiya'
                  ? 'bg-emerald-900/80 text-emerald-200 border-emerald-600'
                  : 'bg-slate-950 text-slate-400 border-slate-800'
              }`}
            >
              Biologiya
            </button>
          </div>
        )}
      </div>

      {/* Mode: Element Game */}
      {activeTab === 'game' && <ElementMemoryGame />}

      {/* Mode: AI Custom Generator Panel */}
      {activeTab === 'ai' && aiQuestions.length === 0 && (
        <div className="bg-slate-900/90 border border-purple-500/30 rounded-2xl p-6 shadow-xl text-slate-100">
          <div className="flex items-center gap-3 mb-6">
            <div className="p-3 bg-purple-600/20 text-purple-400 rounded-xl border border-purple-500/30">
              <Sparkles className="w-6 h-6" />
            </div>
            <div>
              <h3 className="text-xl font-bold text-white">AI Test Yaratuvchisi</h3>
              <p className="text-xs text-slate-400">Har qanday sinf va mavzu bo'yicha sun'iy intellekt orqali test tuzing</p>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
            <div>
              <label className="block text-xs font-semibold text-slate-300 mb-1">Sinf:</label>
              <select
                value={aiGrade}
                onChange={(e) => setAiGrade(parseInt(e.target.value, 10))}
                className="w-full bg-slate-950 border border-slate-800 rounded-xl p-3 text-xs text-white focus:outline-none focus:ring-2 focus:ring-purple-500"
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
                value={aiTopic}
                onChange={(e) => setAiTopic(e.target.value)}
                placeholder="Masalan: DNK va RNK, Mendeleyev jadvali, Fotosintez"
                className="w-full bg-slate-950 border border-slate-800 rounded-xl p-3 text-xs text-white focus:outline-none focus:ring-2 focus:ring-purple-500"
              />
            </div>
          </div>

          <button
            onClick={handleGenerateAiQuiz}
            disabled={loadingAi}
            className="w-full py-3.5 bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-500 hover:to-indigo-500 text-white font-bold text-xs rounded-xl shadow-lg transition flex items-center justify-center gap-2 disabled:opacity-50"
          >
            {loadingAi ? (
              <>
                <RefreshCw className="w-4 h-4 animate-spin" />
                AI Test Tuzmoqda...
              </>
            ) : (
              <>
                <Sparkles className="w-4 h-4" />
                5 Ta Yangi Test Savolini Tuzish
              </>
            )}
          </button>
        </div>
      )}

      {/* Main Quiz View */}
      {(activeTab === 'standard' || (activeTab === 'ai' && aiQuestions.length > 0)) && (
        <div className="bg-slate-900/90 border border-indigo-500/30 rounded-2xl p-6 shadow-xl text-slate-100">
          
          {!quizCompleted && currentQuestion ? (
            <div>
              {/* Progress & Header */}
              <div className="flex justify-between items-center mb-4 text-xs font-mono">
                <span className="text-indigo-400 font-bold uppercase tracking-wider">
                  Savol {currentQuestionIndex + 1} / {questionsList.length}
                </span>
                <span className="bg-indigo-950 px-3 py-1 rounded-full text-indigo-300 border border-indigo-800">
                  Ball: {score} / {questionsList.length}
                </span>
              </div>

              {/* Progress Bar */}
              <div className="w-full bg-slate-950 h-2 rounded-full overflow-hidden mb-6 border border-slate-800">
                <div
                  className="bg-gradient-to-r from-indigo-500 to-emerald-400 h-full rounded-full transition-all duration-300"
                  style={{ width: `${((currentQuestionIndex + 1) / questionsList.length) * 100}%` }}
                />
              </div>

              {/* Question Text Card */}
              <div className="bg-slate-950 p-5 rounded-2xl border border-slate-800 mb-6">
                <span className="text-[10px] font-mono px-2.5 py-0.5 bg-indigo-950 text-indigo-300 border border-indigo-800 rounded-full font-bold inline-block mb-2">
                  {currentQuestion.subject === 'kimyo' ? 'Kimyo' : 'Biologiya'} | {currentQuestion.topic || 'Umumiy'}
                </span>
                <h3 className="text-base font-bold text-white leading-relaxed">
                  {currentQuestion.question}
                </h3>
              </div>

              {/* Options list */}
              <div className="space-y-3 mb-6">
                {currentQuestion.options.map((opt, idx) => {
                  let optionStyle = 'bg-slate-950 border-slate-800 text-slate-200 hover:border-indigo-500/50';

                  if (selectedOption === idx) {
                    optionStyle = 'bg-indigo-900/60 border-indigo-500 text-white';
                  }

                  if (isAnswerSubmitted) {
                    if (idx === currentQuestion.correctIndex) {
                      optionStyle = 'bg-emerald-950/80 border-emerald-500 text-emerald-200 font-bold';
                    } else if (selectedOption === idx) {
                      optionStyle = 'bg-rose-950/80 border-rose-500 text-rose-200 font-bold';
                    }
                  }

                  return (
                    <button
                      key={idx}
                      onClick={() => handleSelectOption(idx)}
                      disabled={isAnswerSubmitted}
                      className={`w-full p-4 rounded-xl border text-left text-xs transition flex items-center justify-between font-mono ${optionStyle}`}
                    >
                      <span>
                        <strong className="mr-2">{String.fromCharCode(65 + idx)})</strong> {opt}
                      </span>
                      {isAnswerSubmitted && idx === currentQuestion.correctIndex && (
                        <CheckCircle2 className="w-5 h-5 text-emerald-400 flex-shrink-0" />
                      )}
                      {isAnswerSubmitted && selectedOption === idx && idx !== currentQuestion.correctIndex && (
                        <XCircle className="w-5 h-5 text-rose-400 flex-shrink-0" />
                      )}
                    </button>
                  );
                })}
              </div>

              {/* Immediate Explanation Drawer */}
              {isAnswerSubmitted && (
                <div className="p-4 bg-slate-950 rounded-2xl border border-indigo-500/30 text-xs text-slate-300 leading-relaxed mb-6 font-mono">
                  <span className="font-bold text-indigo-300 block mb-1">Tushuntirish:</span>
                  <p>{currentQuestion.explanation}</p>
                </div>
              )}

              {/* Action buttons */}
              <div className="flex justify-end gap-3">
                {!isAnswerSubmitted ? (
                  <button
                    onClick={handleSubmitAnswer}
                    disabled={selectedOption === null}
                    className="px-6 py-3 bg-indigo-600 hover:bg-indigo-500 text-white text-xs font-bold rounded-xl transition shadow-lg disabled:opacity-50"
                  >
                    Javobni Tekshirish
                  </button>
                ) : (
                  <button
                    onClick={handleNextQuestion}
                    className="px-6 py-3 bg-emerald-600 hover:bg-emerald-500 text-white text-xs font-bold rounded-xl transition shadow-lg"
                  >
                    {currentQuestionIndex + 1 < questionsList.length ? 'Keyingi Savol' : 'Natijalarni Ko\'rish'}
                  </button>
                )}
              </div>
            </div>
          ) : (
            /* Quiz Completed View */
            <div className="text-center py-8">
              <Trophy className="w-16 h-16 text-amber-400 mx-auto mb-4 animate-bounce" />
              <h2 className="text-2xl font-extrabold text-white mb-2">Test Sinovi Yakunlandi!</h2>
              <p className="text-xs text-slate-300 mb-6 font-mono">
                Siz {questionsList.length} ta savoldan <strong>{score} ta</strong> savolga to'g'ri javob berdingiz ({Math.round((score / questionsList.length) * 100)}%).
              </p>

              <button
                onClick={restartQuiz}
                className="px-6 py-3 bg-indigo-600 hover:bg-indigo-500 text-white font-bold text-xs rounded-xl shadow-lg transition"
              >
                Qayta Sinash
              </button>
            </div>
          )}

        </div>
      )}
    </div>
  );
};
