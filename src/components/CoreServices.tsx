import React, { useState } from 'react';
import { CARGO_SPECS, FIRST_LEG_CHANNELS, VISUAL_ASSETS } from '../data/patacData';
import { ModuleTagHeader } from './ModuleTagHeader';
import { 
  Ship, 
  Truck, 
  Train, 
  Plane, 
  Layers, 
  Package, 
  Tag, 
  RotateCcw, 
  Check, 
  ArrowRight, 
  Compass, 
  Calculator, 
  Maximize2, 
  AlertCircle,
  FileText,
  Boxes,
  ShieldCheck,
  Scale,
  Sparkles
} from 'lucide-react';

interface CoreServicesProps {
  onOpenPhotoLightbox: (assetId: string) => void;
}

export const CoreServices: React.FC<CoreServicesProps> = ({ onOpenPhotoLightbox }) => {
  // Photos used in Module 02
  const heavyCratesAsset = VISUAL_ASSETS.find((a) => a.id === 'asset-heavy-crates') || VISUAL_ASSETS[1];
  const palletWrapAsset = VISUAL_ASSETS.find((a) => a.id === 'asset-pallet-wrap') || VISUAL_ASSETS[2];
  const containerNetAsset = VISUAL_ASSETS.find((a) => a.id === 'asset-container-net') || VISUAL_ASSETS[3];

  // Interactive cargo evaluator state
  const [cargoWeight, setCargoWeight] = useState<number>(240);
  const [maxDimension, setMaxDimension] = useState<number>(1.8);
  const [cargoType, setCargoType] = useState<string>('machinery');
  const [destinationRegion, setDestinationRegion] = useState<string>('de');

  // Evaluation logic
  const isOversized = cargoWeight >= 200 || maxDimension >= 1.5;

  const iconMap: Record<string, React.ReactNode> = {
    Ship: <Ship className="w-5 h-5 text-sky-600" />,
    Truck: <Truck className="w-5 h-5 text-amber-600" />,
    Train: <Train className="w-5 h-5 text-emerald-600" />,
    Plane: <Plane className="w-5 h-5 text-blue-600" />
  };

  return (
    <section id="services" className="relative py-16 bg-white border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Module Header with Tag 02 */}
        <ModuleTagHeader
          tagNumber="02"
          tagCode="SERVICES & MULTIMODAL"
          cnTitle="核心业务与多式联运接单能力"
          enTitle="Multimodal Inbound & Oversized Freight Fulfillment"
          themeColor="blue"
          summaryBadge="OVERSIZED SPEC (200-250KG+ / ≥1.5M) · FTL/LTL · 4-CHANNEL"
          photoCount="内含实拍 02、03、04"
        />

        {/* =========================================================================
            SUB-TAG 02-A: 地理枢纽与一站式尾程托管
        ========================================================================= */}
        <div className="mb-16">
          <div className="flex items-center gap-3 mb-6">
            <span className="px-3 py-1 bg-sky-100 border border-sky-300 text-sky-800 text-xs font-mono font-bold rounded-xs">
              SUB-TAG 02-A
            </span>
            <h3 className="text-xl sm:text-2xl font-bold text-slate-900 font-display-tech">
              地理枢纽与一站式尾程托管
            </h3>
            <span className="text-xs font-mono text-slate-400 hidden sm:inline">
              // DUISBURG & DÜSSELDORF GATEWAY
            </span>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch">
            {/* Geographic Advantage */}
            <div className="lg:col-span-6 p-6 sm:p-7 bg-slate-50 border border-slate-200 rounded-xs flex flex-col justify-between">
              <div>
                <div className="flex items-center gap-2 text-sky-700 text-xs font-mono font-bold mb-3">
                  <Compass className="w-4 h-4" />
                  <span>GEOGRAPHIC LOGISTICS ADVANTAGE</span>
                </div>
                <h4 className="text-2xl font-bold text-slate-900 mb-3 font-display-tech">
                  坐落德国杜伊斯堡 / 杜塞尔多夫区域
                </h4>
                <p className="text-slate-600 text-sm leading-relaxed mb-6">
                  紧邻欧洲核心物流枢纽（Duisburg / Düsseldorf），地处欧洲人口密度最高、工业最集中的北威州（NRW）。杜伊斯堡是中欧班列欧洲最大铁路终点站与内河航运集散港；杜塞尔多夫拥有世界级国际机场与密集的欧洲干线高速公路网，可实现全德 24 小时、欧洲全境 48-72 小时无缝分发。
                </p>

                <div className="space-y-2.5 pt-3 border-t border-slate-200">
                  <div className="flex items-start gap-2 text-xs font-mono text-slate-700">
                    <span className="text-sky-700 font-bold">▶ 班列抵站直驳：</span>
                    <span>中欧班列货物抵达杜伊斯堡集装箱场站后，短驳即可入库。</span>
                  </div>
                  <div className="flex items-start gap-2 text-xs font-mono text-slate-700">
                    <span className="text-sky-700 font-bold">▶ 港口拖柜进仓：</span>
                    <span>便捷连接鹿特丹、汉堡、安特卫普等主要港口，提柜清关快线到仓。</span>
                  </div>
                  <div className="flex items-start gap-2 text-xs font-mono text-slate-700">
                    <span className="text-sky-700 font-bold">▶ 空港集散直提：</span>
                    <span>毗邻杜塞尔多夫及法兰克福国际货运口岸，急件随时清关调运。</span>
                  </div>
                </div>
              </div>

              <div className="mt-6 pt-4 border-t border-slate-200 flex items-center justify-between text-xs font-mono text-slate-500">
                <span>经纬度坐标：51.4344° N, 6.7623° E</span>
                <span className="text-sky-700 font-bold">全欧 1-3 天干线卡派</span>
              </div>
            </div>

            {/* End-to-End Last-Mile Fulfillment */}
            <div className="lg:col-span-6 p-6 sm:p-7 bg-amber-50/60 border border-amber-200 rounded-xs flex flex-col justify-between">
              <div>
                <div className="flex items-center gap-2 text-amber-800 text-xs font-mono font-bold mb-3">
                  <Boxes className="w-4 h-4 text-amber-600" />
                  <span>FULL-PROCESS END-TO-END CARE</span>
                </div>
                <h4 className="text-2xl font-bold text-slate-900 mb-3 font-display-tech">
                  承接中国发货全流程头程货物 · 尾程全托管
                </h4>
                <p className="text-slate-600 text-sm leading-relaxed mb-6">
                  专业承接从中国各大口岸发货至欧洲的集装箱与大货，负责到港/抵站清关后的全流程在德闭环服务：专业卸柜 ➔ 精细理货 ➔ 托盘打托 ➔ 二次分发 ➔ 电商一件代发。
                </p>

                {/* 4-Step Pipeline */}
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                  {[
                    { step: '01', title: '精细理货', desc: '条码扫描分拣' },
                    { step: '02', title: '标准打托', desc: '防震缠膜紧固' },
                    { step: '03', title: '二次分发', desc: '欧洲本土卡派' },
                    { step: '04', title: '一件代发', desc: 'B2B/B2C极速发' }
                  ].map((p, idx) => (
                    <div key={idx} className="p-2.5 bg-white border border-amber-200/80 rounded-xs text-center flex flex-col justify-between shadow-2xs">
                      <span className="text-[10px] font-mono text-amber-600 font-bold">{p.step}</span>
                      <div className="text-xs font-bold text-slate-800 mt-1 font-mono">{p.title}</div>
                      <div className="text-[10px] text-slate-500 mt-0.5">{p.desc}</div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="mt-6 pt-4 border-t border-amber-200 flex items-center justify-between text-xs font-mono text-slate-600">
                <span className="flex items-center gap-1.5 text-slate-800 font-semibold">
                  <ShieldCheck className="w-4 h-4 text-emerald-600" />
                  德国自营仓库团队 · 杜塞老吴全程监管
                </span>
                <a href="#contact" className="text-amber-800 font-bold hover:underline">对接托管方案 →</a>
              </div>
            </div>
          </div>
        </div>

        {/* =========================================================================
            SUB-TAG 02-B: 全渠道头程接单能力（海陆空铁） + 实拍 04 拆柜现场
        ========================================================================= */}
        <div className="mb-16">
          <div className="flex flex-wrap items-center justify-between gap-3 mb-6">
            <div className="flex items-center gap-3">
              <span className="px-3 py-1 bg-blue-100 border border-blue-300 text-blue-900 text-xs font-mono font-bold rounded-xs">
                SUB-TAG 02-B
              </span>
              <h3 className="text-xl sm:text-2xl font-bold text-slate-900 font-display-tech">
                全渠道头程接单能力（海陆空铁四维覆盖）
              </h3>
            </div>
            <span className="text-xs font-mono text-slate-500">
              // SEA · ROAD · RAIL · AIR FREIGHT
            </span>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch">
            {/* 4 Inbound Modes (7 Cols) */}
            <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-4">
              {FIRST_LEG_CHANNELS.map((item, index) => (
                <div 
                  key={index} 
                  className="p-4 bg-slate-50 border border-slate-200 hover:border-sky-300 rounded-xs transition-colors flex flex-col justify-between shadow-2xs group"
                >
                  <div>
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-[10px] font-mono text-slate-700 bg-white border border-slate-200 px-2 py-0.5 rounded-xs font-bold">
                        {item.code}
                      </span>
                      <div className="p-2 bg-white border border-slate-200 rounded-xs group-hover:scale-110 transition-transform shadow-2xs">
                        {iconMap[item.icon]}
                      </div>
                    </div>

                    <h4 className="text-base font-bold text-slate-900 font-display-tech">
                      {item.type}
                    </h4>
                    <div className="text-[11px] font-mono text-slate-500 mb-2">
                      {item.enName}
                    </div>
                    <p className="text-xs text-slate-600 font-mono leading-relaxed mb-3">
                      {item.description}
                    </p>
                  </div>

                  <div className="space-y-1 pt-2.5 border-t border-slate-200 text-[11px] font-mono">
                    {item.advantages.map((adv, aIdx) => (
                      <div key={aIdx} className="flex items-center gap-1.5 text-slate-700">
                        <Check className="w-3.5 h-3.5 text-sky-600 shrink-0" />
                        <span>{adv}</span>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>

            {/* Embedded Real Photo 04 (Inbound Container & Safety Netting) */}
            <div className="lg:col-span-5 bg-white border border-slate-200 rounded-xs p-4 flex flex-col justify-between shadow-xs">
              <div 
                className="relative aspect-4/3 rounded-xs overflow-hidden bg-slate-100 cursor-pointer group"
                onClick={() => onOpenPhotoLightbox(containerNetAsset.id)}
              >
                <img
                  src={containerNetAsset.src}
                  alt={containerNetAsset.title}
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover group-hover:scale-103 transition-transform duration-500"
                />
                <div className="absolute top-2 left-2 px-2 py-0.5 bg-blue-600 text-white font-mono text-xs font-bold rounded-xs">
                  {containerNetAsset.figureNumber}
                </div>
                <div className="absolute bottom-2 left-2 right-2 flex items-center justify-between text-xs font-mono text-white bg-slate-900/80 px-2 py-1 rounded-xs">
                  <span className="truncate">{containerNetAsset.title}</span>
                  <Maximize2 className="w-3.5 h-3.5 text-amber-400 shrink-0 ml-1.5" />
                </div>
              </div>

              <div className="mt-4 space-y-2">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-mono text-blue-700 font-bold uppercase">
                    集装箱到仓现场实况
                  </span>
                  <span className="text-[10px] font-mono text-slate-600">
                    20GP / 40HQ 全柜型
                  </span>
                </div>
                <p className="text-xs font-mono text-slate-600 leading-relaxed">
                  {containerNetAsset.description}
                </p>
                <div className="grid grid-cols-2 gap-2 pt-2 border-t border-slate-100 text-[11px] font-mono">
                  {containerNetAsset.specs.map((sp, sIdx) => (
                    <div key={sIdx} className="p-1.5 bg-slate-50 border border-slate-200 rounded-xs">
                      <span className="text-slate-600 block text-[10px]">{sp.label}</span>
                      <strong className="text-slate-800 truncate block">{sp.value}</strong>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* =========================================================================
            SUB-TAG 02-C: 主营核心：超大件 / 异形件标准 + 实拍 02、实拍 03
        ========================================================================= */}
        <div className="mb-16">
          <div className="flex flex-wrap items-center justify-between gap-3 mb-6">
            <div className="flex items-center gap-3">
              <span className="px-3 py-1 bg-amber-100 border border-amber-300 text-amber-900 text-xs font-mono font-bold rounded-xs">
                SUB-TAG 02-C
              </span>
              <h3 className="text-xl sm:text-2xl font-bold text-slate-900 font-display-tech">
                主营核心：超大件 / 异形件标准 (OVERSIZED CARGO SPEC)
              </h3>
            </div>
            <div className="text-xs font-mono text-amber-900 bg-amber-50 border border-amber-300 px-3 py-1 rounded-xs font-bold">
              ★ 核心业务占比权重核心标准
            </div>
          </div>

          {/* Comparison Cards: Oversized vs Regular */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch mb-8">
            {/* Primary Oversized Spec Card (7 Cols) */}
            <div className="lg:col-span-7 p-6 sm:p-7 bg-white border-2 border-amber-500 rounded-xs shadow-md relative overflow-hidden flex flex-col justify-between">
              {/* Ribbon */}
              <div className="absolute top-0 right-0 px-4 py-1 bg-amber-500 text-slate-950 text-[10px] font-mono font-bold tracking-widest uppercase rounded-bl-xs">
                PATAC 核心主打优势
              </div>

              <div>
                <div className="text-xs font-mono text-amber-700 font-bold mb-1">
                  {CARGO_SPECS.oversized.categoryTag}
                </div>
                <h4 className="text-2xl sm:text-3xl font-extrabold text-slate-900 font-display-tech mb-2">
                  {CARGO_SPECS.oversized.category}
                </h4>
                
                {/* Benchmark Specifications Box */}
                <div className="my-4 p-4 bg-amber-50 border border-amber-200 rounded-xs">
                  <div className="text-xs font-mono text-amber-800 uppercase font-semibold">核心重量 / 尺寸指标要求：</div>
                  <div className="text-xl sm:text-2xl font-black text-amber-800 font-mono-tech mt-1">
                    {CARGO_SPECS.oversized.specBadge}
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 mt-3 pt-3 border-t border-amber-200/80 text-xs font-mono">
                    <div>
                      <span className="text-slate-500">单件重量标准：</span>
                      <strong className="text-slate-900 font-bold">250 kg起步</strong>
                    </div>
                    <div>
                      <span className="text-slate-500">长度规格标准：</span>
                      <strong className="text-slate-900 font-bold">单边长度 ≥ 1.5 米</strong>
                    </div>
                  </div>
                </div>

                {/* Major Service Modes */}
                <div className="space-y-2 mb-5">
                  <div className="text-xs font-mono text-slate-500 uppercase tracking-wider font-bold">主要服务模式：</div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                    {CARGO_SPECS.oversized.serviceModes.map((mode, mIdx) => (
                      <div key={mIdx} className="p-2.5 bg-slate-50 border border-slate-200 rounded-xs flex items-start gap-2">
                        <Check className="w-4 h-4 text-amber-600 shrink-0 mt-0.5" />
                        <span className="text-xs font-mono text-slate-800">{mode}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Suited Scope */}
                <div className="p-3 bg-slate-50 border border-slate-200 rounded-xs text-xs font-mono text-slate-600">
                  <span className="text-amber-800 font-bold">适配行业货品：</span>
                  <span>{CARGO_SPECS.oversized.suitedFor}</span>
                </div>
              </div>

              <div className="mt-5 pt-4 border-t border-slate-200 flex flex-wrap items-center justify-between gap-3">
                <span className="text-xs font-mono text-slate-500">
                  支持重型机械掏箱拆柜与全欧卡车网络直发
                </span>
                <a
                  href="#contact"
                  className="px-4 py-2 bg-amber-500 hover:bg-amber-400 text-slate-950 text-xs font-mono font-bold rounded-xs transition-colors shadow-xs"
                >
                  超大件定制卡派报价咨询 →
                </a>
              </div>
            </div>

            {/* Standard Ecommerce Card (5 Cols) */}
            <div className="lg:col-span-5 p-6 sm:p-7 bg-white border border-slate-200 rounded-xs flex flex-col justify-between shadow-xs">
              <div>
                <div className="text-xs font-mono text-slate-500 mb-1">
                  {CARGO_SPECS.standard.categoryTag}
                </div>
                <h4 className="text-2xl font-bold text-slate-900 font-display-tech mb-2">
                  {CARGO_SPECS.standard.category}
                </h4>

                <div className="my-4 p-4 bg-slate-50 border border-slate-200 rounded-xs">
                  <div className="text-xs font-mono text-slate-500 uppercase">核心指标：</div>
                  <div className="text-lg font-bold text-slate-800 font-mono-tech mt-1">
                    {CARGO_SPECS.standard.specBadge}
                  </div>
                  <p className="text-xs font-mono text-slate-500 mt-1.5">
                    单件重量 &lt; 200 kg，单边长度 &lt; 1.5 米标准规格纸箱/包裹。
                  </p>
                </div>

                {/* Services */}
                <div className="space-y-2 mb-5">
                  <div className="text-xs font-mono text-slate-500 uppercase tracking-wider font-bold">主要服务模式：</div>
                  <div className="space-y-2">
                    {CARGO_SPECS.standard.serviceModes.map((mode, smIdx) => (
                      <div key={smIdx} className="p-2 bg-slate-50 border border-slate-200 rounded-xs flex items-center gap-2">
                        <Check className="w-3.5 h-3.5 text-sky-600 shrink-0" />
                        <span className="text-xs font-mono text-slate-700">{mode}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="p-3 bg-slate-50 border border-slate-200 rounded-xs text-xs font-mono text-slate-600">
                  <span className="text-slate-800 font-bold">服务应用：</span>
                  <span>{CARGO_SPECS.standard.suitedFor}</span>
                </div>
              </div>

              <div className="mt-5 pt-4 border-t border-slate-200 flex items-center justify-between text-xs font-mono text-slate-500">
                <span>退货换标 · 重新包装 · 快速翻新</span>
                <span className="text-sky-700 font-bold">WMS系统实时录入</span>
              </div>
            </div>
          </div>

          {/* 2 Photographic Proof Assets for Oversized & Trucking: Photo 02 & Photo 03 */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Photo 02: Heavy Timber Machinery Crates */}
            <div className="p-5 bg-slate-50 border border-slate-200 rounded-xs flex flex-col justify-between shadow-xs">
              <div 
                className="relative aspect-16/10 rounded-xs overflow-hidden bg-slate-100 cursor-pointer group"
                onClick={() => onOpenPhotoLightbox(heavyCratesAsset.id)}
              >
                <img
                  src={heavyCratesAsset.src}
                  alt={heavyCratesAsset.title}
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover group-hover:scale-103 transition-transform duration-500"
                />
                <div className="absolute top-2 left-2 px-2 py-0.5 bg-amber-500 text-slate-950 font-mono text-xs font-bold rounded-xs">
                  {heavyCratesAsset.figureNumber}
                </div>
                <div className="absolute bottom-2 left-2 right-2 flex items-center justify-between text-xs font-mono text-white bg-slate-900/80 px-2.5 py-1 rounded-xs">
                  <span className="truncate">{heavyCratesAsset.title}</span>
                  <Maximize2 className="w-3.5 h-3.5 text-amber-400 shrink-0 ml-1.5" />
                </div>
              </div>

              <div className="mt-4">
                <div className="text-xs font-mono text-amber-700 font-bold mb-1">
                  超大件装载实况 // HEAVY CRATES & TAIL-LIFT
                </div>
                <h4 className="text-base font-bold text-slate-900 font-display-tech">
                  {heavyCratesAsset.title}
                </h4>
                <p className="text-xs font-mono text-slate-600 mt-2 leading-relaxed">
                  {heavyCratesAsset.description}
                </p>
                <div className="grid grid-cols-2 gap-2 mt-3 pt-3 border-t border-slate-200 text-[11px] font-mono">
                  {heavyCratesAsset.specs.map((sp, idx) => (
                    <div key={idx} className="p-1.5 bg-white border border-slate-200 rounded-xs">
                      <span className="text-slate-600 text-[10px] block">{sp.label}</span>
                      <strong className="text-slate-800 truncate block">{sp.value}</strong>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Photo 03: Pallet Cargo White Wrap & Trucking */}
            <div className="p-5 bg-slate-50 border border-slate-200 rounded-xs flex flex-col justify-between shadow-xs">
              <div 
                className="relative aspect-16/10 rounded-xs overflow-hidden bg-slate-100 cursor-pointer group"
                onClick={() => onOpenPhotoLightbox(palletWrapAsset.id)}
              >
                <img
                  src={palletWrapAsset.src}
                  alt={palletWrapAsset.title}
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover group-hover:scale-103 transition-transform duration-500"
                />
                <div className="absolute top-2 left-2 px-2 py-0.5 bg-sky-600 text-white font-mono text-xs font-bold rounded-xs">
                  {palletWrapAsset.figureNumber}
                </div>
                <div className="absolute bottom-2 left-2 right-2 flex items-center justify-between text-xs font-mono text-white bg-slate-900/80 px-2.5 py-1 rounded-xs">
                  <span className="truncate">{palletWrapAsset.title}</span>
                  <Maximize2 className="w-3.5 h-3.5 text-amber-400 shrink-0 ml-1.5" />
                </div>
              </div>

              <div className="mt-4">
                <div className="text-xs font-mono text-sky-700 font-bold mb-1">
                  尾程卡车派送实况 // PALLETIZED FREIGHT TRUCKING
                </div>
                <h4 className="text-base font-bold text-slate-900 font-display-tech">
                  {palletWrapAsset.title}
                </h4>
                <p className="text-xs font-mono text-slate-600 mt-2 leading-relaxed">
                  {palletWrapAsset.description}
                </p>
                <div className="grid grid-cols-2 gap-2 mt-3 pt-3 border-t border-slate-200 text-[11px] font-mono">
                  {palletWrapAsset.specs.map((sp, idx) => (
                    <div key={idx} className="p-1.5 bg-white border border-slate-200 rounded-xs">
                      <span className="text-slate-600 text-[10px] block">{sp.label}</span>
                      <strong className="text-slate-800 truncate block">{sp.value}</strong>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* =========================================================================
            SUB-TAG 02-D: 交互式货物规格智能判定与派送方案试算器
        ========================================================================= */}
        <div>
          <div className="flex items-center gap-3 mb-6">
            <span className="px-3 py-1 bg-emerald-100 border border-emerald-300 text-emerald-900 text-xs font-mono font-bold rounded-xs">
              SUB-TAG 02-D
            </span>
            <h3 className="text-xl sm:text-2xl font-bold text-slate-900 font-display-tech">
              货物规格与尾程履约方案速查计算器
            </h3>
            <span className="text-xs font-mono text-slate-400 hidden sm:inline">
              // SPEC EVALUATOR & DISPATCH RECOMMENDATION
            </span>
          </div>

          <div className="p-6 sm:p-7 bg-slate-50 border border-slate-200 rounded-xs">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
              {/* Form Input Side */}
              <div className="lg:col-span-7 space-y-5">
                <div>
                  <h4 className="text-lg font-bold text-slate-900 font-mono-tech flex items-center gap-2">
                    <Scale className="w-5 h-5 text-amber-600" />
                    输入您的货物核心参数
                  </h4>
                  <p className="text-xs font-mono text-slate-500 mt-1">
                    根据单件重量（250kg起步）与单边尺寸（≥1.5m）指标，即时判定是否符合超大件卡派通道。
                  </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {/* Weight Slider */}
                  <div className="p-3.5 bg-white border border-slate-200 rounded-xs shadow-2xs">
                    <div className="flex items-center justify-between text-xs font-mono text-slate-600 mb-2">
                      <span>单件毛重 (KG)</span>
                      <span className="text-amber-600 font-bold font-mono-tech text-base">{cargoWeight} kg</span>
                    </div>
                    <input
                      type="range"
                      min="10"
                      max="1000"
                      step="10"
                      value={cargoWeight}
                      onChange={(e) => setCargoWeight(Number(e.target.value))}
                      className="w-full accent-amber-500 cursor-pointer"
                    />
                    <div className="flex justify-between text-[10px] font-mono text-slate-400 mt-1">
                      <span>10 kg (常规)</span>
                      <span className="text-amber-600 font-bold">200 kg 临界线</span>
                      <span>1000 kg (重装)</span>
                    </div>
                  </div>

                  {/* Max Dimension Slider */}
                  <div className="p-3.5 bg-white border border-slate-200 rounded-xs shadow-2xs">
                    <div className="flex items-center justify-between text-xs font-mono text-slate-600 mb-2">
                      <span>单边最长尺寸 (米)</span>
                      <span className="text-amber-600 font-bold font-mono-tech text-base">{maxDimension.toFixed(1)} m</span>
                    </div>
                    <input
                      type="range"
                      min="0.3"
                      max="4.0"
                      step="0.1"
                      value={maxDimension}
                      onChange={(e) => setMaxDimension(Number(e.target.value))}
                      className="w-full accent-amber-500 cursor-pointer"
                    />
                    <div className="flex justify-between text-[10px] font-mono text-slate-400 mt-1">
                      <span>0.3 m</span>
                      <span className="text-amber-600 font-bold">1.5 m 临界线</span>
                      <span>4.0 m (超长)</span>
                    </div>
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {/* Cargo type select */}
                  <div className="space-y-1">
                    <label className="text-xs font-mono text-slate-600">货物类别</label>
                    <select
                      value={cargoType}
                      onChange={(e) => setCargoType(e.target.value)}
                      className="w-full bg-white border border-slate-300 text-slate-800 text-xs font-mono p-2.5 rounded-xs focus:outline-none focus:border-sky-500"
                    >
                      <option value="machinery">大型工业机械 / 钢结构件</option>
                      <option value="energy">新能源储能柜 / 工业电池包</option>
                      <option value="furniture">大件家具大板 / 商业展架</option>
                      <option value="fitness">重型商用健身设备</option>
                      <option value="ecommerce">常规标准电商件 / 纸箱集货</option>
                    </select>
                  </div>

                  {/* Destination */}
                  <div className="space-y-1">
                    <label className="text-xs font-mono text-slate-600">派送目的地</label>
                    <select
                      value={destinationRegion}
                      onChange={(e) => setDestinationRegion(e.target.value)}
                      className="w-full bg-white border border-slate-300 text-slate-800 text-xs font-mono p-2.5 rounded-xs focus:outline-none focus:border-sky-500"
                    >
                      <option value="de">德国全境 (DE - 杜塞枢纽直通辐射)</option>
                      <option value="fr_nl_be">西欧核心 (法国 / 荷兰 / 比利时)</option>
                      <option value="at_ch">中欧 / 南欧 (奥地利 / 瑞士 / 意大利)</option>
                      <option value="pl_cz">东欧 (波兰 / 捷克 / 匈牙利)</option>
                      <option value="self">客户预约来仓自提 (Self-Pickup)</option>
                    </select>
                  </div>
                </div>
              </div>

              {/* Result Recommendation Side */}
              <div className="lg:col-span-5 p-5 bg-white border border-slate-200 rounded-xs flex flex-col justify-between shadow-xs">
                <div>
                  <div className="flex items-center justify-between pb-3 border-b border-slate-100 text-xs font-mono">
                    <span className="text-slate-500">规格评定结果：</span>
                    {isOversized ? (
                      <span className="px-2 py-0.5 bg-amber-50 text-amber-700 font-bold border border-amber-300 rounded-xs">
                        符合 PATAC 主营超大件标准
                      </span>
                    ) : (
                      <span className="px-2 py-0.5 bg-slate-100 text-slate-700 border border-slate-200 rounded-xs font-bold">
                        符合标准代发与增值服务包裹
                      </span>
                    )}
                  </div>

                  <div className="mt-4 space-y-3">
                    <div className="text-sm font-bold text-slate-900 font-mono-tech">
                      {isOversized
                        ? '★ 推荐方案：专业卡派 (FTL 整车 / LTL 零担) + 重装打托'
                        : '★ 推荐方案：电商一件代发 / 退换货换标流水线'}
                    </div>

                    <p className="text-xs font-mono text-slate-600 leading-relaxed">
                      {isOversized
                        ? `单件重达 ${cargoWeight}kg / 尺寸 ${maxDimension}m，已纳入 PATAC 7 垛口专用卸柜重型机械区作业，建议使用防震绑扎与欧洲卡车干线派送，确保无损达收件地。`
                        : `该规格在标准电商快递重量与尺寸范围内，由杜塞仓库流水线完成快速理货，支持系统对接与一件代发。`}
                    </p>

                    <div className="p-3 bg-slate-50 border border-slate-200 rounded-xs space-y-1.5 text-xs font-mono">
                      <div className="flex justify-between">
                        <span className="text-slate-500">服务通道：</span>
                        <span className="text-slate-900 font-bold">{isOversized ? '主营超大件重载卡派' : '标准快递 / 专线代发'}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-slate-500">时效预估：</span>
                        <span className="text-slate-800">德国 24-48h · 欧洲主干 48-72h</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-slate-500">自提支持：</span>
                        <span className="text-emerald-700 font-bold">支持杜伊斯堡/杜塞仓自提</span>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="mt-5 pt-3 border-t border-slate-100">
                  <a
                    href="#contact"
                    className="w-full flex items-center justify-center gap-2 py-2.5 bg-gradient-to-r from-amber-500 to-orange-500 hover:from-amber-400 hover:to-orange-400 text-white font-bold text-xs font-mono rounded-xs transition-colors shadow-xs"
                  >
                    <span>带此规格向【杜塞老吴】索取精准卡派报价</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
