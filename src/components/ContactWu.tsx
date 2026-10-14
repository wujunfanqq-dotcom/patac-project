import React, { useState } from 'react';
import { COMPANY_PROFILE } from '../data/patacData';
import { ModuleTagHeader } from './ModuleTagHeader';
import { 
  UserCheck, 
  Phone, 
  Mail, 
  MapPin, 
  Send, 
  Check, 
  Copy, 
  Clock, 
  ShieldCheck, 
  QrCode, 
  Building,
  CheckCircle,
  Truck,
  MessageSquare
} from 'lucide-react';

export const ContactWu: React.FC = () => {
  const [copiedWeChat, setCopiedWeChat] = useState(false);
  const [copiedPhone, setCopiedPhone] = useState(false);
  const [formSubmitted, setFormSubmitted] = useState(false);

  // Inquiry form states
  const [formData, setFormData] = useState({
    companyName: '',
    contactName: '',
    phoneOrWechat: '',
    inboundChannel: '海运集装箱 (FCL/LCL)',
    cargoSpec: '超大件 (250kg起步 或 ≥1.5m)',
    weightEstimate: '500 kg',
    destination: '德国及全欧卡派',
    notes: ''
  });

  const handleCopyWechat = () => {
    navigator.clipboard.writeText(COMPANY_PROFILE.wechatId);
    setCopiedWeChat(true);
    setTimeout(() => setCopiedWeChat(false), 2500);
  };

  const handleCopyPhone = () => {
    navigator.clipboard.writeText(COMPANY_PROFILE.phone);
    setCopiedPhone(true);
    setTimeout(() => setCopiedPhone(false), 2500);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormSubmitted(true);
  };

  return (
    <section id="contact" className="relative py-16 bg-white border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Module Header with Tag 04 */}
        <ModuleTagHeader
          tagNumber="04"
          tagCode="CONTACT & BUSINESS INQUIRY"
          cnTitle="联系方式与业务对接人"
          enTitle="Corporate Contact & Direct Channel: 杜塞老吴"
          themeColor="warm"
          summaryBadge="PATAC GMBH · 业务对接人：杜塞老吴 · 杜伊斯堡/杜塞尔多夫"
        />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left Column: 杜塞老吴 Profile Card (5 Cols) */}
          <div className="lg:col-span-5 space-y-5">
            <div className="p-6 sm:p-7 bg-gradient-to-b from-amber-50/80 via-white to-amber-50/30 border-2 border-amber-400 rounded-xs shadow-md relative overflow-hidden">
              {/* Corner status light */}
              <div className="flex items-center justify-between pb-3.5 border-b border-amber-200/80">
                <div className="flex items-center gap-2">
                  <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-ping"></span>
                  <span className="text-xs font-mono text-emerald-700 font-bold">在线实时响应中</span>
                </div>
                <span className="text-xs font-mono text-slate-500">
                  DE / NRW HUB
                </span>
              </div>

              {/* Profile Card Header */}
              <div className="mt-4 flex items-start gap-4">
                <div className="w-14 h-14 bg-amber-500 text-white flex items-center justify-center rounded-xs shadow-sm shrink-0">
                  <UserCheck className="w-7 h-7" />
                </div>
                <div>
                  <div className="text-xs font-mono text-amber-800 uppercase tracking-widest font-bold">
                    PATAC GmbH 核心业务对接人
                  </div>
                  <h3 className="text-2xl sm:text-3xl font-black text-slate-900 font-display-tech">
                    {COMPANY_PROFILE.contactPerson}
                  </h3>
                  <p className="text-xs font-mono text-slate-600 mt-1">
                    {COMPANY_PROFILE.contactTitle}
                  </p>
                </div>
              </div>

              {/* Company Identity */}
              <div className="my-5 p-3.5 bg-white border border-slate-200 rounded-xs space-y-2 text-xs font-mono shadow-2xs">
                <div className="flex justify-between">
                  <span className="text-slate-500">法定公司名称：</span>
                  <span className="text-slate-900 font-bold">{COMPANY_PROFILE.name}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-500">地理区位：</span>
                  <span className="text-slate-900">德国 · 杜伊斯堡 / 杜塞尔多夫</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-500">核心硬件能力：</span>
                  <span className="text-amber-800 font-bold">7000㎡ / 7垛口 / 200kg+超大件</span>
                </div>
              </div>

              {/* Contact Channels */}
              <div className="space-y-2.5">
                {/* WeChat ID */}
                <div className="p-3 bg-white border border-slate-200 rounded-xs flex items-center justify-between shadow-2xs">
                  <div className="flex items-center gap-2.5">
                    <MessageSquare className="w-4 h-4 text-emerald-600" />
                    <div>
                      <div className="text-[10px] font-mono text-slate-500">业务对接微信 ID</div>
                      <div className="text-xs font-mono font-bold text-slate-900">{COMPANY_PROFILE.wechatId}</div>
                    </div>
                  </div>
                  <button
                    onClick={handleCopyWechat}
                    className="px-3 py-1.5 bg-slate-900 hover:bg-slate-800 text-white text-xs font-mono font-semibold rounded-xs transition-colors flex items-center gap-1.5 cursor-pointer shadow-2xs"
                  >
                    {copiedWeChat ? <Check className="w-3.5 h-3.5 text-emerald-300" /> : <Copy className="w-3.5 h-3.5" />}
                    <span>{copiedWeChat ? '已复制' : '复制微信'}</span>
                  </button>
                </div>

                {/* Telephone */}
                <div className="p-3 bg-white border border-slate-200 rounded-xs flex items-center justify-between shadow-2xs">
                  <div className="flex items-center gap-2.5">
                    <Phone className="w-4 h-4 text-sky-600" />
                    <div>
                      <div className="text-[10px] font-mono text-slate-500">德国本地电话 / WhatsApp</div>
                      <div className="text-xs font-mono font-bold text-slate-900">{COMPANY_PROFILE.phone}</div>
                    </div>
                  </div>
                  <button
                    onClick={handleCopyPhone}
                    className="px-3 py-1.5 bg-slate-900 hover:bg-slate-800 text-white text-xs font-mono font-semibold rounded-xs transition-colors flex items-center gap-1.5 cursor-pointer shadow-2xs"
                  >
                    {copiedPhone ? <Check className="w-3.5 h-3.5 text-emerald-300" /> : <Copy className="w-3.5 h-3.5" />}
                    <span>{copiedPhone ? '已复制' : '复制电话'}</span>
                  </button>
                </div>

                {/* Email */}
                <div className="p-3 bg-white border border-slate-200 rounded-xs flex items-center justify-between shadow-2xs">
                  <div className="flex items-center gap-2.5">
                    <Mail className="w-4 h-4 text-amber-600" />
                    <div>
                      <div className="text-[10px] font-mono text-slate-500">官方商务邮箱</div>
                      <div className="text-xs font-mono text-slate-800">{COMPANY_PROFILE.email}</div>
                    </div>
                  </div>
                  <a
                    href={`mailto:${COMPANY_PROFILE.email}?subject=PATAC%20超大件与中转仓咨询`}
                    className="px-3 py-1.5 bg-slate-100 hover:bg-slate-200 text-slate-800 text-xs font-mono font-semibold rounded-xs transition-colors"
                  >
                    发邮件
                  </a>
                </div>
              </div>

              {/* Working Hours */}
              <div className="mt-4 pt-3 border-t border-amber-200/80 text-xs font-mono text-slate-600 space-y-1">
                <div className="flex items-center gap-2 text-slate-800 font-semibold">
                  <Clock className="w-3.5 h-3.5 text-amber-600" />
                  <span>服务时间：{COMPANY_PROFILE.workingHoursCET}</span>
                </div>
                <div className="text-[11px] text-slate-500 pl-5.5">
                  {COMPANY_PROFILE.workingHoursCST}
                </div>
              </div>
            </div>

            {/* Warehouse Location Info Box */}
            <div className="p-4 bg-slate-50 border border-slate-200 rounded-xs text-xs font-mono space-y-2">
              <div className="flex items-center gap-2 text-slate-900 font-bold">
                <MapPin className="w-4 h-4 text-sky-600" />
                <span>实体物流中心地址，欢迎大家来线下参观</span>
              </div>
              <p className="text-slate-600 leading-relaxed">
                Hamborner Strasse 32, 47137 Duisburg
              </p>
              <div className="text-[11px] text-slate-500 pt-1">
                交通枢纽：紧邻 A3 / A40 / A57 欧洲干线高速公路网及杜伊斯堡内陆货运场站。
              </div>
            </div>
          </div>

          {/* Right Column: Direct Freight Inquiry Form (7 Cols) */}
          <div className="lg:col-span-7 bg-slate-50 border border-slate-200 rounded-xs p-6 sm:p-7 shadow-xs">
            <div className="flex items-center justify-between pb-4 border-b border-slate-200 mb-6">
              <div>
                <h3 className="text-xl sm:text-2xl font-bold text-slate-900 font-display-tech">
                  快速获取【杜塞老吴】专属尾程履约报价
                </h3>
                <p className="text-xs font-mono text-slate-500 mt-1">
                  提交您的集装箱或超大件参数，老吴团队将在 2 小时内出具可行性方案与报价。
                </p>
              </div>
              <span className="hidden sm:inline-block px-2.5 py-1 bg-amber-100 text-amber-900 text-xs font-mono font-bold border border-amber-300 rounded-xs">
                SOP FAST RESPONSE
              </span>
            </div>

            {formSubmitted ? (
              <div className="py-10 text-center space-y-4">
                <div className="w-16 h-16 bg-emerald-100 border-2 border-emerald-500 text-emerald-600 rounded-full flex items-center justify-center mx-auto">
                  <CheckCircle className="w-8 h-8" />
                </div>
                <h4 className="text-xl font-bold text-slate-900 font-display-tech">
                  咨询需求已成功提交至【杜塞老吴】
                </h4>
                <p className="text-xs font-mono text-slate-600 max-w-md mx-auto leading-relaxed">
                  感谢您的垂询！杜塞老吴及其欧洲当地运营团队已接收到您的需求单，将依据德国杜伊斯堡/杜塞仓 7,000 ㎡ 垛口排期与卡派网络，尽快与您联系！
                </p>
                <div className="pt-2">
                  <button
                    onClick={() => setFormSubmitted(false)}
                    className="px-6 py-2.5 bg-slate-900 hover:bg-slate-800 text-white text-xs font-mono font-bold rounded-xs transition-colors"
                  >
                    提交另一份询价单
                  </button>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {/* Company name */}
                  <div className="space-y-1">
                    <label className="text-xs font-mono text-slate-700 font-semibold">
                      您的公司名称 <span className="text-amber-600">*</span>
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="例如：深圳某跨境供应链有限公司"
                      value={formData.companyName}
                      onChange={(e) => setFormData({ ...formData, companyName: e.target.value })}
                      className="w-full bg-white border border-slate-300 text-slate-900 text-xs font-mono p-3 rounded-xs focus:outline-none focus:border-amber-500"
                    />
                  </div>

                  {/* Contact person */}
                  <div className="space-y-1">
                    <label className="text-xs font-mono text-slate-700 font-semibold">
                      您的姓名 / 职务 <span className="text-amber-600">*</span>
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="例如：张经理 (物流总监)"
                      value={formData.contactName}
                      onChange={(e) => setFormData({ ...formData, contactName: e.target.value })}
                      className="w-full bg-white border border-slate-300 text-slate-900 text-xs font-mono p-3 rounded-xs focus:outline-none focus:border-amber-500"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {/* Phone / WeChat */}
                  <div className="space-y-1">
                    <label className="text-xs font-mono text-slate-700 font-semibold">
                      联系电话 / 微信 / WhatsApp <span className="text-amber-600">*</span>
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="微信或手机号，方便老吴直接回拨"
                      value={formData.phoneOrWechat}
                      onChange={(e) => setFormData({ ...formData, phoneOrWechat: e.target.value })}
                      className="w-full bg-white border border-slate-300 text-slate-900 text-xs font-mono p-3 rounded-xs focus:outline-none focus:border-amber-500"
                    />
                  </div>

                  {/* Inbound channel */}
                  <div className="space-y-1">
                    <label className="text-xs font-mono text-slate-700 font-semibold">
                      头程抵欧运输通道
                    </label>
                    <select
                      value={formData.inboundChannel}
                      onChange={(e) => setFormData({ ...formData, inboundChannel: e.target.value })}
                      className="w-full bg-white border border-slate-300 text-slate-900 text-xs font-mono p-3 rounded-xs focus:outline-none focus:border-amber-500"
                    >
                      <option value="海运集装箱 (FCL/LCL)">海运集装箱 (FCL / LCL 鹿特丹/汉堡)</option>
                      <option value="跨境卡航 / 陆运">跨境卡航 / 中欧公路陆运快线</option>
                      <option value="铁路集装箱 (中欧班列)">铁路集装箱 (中欧班列杜伊斯堡终点)</option>
                      <option value="空运大货">空运大货 (杜塞尔多夫/法兰克福国际机场)</option>
                    </select>
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {/* Cargo Spec */}
                  <div className="space-y-1">
                    <label className="text-xs font-mono text-slate-700 font-semibold">
                      货物规格类别
                    </label>
                    <select
                      value={formData.cargoSpec}
                      onChange={(e) => setFormData({ ...formData, cargoSpec: e.target.value })}
                      className="w-full bg-white border border-slate-300 text-slate-900 text-xs font-mono p-3 rounded-xs focus:outline-none focus:border-amber-500"
                    >
                      <option value="超大件 (250kg起步 或 ≥1.5m)">【主营超大件】单件货物250kg起步以及超规格尺寸，如1.5m+</option>
                      <option value="电商常规包裹 (小件代发/退件换标)">【常规代发】标准电商纸箱 / 退件换标 / 重新包装</option>
                      <option value="整柜拆柜打托暂存">【整柜中转】集装箱掏箱打托与短期周转仓储</option>
                    </select>
                  </div>

                  {/* Destination */}
                  <div className="space-y-1">
                    <label className="text-xs font-mono text-slate-700 font-semibold">
                      尾程派送要求
                    </label>
                    <select
                      value={formData.destination}
                      onChange={(e) => setFormData({ ...formData, destination: e.target.value })}
                      className="w-full bg-white border border-slate-300 text-slate-900 text-xs font-mono p-3 rounded-xs focus:outline-none focus:border-amber-500"
                    >
                      <option value="德国全境卡派 (FTL/LTL)">德国全境卡派 (FTL整车 / LTL零担)</option>
                      <option value="全欧二次分发 (28国门到门)">全欧二次分发 (欧洲多国卡派门到门)</option>
                      <option value="客户预约自提 (Self-Pickup)">客户预约来仓自提</option>
                      <option value="中小型包裹一件代发 (DHL/DPD)">中小型包裹一件代发 (DHL / DPD / UPS)</option>
                    </select>
                  </div>
                </div>

                {/* Notes */}
                <div className="space-y-1">
                  <label className="text-xs font-mono text-slate-700 font-semibold">
                    货物详细描述（如货名、重量、箱数、单边尺寸、期望到仓时间）
                  </label>
                  <textarea
                    rows={3}
                    placeholder="例如：有2个40HQ海运柜预计下月抵港，内装大功率商用设备，单件重230kg，单边1.8米，需清关后拖入杜塞仓卸柜并安排全德卡派..."
                    value={formData.notes}
                    onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                    className="w-full bg-white border border-slate-300 text-slate-900 text-xs font-mono p-3 rounded-xs focus:outline-none focus:border-amber-500"
                  />
                </div>

                <div className="pt-2 flex flex-wrap items-center justify-between gap-4">
                  <div className="text-[11px] font-mono text-slate-600 flex items-center gap-1.5">
                    <ShieldCheck className="w-4 h-4 text-emerald-600" />
                    <span>德国 PATAC 实体仓库直营团队 · 拒绝多重转包差价</span>
                  </div>

                  <button
                    type="submit"
                    className="px-6 py-3 bg-gradient-to-r from-amber-500 to-orange-500 hover:from-amber-400 hover:to-orange-400 text-white font-bold text-xs font-mono tracking-wider rounded-xs transition-all shadow-md shadow-orange-500/20 flex items-center gap-2 cursor-pointer"
                  >
                    <Send className="w-4 h-4" />
                    <span>提交给【杜塞老吴】核算方案</span>
                  </button>
                </div>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};
