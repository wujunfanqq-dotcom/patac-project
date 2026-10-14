import React from 'react';

interface ModuleTagHeaderProps {
  tagNumber: string;
  tagCode: string;
  cnTitle: string;
  enTitle: string;
  themeColor: 'blue' | 'warm' | 'emerald' | 'indigo';
  summaryBadge?: string;
  photoCount?: string;
}

export const ModuleTagHeader: React.FC<ModuleTagHeaderProps> = ({
  tagNumber,
  tagCode,
  cnTitle,
  enTitle,
  themeColor,
  summaryBadge,
  photoCount
}) => {
  const colorStyles = {
    blue: {
      badgeBg: 'bg-sky-50 border-sky-200 text-sky-800',
      dotBg: 'bg-sky-600',
      accentBorder: 'border-l-4 border-sky-600',
      tagText: 'text-sky-600',
      subText: 'text-sky-700/80',
      bar: 'bg-sky-600'
    },
    warm: {
      badgeBg: 'bg-amber-50 border-amber-300 text-amber-900',
      dotBg: 'bg-amber-500',
      accentBorder: 'border-l-4 border-amber-500',
      tagText: 'text-amber-600',
      subText: 'text-amber-700/80',
      bar: 'bg-amber-500'
    },
    emerald: {
      badgeBg: 'bg-emerald-50 border-emerald-200 text-emerald-800',
      dotBg: 'bg-emerald-600',
      accentBorder: 'border-l-4 border-emerald-600',
      tagText: 'text-emerald-600',
      subText: 'text-emerald-700/80',
      bar: 'bg-emerald-600'
    },
    indigo: {
      badgeBg: 'bg-blue-50 border-blue-200 text-blue-900',
      dotBg: 'bg-blue-600',
      accentBorder: 'border-l-4 border-blue-600',
      tagText: 'text-blue-600',
      subText: 'text-blue-700/80',
      bar: 'bg-blue-600'
    }
  }[themeColor];

  return (
    <div className="mb-10 bg-white p-6 sm:p-7 rounded-sm border border-slate-200 shadow-xs">
      {/* Top technical tag bar */}
      <div className="flex flex-wrap items-center justify-between gap-3 pb-4 border-b border-slate-100">
        <div className="flex items-center gap-3">
          <div className={`px-3 py-1 text-xs font-mono font-bold tracking-wider uppercase border rounded-xs flex items-center ${colorStyles.badgeBg}`}>
            <span className={`w-2 h-2 rounded-full mr-2 ${colorStyles.dotBg} animate-pulse`}></span>
            TAG {tagNumber} // {tagCode}
          </div>
          <span className="text-xs font-mono text-slate-600 hidden sm:inline">
            GERMAN LOGISTICS SPEC · PATAC DE
          </span>
        </div>

        <div className="flex items-center gap-2">
          {photoCount && (
            <span className="text-xs font-mono bg-amber-50 text-amber-800 border border-amber-200 px-2.5 py-1 rounded-xs font-semibold">
              📸 {photoCount}
            </span>
          )}
          {summaryBadge && (
            <div className="text-xs font-mono text-slate-800 bg-slate-50 border border-slate-200 px-3 py-1 rounded-xs flex items-center gap-1.5">
              <span className="text-slate-600">SPEC:</span>
              <span className="font-semibold">{summaryBadge}</span>
            </div>
          )}
        </div>
      </div>

      {/* Main module headline with clean German industrial accent */}
      <div className={`mt-5 pl-4 ${colorStyles.accentBorder}`}>
        <div className="flex items-baseline gap-3 flex-wrap">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold tracking-tight text-slate-900 font-display-tech">
            {cnTitle}
          </h2>
          <span className={`text-xs sm:text-sm font-mono uppercase tracking-wider font-semibold ${colorStyles.subText}`}>
            {enTitle}
          </span>
        </div>
      </div>
    </div>
  );
};
