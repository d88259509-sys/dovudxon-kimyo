import React, { useState } from 'react';
import { Eye, Dna, Activity, Sun, Layers, Sparkles } from 'lucide-react';

interface BiologyDiagramViewerProps {
  diagramType?: 'cell-plant' | 'cell-animal' | 'dna' | 'photosynthesis' | 'heart' | 'eco-pyramid';
}

export const BiologyDiagramViewer: React.FC<BiologyDiagramViewerProps> = ({ diagramType = 'cell-plant' }) => {
  const [activeHotspot, setActiveHotspot] = useState<string | null>(null);

  if (diagramType === 'cell-plant') {
    return (
      <div className="bg-slate-950 p-6 rounded-2xl border border-emerald-500/30 text-slate-100">
        <div className="flex items-center justify-between mb-4">
          <span className="text-xs font-bold text-emerald-400 uppercase tracking-wider flex items-center gap-2">
            <Layers className="w-4 h-4" />
            Interaktiv O'simlik Hujayrasi Sxemasi
          </span>
          <span className="text-[10px] text-slate-400 font-mono">Qismlar ustiga bosing</span>
        </div>

        <div className="relative w-full max-w-md mx-auto aspect-square bg-gradient-to-br from-emerald-950/80 to-slate-900 border-2 border-emerald-500/50 rounded-3xl p-6 flex flex-col justify-between shadow-2xl">
          {/* Cell Wall */}
          <div className="absolute inset-2 border-4 border-emerald-600 rounded-2xl pointer-events-none opacity-60">
            <span className="absolute top-1 left-3 text-[9px] font-mono text-emerald-300">Sellyuloza Hujayra Devori</span>
          </div>

          {/* Nucleus */}
          <button
            onClick={() => setActiveHotspot('yadro')}
            className={`absolute top-12 left-12 w-20 h-20 rounded-full bg-gradient-to-r from-purple-600 to-indigo-600 border-2 border-purple-300 shadow-lg flex items-center justify-center text-xs font-bold transition transform hover:scale-105 ${
              activeHotspot === 'yadro' ? 'ring-4 ring-purple-400' : ''
            }`}
          >
            Yadro
          </button>

          {/* Chloroplasts */}
          <button
            onClick={() => setActiveHotspot('xloroplast')}
            className={`absolute bottom-12 left-10 w-16 h-12 rounded-2xl bg-emerald-500 border-2 border-emerald-200 shadow-md flex items-center justify-center text-[10px] font-bold text-slate-950 transition transform hover:scale-105 ${
              activeHotspot === 'xloroplast' ? 'ring-4 ring-emerald-300' : ''
            }`}
          >
            Xloroplast
          </button>

          {/* Vacuole */}
          <button
            onClick={() => setActiveHotspot('vakuola')}
            className={`absolute top-1/2 right-10 -translate-y-1/2 w-28 h-32 rounded-3xl bg-sky-500/40 border-2 border-sky-300 shadow-inner flex items-center justify-center text-xs font-bold text-sky-200 transition transform hover:scale-105 ${
              activeHotspot === 'vakuola' ? 'ring-4 ring-sky-300' : ''
            }`}
          >
            Vakuola
          </button>

          {/* Mitochondria */}
          <button
            onClick={() => setActiveHotspot('mitoxondriya')}
            className={`absolute bottom-10 right-12 w-14 h-10 rounded-full bg-rose-600 border-2 border-rose-300 flex items-center justify-center text-[9px] font-bold text-white transition transform hover:scale-105 ${
              activeHotspot === 'mitoxondriya' ? 'ring-4 ring-rose-400' : ''
            }`}
          >
            Mitoxondriya
          </button>
        </div>

        {/* Hotspot Info */}
        <div className="mt-4 p-3 bg-slate-900 rounded-xl border border-slate-800 text-xs font-mono">
          {activeHotspot === 'yadro' && (
            <p className="text-purple-300">
              <strong>Yadro:</strong> Irsi axborot saqlanadigan va bo'linishni boshqaradigan asosiy markaz.
            </p>
          )}
          {activeHotspot === 'xloroplast' && (
            <p className="text-emerald-300">
              <strong>Xloroplast:</strong> Fotosintez amalga oshadigan yashil plastida (Quyosh nuridan glyukoza oladi).
            </p>
          )}
          {activeHotspot === 'vakuola' && (
            <p className="text-sky-300">
              <strong>Vakuola:</strong> Hujayra shirasi to'plangan, turgor bosimini ushlab turuvchi katta bo'shliq.
            </p>
          )}
          {activeHotspot === 'mitoxondriya' && (
            <p className="text-rose-300">
              <strong>Mitoxondriya:</strong> Hujayraning energetik stansiyasi, ATF sintezlaydi.
            </p>
          )}
          {!activeHotspot && (
            <p className="text-slate-400 italic">Sxemadagi organoidlar ustiga bosing (Yadro, Xloroplast, Vakuola...)</p>
          )}
        </div>
      </div>
    );
  }

  if (diagramType === 'dna') {
    return (
      <div className="bg-slate-950 p-6 rounded-2xl border border-teal-500/30 text-slate-100 text-center">
        <span className="text-xs font-bold text-teal-400 uppercase tracking-wider block mb-4 flex items-center justify-center gap-2">
          <Dna className="w-4 h-4" />
          DNK Qo'sh Spiral Tuzilishi
        </span>

        <div className="p-4 bg-slate-900 rounded-2xl border border-slate-800 font-mono text-xs space-y-2 max-w-md mx-auto">
          <div className="flex justify-between items-center bg-slate-950 p-2 rounded border border-teal-900/60">
            <span className="text-amber-300 font-bold">5' - A ══════ T - 3'</span>
            <span className="text-[10px] text-slate-400">2 ta vodorod bog'i</span>
          </div>
          <div className="flex justify-between items-center bg-slate-950 p-2 rounded border border-teal-900/60">
            <span className="text-emerald-400 font-bold">5' - G ≡≡≡≡≡≡ C - 3'</span>
            <span className="text-[10px] text-slate-400">3 ta vodorod bog'i</span>
          </div>
          <div className="flex justify-between items-center bg-slate-950 p-2 rounded border border-teal-900/60">
            <span className="text-amber-300 font-bold">5' - T ══════ A - 3'</span>
            <span className="text-[10px] text-slate-400">2 ta vodorod bog'i</span>
          </div>
        </div>
      </div>
    );
  }

  if (diagramType === 'eco-pyramid') {
    return (
      <div className="bg-slate-950 p-6 rounded-2xl border border-emerald-500/30 text-slate-100 text-center">
        <span className="text-xs font-bold text-emerald-400 uppercase tracking-wider block mb-4">
          Lindeman Ekologik Piramidasi (10% Qoidasi)
        </span>

        <div className="max-w-md mx-auto space-y-2 font-mono text-xs">
          <div className="bg-rose-950/80 border border-rose-600/50 p-2 rounded-xl text-rose-200">
            <span className="font-bold">3-Pog'ona: Konsument II (Yirtqich)</span>
            <span className="block text-[10px] opacity-80">1 kg biomassa (10 kkal)</span>
          </div>
          <div className="bg-amber-950/80 border border-amber-600/50 p-3 rounded-xl text-amber-200 mx-6">
            <span className="font-bold">2-Pog'ona: Konsument I (O'txor)</span>
            <span className="block text-[10px] opacity-80">10 kg biomassa (100 kkal)</span>
          </div>
          <div className="bg-emerald-950/80 border border-emerald-600/50 p-4 rounded-xl text-emerald-200 mx-2">
            <span className="font-bold">1-Pog'ona: Produsent (O'simliklar)</span>
            <span className="block text-[10px] opacity-80">100 kg biomassa (1000 kkal)</span>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-slate-950 p-4 rounded-xl border border-slate-800 text-xs text-slate-400 text-center">
      Vizual diagramma tasviri
    </div>
  );
};
