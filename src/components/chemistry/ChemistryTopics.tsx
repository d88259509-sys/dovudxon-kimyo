import React, { useState } from 'react';
import { BookOpen, Sparkles, Flame, CheckCircle2, ChevronRight, HelpCircle } from 'lucide-react';

interface ChemistryTopicsProps {
  onSelectTopic: (topicTitle: string) => void;
}

export const ChemistryTopics: React.FC<ChemistryTopicsProps> = ({ onSelectTopic }) => {
  const topics = [
    {
      id: 'atom-structure',
      title: 'Atom tuzilishi va Izotoplar',
      desc: 'Proton, neytron, elektronlar. Yadro va elektron qavatlar, izotoplar va izobarlar.',
      level: '8-sinf',
      keyPoints: ['Yadro zaryadi', 'Kvant sonlari', 'Elektron formulalar']
    },
    {
      id: 'chemical-bonding',
      title: 'Kimyoviy bog\'lanish turlari',
      desc: 'Kovalent (qutbli va qutbsiz), ionli, metall va vodorod bog\'lanishlar.',
      level: '8-9-sinf',
      keyPoints: ['Elektromanfiylik', 'Kristall panjaralar', 'Valentlik']
    },
    {
      id: 'redox-reactions',
      title: 'Oksidlanish-qaytarilish reaksiyalari (OQR)',
      desc: 'Oksidlanish darajalari, elektron balans usuli va tenglashtirish qoidalari.',
      level: '9-10-sinf',
      keyPoints: ['Oksidlovchi', 'Qaytaruvchi', 'Elektron balans']
    },
    {
      id: 'solutions-electro',
      title: 'Eritmalar va Elektrolitik Dissotsilanish',
      desc: 'Massa ulushi (w%), Molyarlik (M), ionli tenglamalar, pH ko\'rsatkichi.',
      level: '9-sinf',
      keyPoints: ['Dissotsilanish darajasi', 'Kation va Anionlar', 'pH shkala']
    },
    {
      id: 'organic-chemistry',
      title: 'Organik Kimyo: Uglevodorodlar va Ularning hosilalari',
      desc: 'Alkanlar, Alkenlar, Alkilar, Spirtlar, Aldegidlar va Karbon kislotalar.',
      level: '10-11-sinf',
      keyPoints: ['Izomeriya', 'Gomologik qator', 'Nomenklatura']
    },
    {
      id: 'chemical-thermodynamics',
      title: 'Kimyoviy Kinetika va Muvozanat',
      desc: 'Reaksiya tezligi, Le Shatelye prinsipi, katalizatorlar va harorat ta\'siri.',
      level: '10-sinf',
      keyPoints: ['Aktivlanish energiyasi', 'Muvozanat konstantasi', 'Kataliz']
    }
  ];

  return (
    <div className="space-y-6">
      <div className="bg-slate-900/90 border border-indigo-500/30 rounded-2xl p-6 shadow-xl">
        <div className="flex items-center gap-3 mb-4">
          <div className="p-3 bg-indigo-600/20 text-indigo-400 rounded-xl border border-indigo-500/30">
            <BookOpen className="w-6 h-6" />
          </div>
          <div>
            <h3 className="text-xl font-bold text-white">Kimyo Fanidan Asosiy Nazariy Mavzular</h3>
            <p className="text-xs text-slate-400">Maktab dasturi bo'yicha eng muhim tushunchalar va formulalar</p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {topics.map((t) => (
            <div
              key={t.id}
              className="bg-slate-950 p-5 rounded-2xl border border-slate-800 hover:border-indigo-500/50 transition flex flex-col justify-between group"
            >
              <div>
                <div className="flex justify-between items-center mb-2">
                  <span className="text-[10px] font-mono px-2.5 py-0.5 bg-indigo-950 text-indigo-300 border border-indigo-800 rounded-full font-bold">
                    {t.level}
                  </span>
                </div>
                <h4 className="text-base font-bold text-white mb-2 group-hover:text-indigo-300 transition">
                  {t.title}
                </h4>
                <p className="text-xs text-slate-400 mb-4 leading-relaxed">
                  {t.desc}
                </p>

                <div className="flex flex-wrap gap-1.5 mb-4">
                  {t.keyPoints.map((kp, i) => (
                    <span key={i} className="text-[10px] bg-slate-900 text-slate-300 px-2 py-0.5 rounded border border-slate-800 font-mono">
                      #{kp}
                    </span>
                  ))}
                </div>
              </div>

              <button
                onClick={() => onSelectTopic(t.title)}
                className="w-full flex items-center justify-center gap-2 py-2.5 bg-indigo-600/20 hover:bg-indigo-600 text-indigo-300 hover:text-white rounded-xl text-xs font-semibold transition border border-indigo-500/30"
              >
                <Sparkles className="w-3.5 h-3.5" />
                AI Bilan Chuqur O'rganish
                <ChevronRight className="w-3.5 h-3.5" />
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
