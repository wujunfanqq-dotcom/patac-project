import React, { useState, useEffect } from 'react';
import { COMPANY_PROFILE } from '../data/patacData';
import { Clock, Phone, Menu, X, ChevronRight, MapPin, CheckCircle2 } from 'lucide-react';

interface NavbarProps {
  activeSection: string;
}

export const Navbar: React.FC<NavbarProps> = ({ activeSection }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [cetTime, setCetTime] = useState('');

  // Update German CET time every second
  useEffect(() => {
    const updateTime = () => {
      try {
        const now = new Date();
        const timeStr = new Intl.DateTimeFormat('de-DE', {
          timeZone: 'Europe/Berlin',
          hour: '2-digit',
          minute: '2-digit',
          second: '2-digit',
          hour12: false
        }).format(now);
        setCetTime(timeStr);
      } catch {
        const d = new Date();
        setCetTime(`${d.getHours().toString().padStart(2, '0')}:${d.getMinutes().toString().padStart(2, '0')}`);
      }
    };

    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  const navItems = [
    { id: 'overview', tag: '01', label: '公司概述', color: 'text-sky-700' },
    { id: 'services', tag: '02', label: '核心业务与多式联运', color: 'text-blue-700' },
    { id: 'hardware', tag: '03', label: '硬件实力与历程', color: 'text-emerald-700' },
    { id: 'contact', tag: '04', label: '商务对接 · 杜塞老吴', color: 'text-amber-700' }
  ];

  return (
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-md border-b border-slate-200 shadow-xs">
      {/* Top industrial ticker bar */}
      <div className="bg-slate-900 px-4 py-1.5 text-xs font-mono text-slate-300 hidden sm:flex items-center justify-between">
        <div className="flex items-center gap-4">
          <span className="flex items-center gap-1.5 text-slate-200">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
            德国仓储现场：正常拆柜收发中
          </span>
          <span className="text-slate-600">|</span>
          <span className="text-slate-300 flex items-center gap-1">
            <MapPin className="w-3.5 h-3.5 text-sky-400" />
            德国 · 杜伊斯堡 / 杜塞尔多夫 (Duisburg / Düsseldorf)
          </span>
          <span className="text-slate-600">|</span>
          <span className="text-slate-300">
            硬件实力：7,000 ㎡ · 7 垛口 · 2 闸门
          </span>
        </div>
        <div className="flex items-center gap-4">
          <div className="flex items-center gap-1.5 text-slate-200">
            <Clock className="w-3.5 h-3.5 text-amber-400" />
            <span>德国时间 CET: <strong className="text-amber-400 font-bold">{cetTime || '14:35:00'}</strong></span>
          </div>
          <span className="text-slate-600">|</span>
          <span className="text-amber-400 font-bold">
            业务总对接：杜塞老吴
          </span>
        </div>
      </div>

      {/* Main navigation */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-18 flex items-center justify-between">
        {/* Brand identity */}
        <a href="#overview" className="flex items-center gap-3 group">
          <div className="w-10 h-10 bg-sky-600 text-white flex items-center justify-center font-bold text-xl font-display-tech tracking-wider rounded-xs shadow-md shadow-sky-600/20 group-hover:bg-sky-500 transition-colors">
            P
          </div>
          <div>
            <div className="flex items-center gap-2">
              <span className="text-xl sm:text-2xl font-black tracking-wider text-slate-900 font-display-tech">
                PATAC <span className="text-sky-600 font-bold text-lg">GmbH</span>
              </span>
              <span className="text-[10px] font-mono px-2 py-0.5 bg-amber-50 text-amber-800 border border-amber-300 font-bold rounded-xs uppercase">
                7,000 ㎡ / 7 垛口
              </span>
            </div>
            <p className="text-[11px] font-mono text-slate-500 tracking-tight">
              欧洲中转仓及超大件尾程履约专家 · 杜塞老吴
            </p>
          </div>
        </a>

        {/* Desktop Nav Items */}
        <nav className="hidden lg:flex items-center gap-1">
          {navItems.map((item) => {
            const isActive = activeSection === item.id;
            return (
              <a
                key={item.id}
                href={`#${item.id}`}
                className={`relative px-3.5 py-2 text-xs font-mono transition-all flex items-center gap-2 rounded-xs ${
                  isActive
                    ? 'text-sky-900 bg-sky-50/80 font-bold border border-sky-200'
                    : 'text-slate-600 hover:text-slate-900 hover:bg-slate-100'
                }`}
              >
                <span className={`text-[10px] font-bold ${item.color}`}>
                  [{item.tag}]
                </span>
                <span>{item.label}</span>
                {isActive && (
                  <span className="absolute bottom-0 left-2 right-2 h-0.5 bg-sky-600" />
                )}
              </a>
            );
          })}
        </nav>

        {/* Action Button: 对接杜塞老吴 */}
        <div className="hidden sm:flex items-center gap-3">
          <a
            href="#contact"
            className="flex items-center gap-2 bg-gradient-to-r from-amber-500 to-orange-500 hover:from-amber-400 hover:to-orange-400 text-white font-bold px-4 py-2.5 text-xs font-mono tracking-wide rounded-xs transition-all shadow-md shadow-orange-500/20 active:translate-y-0.5 cursor-pointer"
          >
            <Phone className="w-3.5 h-3.5" />
            <span>对接业务：杜塞老吴</span>
            <ChevronRight className="w-3.5 h-3.5" />
          </a>
        </div>

        {/* Mobile menu toggle */}
        <div className="flex items-center gap-2 lg:hidden">
          <a
            href="#contact"
            className="sm:hidden px-3 py-1.5 bg-amber-500 text-white text-xs font-mono font-bold rounded-xs"
          >
            杜塞老吴
          </a>
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 text-slate-600 hover:text-slate-900 bg-slate-100 border border-slate-200 rounded-xs"
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden border-b border-slate-200 bg-white px-4 py-4 space-y-2 shadow-lg">
          <div className="pb-2 border-b border-slate-100 text-xs font-mono text-slate-500 flex items-center justify-between">
            <span>德国时间: {cetTime}</span>
            <span className="text-amber-700 font-bold">对接人: 杜塞老吴</span>
          </div>
          {navItems.map((item) => (
            <a
              key={item.id}
              href={`#${item.id}`}
              onClick={() => setMobileMenuOpen(false)}
              className="flex items-center justify-between px-3 py-2.5 text-sm font-mono text-slate-700 hover:bg-slate-50 border border-transparent hover:border-slate-200 rounded-xs"
            >
              <div className="flex items-center gap-2">
                <span className={item.color}>[{item.tag}]</span>
                <span>{item.label}</span>
              </div>
              <ChevronRight className="w-4 h-4 text-slate-400" />
            </a>
          ))}
          <div className="pt-2">
            <a
              href="#contact"
              onClick={() => setMobileMenuOpen(false)}
              className="w-full flex items-center justify-center gap-2 bg-gradient-to-r from-amber-500 to-orange-500 text-white py-3 font-bold text-xs font-mono rounded-xs shadow-sm"
            >
              <Phone className="w-4 h-4" />
              <span>立即联系杜塞老吴（微信/电话）</span>
            </a>
          </div>
        </div>
      )}
    </header>
  );
};
