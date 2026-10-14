import truckCartonsImg from '../assets/images/01bce86a904427241eed0e3e624f8287.jpg';
import containerNetImg from '../assets/images/49853e35c0cacc29217816c6b05e1c16.jpg';
import truckDockRearImg from '../assets/images/51732f10fc186c3a704257c6ed359d52.jpg';
import heavyCratesImg from '../assets/images/ec199358e3e3a76166b2f4e52f8061a0.jpg';
import palletWhiteWrapImg from '../assets/images/fe508a6e59abc9005115da417d28e609.jpg';
import warehouseDocksImg from '../assets/images/gate.jpg';

export interface VisualAsset {
  id: string;
  figureNumber: string;
  title: string;
  subtitle: string;
  src: string;
  tag: string;
  moduleTarget: string;
  specs: { label: string; value: string }[];
  description: string;
}

export const VISUAL_ASSETS: VisualAsset[] = [
  {
    id: 'asset-exterior',
    figureNumber: '实拍 01',
    title: '7,000 ㎡ 现代物流中心外观与装卸垛口',
    subtitle: 'PATAC GmbH Duisburg / Düsseldorf Logistics Center & Loading Docks',
    src: warehouseDocksImg,
    tag: 'TAG 01 · 核心仓体实力',
    moduleTarget: 'overview',
    specs: [
      { label: '建筑体量', value: '7,000 ㎡ 现代化重载物流中心' },
      { label: '装卸泊位', value: '7 个专业液压装卸垛口 (Docks)' },
      { label: '地面闸门', value: '2 个大型物流进出卷帘闸门' },
      { label: '枢纽优势', value: '德国北威州 · 杜伊斯堡/杜塞尔多夫' }
    ],
    description: '实拍 PATAC GmbH 位于德国杜伊斯堡/杜塞尔多夫核心物流带的 7,000 ㎡ 现代化物流中心全貌。配备专业液压升降装卸垛口与宽阔集装箱货车回转作业场，保障多柜全天候高速吞吐。'
  },
  {
    id: 'asset-heavy-crates',
    figureNumber: '实拍 02',
    title: '超大件重型机械木箱与升降尾板作业',
    subtitle: 'Heavy Machinery & Oversized Timber Crates Handling',
    src: heavyCratesImg,
    tag: 'TAG 02 · 主营超大件核心',
    moduleTarget: 'services',
    specs: [
      { label: '单件重量', value: '250 kg起步专项承接' },
      { label: '尺寸指标', value: '单边长度 ≥ 1.5 米异形件/设备' },
      { label: '装卸配备', value: '重型叉车配合 + 货车液压升降尾板' },
      { label: '加固方式', value: '重载绑扎锁链 + 防滑防震衬垫' }
    ],
    description: '实拍重型工业机械与精密构件木箱出入库。针对单件货物250kg起步乃至数吨级超大件设备，专业木箱固定、抗压打托与升降尾板协同装卸，确保货品零破损。'
  },
  {
    id: 'asset-pallet-wrap',
    figureNumber: '实拍 03',
    title: '托盘货物防潮打托贴标与卡车派送（卡派）',
    subtitle: 'Palletized Cargo Wrapping, Relabeling & Trucking (FTL/LTL)',
    src: palletWhiteWrapImg,
    tag: 'TAG 02 · 尾程卡车派送',
    moduleTarget: 'services',
    specs: [
      { label: '派送模式', value: 'FTL 整车专车 / LTL 零担拼车' },
      { label: '包装工艺', value: '多层高拉伸防潮缠膜 + 边角护角' },
      { label: '系统管理', value: 'WMS 规范条码标签覆盖核销' },
      { label: '辐射范围', value: '德国全境 24-48h · 欧洲全境直达' }
    ],
    description: '实拍欧标货运卡车内部整齐码放的托盘货物。经 PATAC 仓库标准化打包、缠膜、绑带紧固与清晰面单换标后，直接发运至德国各主要工业区及全欧客户手中。'
  },
  {
    id: 'asset-container-net',
    figureNumber: '实拍 04',
    title: '集装箱大柜到仓开箱与安全防护网作业',
    subtitle: 'Inbound Container Devanning & Safety Netting Inspection',
    src: containerNetImg,
    tag: 'TAG 02 · 头程接驳拆柜',
    moduleTarget: 'services',
    specs: [
      { label: '承接柜型', value: '20GP / 40GP / 40HQ / 45HQ' },
      { label: '安全防护', value: '专用高强拉力阻挡防护网' },
      { label: '货品类型', value: '大件手办雕像、高价值商业品' },
      { label: '作业时效', value: '到仓当天开箱快速分拣清点' }
    ],
    description: '实拍从中国海运/铁路班列抵仓之集装箱大柜开箱作业。高密度满载货物在绿色安全阻挡网保护下规范卸载，杜绝开柜滚落损伤，快速核对箱数并分类流转。'
  },
  {
    id: 'asset-truck-cartons',
    figureNumber: '实拍 05',
    title: '货车厢内层叠装载与专用红色拉紧绑带加固',
    subtitle: 'Secured Tiered Cargo Stacking & Heavy-duty Ratchet Straps',
    src: truckCartonsImg,
    tag: 'TAG 03 · 规范化出库管理',
    moduleTarget: 'hardware',
    specs: [
      { label: '加固配件', value: '高强度棘轮拉紧器 (Ratchet Straps)' },
      { label: '装载工艺', value: '阶梯式金字塔科学抗震码放' },
      { label: '货物类型', value: '电商批量纸箱、中大型整箱备货' },
      { label: '质量把控', value: '出库逐箱复核外观与封箱完整度' }
    ],
    description: '实拍欧式厢式货车内部货物装载实景。各层货物依照重量与体积科学配重码放，侧壁配备高强度红色拉紧绑带锁定，保障高速公路长途颠簸运输稳定无位移。'
  },
  {
    id: 'asset-dock-rear',
    figureNumber: '实拍 06',
    title: '装卸垛口卡车靠泊与木架货物黄昏发运',
    subtitle: 'Dockside Truck Loading & Wooden Frame Consolidation',
    src: truckDockRearImg,
    tag: 'TAG 03 · 现代化发运泊位',
    moduleTarget: 'hardware',
    specs: [
      { label: '靠泊设施', value: '全密封充气式门封与液压调节板' },
      { label: '加固方式', value: '木架结构外覆大孔防护网' },
      { label: '车辆牌照', value: '欧洲本土合规跨国重型卡车' },
      { label: '发车频次', value: '每日定时卡派班次准点发运' }
    ],
    description: '实拍仓库装卸垛口夜间/黄昏发货场景。多台欧洲本土卡车精准靠泊垛口，装载超大件木架与防护网货物，无缝衔接德国跨城及欧洲跨国干线运输。'
  }
];

