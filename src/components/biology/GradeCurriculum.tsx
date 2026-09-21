import React, { useState } from 'react';
import { BIOLOGY_CURRICULUM } from '../../data/biologyCurriculum';
import { BiologyLesson } from '../../types';
import { BiologyDiagramViewer } from './BiologyDiagramViewer';
import { BookOpen, Sparkles, CheckCircle2, ChevronRight, Layers, GraduationCap } from 'lucide-react';

interface GradeCurriculumProps {
  onAskAi: (prompt: string) => void;
}

export const GradeCurriculum: React.FC<GradeCurriculumProps> = ({ onAskAi }) => {
  const [selectedGrade, setSelectedGrade] = useState<number>(5);
  const [activeLessonId, setActiveLessonId] = useState<string>('bio-5-1');

  const grades = [5, 6, 7, 8, 9, 10, 11];

  const gradeLessons = BIOLOGY_CURRICULUM.filter((l) => l.grade === selectedGrade);
  const currentLesson = BIOLOGY_CURRICULUM.find((l) => l.id === activeLessonId) || gradeLessons[0];

  const handleGradeChange = (grade: number) => {
    setSelectedGrade(grade);
    const firstLesson = BIOLOGY_CURRICULUM.find((l) => l.grade === grade);
    if (firstLesson) {
      setActiveLessonId(firstLesson.id);
    }
  };

  return (
    <div className="space-y-6">
      
      {/* Grade Selection Tabs (5-sinf - 11-sinf) */}
      <div className="bg-slate-900/90 border border-emerald-500/30 rounded-2xl p-4 shadow-xl">
        <div className="flex items-center justify-between mb-3">
          <div className="flex items-center gap-2 text-white font-bold text-sm">
            <GraduationCap className="w-5 h-5 text-emerald-400" />
            Maktab Sinf Dasturini Tanlang (5 - 11 Sinf):
          </div>
          <span className="text-[11px] text-emerald-300 font-mono">
            {selectedGrade}-Sinf Biologiya Kursi
          </span>
        </div>

        <div className="grid grid-cols-4 sm:grid-cols-7 gap-2">
          {grades.map((grade) => (
            <button
              key={grade}
              onClick={() => handleGradeChange(grade)}
              className={`py-3 rounded-xl font-bold text-xs transition border flex flex-col items-center justify-center gap-1 ${
                selectedGrade === grade
                  ? 'bg-gradient-to-b from-emerald-600 to-teal-700 text-white border-emerald-400 shadow-lg shadow-emerald-950/50 scale-105'
                  : 'bg-slate-950 text-slate-400 border-slate-800 hover:text-slate-200 hover:border-slate-700'
              }`}
            >
              <span className="text-base">{grade}</span>
              <span className="text-[10px] font-normal uppercase opacity-80">Sinf</span>
            </button>
          ))}
        </div>
      </div>

      {/* Main Lesson View & Sidebar */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        
        {/* Lesson Navigation List */}
        <div className="lg:col-span-1 space-y-3">
          <h4 className="text-xs font-semibold text-slate-400 uppercase tracking-wider px-1">
            {selectedGrade}-Sinf Mavzulari Ro'yxati:
          </h4>

          <div className="space-y-2">
            {gradeLessons.map((lesson) => (
              <button
                key={lesson.id}
                onClick={() => setActiveLessonId(lesson.id)}
                className={`w-full text-left p-4 rounded-2xl border transition ${
                  activeLessonId === lesson.id
                    ? 'bg-emerald-950/60 border-emerald-500 text-white shadow-lg'
                    : 'bg-slate-900/80 border-slate-800 text-slate-300 hover:bg-slate-800/80'
                }`}
              >
                <div className="text-[10px] font-mono text-emerald-400 mb-1 font-semibold uppercase">
                  {lesson.subjectSection}
                </div>
                <h5 className="text-xs font-bold leading-snug mb-1">{lesson.titleUz}</h5>
                <p className="text-[11px] text-slate-400 line-clamp-2">{lesson.descriptionUz}</p>
              </button>
            ))}
          </div>
        </div>

        {/* Selected Lesson Detail */}
        {currentLesson && (
          <div className="lg:col-span-2 space-y-6 bg-slate-900/90 border border-emerald-500/30 rounded-2xl p-6 shadow-xl text-slate-100">
            <div>
              <div className="inline-block px-3 py-1 bg-emerald-500/20 text-emerald-300 border border-emerald-400/30 rounded-full text-xs font-medium mb-2">
                {currentLesson.grade}-Sinf | {currentLesson.subjectSection}
              </div>
              <h2 className="text-2xl font-extrabold text-white mb-2">{currentLesson.titleUz}</h2>
              <p className="text-xs text-slate-400 leading-relaxed font-mono">{currentLesson.descriptionUz}</p>
            </div>

            {/* Content text */}
            <div className="bg-slate-950 p-5 rounded-2xl border border-slate-800 text-xs leading-relaxed text-slate-300 whitespace-pre-line">
              {currentLesson.contentUz}
            </div>

            {/* Diagram Viewer if present */}
            {currentLesson.diagramType && (
              <BiologyDiagramViewer diagramType={currentLesson.diagramType} />
            )}

            {/* Formulas if present */}
            {currentLesson.formulas && currentLesson.formulas.length > 0 && (
              <div className="bg-slate-950 p-4 rounded-xl border border-emerald-500/30">
                <h4 className="text-xs font-bold text-emerald-400 uppercase tracking-wider mb-2">
                  Mavzuga Oid Asosiy Formulalar:
                </h4>
                <div className="space-y-2 font-mono text-xs">
                  {currentLesson.formulas.map((f, i) => (
                    <div key={i} className="bg-slate-900 p-2.5 rounded-lg border border-slate-800">
                      <span className="text-emerald-300 font-bold block">{f.name}:</span>
                      <span className="text-amber-300 font-bold text-sm block my-0.5">{f.formula}</span>
                      <span className="text-slate-400 text-[10px]">{f.explanation}</span>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Key Terms */}
            <div>
              <h4 className="text-xs font-bold text-slate-300 uppercase tracking-wider mb-3">
                Muhim Atama va Tushunchalar:
              </h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                {currentLesson.keyTerms.map((kt, i) => (
                  <div key={i} className="bg-slate-950 p-3 rounded-xl border border-slate-800 text-xs">
                    <span className="font-bold text-emerald-300 block mb-0.5">{kt.term}:</span>
                    <span className="text-slate-400 text-[11px]">{kt.definition}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Ask AI Button */}
            <div className="pt-2 flex justify-end">
              <button
                onClick={() =>
                  onAskAi(
                    `${currentLesson.grade}-sinf Biologiya: "${currentLesson.titleUz}" mavzusini batafsil va hayotiy misollar bilan tushuntirib ber.`
                  )
                }
                className="flex items-center gap-2 px-5 py-3 bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-500 hover:to-teal-500 text-white font-semibold text-xs rounded-xl shadow-lg transition"
              >
                <Sparkles className="w-4 h-4" />
                AI Bilan Ushbu Mavzuni Chuqurroq Tushunish
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
