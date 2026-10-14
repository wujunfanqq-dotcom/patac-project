import React from 'react';
import { COMPANY_PROFILE, VISUAL_ASSETS } from '../data/patacData';
import { ModuleTagHeader } from './ModuleTagHeader';
import { 
  Building2, 
  Truck, 
  MapPin, 
  Weight, 
  ArrowRight, 
  CheckCircle2, 
  Maximize2, 
  Anchor, 
  ShieldCheck,
  UserCheck,
  Compass,
  FileCheck2
} from 'lucide-react';

interface HeroOverviewProps {
  onOpenPhotoLightbox: (assetId: string) => void;
  onOpenCalculator: () => void;
}

export const HeroOverview: React.FC<HeroOverviewProps> = ({
  onOpenPhotoLightbox,
  onOpenCalculator
}) => {
  // Hero features Photo 01: 7,000 ㎡ Modern Logistics Center & Loading Docks Exterior
  const heroAsset = VISUAL_ASSETS.find((a) => a.id === 'asset-exterior') || VISUAL_ASSETS[0];

  return (
    <section id="overview" className="relative pt-10 pb-16 bg-slate-50 industrial-grid-light border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Module Header with prominent Tag 01 */}
        <ModuleTagHeader
          tagNumber="01"
          tagCode="OVERVIEW & HUB"
          cnTitle="欧洲中转仓及超大件尾程履约专家"
          enTitle="European Logistics Hub & Oversized Last-Mile Specialist"
          themeColor="blue"
          summaryBadge="DUISBURG / DÜSSELDORF · 7,000 ㎡ · 7 DOCKS"
          photoCount="实拍 01 仓体全景"
        />

        {/* Hero Main Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch mt-6">
          {/* Left Column: Core Positioning & Architectural Framework (7 Cols) */}
          <div className="lg:col-span-7 flex flex-col justify-between space-y-6">
            <div className="space-y-5">
              {/* Top sub-tag badges */}
              <div className="flex flex-wrap items-center gap-2">
                <span className="inline-flex items-center gap-1.5 px-3 py-1 bg-sky-50 border border-sky-300 text-sky-800 text-xs font-mono font-bold rounded-xs shadow-2xs">
                  <MapPin className="w-3.5 h-3.5 text-sky-600" />
                  德国 · 杜伊斯堡 / 杜塞尔多夫 (Duisburg / Düsseldorf)
                </span>
                <span className="inline-flex items-center gap-1.5 px-3 py-1 bg-amber-50 border border-amber-300 text-amber-900 text-xs font-mono font-bold rounded-xs shadow-2xs">
                  <ShieldCheck className="w-3.5 h-3.5 text-amber-600" />
                  海陆空铁全渠道清关后尾程托管
                </span>
              </div>

              {/* Major Value Proposition */}
              <h1 className="text-3xl sm:text-4xl md:text-5xl font-black text-slate-900 tracking-tight leading-tight font-display-tech">
                坐落德国莱茵物流枢纽 <br />
                <span className="text-sky-600">7,000 ㎡</span> <span className="text-amber-500">超大件尾程履约中心</span>
              </h1>

              <p className="text-slate-600 text-base sm:text-lg leading-relaxed">
                PATAC GmbH 坐落于欧洲核心经济腹地——德国北威州杜伊斯堡/杜塞尔多夫双核枢纽。依托毗邻中欧班列最大陆港与密集高速公路网络的卓越区位，拥有 <strong className="text-slate-900 font-bold">7,000 ㎡ 现代化大型物流中心</strong> 与 <strong className="text-slate-900 font-bold">7 个专业液压装卸垛口</strong>，全面专注于 <span className="text-amber-700 font-bold bg-amber-50 px-1.5 py-0.5 rounded-xs border border-amber-200">单件货物250kg起步以及超规格尺寸，如1.5m+</span> 的专业拆柜、加固打托、全欧卡派（FTL / LTL）与一件代发。
              </p>

              {/* Direct Person-in-Charge Executive Card */}
              <div className="p-4 bg-white border border-slate-200 rounded-xs shadow-xs flex items-center justify-between gap-4">
                <div className="flex items-center gap-3.5">
                  <div className="w-12 h-12 bg-amber-50 border-2 border-amber-400 flex items-center justify-center rounded-xs text-amber-600 shrink-0">
                    <UserCheck className="w-6 h-6" />
                  </div>
                  <div>
                    <div className="flex items-center gap-2">
                      <span className="text-xs font-mono text-slate-500 uppercase tracking-wider">业务对接人标识：</span>
                      <span className="text-lg font-black text-slate-900 font-display-tech text-amber-600">{COMPANY_PROFILE.contactPerson}</span>
                    </div>
                    <p className="text-xs text-slate-500 font-mono">
                      欧洲实体海外仓直营操盘 · 中德双语无缝对接 · 拒绝多重转包差价
                    </p>
                  </div>
                </div>
                <a
                  href="#contact"
                  className="px-4 py-2 bg-slate-900 hover:bg-slate-800 text-white text-xs font-mono font-bold rounded-xs transition-colors whitespace-nowrap shadow-xs"
                >
                  直连老吴 →
                </a>
              </div>
            </div>

            {/* 4-Pillar Hard Power Metrics Grid */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-1">
              <div className="p-3.5 bg-white border border-slate-200 rounded-xs shadow-2xs hover:border-sky-300 transition-colors">
                <div className="flex items-center justify-between text-slate-400 mb-1">
                  <span className="text-[11px] font-mono text-slate-500">仓储运营体量</span>
                  <Building2 className="w-4 h-4 text-sky-600" />
                </div>
                <div className="text-2xl font-black text-slate-900 font-display-tech">7,000 ㎡</div>
                <div className="text-[10px] font-mono text-slate-500 mt-0.5">现代化大型物流中心</div>
              </div>

              <div className="p-3.5 bg-white border border-slate-200 rounded-xs shadow-2xs hover:border-sky-300 transition-colors">
                <div className="flex items-center justify-between text-slate-400 mb-1">
                  <span className="text-[11px] font-mono text-slate-500">专业装卸设施</span>
                  <Truck className="w-4 h-4 text-sky-600" />
                </div>
                <div className="text-2xl font-black text-slate-900 font-display-tech">7 垛口 + 2 门</div>
                <div className="text-[10px] font-mono text-slate-500 mt-0.5">全液压泊位快速吞吐</div>
              </div>

              <div className="p-3.5 bg-white border border-slate-200 rounded-xs shadow-2xs hover:border-amber-300 transition-colors">
                <div className="flex items-center justify-between text-slate-400 mb-1">
                  <span className="text-[11px] font-mono text-slate-500">主营核心载荷</span>
                  <Weight className="w-4 h-4 text-amber-500" />
                </div>
                <div className="text-2xl font-black text-slate-900 font-display-tech">250 kg+</div>
                <div className="text-[10px] font-mono text-amber-700 font-bold mt-0.5">超大件/异形件专项</div>
              </div>

              <div className="p-3.5 bg-white border border-slate-200 rounded-xs shadow-2xs hover:border-sky-300 transition-colors">
                <div className="flex items-center justify-between text-slate-400 mb-1">
                  <span className="text-[11px] font-mono text-slate-500">头程接入模式</span>
                  <Anchor className="w-4 h-4 text-sky-600" />
                </div>
                <div className="text-2xl font-black text-slate-900 font-display-tech">海陆空铁</div>
                <div className="text-[10px] font-mono text-slate-500 mt-0.5">全渠道清关后托管</div>
              </div>
            </div>

            {/* Action buttons */}
            <div className="flex flex-wrap items-center gap-4 pt-1">
              <a
                href="#services"
                className="px-6 py-3 bg-sky-600 hover:bg-sky-500 text-white font-bold text-xs sm:text-sm font-mono tracking-wide rounded-xs transition-all shadow-md shadow-sky-600/20 flex items-center gap-2 cursor-pointer"
              >
                <span>查阅超大件核心标准与多式联运</span>
                <ArrowRight className="w-4 h-4" />
              </a>

              <button
                onClick={onOpenCalculator}
                className="px-5 py-3 bg-white hover:bg-slate-100 border border-slate-300 text-slate-800 text-xs sm:text-sm font-mono font-semibold rounded-xs transition-colors flex items-center gap-2 cursor-pointer shadow-xs"
              >
                <span>规格与卡派方案速查器</span>
              </button>
            </div>
          </div>

          {/* Right Column: Embedded Real Photo 01 (7,000 ㎡ Facade & Loading Docks) */}
          <div className="lg:col-span-5 flex flex-col">
            <div className="bg-white border border-slate-200 rounded-xs overflow-hidden flex-1 flex flex-col shadow-sm">
              {/* Top technical header bar */}
              <div className="bg-slate-100 border-b border-slate-200 px-4 py-2.5 flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <span className="px-2 py-0.5 bg-sky-600 text-white font-mono font-bold text-xs rounded-xs">
                    {heroAsset.figureNumber}
                  </span>
                  <span className="text-xs font-mono font-bold text-slate-800">
                    现场实拍：7,000 ㎡ 物流中心与装卸垛口
                  </span>
                </div>
                <button
                  onClick={() => onOpenPhotoLightbox(heroAsset.id)}
                  className="text-slate-500 hover:text-sky-600 text-xs font-mono flex items-center gap-1 transition-colors"
                  title="点击查看实拍大图"
                >
                  <Maximize2 className="w-3.5 h-3.5" />
                  <span className="hidden sm:inline">实拍放大</span>
                </button>
              </div>

              {/* Photo Frame */}
              <div 
                className="relative flex-1 min-h-[300px] sm:min-h-[360px] bg-slate-100 cursor-pointer overflow-hidden group"
                onClick={() => onOpenPhotoLightbox(heroAsset.id)}
              >
                {heroAsset.src.includes('.pdf') ? (
                  <iframe
                    src={`${heroAsset.src}#toolbar=0&navpanes=0&scrollbar=0`}
                    title={heroAsset.title}
                    className="w-full h-full object-cover group-hover:scale-103 transition-transform duration-500 pointer-events-none border-none"
                  />
                ) : (
                  <img
                    src={heroAsset.src}
                    alt={heroAsset.title}
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover group-hover:scale-103 transition-transform duration-500"
                  />
                )}
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 via-transparent to-transparent pointer-events-none" />

                {/* Live floating caption */}
                <div className="absolute bottom-3 left-3 right-3 flex items-end justify-between pointer-events-none">
                  <div className="bg-white/95 backdrop-blur-md border border-slate-200 p-2.5 rounded-xs text-xs font-mono shadow-sm">
                    <div className="text-sky-800 font-bold flex items-center gap-1.5">
                      <CheckCircle2 className="w-3.5 h-3.5 text-sky-600" />
                      7,000 ㎡ 现代化重载物流中心
                    </div>
                    <div className="text-slate-600 text-[11px] mt-0.5">
                      7 个液压装卸垛口 · 多柜同时靠泊
                    </div>
                  </div>
                  <span className="bg-slate-900/80 text-[10px] font-mono text-white px-2 py-1 rounded-xs">
                    点击查看高清实拍
                  </span>
                </div>
              </div>

              {/* Bottom Specs Grid */}
              <div className="p-4 bg-slate-50 border-t border-slate-200">
                <div className="grid grid-cols-2 gap-2 text-xs font-mono">
                  {heroAsset.specs.map((spec, i) => (
                    <div key={i} className="flex flex-col border-b border-slate-200 pb-1.5">
                      <span className="text-[10px] text-slate-500">{spec.label}</span>
                      <span className="text-slate-800 font-bold truncate">{spec.value}</span>
                    </div>
                  ))}
                </div>
                <p className="text-[11px] text-slate-600 mt-2.5 font-mono leading-relaxed">
                  {heroAsset.description}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
