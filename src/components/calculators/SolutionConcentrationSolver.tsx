import React, { useState } from 'react';
import { FlaskConical, RefreshCw } from 'lucide-react';

export const SolutionConcentrationSolver: React.FC = () => {
  const [soluteMass, setSoluteMass] = useState<number>(20);
  const [solventMass, setSolventMass] = useState<number>(80);

  const totalMass = soluteMass + solventMass;
  const massPercent = totalMass > 0 ? (soluteMass / totalMass) * 100 : 0;

  return (
    <div className="bg-slate-900/90 border border-blue-500/30 rounded-2xl p-6 shadow-xl text-slate-100">
      <div className="flex items-center gap-3 mb-6">
        <div className="p-3 bg-blue-600/20 text-blue-400 rounded-xl border border-blue-500/30">
          <FlaskConical className="w-6 h-6" />
        </div>
        <div>
          <h3 className="text-xl font-bold text-white">Eritma Massa Ulushi (w%) Kalkulyatori</h3>
          <p className="text-xs text-slate-400">Erigan modda va erituvchi (suv) nisbati</p>
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
        <div>
          <label className="block text-xs text-blue-300 font-semibold mb-1">
            Erigan modda massasi (m1, gramm):
          </label>
          <input
            type="number"
            value={soluteMass}
            onChange={(e) => setSoluteMass(Math.max(0, parseFloat(e.target.value) || 0))}
            className="w-full bg-slate-950 border border-blue-500/40 rounded-xl p-3 text-blue-200 font-mono text-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
        <div>
          <label className="block text-xs text-blue-300 font-semibold mb-1">
            Erituvchi (suv) massasi (m2, gramm):
          </label>
          <input
            type="number"
            value={solventMass}
            onChange={(e) => setSolventMass(Math.max(0, parseFloat(e.target.value) || 0))}
            className="w-full bg-slate-950 border border-blue-500/40 rounded-xl p-3 text-blue-200 font-mono text-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
      </div>

      {/* Results */}
      <div className="bg-gradient-to-r from-blue-950/60 to-indigo-950/60 p-5 rounded-2xl border border-blue-500/30 flex flex-wrap justify-between items-center gap-4">
        <div>
          <span className="text-xs text-blue-300 uppercase tracking-widest font-medium block">
            Eritmaning Umumiy Massasi:
          </span>
          <span className="text-2xl font-bold text-white font-mono">{totalMass} gramm</span>
        </div>
        <div>
          <span className="text-xs text-emerald-300 uppercase tracking-widest font-medium block">
            Eritma Massa Ulushi (w%):
          </span>
          <span className="text-3xl font-extrabold text-emerald-400 font-mono">
            {massPercent.toFixed(2)}%
          </span>
        </div>
      </div>
    </div>
  );
};
