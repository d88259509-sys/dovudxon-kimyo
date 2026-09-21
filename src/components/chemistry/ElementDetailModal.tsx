import React from 'react';
import { ChemicalElement } from '../../types';
import { X, Sparkles, BookOpen, Atom, Cpu, CheckCircle2 } from 'lucide-react';

interface ElementDetailModalProps {
  element: ChemicalElement | null;
  onClose: () => void;
  onAskAi: (topic: string) => void;
}

export const ElementDetailModal: React.FC<ElementDetailModalProps> = ({
  element,
  onClose,
  onAskAi
}) => {
  if (!element) return null;

  return (
    <div className="fixed inset-0 z-50 bg-black/80 backdrop-blur-md flex items-center justify-center p-4 overflow-y-auto">
      <div className="bg-slate-900 border border-indigo-500/40 rounded-3xl w-full max-w-2xl max-h-[90vh] overflow-y-auto shadow-2xl text-slate-100 p-6 relative animate-in fade-in zoom-in duration-200">
        
        {/* Close button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-2.5 bg-slate-800 hover:bg-slate-700 text-slate-300 rounded-full transition"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Top Header Card */}
        <div className="flex flex-col sm:flex-row items-center gap-6 p-6 bg-gradient-to-r from-indigo-950/80 via-slate-900 to-purple-950/80 rounded-2xl border border-indigo-500/30 mb-6">
          
          {/* Element Tile Visual */}
          <div className="w-28 h-28 bg-gradient-to-br from-indigo-600 to-purple-700 rounded-2xl flex flex-col justify-between p-3 text-white shadow-xl border border-indigo-400/30 relative overflow-hidden flex-shrink-0">
            <div className="flex justify-between items-center text-xs font-mono font-bold">
              <span>#{element.number}</span>
              <span>{element.phase}</span>
            </div>
            <div className="text-center my-auto">
              <span className="text-4xl font-extrabold font-mono tracking-tight">{element.symbol}</span>
            </div>
            <div className="text-center text-[10px] font-mono text-indigo-200">
              {element.atomicMass} g/mol
            </div>
          </div>

          {/* Element Info Summary */}
          <div className="flex-1 text-center sm:text-left">
            <div className="inline-block px-3 py-1 bg-indigo-500/20 text-indigo-300 border border-indigo-400/30 rounded-full text-xs font-medium mb-2">
              {element.categoryUz}
            </div>
            <h2 className="text-3xl font-extrabold text-white mb-1">{element.nameUz} ({element.nameLat})</h2>
            <p className="text-xs text-slate-400 font-mono">
              Davr: {element.period} | Guruh: {element.group} | Blok: {element.block.toUpperCase()}
            </p>
            <p className="text-xs text-indigo-300 font-mono mt-1">
              Elektron konfiguratsiya: <strong>{element.electronConfiguration}</strong>
            </p>
          </div>
        </div>

        {/* Simulated Animated Electron Shell Orbit Diagram */}
        <div className="bg-slate-950 p-6 rounded-2xl border border-slate-800 mb-6 text-center">
          <span className="text-xs font-semibold text-slate-400 uppercase tracking-widest block mb-4 flex items-center justify-center gap-2">
            <Atom className="w-4 h-4 text-indigo-400 animate-spin" />
            Elektron Qavatlar Tuzilishi ({element.shells.join(' - ')}):
          </span>

          <div className="relative w-48 h-48 mx-auto flex items-center justify-center">
            {/* Nucleus */}
            <div className="w-12 h-12 bg-gradient-to-r from-red-500 to-indigo-600 rounded-full flex flex-col items-center justify-center text-[10px] font-bold text-white shadow-lg z-10 border border-white/40">
              <span>{element.symbol}</span>
              <span className="text-[8px] opacity-80">+{element.number}</span>
            </div>

            {/* Electron Shell Rings */}
            {element.shells.map((count, idx) => {
              const size = 60 + (idx + 1) * 32;
              return (
                <div
                  key={idx}
                  className="absolute rounded-full border border-indigo-500/30 border-dashed animate-pulse"
                  style={{ width: `${size}px`, height: `${size}px` }}
                >
                  <span className="absolute -top-2 left-1/2 -translate-x-1/2 bg-indigo-600 text-white text-[9px] px-1.5 py-0.2 rounded-full font-mono">
                    {count}e⁻
                  </span>
                </div>
              );
            })}
          </div>
        </div>

        {/* Detailed Properties Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 mb-6 font-mono text-xs">
          <div className="bg-slate-950 p-3 rounded-xl border border-slate-800">
            <span className="text-slate-400 block text-[10px]">Elektromanfiylik:</span>
            <span className="text-sm font-bold text-indigo-300">{element.electronegativity || 'Mavjud emas'}</span>
          </div>
          <div className="bg-slate-950 p-3 rounded-xl border border-slate-800">
            <span className="text-slate-400 block text-[10px]">Oksidlanish darajalari:</span>
            <span className="text-sm font-bold text-emerald-300">{element.oxidationStates}</span>
          </div>
          <div className="bg-slate-950 p-3 rounded-xl border border-slate-800">
            <span className="text-slate-400 block text-[10px]">Suyuqlanish harorati:</span>
            <span className="text-sm font-bold text-amber-300">{element.meltingPoint ? `${element.meltingPoint} K` : '---'}</span>
          </div>
          <div className="bg-slate-950 p-3 rounded-xl border border-slate-800">
            <span className="text-slate-400 block text-[10px]">Kashf etgan:</span>
            <span className="text-xs font-semibold text-slate-200">{element.discoveredBy || 'Qadimiy'}</span>
          </div>
          <div className="bg-slate-950 p-3 rounded-xl border border-slate-800">
            <span className="text-slate-400 block text-[10px]">Kashf etilgan yili:</span>
            <span className="text-xs font-semibold text-slate-200">{element.discoveryYear || 'Qadimiy'}</span>
          </div>
          <div className="bg-slate-950 p-3 rounded-xl border border-slate-800">
            <span className="text-slate-400 block text-[10px]">Zichligi:</span>
            <span className="text-xs font-semibold text-slate-200">{element.density ? `${element.density} g/cm³` : '---'}</span>
          </div>
        </div>

        {/* Summary Description */}
        <div className="mb-6 bg-slate-950/80 p-4 rounded-xl border border-slate-800 text-xs text-slate-300 leading-relaxed">
          <h4 className="text-sm font-bold text-white mb-2 flex items-center gap-2">
            <BookOpen className="w-4 h-4 text-indigo-400" />
            Batafsil Tushuntirish:
          </h4>
          <p className="mb-3">{element.summaryUz}</p>

          {/* Applications list */}
          <h5 className="font-semibold text-indigo-300 mb-2">Asosiy ishlatilish sohalari:</h5>
          <ul className="space-y-1.5">
            {element.applicationsUz.map((app, i) => (
              <li key={i} className="flex items-start gap-2">
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 mt-0.5 flex-shrink-0" />
                <span>{app}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Action button */}
        <div className="flex justify-end gap-3">
          <button
            onClick={() => {
              onClose();
              onAskAi(`${element.nameUz} (${element.symbol}) elementi haqida batafsil ma'lumot, kimyoviy xossalari va masalalar.`);
            }}
            className="flex items-center gap-2 px-5 py-3 bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-500 hover:to-purple-500 text-white font-semibold text-xs rounded-xl shadow-lg transition"
          >
            <Sparkles className="w-4 h-4" />
            AI Yordamida Yanada Chuqurroq O'rganish
          </button>
        </div>

      </div>
    </div>
  );
};
