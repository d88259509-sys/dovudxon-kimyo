import React, { useState } from 'react';
import { Dna, Sparkles, HelpCircle } from 'lucide-react';

export const GeneticsPunnettSquare: React.FC = () => {
  const [crossType, setCrossType] = useState<'mono' | 'di'>('mono');
  const [parent1, setParent1] = useState('Aa');
  const [parent2, setParent2] = useState('Aa');

  // Dihybrid defaults
  const [diParent1, setDiParent1] = useState('AaBb');
  const [diParent2, setDiParent2] = useState('AaBb');

  // Generate Gametes for Monohybrid
  const getMonoGametes = (p: string) => {
    return [p[0] || 'A', p[1] || 'a'];
  };

  // Generate Gametes for Dihybrid
  const getDiGametes = (p: string) => {
    const a1 = p[0] || 'A';
    const a2 = p[1] || 'a';
    const b1 = p[2] || 'B';
    const b2 = p[3] || 'b';
    return [a1 + b1, a1 + b2, a2 + b1, a2 + b2];
  };

  const combineAlleles = (g1: string, g2: string) => {
    // Sort alleles for consistent display (A before a, B before b)
    if (g1.length === 1 && g2.length === 1) {
      const arr = [g1, g2].sort();
      return arr.join('');
    } else {
      // Dihybrid
      const aPart = [g1[0], g2[0]].sort().join('');
      const bPart = [g1[1], g2[1]].sort().join('');
      return aPart + bPart;
    }
  };

  let gametes1: string[] = [];
  let gametes2: string[] = [];

  if (crossType === 'mono') {
    gametes1 = getMonoGametes(parent1);
    gametes2 = getMonoGametes(parent2);
  } else {
    gametes1 = getDiGametes(diParent1);
    gametes2 = getDiGametes(diParent2);
  }

  // Calculate genotype counts
  const genotypeCounts: { [gt: string]: number } = {};
  let totalCells = gametes1.length * gametes2.length;

  gametes1.forEach((g1) => {
    gametes2.forEach((g2) => {
      const gt = combineAlleles(g1, g2);
      genotypeCounts[gt] = (genotypeCounts[gt] || 0) + 1;
    });
  });

  return (
    <div className="bg-slate-900/90 border border-emerald-500/30 rounded-2xl p-6 shadow-xl text-slate-100">
      <div className="flex items-center gap-3 mb-6">
        <div className="p-3 bg-emerald-600/20 text-emerald-400 rounded-xl border border-emerald-500/30">
          <Dna className="w-6 h-6" />
        </div>
        <div>
          <h3 className="text-xl font-bold text-white">Genetika Pennet To'ri va Chatishtirish Kalkulyatori</h3>
          <p className="text-xs text-slate-400">Mendel qonunlari bo'yicha Monogidrid va Digidrid chatishtirish</p>
        </div>
      </div>

      {/* Mode Switcher */}
      <div className="flex gap-2 mb-6">
        <button
          onClick={() => setCrossType('mono')}
          className={`flex-1 py-2.5 px-4 rounded-xl font-semibold text-xs transition border ${
            crossType === 'mono'
              ? 'bg-emerald-600 text-white border-emerald-500 shadow-lg shadow-emerald-900/40'
              : 'bg-slate-800 text-slate-400 border-slate-700 hover:text-slate-200'
          }`}
        >
          Monogidrid Chatishtirish (1 juft gen, masalan Aa × Aa)
        </button>
        <button
          onClick={() => setCrossType('di')}
          className={`flex-1 py-2.5 px-4 rounded-xl font-semibold text-xs transition border ${
            crossType === 'di'
              ? 'bg-emerald-600 text-white border-emerald-500 shadow-lg shadow-emerald-900/40'
              : 'bg-slate-800 text-slate-400 border-slate-700 hover:text-slate-200'
          }`}
        >
          Digidrid Chatishtirish (2 juft gen, masalan AaBb × AaBb)
        </button>
      </div>

      {/* Parental Genotype Inputs */}
      {crossType === 'mono' ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
          <div>
            <label className="block text-xs text-emerald-300 font-semibold mb-1">Ona organizm genotipi (♀):</label>
            <select
              value={parent1}
              onChange={(e) => setParent1(e.target.value)}
              className="w-full bg-slate-950 border border-emerald-500/40 rounded-xl p-3 text-emerald-200 font-mono focus:outline-none focus:ring-2 focus:ring-emerald-500"
            >
              <option value="AA">AA (Gomoziqota Dominant)</option>
              <option value="Aa">Aa (Geterozigota)</option>
              <option value="aa">aa (Gomoziqota Retsessiv)</option>
            </select>
          </div>
          <div>
            <label className="block text-xs text-emerald-300 font-semibold mb-1">Ota organizm genotipi (♂):</label>
            <select
              value={parent2}
              onChange={(e) => setParent2(e.target.value)}
              className="w-full bg-slate-950 border border-emerald-500/40 rounded-xl p-3 text-emerald-200 font-mono focus:outline-none focus:ring-2 focus:ring-emerald-500"
            >
              <option value="Aa">Aa (Geterozigota)</option>
              <option value="AA">AA (Gomoziqota Dominant)</option>
              <option value="aa">aa (Gomoziqota Retsessiv)</option>
            </select>
          </div>
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
          <div>
            <label className="block text-xs text-emerald-300 font-semibold mb-1">Ona organizm (♀):</label>
            <select
              value={diParent1}
              onChange={(e) => setDiParent1(e.target.value)}
              className="w-full bg-slate-950 border border-emerald-500/40 rounded-xl p-3 text-emerald-200 font-mono focus:outline-none focus:ring-2 focus:ring-emerald-500"
            >
              <option value="AaBb">AaBb (Digeterozigota)</option>
              <option value="AABB">AABB (Gomoziqota)</option>
              <option value="Aabb">Aabb</option>
              <option value="aaBb">aaBb</option>
              <option value="aabb">aabb (Retsessiv)</option>
            </select>
          </div>
          <div>
            <label className="block text-xs text-emerald-300 font-semibold mb-1">Ota organizm (♂):</label>
            <select
              value={diParent2}
              onChange={(e) => setDiParent2(e.target.value)}
              className="w-full bg-slate-950 border border-emerald-500/40 rounded-xl p-3 text-emerald-200 font-mono focus:outline-none focus:ring-2 focus:ring-emerald-500"
            >
              <option value="AaBb">AaBb (Digeterozigota)</option>
              <option value="AABB">AABB (Gomoziqota)</option>
              <option value="Aabb">Aabb</option>
              <option value="aabb">aabb (Retsessiv)</option>
            </select>
          </div>
        </div>
      )}

      {/* Punnett Square Table Grid */}
      <div className="mb-6">
        <h4 className="text-sm font-semibold text-slate-200 mb-3 flex items-center gap-2">
          <Sparkles className="w-4 h-4 text-emerald-400" />
          Pennet To'ri Kataklari (F1 / F2 Avlodlar):
        </h4>

        <div className="overflow-x-auto p-4 bg-slate-950/80 rounded-2xl border border-slate-800">
          <table className="border-collapse text-center font-mono mx-auto">
            <thead>
              <tr>
                <th className="p-3 text-xs text-emerald-400 border border-slate-800 bg-slate-900">♀ \ ♂</th>
                {gametes2.map((g2, idx) => (
                  <th key={idx} className="p-3 text-sm text-emerald-300 border border-slate-800 bg-slate-900/80 font-bold">
                    {g2}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {gametes1.map((g1, rowIdx) => (
                <tr key={rowIdx}>
                  <td className="p-3 text-sm text-emerald-300 border border-slate-800 bg-slate-900/80 font-bold">
                    {g1}
                  </td>
                  {gametes2.map((g2, colIdx) => {
                    const gt = combineAlleles(g1, g2);
                    const isDominant = gt.includes('A') && (crossType === 'mono' || gt.includes('B'));
                    return (
                      <td
                        key={colIdx}
                        className={`p-3 text-sm font-extrabold border border-slate-800 transition rounded ${
                          isDominant
                            ? 'bg-emerald-950/40 text-emerald-200 hover:bg-emerald-900/60'
                            : 'bg-indigo-950/40 text-indigo-200 hover:bg-indigo-900/60'
                        }`}
                      >
                        {gt}
                      </td>
                    );
                  })}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Ratios & Statistics */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="bg-slate-950 p-4 rounded-xl border border-slate-800">
          <span className="text-xs text-emerald-400 uppercase tracking-wider font-semibold block mb-2">
            Genotiplar nisbati va foizlari:
          </span>
          <div className="space-y-2 text-xs font-mono">
            {Object.entries(genotypeCounts).map(([gt, count]) => {
              const pct = (count / totalCells) * 100;
              return (
                <div key={gt} className="flex justify-between items-center bg-slate-900/80 p-2 rounded border border-slate-800">
                  <span className="font-bold text-white">{gt}:</span>
                  <span className="text-emerald-300">{count}/{totalCells} ({pct.toFixed(1)}%)</span>
                </div>
              );
            })}
          </div>
        </div>

        <div className="bg-slate-950 p-4 rounded-xl border border-slate-800">
          <span className="text-xs text-emerald-400 uppercase tracking-wider font-semibold block mb-2">
            Nisbatlar yakuni:
          </span>
          <p className="text-xs text-slate-300 leading-relaxed">
            {crossType === 'mono' ? (
              <>
                Aa × Aa chatishtirishda Mendelning 2-qonuniga ko'ra fenotip bo'yicha ajralish nisbati <strong>3 : 1</strong> (75% dominant, 25% retsessiv) va genotipik nisbat <strong>1 : 2 : 1</strong> (25% AA, 50% Aa, 25% aa) ni tashkil etadi.
              </>
            ) : (
              <>
                Digidrid AaBb × AaBb chatishtirishda Mendelning 3-qonuniga ko'ra fenotipik ajralish nisbati <strong>9 : 3 : 3 : 1</strong> ni tashkil qiladi.
              </>
            )}
          </p>
        </div>
      </div>
    </div>
  );
};
