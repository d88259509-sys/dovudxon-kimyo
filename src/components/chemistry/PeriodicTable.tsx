import React, { useState } from 'react';
import { ChemicalElement } from '../../types';
import { getFullPeriodicTableElements } from '../../data/elementsData';
import { ElementDetailModal } from './ElementDetailModal';
import { Search, Filter, Sparkles, Info, Flame, Eye } from 'lucide-react';

interface PeriodicTableProps {
  onAskAi: (prompt: string) => void;
}

export const PeriodicTable: React.FC<PeriodicTableProps> = ({ onAskAi }) => {
  const [elements] = useState<ChemicalElement[]>(getFullPeriodicTableElements());
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [selectedElement, setSelectedElement] = useState<ChemicalElement | null>(null);

  // Category filters
  const categories = [
    { key: 'all', label: 'Barchasi' },
    { key: 'alkali-metal', label: 'Ishqoriy metallar', color: 'bg-red-900/60 text-red-200 border-red-700/50' },
    { key: 'alkaline-earth', label: 'Ishqoriy-yer metallar', color: 'bg-amber-900/60 text-amber-200 border-amber-700/50' },
    { key: 'transition-metal', label: "O'tish metallari", color: 'bg-blue-900/60 text-blue-200 border-blue-700/50' },
    { key: 'post-transition', label: "Post-o'tish metallari", color: 'bg-teal-900/60 text-teal-200 border-teal-700/50' },
    { key: 'metalloid', label: 'Yarim metallar', color: 'bg-emerald-900/60 text-emerald-200 border-emerald-700/50' },
    { key: 'nonmetal', label: 'Metallmaslar', color: 'bg-indigo-900/60 text-indigo-200 border-indigo-700/50' },
    { key: 'halogen', label: 'Galogenlar', color: 'bg-purple-900/60 text-purple-200 border-purple-700/50' },
    { key: 'noble-gas', label: 'Asil gazlar', color: 'bg-pink-900/60 text-pink-200 border-pink-700/50' },
    { key: 'lanthanide', label: 'Lantanoidlar', color: 'bg-violet-900/60 text-violet-200 border-violet-700/50' },
    { key: 'actinide', label: 'Aktinoidlar', color: 'bg-rose-900/60 text-rose-200 border-rose-700/50' },
  ];

  const getCategoryColor = (cat: ChemicalElement['category']) => {
    switch (cat) {
      case 'alkali-metal': return 'bg-red-950/80 hover:bg-red-900 text-red-200 border-red-700/50';
      case 'alkaline-earth': return 'bg-amber-950/80 hover:bg-amber-900 text-amber-200 border-amber-700/50';
      case 'transition-metal': return 'bg-blue-950/80 hover:bg-blue-900 text-blue-200 border-blue-700/50';
      case 'post-transition': return 'bg-teal-950/80 hover:bg-teal-900 text-teal-200 border-teal-700/50';
      case 'metalloid': return 'bg-emerald-950/80 hover:bg-emerald-900 text-emerald-200 border-emerald-700/50';
      case 'nonmetal': return 'bg-indigo-950/80 hover:bg-indigo-900 text-indigo-200 border-indigo-700/50';
      case 'halogen': return 'bg-purple-950/80 hover:bg-purple-900 text-purple-200 border-purple-700/50';
      case 'noble-gas': return 'bg-pink-950/80 hover:bg-pink-900 text-pink-200 border-pink-700/50';
      case 'lanthanide': return 'bg-violet-950/80 hover:bg-violet-900 text-violet-200 border-violet-700/50';
      case 'actinide': return 'bg-rose-950/80 hover:bg-rose-900 text-rose-200 border-rose-700/50';
      default: return 'bg-slate-900 hover:bg-slate-800 text-slate-200 border-slate-700';
    }
  };

  const filteredElements = elements.filter((el) => {
    const matchesQuery =
      el.nameUz.toLowerCase().includes(searchQuery.toLowerCase()) ||
      el.symbol.toLowerCase().includes(searchQuery.toLowerCase()) ||
      el.number.toString().includes(searchQuery);

    const matchesCategory = selectedCategory === 'all' || el.category === selectedCategory;

    return matchesQuery && matchesCategory;
  });

  return (
    <div className="space-y-6">
      
      {/* Search & Filter Bar */}
      <div className="bg-slate-900/90 border border-indigo-500/30 rounded-2xl p-4 shadow-xl flex flex-col md:flex-row gap-4 justify-between items-center">
        
        {/* Search Input */}
        <div className="relative w-full md:w-96">
          <Search className="w-5 h-5 absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400" />
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Element nomi, belgisi yoki tartib raqami (masalan: Vodorod, H, 1)..."
            className="w-full pl-11 pr-4 py-2.5 bg-slate-950 border border-slate-800 focus:border-indigo-500 rounded-xl text-xs text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-indigo-500/50 transition"
          />
        </div>

        {/* Category Dropdown/Pills */}
        <div className="flex items-center gap-2 overflow-x-auto w-full md:w-auto pb-2 md:pb-0 scrollbar-thin">
          <Filter className="w-4 h-4 text-indigo-400 flex-shrink-0" />
          <span className="text-xs text-slate-400 font-medium flex-shrink-0">Guruh:</span>
          <div className="flex gap-1.5 overflow-x-auto">
            {categories.map((cat) => (
              <button
                key={cat.key}
                onClick={() => setSelectedCategory(cat.key)}
                className={`px-3 py-1.5 rounded-lg text-[11px] font-medium whitespace-nowrap transition border ${
                  selectedCategory === cat.key
                    ? 'bg-indigo-600 text-white border-indigo-400 shadow-md shadow-indigo-900/40'
                    : 'bg-slate-950 text-slate-400 border-slate-800 hover:text-slate-200'
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Interactive Periodic Grid */}
      <div className="bg-slate-950/90 border border-slate-800 rounded-2xl p-4 md:p-6 shadow-2xl overflow-x-auto">
        <div className="flex items-center justify-between mb-4">
          <div>
            <h3 className="text-lg font-bold text-white flex items-center gap-2">
              <Sparkles className="w-5 h-5 text-indigo-400" />
              Mendeleyev Davriy Sistemasi
            </h3>
            <p className="text-xs text-slate-400">Har bir element ustiga bosib, uning atom tuzilishi va xossalari bilan tanishing</p>
          </div>
          <span className="text-xs font-mono text-indigo-300 bg-indigo-950/60 px-3 py-1.5 rounded-lg border border-indigo-800">
            {filteredElements.length} / 118 ta element
          </span>
        </div>

        {/* Elements Cards Grid */}
        <div className="grid grid-cols-3 sm:grid-cols-6 md:grid-cols-9 lg:grid-cols-12 gap-2 min-w-[700px]">
          {filteredElements.map((el) => (
            <button
              key={el.number}
              onClick={() => setSelectedElement(el)}
              className={`group p-2 rounded-xl border text-left transition transform hover:-translate-y-1 hover:shadow-lg relative overflow-hidden flex flex-col justify-between h-20 ${getCategoryColor(el.category)}`}
            >
              <div className="flex justify-between items-start text-[9px] font-mono opacity-80">
                <span className="font-bold">#{el.number}</span>
                <span>{el.period}D</span>
              </div>

              <div className="text-center my-0.5">
                <span className="text-lg font-extrabold font-mono tracking-tight block group-hover:scale-110 transition">
                  {el.symbol}
                </span>
                <span className="text-[9px] font-medium truncate block opacity-90">
                  {el.nameUz}
                </span>
              </div>

              <div className="text-[8px] font-mono text-center opacity-75 truncate">
                {el.atomicMass}
              </div>
            </button>
          ))}
        </div>
      </div>

      {/* Legend list */}
      <div className="bg-slate-900/60 border border-slate-800 rounded-2xl p-4 text-xs">
        <span className="text-slate-400 font-semibold block mb-2">Ranglar bo'yicha turkumlar ko'rsatkichlari:</span>
        <div className="flex flex-wrap gap-2">
          {categories.slice(1).map((cat) => (
            <span
              key={cat.key}
              className={`px-2.5 py-1 rounded-lg border text-[10px] font-medium ${cat.color}`}
            >
              {cat.label}
            </span>
          ))}
        </div>
      </div>

      {/* Detail Modal */}
      <ElementDetailModal
        element={selectedElement}
        onClose={() => setSelectedElement(null)}
        onAskAi={onAskAi}
      />
    </div>
  );
};
