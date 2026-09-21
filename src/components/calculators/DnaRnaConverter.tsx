import React, { useState } from 'react';
import { Dna, RefreshCw, ArrowRight, Sparkles } from 'lucide-react';

export const DnaRnaConverter: React.FC = () => {
  const [dnaInput, setDnaInput] = useState('ATGCGATCGATCGATCG');

  const cleanDna = dnaInput.toUpperCase().replace(/[^ATGC]/g, '');

  // Complementary DNA strand
  const compDna = cleanDna
    .split('')
    .map((base) => {
      switch (base) {
        case 'A': return 'T';
        case 'T': return 'A';
        case 'G': return 'C';
        case 'C': return 'G';
        default: return '';
      }
    })
    .join('');

  // mRNA strand
  const mRna = cleanDna
    .split('')
    .map((base) => {
      switch (base) {
        case 'A': return 'U';
        case 'T': return 'A';
        case 'G': return 'C';
        case 'C': return 'G';
        default: return '';
      }
    })
    .join('');

  // Counts
  const countA = (cleanDna.match(/A/g) || []).length;
  const countT = (cleanDna.match(/T/g) || []).length;
  const countG = (cleanDna.match(/G/g) || []).length;
  const countC = (cleanDna.match(/C/g) || []).length;

  const totalBasesOneStrand = cleanDna.length;
  const totalBasesBothStrands = totalBasesOneStrand * 2;

  // Hydrogen bonds
  // A-T pair: 2 hydrogen bonds
  // G-C pair: 3 hydrogen bonds
  const hydrogenBonds = countA * 2 + countT * 2 + countG * 3 + countC * 3;

  // Length = count of nucleotides in ONE strand * 0.34 nm
  const lengthNm = (totalBasesOneStrand * 0.34).toFixed(2);

  // Molecular mass = total bases both strands * 345 g/mol
  const molWeight = totalBasesBothStrands * 345;

  return (
    <div className="bg-slate-900/90 border border-teal-500/30 rounded-2xl p-6 shadow-xl text-slate-100">
      <div className="flex items-center gap-3 mb-6">
        <div className="p-3 bg-teal-600/20 text-teal-400 rounded-xl border border-teal-500/30">
          <Dna className="w-6 h-6" />
        </div>
        <div>
          <h3 className="text-xl font-bold text-white">DNK / RNK Analizatori va Molekulyar Kalkulyator</h3>
          <p className="text-xs text-slate-400">Komplementarlik, Vodorod bog'lari, Chargaff nisbatlari va i-RNK sintezi</p>
        </div>
      </div>

      {/* Input */}
      <div className="mb-6">
        <label className="block text-xs font-semibold text-slate-300 uppercase tracking-wider mb-2">
          DNK matritsa zanjirini kiriting (A, T, G, C):
        </label>
        <div className="flex gap-2">
          <input
            type="text"
            value={dnaInput}
            onChange={(e) => setDnaInput(e.target.value)}
            placeholder="Masalan: ATGCGATCGATCG"
            className="flex-1 bg-slate-950 border border-teal-500/40 rounded-xl px-4 py-3 text-lg font-mono text-teal-300 uppercase tracking-widest focus:outline-none focus:ring-2 focus:ring-teal-500"
          />
          <button
            onClick={() => setDnaInput('ATGCGATCGATCGATCG')}
            className="p-3 bg-slate-800 hover:bg-slate-700 text-slate-300 rounded-xl transition border border-slate-700"
            title="Qayta tiklash"
          >
            <RefreshCw className="w-5 h-5" />
          </button>
        </div>
      </div>

      {/* Strands Display */}
      <div className="space-y-3 mb-6 font-mono text-xs">
        <div className="p-3 bg-slate-950 rounded-xl border border-slate-800">
          <span className="text-slate-400 block mb-1">DNK Matritsa zanjiri (5' ➔ 3'):</span>
          <span className="text-emerald-400 font-bold text-base tracking-widest break-all">
            {cleanDna || '...'}
          </span>
        </div>
        <div className="p-3 bg-slate-950 rounded-xl border border-slate-800">
          <span className="text-slate-400 block mb-1">DNK Komplementar zanjiri (3' ➔ 5'):</span>
          <span className="text-teal-300 font-bold text-base tracking-widest break-all">
            {compDna || '...'}
          </span>
        </div>
        <div className="p-3 bg-slate-950 rounded-xl border border-slate-800">
          <span className="text-slate-400 block mb-1">i-RNK (Transkripsiya mahsuloti):</span>
          <span className="text-amber-400 font-bold text-base tracking-widest break-all">
            {mRna || '...'}
          </span>
        </div>
      </div>

      {/* Calculations Grid */}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mb-6 text-center font-mono">
        <div className="bg-slate-950 p-3 rounded-xl border border-slate-800">
          <span className="text-slate-400 text-xs block mb-1">A Nukleotid</span>
          <span className="text-xl font-bold text-amber-300">{countA} ta</span>
        </div>
        <div className="bg-slate-950 p-3 rounded-xl border border-slate-800">
          <span className="text-slate-400 text-xs block mb-1">T Nukleotid</span>
          <span className="text-xl font-bold text-amber-300">{countT} ta</span>
        </div>
        <div className="bg-slate-950 p-3 rounded-xl border border-slate-800">
          <span className="text-slate-400 text-xs block mb-1">G Nukleotid</span>
          <span className="text-xl font-bold text-emerald-300">{countG} ta</span>
        </div>
        <div className="bg-slate-950 p-3 rounded-xl border border-slate-800">
          <span className="text-slate-400 text-xs block mb-1">C Nukleotid</span>
          <span className="text-xl font-bold text-emerald-300">{countC} ta</span>
        </div>
      </div>

      {/* Physical Properties */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
        <div className="bg-gradient-to-br from-teal-950/60 to-slate-950 p-4 rounded-xl border border-teal-500/30">
          <span className="text-xs text-teal-300 block mb-1">Vodorod Bog'lari Soni:</span>
          <span className="text-2xl font-bold text-white font-mono">{hydrogenBonds} ta</span>
          <p className="text-[10px] text-slate-400 mt-1">A-T o'rtasida 2 ta, G-C o'rtasida 3 ta bog'</p>
        </div>
        <div className="bg-gradient-to-br from-teal-950/60 to-slate-950 p-4 rounded-xl border border-teal-500/30">
          <span className="text-xs text-teal-300 block mb-1">DNK Zanjiri Uzunligi:</span>
          <span className="text-2xl font-bold text-white font-mono">{lengthNm} <span className="text-xs font-normal text-teal-300">nm</span></span>
          <p className="text-[10px] text-slate-400 mt-1">1 nukleotid masofasi = 0.34 nm</p>
        </div>
        <div className="bg-gradient-to-br from-teal-950/60 to-slate-950 p-4 rounded-xl border border-teal-500/30">
          <span className="text-xs text-teal-300 block mb-1">Molekulyar Massa (Mr):</span>
          <span className="text-2xl font-bold text-white font-mono">{molWeight} <span className="text-xs font-normal text-teal-300">g/mol</span></span>
          <p className="text-[10px] text-slate-400 mt-1">Har bir nukleotid = 345 g/mol</p>
        </div>
      </div>
    </div>
  );
};