export const COMPANY_PROFILE = {
  name: 'PATAC GmbH',
  legalName: 'PATAC GmbH Deutschland',
  slogan: '欧洲中转仓及超大件尾程履约专家',
  contactPerson: '杜塞老吴',
  contactTitle: '欧洲仓储业务负责人 / 资深跨境供应链操盘手',
  location: '德国 · 杜伊斯堡 / 杜塞尔多夫 (Duisburg / Düsseldorf)',
  locationDetail: '坐落于北莱茵-威斯特法伦州核心物流圈，邻近中欧班列最大陆港杜伊斯堡与杜塞尔多夫国际机场，具备得天独厚的全欧辐射优势。',
  coordinates: '51.4344° N, 6.7623° E',
  warehouseSize: '7,000 ㎡',
  docks: '7 个专业装卸垛口',
  gates: '2 个大型物流闸门',
  wechatId: 'MartinWu007',
  phone: '+49 (0) 176 3016 7907',
  email: 'wuweixing2017@gmail.com',
  whatsapp: '+49 176 3016 7907',
  workingHoursCET: '周一至周五 08:30 – 18:00 (CET 德国时间)',
  workingHoursCST: '支持北京时间 14:30 – 24:00 实时对接'
};

export const MILESTONES = [
  {
    period: '2017 – 2019 年',
    stageName: '起步探索期',
    stageTag: 'PHASE 01 // 起步基础',
    area: '200 ㎡ ➔ 1,000 ㎡',
    highlight: '以小件一件代发切入，深耕德国本地物流网络',
    description: '主营小件一件代发，仓库面积由 200 ㎡ 稳步扩展至 1,000 ㎡，搭建了初代仓储系统与本地派送渠道对接。'
  },
  {
    period: '2020 – 2025 年',
    stageName: '规模沉淀期',
    stageTag: 'PHASE 02 // 规范扩建',
    area: '2,000 ㎡ 规范化仓库',
    highlight: '仓储设施全面升级，运营面积扩建并保持在 2,000 ㎡ 规范化仓库',
    description: '仓储设施全面升级，运营面积扩建并保持在 2,000 ㎡ 规范化仓库，建立标准化集装箱拆柜理货与退换货换标重装流程。'
  },
  {
    period: '2026 年 – 至今',
    stageName: '战略飞跃期',
    stageTag: 'PHASE 03 // 战略飞跃',
    area: '7,000 ㎡ 现代化大型物流中心',
    highlight: '配备 7 个专业装卸垛口与 2 个大型物流闸门，全面聚焦超大件装卸与全欧尾程分发',
    description: '升级至 7,000 ㎡ 现代化大型物流中心，配备 7 个专业装卸垛口（Loading Docks）与 2 个大型物流闸门，全面聚焦 250kg起步 超大件装卸、中欧头程对接与全欧卡派尾程分发。'
  }
];

