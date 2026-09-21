import React, { useState } from 'react';
import { Calculator, Sparkles, Check, RefreshCw } from 'lucide-react';

interface ElementParseResult {
  symbol: string;
  count: number;
}

// Atomic masses lookup for formula calculator
const ATOMIC_MASSES: { [symbol: string]: { nameUz: string; mass: number } } = {
  H: { nameUz: 'Vodorod', mass: 1.008 },
  He: { nameUz: 'Geliy', mass: 4.0026 },
  Li: { nameUz: 'Litiy', mass: 6.94 },
  Be: { nameUz: 'Berilliy', mass: 9.0122 },
  B: { nameUz: 'Bor', mass: 10.81 },
  C: { nameUz: 'Uglerod', mass: 12.011 },
  N: { nameUz: 'Azot', mass: 14.007 },
  O: { nameUz: 'Kislorod', mass: 15.999 },
  F: { nameUz: 'Ftor', mass: 18.998 },
  Ne: { nameUz: 'Neon', mass: 20.180 },
  Na: { nameUz: 'Natriy', mass: 22.990 },
  Mg: { nameUz: 'Magniy', mass: 24.305 },
  Al: { nameUz: 'Alyuminiy', mass: 26.982 },
  Si: { nameUz: 'Kremniy', mass: 28.085 },
  P: { nameUz: 'Fosfor', mass: 30.974 },
  S: { nameUz: 'Oltingugurt', mass: 32.06 },
  Cl: { nameUz: 'Xlor', mass: 35.45 },
  K: { nameUz: 'Kaliy', mass: 39.098 },
  Ca: { nameUz: 'Kalsiy', mass: 40.078 },
  Fe: { nameUz: 'Temir', mass: 55.845 },
  Cu: { nameUz: 'Mis', mass: 63.546 },
  Zn: { nameUz: 'Sux (Sink)', mass: 65.38 },
  Ag: { nameUz: 'Kumush', mass: 107.87 },
  Au: { nameUz: 'Oltin', mass: 196.97 },
  Hg: { nameUz: 'Simob', mass: 200.59 },
  Pb: { nameUz: 'Qo\'rg\'oshun', mass: 207.2 },
  I: { nameUz: 'Yod', mass: 126.90 },
  Br: { nameUz: 'Brom', mass: 79.90 },
  Mn: { nameUz: 'Marganets', mass: 54.938 },
  Cr: { nameUz: 'Xrom', mass: 51.996 },
  Ba: { nameUz: 'Bariy', mass: 137.33 },
};

