import React, { useState } from 'react';
import { MILESTONES, VISUAL_ASSETS } from '../data/patacData';
import { ModuleTagHeader } from './ModuleTagHeader';
import { 
  Building2, 
  Warehouse, 
  Layers, 
  Maximize2, 
  TrendingUp, 
  CheckCircle2, 
  ArrowUpRight,
  Shield,
  Gauge,
  Camera,
  Check
} from 'lucide-react';

interface MilestonesHardwareProps {
  onOpenPhotoLightbox: (assetId: string) => void;
}

export const MilestonesHardware: React.FC<MilestonesHardwareProps> = ({ onOpenPhotoLightbox }) => {
  const [selectedAssetId, setSelectedAssetId] = useState<string>(VISUAL_ASSETS[4].id); // Photo 05
  const activeAsset = VISUAL_ASSETS.find((a) => a.id === selectedAssetId) || VISUAL_ASSETS[0];

  return (
    <section id="hardware" className="relative py-16 bg-slate-50 industrial-dots-light border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Module Header with Tag 03 */}
        <ModuleTagHeader
          tagNumber="03"
          tagCode="INFRASTRUCTURE & MILESTONES"
          cnTitle="发展历程与 7,000 ㎡ 硬件升级"
          enTitle="Corporate Evolution & Industrial Facility Upgrades"
          themeColor="emerald"
          summaryBadge="3-PHASE EVOLUTION · 7,000 ㎡ MODERN LOGISTICS CENTER · 7 DOCKS"
          photoCount="全部 6 张现场实拍原图"
        />

        {/* =========================================================================
            SUB-TAG 03-A: 发展历程三大战略阶段
        ========================================================================= */}
        <div className="mb-16">
          <div className="flex items-center gap-3 mb-6">
            <span className="px-3 py-1 bg-emerald-100 border border-emerald-300 text-emerald-900 text-xs font-mono font-bold rounded-xs">
              SUB-TAG 03-A
            </span>
            <h3 className="text-xl sm:text-2xl font-bold text-slate-900 font-display-tech">
              从起步探索到战略飞跃的演进之路
            </h3>
            <span className="text-xs font-mono text-slate-400 hidden sm:inline">
              // 2017 – 2026+ THREE KEY PHASES
            </span>
          </div>

          {/* Timeline Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 relative">
            {MILESTONES.map((m, idx) => {
              const isLatest = idx === 2;
              return (
                <div
                  key={idx}
                  className={`relative p-6 sm:p-7 rounded-xs flex flex-col justify-between transition-all ${
                    isLatest
                      ? 'bg-white border-2 border-emerald-500 shadow-md shadow-emerald-500/5'
                      : 'bg-white border border-slate-200 shadow-xs'
                  }`}
                >
                  {isLatest && (
                    <div className="absolute top-0 right-0 px-3 py-1 bg-emerald-600 text-white text-[10px] font-mono font-bold uppercase rounded-bl-xs">
                      现阶段运营 · 战略飞跃
                    </div>
                  )}

                  <div>
                    <div className="flex items-center justify-between mb-3">
                      <span className="text-xs font-mono text-emerald-700 font-bold">
                        {m.stageTag}
                      </span>
                      <span className="text-xs font-mono text-slate-400">
                        阶段 0{idx + 1}
                      </span>
                    </div>

                    <div className="text-2xl font-black text-slate-900 font-display-tech mb-1">
                      {m.period}
                    </div>
                    <div className="text-base font-bold text-slate-700 font-mono-tech mb-3">
                      {m.stageName}
                    </div>

                    {/* Area Badge */}
                    <div className="inline-block px-3 py-1 bg-slate-100 border border-slate-200 text-slate-800 text-xs font-mono font-bold rounded-xs mb-4">
                      运营面积：<span className="text-emerald-700">{m.area}</span>
                    </div>

                    <div className="text-xs font-mono text-slate-600 mb-4 font-semibold border-l-2 border-emerald-500 pl-3">
                      {m.highlight}
                    </div>

                    <p className="text-xs font-mono text-slate-600 leading-relaxed">
                      {m.description}
                    </p>
                  </div>

                  <div className="mt-6 pt-4 border-t border-slate-100 flex items-center justify-between text-[11px] font-mono text-slate-500">
                    <span>
                      {idx === 0 && '小件代发初探'}
                      {idx === 1 && '规范化沉淀'}
                      {idx === 2 && '7垛口超大件中心'}
                    </span>
                    <span className="text-emerald-700 font-bold">
                      {idx === 2 ? '当前最高实力' : '坚实基础'}
                    </span>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Expansion metric summary bar */}
          <div className="mt-6 p-4 bg-white border border-slate-200 rounded-xs flex flex-wrap items-center justify-between gap-4 text-xs font-mono shadow-2xs">
            <div className="flex items-center gap-2 text-slate-700">
              <TrendingUp className="w-4 h-4 text-emerald-600" />
              <span>仓储规模跃迁：<strong className="text-slate-900">200 ㎡ ➔ 7,000 ㎡</strong>（扩大达 35 倍）</span>
            </div>
            <div className="text-slate-500">
              硬件配置全面转向：全面聚焦单件货物250kg起步以及超规格尺寸装卸、7 个液压装卸垛口与全欧卡派
            </div>
          </div>
        </div>

        {/* =========================================================================
            SUB-TAG 03-B: 现场实拍资源图库 (6 张用户实拍照片全景收录)
        ========================================================================= */}
        <div>
          <div className="flex flex-wrap items-center justify-between gap-3 mb-6">
            <div className="flex items-center gap-3">
              <span className="px-3 py-1 bg-emerald-100 border border-emerald-300 text-emerald-900 text-xs font-mono font-bold rounded-xs">
                SUB-TAG 03-B
              </span>
              <h3 className="text-xl sm:text-2xl font-bold text-slate-900 font-display-tech">
                现场实拍资源图库 (EMBEDDED VISUAL ASSETS)
              </h3>
            </div>
            <div className="text-xs font-mono text-slate-600 flex items-center gap-2">
              <Camera className="w-4 h-4 text-emerald-600" />
              <span>现场实景实拍无虚化贴图 · 点击卡片查看高清大图</span>
            </div>
          </div>

          {/* Interactive 6-Photo Showcase Layout */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
            {/* Left Main Inspector: Featured Large View */}
            <div className="lg:col-span-7 bg-white border border-slate-200 rounded-xs overflow-hidden flex flex-col justify-between shadow-sm">
              {/* Photo top header */}
              <div className="bg-slate-100 border-b border-slate-200 px-4 py-3 flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <span className="px-2 py-0.5 bg-emerald-600 text-white text-xs font-mono font-bold rounded-xs">
                    {activeAsset.figureNumber}
                  </span>
                  <span className="text-xs font-mono text-slate-900 font-bold truncate">
                    {activeAsset.title}
                  </span>
                </div>
                <button
                  onClick={() => onOpenPhotoLightbox(activeAsset.id)}
                  className="text-xs font-mono text-slate-500 hover:text-emerald-700 flex items-center gap-1.5 transition-colors font-semibold"
                >
                  <Maximize2 className="w-3.5 h-3.5" />
                  <span>全屏检视</span>
                </button>
              </div>

              {/* Photo Image Frame */}
              <div 
                className="relative min-h-[340px] sm:min-h-[420px] bg-slate-900 cursor-pointer overflow-hidden group"
                onClick={() => onOpenPhotoLightbox(activeAsset.id)}
              >
                {activeAsset.src.includes('.pdf') ? (
                  <iframe
                    src={`${activeAsset.src}#toolbar=0&navpanes=0&scrollbar=0`}
                    title={activeAsset.title}
                    className="w-full h-full object-cover group-hover:scale-103 transition-transform duration-500 pointer-events-none border-none bg-white"
                  />
                ) : (
                  <img
                    src={activeAsset.src}
                    alt={activeAsset.title}
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover group-hover:scale-103 transition-transform duration-500"
                  />
                )}
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-transparent to-transparent pointer-events-none" />

                {/* Floating caption overlay */}
                <div className="absolute bottom-4 left-4 right-4 pointer-events-none">
                  <div className="bg-white/95 backdrop-blur-md border border-slate-200 p-3 rounded-xs text-xs font-mono shadow-md">
                    <div className="text-slate-900 font-bold flex items-center justify-between">
                      <span className="text-emerald-800">{activeAsset.title}</span>
                      <span className="text-slate-500 text-[10px]">{activeAsset.tag}</span>
                    </div>
                    <div className="text-slate-600 text-xs mt-1">
                      {activeAsset.subtitle}
                    </div>
                  </div>
                </div>
              </div>

              {/* Bottom Specs Table */}
              <div className="p-4 sm:p-5 bg-white border-t border-slate-200">
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 text-xs font-mono mb-3">
                  {activeAsset.specs.map((s, idx) => (
                    <div key={idx} className="p-2 bg-slate-50 border border-slate-200 rounded-xs">
                      <div className="text-[10px] text-slate-500">{s.label}</div>
                      <div className="text-slate-800 font-bold mt-0.5 truncate">{s.value}</div>
                    </div>
                  ))}
                </div>
                <p className="text-xs font-mono text-slate-600 leading-relaxed">
                  {activeAsset.description}
                </p>
              </div>
            </div>

            {/* Right Side: 6 Thumbnail Selectors */}
            <div className="lg:col-span-5 space-y-2.5">
              <div className="text-xs font-mono text-slate-500 uppercase tracking-wider mb-1 font-bold">
                点击切换查看全部 6 张现场实拍图片：
              </div>

              {VISUAL_ASSETS.map((asset) => {
                const isCurrent = asset.id === selectedAssetId;
                return (
                  <div
                    key={asset.id}
                    onClick={() => setSelectedAssetId(asset.id)}
                    className={`p-2.5 bg-white border rounded-xs cursor-pointer transition-all flex items-center gap-3 group ${
                      isCurrent
                        ? 'border-emerald-500 bg-emerald-50/40 shadow-sm'
                        : 'border-slate-200 hover:border-slate-300'
                    }`}
                  >
                    {/* Small thumbnail */}
                    <div className="w-18 h-14 bg-slate-100 rounded-xs overflow-hidden shrink-0 border border-slate-200 relative">
                      {asset.src.includes('.pdf') ? (
                        <div className="w-full h-full flex items-center justify-center bg-slate-200 text-[10px] font-mono font-bold text-slate-500">PDF</div>
                      ) : (
                        <img
                          src={asset.src}
                          alt={asset.title}
                          referrerPolicy="no-referrer"
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform"
                        />
                      )}
                      <span className="absolute bottom-0.5 right-0.5 text-[8px] font-mono px-1 bg-slate-900/80 text-white rounded-xs">
                        {asset.figureNumber}
                      </span>
                    </div>

                    {/* Content */}
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center justify-between text-xs font-mono">
                        <span className={`font-bold truncate ${isCurrent ? 'text-emerald-800' : 'text-slate-800'}`}>
                          {asset.figureNumber}：{asset.title}
                        </span>
                      </div>
                      <p className="text-[11px] font-mono text-slate-500 truncate mt-0.5">
                        {asset.subtitle}
                      </p>
                      <div className="flex items-center gap-2 mt-1 text-[10px] font-mono text-slate-400">
                        <span className="px-1.5 py-0.2 bg-slate-100 border border-slate-200 text-slate-600 rounded-xs font-medium">
                          {asset.tag}
                        </span>
                        <span className="text-emerald-700 hidden sm:inline font-semibold">点击检视</span>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