export const FIRST_LEG_CHANNELS = [
  {
    type: '海运集装箱',
    enName: 'Ocean Freight Consignment',
    code: 'SEA FREIGHT',
    icon: 'Ship',
    color: 'blue',
    description: '承接鹿特丹、汉堡等港口提柜，保税清关后直接拖入杜塞仓，7 大液压垛口快速掏箱。',
    advantages: ['支持 20GP / 40GP / 40HQ / 45HQ', '保税及清关转运快线', '多柜同时靠泊快速卸载']
  },
  {
    type: '跨境卡航 / 陆运',
    enName: 'Cross-border Trucking',
    code: 'ROAD TRUCKING',
    icon: 'Truck',
    color: 'amber',
    description: '对接中欧第四物流大通道“跨境卡航”，跨洲际公路直达，时效平稳，大宗货物快线入库。',
    advantages: ['全程温控/GPS 在线追踪', '时效稳定堪比空运，运价更优', '整车直达仓门快速拆装']
  },
  {
    type: '铁路集装箱',
    enName: 'Rail Freight Consignment',
    code: 'RAIL FREIGHT',
    icon: 'Train',
    color: 'sky',
    description: '紧邻中欧班列核心终点站——杜伊斯堡（Duisburg），抵站后短距离迅速接驳转入仓库。',
    advantages: ['杜伊斯堡终点站本地无缝提单', '工业重件与机械性价比首选', '班列编组站优先调运']
  },
  {
    type: '空运大货',
    enName: 'Air Cargo Consignment',
    code: 'AIR FREIGHT',
    icon: 'Plane',
    color: 'indigo',
    description: '毗邻杜塞尔多夫（DUS）与法兰克福（FRA）国际货运枢纽机场，大宗紧急货物快速调拨。',
    advantages: ['国际口岸机场极速提货', '打板拆包与贴标二次重装', '应急备品备件 24h 响应']
  }
];

export const CARGO_SPECS = {
  oversized: {
    category: '主营超大件 (Oversized Cargo)',
    categoryTag: 'PATAC 核心拳头业务',
    isPrimary: true,
    specBadge: '单件货物250kg起步以及超规格尺寸，如1.5m+',
    weightRange: '250 kg起步',
    dimensionRange: '单边长度 ≥ 1.5 米（异形件/超长构件/设备）',
    serviceModes: [
      '专业集装箱卸柜（重型机械叉车 + 液压调节板）',
      '卡车派送（FTL 整车专车 / LTL 零担拼车）',
      '全欧二次分发（德国全境 24-48h，欧洲主干道 48-72h）',
      '支持客户自提（预约制，配备专用地磅与装载协助）'
    ],
    suitedFor: '工业机械设备、新能源储能柜、大功率商用电器、健身器材大件、家具大板、汽配底盘结构件等。'
  },
  standard: {
    category: '常规代发与增值服务',
    categoryTag: '电商增值赋能',
    isPrimary: false,
    specBadge: '标准电商中小型包裹 (Standard Parcels)',
    weightRange: '< 200 kg',
    dimensionRange: '单边 < 1.5 米标准规格纸箱',
    serviceModes: [
      'B2B / B2C 一件代发（对接 DHL / DPD / UPS / GLS 本地快递网络）',
      '退货换标（Relabeling）与系统重新上架',
      '重新包装（Repackaging）、加固捆扎与托盘集运',
      '残次品检测与条形码精准覆盖核验'
    ],
    suitedFor: '跨境电商亚马逊 FBA 补仓备货、独立站发货、退件逆向物流翻新与分销转运。'
  }
};
