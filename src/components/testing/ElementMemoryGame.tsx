import React, { useState, useEffect } from 'react';
import { Sparkles, Trophy, RefreshCw, CheckCircle2, Flame } from 'lucide-react';

interface MemoryCard {
  id: number;
  content: string;
  type: 'symbol' | 'name';
  matchId: string;
  isFlipped: boolean;
  isMatched: boolean;
}

export const ElementMemoryGame: React.FC = () => {
  const [cards, setCards] = useState<MemoryCard[]>([]);
  const [flippedCards, setFlippedCards] = useState<number[]>([]);
  const [score, setScore] = useState<number>(0);
  const [moves, setMoves] = useState<number>(0);
  const [gameComplete, setGameComplete] = useState<boolean>(false);

  const initialElements = [
    { symbol: 'H', name: 'Vodorod' },
    { symbol: 'Fe', name: 'Temir' },
    { symbol: 'Cu', name: 'Mis' },
    { symbol: 'Au', name: 'Oltin' },
    { symbol: 'Na', name: 'Natriy' },
    { symbol: 'O', name: 'Kislorod' },
  ];

  const initializeGame = () => {
    let cardList: MemoryCard[] = [];
    let idCounter = 1;

    initialElements.forEach((el) => {
      // Symbol card
      cardList.push({
        id: idCounter++,
        content: el.symbol,
        type: 'symbol',
        matchId: el.symbol,
        isFlipped: false,
        isMatched: false,
      });
      // Name card
      cardList.push({
        id: idCounter++,
        content: el.name,
        type: 'name',
        matchId: el.symbol,
        isFlipped: false,
        isMatched: false,
      });
    });

    // Shuffle
    cardList.sort(() => Math.random() - 0.5);
    setCards(cardList);
    setFlippedCards([]);
    setScore(0);
    setMoves(0);
    setGameComplete(false);
  };

  useEffect(() => {
    initializeGame();
  }, []);

  const handleCardClick = (id: number) => {
    if (flippedCards.length === 2) return;
    const clickedCard = cards.find((c) => c.id === id);
    if (!clickedCard || clickedCard.isFlipped || clickedCard.isMatched) return;

    const newCards = cards.map((c) => (c.id === id ? { ...c, isFlipped: true } : c));
    setCards(newCards);

    const newFlipped = [...flippedCards, id];
    setFlippedCards(newFlipped);

    if (newFlipped.length === 2) {
      setMoves((m) => m + 1);
      const firstCard = newCards.find((c) => c.id === newFlipped[0]);
      const secondCard = newCards.find((c) => c.id === newFlipped[1]);

      if (firstCard && secondCard && firstCard.matchId === secondCard.matchId) {
        // Match found
        setTimeout(() => {
          setCards((prev) =>
            prev.map((c) =>
              c.matchId === firstCard.matchId ? { ...c, isMatched: true } : c
            )
          );
          setFlippedCards([]);
          setScore((s) => s + 10);

          // Check if all matched
          if (cards.filter((c) => !c.isMatched).length <= 2) {
            setGameComplete(true);
          }
        }, 600);
      } else {
        // No match
        setTimeout(() => {
          setCards((prev) =>
            prev.map((c) =>
              newFlipped.includes(c.id) ? { ...c, isFlipped: false } : c
            )
          );
          setFlippedCards([]);
        }, 1000);
      }
    }
  };

  return (
    <div className="bg-slate-900/90 border border-indigo-500/30 rounded-2xl p-6 shadow-xl text-slate-100">
      <div className="flex items-center justify-between mb-6">
        <div>
          <h3 className="text-xl font-bold text-white flex items-center gap-2">
            <Sparkles className="w-5 h-5 text-indigo-400" />
            Elementlarni Topish Mini-O'yini
          </h3>
          <p className="text-xs text-slate-400">Element belgisi va uning o'zbekcha nomini o'zaro juftlang</p>
        </div>
        <div className="flex items-center gap-3 font-mono text-xs">
          <span className="bg-slate-950 px-3 py-1.5 rounded-lg border border-slate-800 text-emerald-400">
            Ball: <strong>{score}</strong>
          </span>
          <span className="bg-slate-950 px-3 py-1.5 rounded-lg border border-slate-800 text-indigo-300">
            Yurishlar: <strong>{moves}</strong>
          </span>
          <button
            onClick={initializeGame}
            className="p-2 bg-slate-800 hover:bg-slate-700 rounded-lg text-slate-300 transition"
            title="Qayta boshlash"
          >
            <RefreshCw className="w-4 h-4" />
          </button>
        </div>
      </div>

      {/* Grid */}
      <div className="grid grid-cols-3 sm:grid-cols-4 gap-3">
        {cards.map((card) => (
          <button
            key={card.id}
            onClick={() => handleCardClick(card.id)}
            className={`h-24 rounded-2xl border font-bold text-sm transition transform flex items-center justify-center p-2 text-center font-mono ${
              card.isMatched
                ? 'bg-emerald-950/40 border-emerald-500/50 text-emerald-300 opacity-60 cursor-default'
                : card.isFlipped
                ? 'bg-indigo-600 text-white border-indigo-400 shadow-lg scale-105'
                : 'bg-slate-950 border-slate-800 hover:border-indigo-500/50 text-slate-500'
            }`}
          >
            {card.isFlipped || card.isMatched ? (
              <span>{card.content}</span>
            ) : (
              <span className="text-lg text-indigo-500">?</span>
            )}
          </button>
        ))}
      </div>

      {/* Game complete alert */}
      {gameComplete && (
        <div className="mt-6 p-4 bg-gradient-to-r from-emerald-950 to-indigo-950 border border-emerald-500/50 rounded-2xl text-center">
          <Trophy className="w-8 h-8 text-amber-400 mx-auto mb-2" />
          <h4 className="text-lg font-bold text-white">Tabriklaymiz! O'yin Yakunlandi!</h4>
          <p className="text-xs text-slate-300 mt-1">Siz barcha elementlarni {moves} ta yurishda topdingiz!</p>
          <button
            onClick={initializeGame}
            className="mt-3 px-4 py-2 bg-emerald-600 hover:bg-emerald-500 text-white text-xs font-bold rounded-xl transition shadow-lg"
          >
            Qayta O'ynash
          </button>
        </div>
      )}
    </div>
  );
};
