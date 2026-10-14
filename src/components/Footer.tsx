import React from 'react';
import { COMPANY_PROFILE } from '../data/patacData';
import { Shield, ArrowUp, MapPin, Phone, Mail, Clock } from 'lucide-react';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-slate-900 border-t border-slate-800 text-slate-300 font-mono text-xs">
      {/* Top industrial hazard strip */}
      <div className="h-1.5 hazard-stripe-light w-full" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-10">
          {/* Brand info */}
          <div className="space-y-3">
            <div className="flex items-center gap-2">
              <span className="text-xl font-black text-white font-display-tech">
                PATAC <span className="text-amber-400 font-bold">GmbH</span>
              </span>
              <span className="text-[10px] px-1.5 py-0.5 bg-slate-800 border border-slate-700 text-slate-300 rounded-xs">
                DEUTSCHLAND
              </span>
            </div>
            <p className="text-slate-400 text-xs leading-relaxed">
              欧洲中转仓及超大件尾程履约专家。坐落德国杜伊斯堡/杜塞尔多夫双核枢纽，7,000 ㎡ 仓储体量、7 个装卸垛口、专注 200kg+ 超大件装卸与全欧卡派。
            </p>
            <div className="text-[11px] text-slate-400">
              Handelsregister / HRB NRW · UST-ID DEUTSCHLAND
            </div>
          </div>

          {/* Core Modules Quick Links */}
          <div className="space-y-2.5">
            <div className="text-white font-bold uppercase tracking-wider text-xs border-b border-slate-800 pb-1.5">
              核心架构模块导航
            </div>
            <ul className="space-y-1.5">
              <li>
                <a href="#overview" className="hover:text-amber-400 transition-colors flex items-center gap-1.5">
                  <span className="text-sky-400 font-bold">[01]</span>
                  <span>首页介绍与区位总览</span>
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-amber-400 transition-colors flex items-center gap-1.5">
                  <span className="text-sky-400 font-bold">[02]</span>
                  <span>核心业务与多式联运能力</span>
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-amber-400 transition-colors flex items-center gap-1.5 pl-4 text-slate-400 hover:text-slate-200">
                  <span>↳ 主营超大件标准 (200-250kg+)</span>
                </a>
              </li>
              <li>
                <a href="#hardware" className="hover:text-amber-400 transition-colors flex items-center gap-1.5">
                  <span className="text-emerald-400 font-bold">[03]</span>
                  <span>发展历程与 6 张现场实拍图库</span>
                </a>
              </li>
              <li>
                <a href="#contact" className="hover:text-amber-400 transition-colors flex items-center gap-1.5">
                  <span className="text-amber-400 font-bold">[04]</span>
                  <span>联系方式 · 对接杜塞老吴</span>
                </a>
              </li>
            </ul>
          </div>

          {/* Operational Hub Specs */}
          <div className="space-y-2.5">
            <div className="text-white font-bold uppercase tracking-wider text-xs border-b border-slate-800 pb-1.5">
              枢纽与硬件配置指标
            </div>
            <ul className="space-y-1.5 text-slate-300">
              <li className="flex items-center justify-between">
                <span>中心库容：</span>
                <strong className="text-white">7,000 ㎡ 现代化大型仓</strong>
              </li>
              <li className="flex items-center justify-between">
                <span>专业垛口：</span>
                <strong className="text-white">7 个液压装卸口 + 2 闸门</strong>
              </li>
              <li className="flex items-center justify-between">
                <span>主营核心：</span>
                <strong className="text-amber-400 font-bold">200 kg – 250 kg+ / ≥1.5m</strong>
              </li>
              <li className="flex items-center justify-between">
                <span>头程承接：</span>
                <span className="text-slate-300">海运 / 卡航 / 铁运 / 空运</span>
              </li>
              <li className="flex items-center justify-between">
                <span>尾程派送：</span>
                <span className="text-slate-300">全欧 FTL / LTL 卡派 · 自提</span>
              </li>
            </ul>
          </div>

          {/* Direct Contact Person: 杜塞老吴 */}
          <div className="space-y-2.5">
            <div className="text-white font-bold uppercase tracking-wider text-xs border-b border-slate-800 pb-1.5">
              业务对接专员
            </div>
            <div className="p-3 bg-slate-800 border border-slate-700 rounded-xs space-y-1.5">
              <div className="text-white font-bold text-sm">
                业务对接人：<span className="text-amber-400">{COMPANY_PROFILE.contactPerson}</span>
              </div>
              <div className="text-slate-300 text-[11px]">
                微信：{COMPANY_PROFILE.wechatId}
              </div>
              <div className="text-slate-300 text-[11px]">
                电话：{COMPANY_PROFILE.phone}
              </div>
              <div className="text-slate-400 text-[11px]">
                德国：CET 08:30 – 18:00
              </div>
            </div>
          </div>
        </div>

        {/* Bottom copyright & legal compliance */}
        <div className="pt-6 border-t border-slate-800 flex flex-wrap items-center justify-between gap-4 text-slate-400 text-[11px]">
          <div>
            © {new Date().getFullYear()} {COMPANY_PROFILE.name}. All rights reserved. 欧洲中转仓及超大件尾程履约专家 · 杜伊斯堡 / 杜塞尔多夫
          </div>

          <div className="flex items-center gap-4">
            <span>德国物流协会标准 · DIN 工业安全规程</span>
            <button
              onClick={scrollToTop}
              className="p-2 bg-slate-800 hover:bg-slate-700 border border-slate-700 text-slate-200 rounded-xs transition-colors flex items-center gap-1 cursor-pointer"
            >
              <ArrowUp className="w-3.5 h-3.5" />
              <span>回到顶部</span>
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};
