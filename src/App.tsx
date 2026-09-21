import React, { useState } from 'react';
import { SubjectType } from './types';
import { PeriodicTable } from './components/chemistry/PeriodicTable';
import { ChemistryTopics } from './components/chemistry/ChemistryTopics';
import { MolarMassCalculator } from './components/calculators/MolarMassCalculator';
import { SolutionConcentrationSolver } from './components/calculators/SolutionConcentrationSolver';
import { GradeCurriculum } from './components/biology/GradeCurriculum';
import { GeneticsPunnettSquare } from './components/calculators/GeneticsPunnettSquare';
import { DnaRnaConverter } from './components/calculators/DnaRnaConverter';
import { AiProblemSolver } from './components/ai/AiProblemSolver';
import { InteractiveQuiz } from './components/testing/InteractiveQuiz';
import { TeacherDashboard } from './components/teacher/TeacherDashboard';

import {
  Atom,
  Dna,
  Calculator,
  HelpCircle,
  GraduationCap,
  Sparkles,
  BookOpen,
  FlaskConical,
  Award,
  Layers,
  Search,
  CheckCircle2,
  BrainCircuit,
  Volume2
} from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

export default function App() {
  const [activeSubject, setActiveSubject] = useState<SubjectType>('kimyo');
  const [activeTab, setActiveTab] = useState<
    'periodic' | 'topics' | 'biology' | 'calculators' | 'solver' | 'quiz' | 'teacher'
  >('periodic');

  const [aiPrompt, setAiPrompt] = useState<string>('');

  const handleAskAiFromComponent = (prompt: string) => {
    setAiPrompt(prompt);
    setActiveTab('solver');
  };

  const handleSubjectSwitch = (subj: SubjectType) => {
    setActiveSubject(subj);
    if (subj === 'kimyo') {
      setActiveTab('periodic');
    } else {
      setActiveTab('biology');
    }
  };

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 font-sans selection:bg-indigo-500 selection:text-white relative overflow-hidden">
      
      {/* Background Glow Accents */}
      <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-indigo-600/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute top-1/3 right-10 w-[450px] h-[450px] bg-emerald-600/10 rounded-full blur-[140px] pointer-events-none" />

      {/* Main Header */}
      <header className="sticky top-0 z-40 bg-slate-950/80 backdrop-blur-xl border-b border-slate-800/80 shadow-2xl">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between gap-4">
          
          {/* Logo & Branding */}
          <div className="flex items-center gap-3">
            <div className="p-2.5 bg-gradient-to-tr from-indigo-600 via-purple-600 to-emerald-500 rounded-2xl shadow-lg shadow-indigo-900/40 text-white flex items-center gap-1">
              <Atom className="w-6 h-6 animate-spin-slow" />
              <Dna className="w-6 h-6" />
            </div>
            <div>
              <h1 className="text-xl font-extrabold tracking-tight text-white flex items-center gap-2">
                BioChem Pro
                <span className="text-[10px] font-mono px-2 py-0.5 bg-emerald-500/20 text-emerald-400 border border-emerald-500/30 rounded-full font-semibold">
                  Ta'lim Portali
                </span>
              </h1>
              <p className="text-xs text-slate-400 hidden sm:block">
                Kimyo va Biologiya Onlayn Akademiyasi & AI Masalalar Yordamchisi
              </p>
            </div>
          </div>

          {/* Subject Switcher (Kimyo / Biologiya) */}
          <div className="flex items-center bg-slate-900 p-1.5 rounded-2xl border border-slate-800 shadow-inner">
            <button
              onClick={() => handleSubjectSwitch('kimyo')}
              className={`flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-bold transition ${
                activeSubject === 'kimyo'
                  ? 'bg-gradient-to-r from-indigo-600 to-purple-600 text-white shadow-lg shadow-indigo-900/50'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              <Atom className="w-4 h-4 text-indigo-300" />
              <span>Kimyo</span>
            </button>
            <button
              onClick={() => handleSubjectSwitch('biologiya')}
              className={`flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-bold transition ${
                activeSubject === 'biologiya'
                  ? 'bg-gradient-to-r from-emerald-600 to-teal-600 text-white shadow-lg shadow-emerald-900/50'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              <Dna className="w-4 h-4 text-emerald-300" />
              <span>Biologiya</span>
            </button>
          </div>

        </div>
      </header>

      {/* Main Container */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-8">
        
        {/* Navigation Tabs Bar */}
        <div className="flex items-center gap-2 overflow-x-auto pb-2 border-b border-slate-800/80 scrollbar-none">
          {activeSubject === 'kimyo' ? (
            <>
              <button
                onClick={() => setActiveTab('periodic')}
                className={`flex items-center gap-2 px-4 py-2.5 rounded-xl text-xs font-bold whitespace-nowrap transition border ${
                  activeTab === 'periodic'
                    ? 'bg-indigo-600 text-white border-indigo-400 shadow-md'
                    : 'bg-slate-900 text-slate-400 border-slate-800 hover:text-slate-200'
                }`}
              >
                <Atom className="w-4 h-4 text-indigo-300" />
                Mendeleyev Davriy Jadvali
              </button>
              <button
                onClick={() => setActiveTab('topics')}
                className={`flex items-center gap-2 px-4 py-2.5 rounded-xl text-xs font-bold whitespace-nowrap transition border ${
                  activeTab === 'topics'
                    ? 'bg-indigo-600 text-white border-indigo-400 shadow-md'
                    : 'bg-slate-900 text-slate-400 border-slate-800 hover:text-slate-200'
                }`}
              >
                <BookOpen className="w-4 h-4 text-indigo-300" />
                Kimyo Nazariy Mavzulari
              </button>
            </>
          ) : (
            <button
              onClick={() => setActiveTab('biology')}
              className={`flex items-center gap-2 px-4 py-2.5 rounded-xl text-xs font-bold whitespace-nowrap transition border ${
                activeTab === 'biology'
                  ? 'bg-emerald-600 text-white border-emerald-400 shadow-md'
                  : 'bg-slate-900 text-slate-400 border-slate-800 hover:text-slate-200'
              }`}
            >
              <Dna className="w-4 h-4 text-emerald-300" />
              5 - 11 Sinf Biologiya Darsligi
            </button>
          )}

          <button
            onClick={() => setActiveTab('calculators')}
            className={`flex items-center gap-2 px-4 py-2.5 rounded-xl text-xs font-bold whitespace-nowrap transition border ${
              activeTab === 'calculators'
                ? 'bg-blue-600 text-white border-blue-400 shadow-md'
                : 'bg-slate-900 text-slate-400 border-slate-800 hover:text-slate-200'
            }`}
          >
            <Calculator className="w-4 h-4 text-blue-300" />
            Interaktiv Kalkulyatorlar
          </button>

          <button
            onClick={() => setActiveTab('solver')}
            className={`flex items-center gap-2 px-4 py-2.5 rounded-xl text-xs font-bold whitespace-nowrap transition border ${
              activeTab === 'solver'
                ? 'bg-purple-600 text-white border-purple-400 shadow-md'
                : 'bg-slate-900 text-slate-400 border-slate-800 hover:text-slate-200'
            }`}
          >
            <Sparkles className="w-4 h-4 text-purple-300" />
            AI Masala Yechuvchi
          </button>

          <button
            onClick={() => setActiveTab('quiz')}
            className={`flex items-center gap-2 px-4 py-2.5 rounded-xl text-xs font-bold whitespace-nowrap transition border ${
              activeTab === 'quiz'
                ? 'bg-amber-600 text-white border-amber-400 shadow-md'
                : 'bg-slate-900 text-slate-400 border-slate-800 hover:text-slate-200'
            }`}
          >
            <Award className="w-4 h-4 text-amber-300" />
            Interaktiv Testlar & Mini-O'yin
          </button>

          <button
            onClick={() => setActiveTab('teacher')}
            className={`flex items-center gap-2 px-4 py-2.5 rounded-xl text-xs font-bold whitespace-nowrap transition border ${
              activeTab === 'teacher'
                ? 'bg-violet-600 text-white border-violet-400 shadow-md'
                : 'bg-slate-900 text-slate-400 border-slate-800 hover:text-slate-200'
            }`}
          >
            <GraduationCap className="w-4 h-4 text-violet-300" />
            O'qituvchilar Paneli
          </button>
        </div>

        {/* Dynamic Content Switching with Motion */}
        <AnimatePresence mode="wait">
          <motion.div
            key={`${activeSubject}-${activeTab}`}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
          >
            {/* Periodic Table Tab */}
            {activeTab === 'periodic' && (
              <PeriodicTable onAskAi={handleAskAiFromComponent} />
            )}

            {/* Chemistry Topics Tab */}
            {activeTab === 'topics' && (
              <ChemistryTopics
                onSelectTopic={(title) =>
                  handleAskAiFromComponent(`Kimyo fani bo'yicha "${title}" mavzusini batafsil va misollar bilan tushuntirib bering.`)
                }
              />
            )}

            {/* Biology Curriculum Tab */}
            {activeTab === 'biology' && (
              <GradeCurriculum onAskAi={handleAskAiFromComponent} />
            )}

            {/* Calculators Suite Tab */}
            {activeTab === 'calculators' && (
              <div className="space-y-8">
                {activeSubject === 'kimyo' ? (
                  <>
                    <MolarMassCalculator />
                    <SolutionConcentrationSolver />
                  </>
                ) : (
                  <>
                    <GeneticsPunnettSquare />
                    <DnaRnaConverter />
                  </>
                )}
              </div>
            )}

            {/* AI Problem Solver Tab */}
            {activeTab === 'solver' && (
              <AiProblemSolver
                initialSubject={activeSubject}
                initialPrompt={aiPrompt}
              />
            )}

            {/* Quizzes & Mini Game Tab */}
            {activeTab === 'quiz' && <InteractiveQuiz />}

            {/* Teacher Suite Tab */}
            {activeTab === 'teacher' && <TeacherDashboard />}
          </motion.div>
        </AnimatePresence>

      </main>

      {/* Global Footer */}
      <footer className="border-t border-slate-900 bg-slate-950 py-8 text-center text-xs text-slate-500 font-mono">
        <p className="max-w-7xl mx-auto px-4">
          BioChem Pro - Kimyo va Biologiya Fanlaridan Onlayn Ta'lim Portali © {new Date().getFullYear()}. O'zbekiston Milliy Ta'lim Tizimi Uchun Maxsus Ishlab Chiqilgan.
        </p>
      </footer>
    </div>
  );
}
