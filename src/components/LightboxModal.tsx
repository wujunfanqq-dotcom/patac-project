import React, { useEffect } from 'react';
import { VISUAL_ASSETS } from '../data/patacData';
import { X, ChevronLeft, ChevronRight, Maximize, Check } from 'lucide-react';

interface LightboxModalProps {
  assetId: string | null;
  onClose: () => void;
  onSelectAsset: (id: string) => void;
}

export const LightboxModal: React.FC<LightboxModalProps> = ({
  assetId,
  onClose,
  onSelectAsset
}) => {
  if (!assetId) return null;

  const currentIndex = VISUAL_ASSETS.findIndex((a) => a.id === assetId);
  const currentAsset = VISUAL_ASSETS[currentIndex !== -1 ? currentIndex : 0];

  // Keyboard navigation (Escape, ArrowLeft, ArrowRight)
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
      if (e.key === 'ArrowLeft') {
        const prevIdx = (currentIndex - 1 + VISUAL_ASSETS.length) % VISUAL_ASSETS.length;
        onSelectAsset(VISUAL_ASSETS[prevIdx].id);
      }
      if (e.key === 'ArrowRight') {
        const nextIdx = (currentIndex + 1) % VISUAL_ASSETS.length;
        onSelectAsset(VISUAL_ASSETS[nextIdx].id);
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [currentIndex, onClose, onSelectAsset]);

  const handlePrev = (e: React.MouseEvent) => {
    e.stopPropagation();
    const prevIdx = (currentIndex - 1 + VISUAL_ASSETS.length) % VISUAL_ASSETS.length;
    onSelectAsset(VISUAL_ASSETS[prevIdx].id);
  };

  const handleNext = (e: React.MouseEvent) => {
    e.stopPropagation();
    const nextIdx = (currentIndex + 1) % VISUAL_ASSETS.length;
    onSelectAsset(VISUAL_ASSETS[nextIdx].id);
  };

  return (
    <div 
      className="fixed inset-0 z-50 bg-black/90 backdrop-blur-md flex items-center justify-center p-3 sm:p-6"
      onClick={onClose}
    >
      <div 
        className="relative max-w-5xl w-full bg-neutral-950 border border-neutral-800 rounded-xs overflow-hidden shadow-2xl flex flex-col max-h-[95vh]"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Top Header Bar */}
        <div className="bg-neutral-900 border-b border-neutral-800 px-4 py-3 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <span className="px-2 py-0.5 bg-amber-500 text-neutral-950 text-xs font-mono font-bold rounded-xs">
              {currentAsset.figureNumber}
            </span>
            <span className="text-sm font-bold text-neutral-100 font-mono truncate">
              {currentAsset.title}
            </span>
            <span className="text-xs font-mono text-neutral-400 hidden md:inline">
              [{currentIndex + 1} / {VISUAL_ASSETS.length}]
            </span>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={onClose}
              className="p-1.5 text-neutral-400 hover:text-neutral-100 bg-neutral-950 border border-neutral-800 rounded-xs transition-colors"
              aria-label="关闭检视"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Center: Image with Prev/Next Controls */}
        <div className="relative flex-1 bg-black flex items-center justify-center min-h-[360px] max-h-[60vh] overflow-hidden">
          {currentAsset.src.includes('.pdf') ? (
            <iframe
              src={`${currentAsset.src}#toolbar=0`}
              title={currentAsset.title}
              className="max-h-[60vh] h-[60vh] w-full max-w-full object-contain mx-auto bg-white border-none"
            />
          ) : (
            <img
              src={currentAsset.src}
              alt={currentAsset.title}
              referrerPolicy="no-referrer"
              className="max-h-[60vh] w-auto max-w-full object-contain mx-auto"
            />
          )}

          {/* Navigation Arrows */}
          <button
            onClick={handlePrev}
            className="absolute left-3 top-1/2 -translate-y-1/2 p-2.5 bg-neutral-900/80 hover:bg-neutral-900 text-neutral-200 border border-neutral-700/80 rounded-xs transition-colors"
            title="上一张 (←)"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>
          <button
            onClick={handleNext}
            className="absolute right-3 top-1/2 -translate-y-1/2 p-2.5 bg-neutral-900/80 hover:bg-neutral-900 text-neutral-200 border border-neutral-700/80 rounded-xs transition-colors"
            title="下一张 (→)"
          >
            <ChevronRight className="w-6 h-6" />
          </button>
        </div>

        {/* Bottom Technical Spec strip */}
        <div className="p-4 sm:p-5 bg-neutral-900 border-t border-neutral-800">
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 text-xs font-mono mb-3">
            {currentAsset.specs.map((s, idx) => (
              <div key={idx} className="p-2 bg-neutral-950 border border-neutral-800 rounded-xs">
                <div className="text-[10px] text-neutral-500">{s.label}</div>
                <div className="text-neutral-200 font-bold mt-0.5 truncate">{s.value}</div>
              </div>
            ))}
          </div>

          <p className="text-xs font-mono text-neutral-300 leading-relaxed">
            {currentAsset.description}
          </p>

          {/* Thumbnail row */}
          <div className="flex items-center gap-2 mt-4 pt-3 border-t border-neutral-800/80 overflow-x-auto pb-1">
            {VISUAL_ASSETS.map((a) => (
              <button
                key={a.id}
                onClick={() => onSelectAsset(a.id)}
                className={`relative w-14 h-11 shrink-0 rounded-xs overflow-hidden border transition-all ${
                  a.id === currentAsset.id
                    ? 'border-amber-500 scale-105'
                    : 'border-neutral-800 opacity-60 hover:opacity-100'
                }`}
              >
                {a.src.includes('.pdf') ? (
                  <div className="w-full h-full bg-slate-200 flex items-center justify-center text-[8px] font-mono text-slate-500">PDF</div>
                ) : (
                  <img src={a.src} alt={a.title} referrerPolicy="no-referrer" className="w-full h-full object-cover" />
                )}
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