export const MolarMassCalculator: React.FC = () => {
  const [formula, setFormula] = useState('H2SO4');
  const [error, setError] = useState<string | null>(null);

  const presets = ['H2SO4', 'C6H12O6', 'KMnO4', 'Fe2(SO4)3', 'CaCO3', 'NaOH', 'HNO3', 'Al2O3', 'NaCl', 'CuSO4'];

  const parseFormula = (str: string): { [symbol: string]: number } | null => {
    try {
      const clean = str.trim();
      if (!clean) return null;

      // Handle simple formulas and parentheses
      // E.g. Fe2(SO4)3 or H2SO4 or C6H12O6
      const reg = /([A-Z][a-z]*)(\d*)|(\()|(\))(\d*)/g;
      const stack: { [sym: string]: number }[] = [{}];
      let match;

      while ((match = reg.exec(clean)) !== null) {
        if (match[1]) {
          // Element + count
          const sym = match[1];
          const count = parseInt(match[2] || '1', 10);
          const top = stack[stack.length - 1];
          top[sym] = (top[sym] || 0) + count;
        } else if (match[3]) {
          // '('
          stack.push({});
        } else if (match[4]) {
          // ')' + multiplier
          const mult = parseInt(match[5] || '1', 10);
          const popped = stack.pop();
          if (!popped || stack.length === 0) return null;
          const top = stack[stack.length - 1];
          for (const k in popped) {
            top[k] = (top[k] || 0) + popped[k] * mult;
          }
        }
      }

      if (stack.length !== 1) return null;
      return stack[0];
    } catch {
      return null;
    }
  };

  const parsed = parseFormula(formula);

  let totalMass = 0;
  const breakdown: { symbol: string; nameUz: string; count: number; atomicMass: number; totalElementMass: number; percentage: number }[] = [];

  if (parsed) {
    let isValid = true;
    for (const sym in parsed) {
      const info = ATOMIC_MASSES[sym];
      if (!info) {
        isValid = false;
        break;
      }
      const count = parsed[sym];
      const elemTotal = info.mass * count;
      totalMass += elemTotal;
    }

    if (isValid && totalMass > 0) {
      for (const sym in parsed) {
        const info = ATOMIC_MASSES[sym];
        const count = parsed[sym];
        const elemTotal = info.mass * count;
        const pct = (elemTotal / totalMass) * 100;
        breakdown.push({
          symbol: sym,
          nameUz: info.nameUz,
          count,
          atomicMass: info.mass,
          totalElementMass: elemTotal,
          percentage: pct
        });
      }
    }
  }

  return (
    <div className="bg-slate-900/90 border border-indigo-500/30 rounded-2xl p-6 shadow-xl text-slate-100">
      <div className="flex items-center gap-3 mb-6">
        <div className="p-3 bg-indigo-600/20 text-indigo-400 rounded-xl border border-indigo-500/30">
          <Calculator className="w-6 h-6" />
        </div>
        <div>
          <h3 className="text-xl font-bold text-white">Molar Massa va Massa Ulushi Kalkulyatori</h3>
          <p className="text-xs text-slate-400">Istalgan kimyoviy formula (masalan, H2SO4, Fe2(SO4)3) ni kiriting</p>
        </div>
      </div>

      {/* Input section */}
      <div className="mb-6">
        <label className="block text-xs font-semibold text-slate-300 uppercase tracking-wider mb-2">
          Kimyoviy Formula:
        </label>
        <div className="flex gap-2">
          <input
            type="text"
            value={formula}
            onChange={(e) => setFormula(e.target.value)}
            placeholder="Masalan: C6H12O6"
            className="flex-1 bg-slate-950 border border-indigo-500/40 rounded-xl px-4 py-3 text-lg font-mono text-indigo-300 focus:outline-none focus:ring-2 focus:ring-indigo-500"
          />
          <button
            onClick={() => setFormula('H2SO4')}
            className="p-3 bg-slate-800 hover:bg-slate-700 text-slate-300 rounded-xl transition border border-slate-700"
            title="Tozalash"
          >
            <RefreshCw className="w-5 h-5" />
          </button>
        </div>

        {/* Presets */}
        <div className="mt-3 flex flex-wrap gap-1.5">
          <span className="text-xs text-slate-400 self-center mr-1">Tayyor namunalar:</span>
          {presets.map((p) => (
            <button
              key={p}
              onClick={() => setFormula(p)}
              className={`px-2.5 py-1 text-xs rounded-lg font-mono transition border ${
                formula === p
                  ? 'bg-indigo-600 text-white border-indigo-500'
                  : 'bg-slate-800/80 hover:bg-slate-700 text-slate-300 border-slate-700'
              }`}
            >
              {p}
            </button>
          ))}
        </div>
      </div>

      {/* Results view */}
      {breakdown.length > 0 ? (
        <div className="space-y-6">
          <div className="bg-gradient-to-r from-indigo-950/60 to-purple-950/60 border border-indigo-500/40 rounded-xl p-5 flex flex-wrap items-center justify-between gap-4">
            <div>
              <span className="text-xs text-indigo-300 uppercase tracking-widest block font-medium">Umumiy Molar Massa (M):</span>
              <span className="text-3xl font-extrabold text-white font-mono">
                {totalMass.toFixed(3)}{' '}
                <span className="text-base font-normal text-indigo-300">g/mol</span>
              </span>
            </div>
            <div className="bg-indigo-500/20 px-4 py-2 rounded-lg border border-indigo-400/30 text-xs text-indigo-200">
              Atomlar soni: <strong className="text-white">{breakdown.reduce((a, b) => a + b.count, 0)} ta</strong>
            </div>
          </div>

          {/* Breakdown Table */}
          <div>
            <h4 className="text-sm font-semibold text-slate-200 mb-3 flex items-center gap-2">
              <Sparkles className="w-4 h-4 text-indigo-400" />
              Elementlar bo'yicha massa ulushi (w%):
            </h4>
            <div className="overflow-x-auto rounded-xl border border-slate-800 bg-slate-950/80">
              <table className="w-full text-left text-xs text-slate-300">
                <thead className="bg-slate-900 text-slate-400 border-b border-slate-800 uppercase font-mono">
                  <tr>
                    <th className="p-3">Element</th>
                    <th className="p-3">Atom soni</th>
                    <th className="p-3">Atom Massasi (Ar)</th>
                    <th className="p-3">Massa ulushi (%)</th>
                    <th className="p-3">Massa diagrammasi</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-800/60 font-mono">
                  {breakdown.map((item) => (
                    <tr key={item.symbol} className="hover:bg-slate-900/40 transition">
                      <td className="p-3 font-semibold text-white flex items-center gap-2">
                        <span className="px-2 py-0.5 bg-indigo-900/60 text-indigo-300 border border-indigo-700/50 rounded font-bold">
                          {item.symbol}
                        </span>
                        <span>{item.nameUz}</span>
                      </td>
                      <td className="p-3 text-slate-200">{item.count} ta</td>
                      <td className="p-3 text-slate-400">{item.atomicMass.toFixed(2)} g/mol</td>
                      <td className="p-3 font-bold text-emerald-400">{item.percentage.toFixed(2)}%</td>
                      <td className="p-3 min-w-[120px]">
                        <div className="w-full bg-slate-800 rounded-full h-2 overflow-hidden">
                          <div
                            className="bg-gradient-to-r from-indigo-500 to-emerald-400 h-full rounded-full"
                            style={{ width: `${item.percentage}%` }}
                          />
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      ) : (
        <div className="bg-slate-950/60 border border-amber-500/30 rounded-xl p-4 text-amber-300 text-xs flex items-center gap-3">
          <div className="p-2 bg-amber-500/20 rounded-lg">!</div>
          <p>
            Formulani to'g'ri kiriting (masalan, <strong>H2SO4</strong>, <strong>CaCO3</strong>). Element belgilaridagi bosh va kichik harflarga e'tibor bering (masalan, Na, Ca, Fe).
          </p>
        </div>
      )}
    </div>
  );
};
