// 熱舞社行事曆 Dance Club Schedule — Events Data Source
// 版本：dance.2（2027年行程更新）
// 美恩工作室：台北市青島東路四號七樓之三（善導寺站）門鈴73#

const EVENTS_DATA = [
  // ==========================================
  // 2026 年 11 月練舞場地
  // ==========================================
  {
    id: "practice-2611-01",
    title: "練舞 — 美恩家 (11/5)",
    category: "practice",
    categoryName: "練舞場地",
    date: "2026-11-05",
    time: "7:30PM-9:30PM",
    dayOfWeek: "週四",
    month: 11,
    location: "美恩工作室",
    locationUrl: "https://maps.google.com/?q=台北市青島東路四號七樓之三",
    topic: "定期練舞",
    description: "練舞地點：美恩工作室\n捷運：善導寺站（二號出口，有電梯）\n地址：台北市青島東路四號七樓之三\n門鈴：73#\n\nGoogle搜尋：富邦來來華夏 或 7-11青島門市\n找到二號門後，按73# 或撥 0975729815",
    needs: "全體舞者出席",
    itemsToBring: "換鞋、水瓶、練舞服",
    status: "confirmed"
  },
  {
    id: "anniversary-2611-01",
    title: "🎉 熱舞社二週年（副堂）(11/13)",
    category: "anniversary",
    categoryName: "週年慶典",
    date: "2026-11-13",
    time: "待確認",
    dayOfWeek: "週五",
    month: 11,
    location: "副堂",
    locationUrl: "",
    topic: "熱舞社成立二週年慶典",
    description: "熱舞社二週年紀念活動！\n地點：副堂\n\n這是我們一起走過兩年的里程碑，一起慶祝、回顧、展望未來！",
    needs: "全體舞者、歷屆夥伴",
    itemsToBring: "美好的心情、回憶！",
    status: "confirmed"
  },
  {
    id: "practice-2611-02",
    title: "練舞 — 美恩家 (11/20)",
    category: "practice",
    categoryName: "練舞場地",
    date: "2026-11-20",
    time: "7:30PM-9:30PM",
    dayOfWeek: "週五",
    month: 11,
    location: "美恩工作室",
    locationUrl: "https://maps.google.com/?q=台北市青島東路四號七樓之三",
    topic: "定期練舞",
    description: "練舞地點：美恩工作室\n捷運：善導寺站（二號出口，有電梯）\n地址：台北市青島東路四號七樓之三\n門鈴：73#\n\nGoogle搜尋：富邦來來華夏 或 7-11青島門市\n找到二號門後，按73# 或撥 0975729815",
    needs: "全體舞者出席",
    itemsToBring: "換鞋、水瓶、練舞服",
    status: "confirmed"
  },
  {
    id: "practice-cksmh-2611-01",
    title: "戶外練舞 — 中正紀念堂廣場 (11/28)",
    category: "practice",
    categoryName: "練舞場地",
    date: "2026-11-28",
    time: "7:30PM-9:30PM",
    dayOfWeek: "週六",
    month: 11,
    location: "中正紀念堂廣場",
    locationUrl: "https://maps.google.com/?q=中正紀念堂兩廳院藝文廣場",
    topic: "戶外大隊排舞與隊形演練",
    description: "練舞地點：中正紀念堂廣場（兩廳院藝文廣場）\n捷運：中正紀念堂站 5 號出口步行 1 分鐘\n檔期參照：熱Hope行事曆（兩廳院檔期）\n備註：請備足飲水、毛巾、備用鞋、耳機或中小型音響（注意音量管制）。",
    needs: "全體舞者出席",
    itemsToBring: "水瓶、換鞋、毛巾、防曬防蚊用品",
    status: "confirmed"
  },

  // ==========================================
  // 2026 年 12 月練舞場地
  // ==========================================
  {
    id: "practice-2612-01",
    title: "練舞 — 美恩家 (12/4)",
    category: "practice",
    categoryName: "練舞場地",
    date: "2026-12-04",
    time: "7:30PM-9:30PM",
    dayOfWeek: "週五",
    month: 12,
    location: "美恩工作室",
    locationUrl: "https://maps.google.com/?q=台北市青島東路四號七樓之三",
    topic: "定期練舞",
    description: "練舞地點：美恩工作室\n捷運：善導寺站（二號出口，有電梯）\n地址：台北市青島東路四號七樓之三\n門鈴：73#\n\nGoogle搜尋：富邦來來華夏 或 7-11青島門市\n找到二號門後，按73# 或撥 0975729815",
    needs: "全體舞者出席",
    itemsToBring: "換鞋、水瓶、練舞服",
    status: "confirmed"
  },
  {
    id: "celebration-2612-01",
    title: "🥂 美恩家慶功宴 (12/11)",
    category: "celebration",
    categoryName: "慶功宴",
    date: "2026-12-11",
    time: "待確認",
    dayOfWeek: "週五",
    month: 12,
    location: "美恩工作室",
    locationUrl: "https://maps.google.com/?q=台北市青島東路四號七樓之三",
    topic: "年末慶功宴",
    description: "年末慶功宴！一起慶祝今年的成果與努力🎊\n地點：美恩工作室\n捷運：善導寺站（二號出口，有電梯）\n地址：台北市青島東路四號七樓之三\n門鈴：73#",
    needs: "全體舞者參加",
    itemsToBring: "好心情、可以帶小點心分享！",
    status: "confirmed"
  },
  {
    id: "practice-2612-02",
    title: "練舞 — 美恩家 (12/18)",
    category: "practice",
    categoryName: "練舞場地",
    date: "2026-12-18",
    time: "7:30PM-9:30PM",
    dayOfWeek: "週五",
    month: 12,
    location: "美恩工作室",
    locationUrl: "https://maps.google.com/?q=台北市青島東路四號七樓之三",
    topic: "定期練舞",
    description: "練舞地點：美恩工作室\n捷運：善導寺站（二號出口，有電梯）\n地址：台北市青島東路四號七樓之三\n門鈴：73#\n\nGoogle搜尋：富邦來來華夏 或 7-11青島門市\n找到二號門後，按73# 或撥 0975729815",
    needs: "全體舞者出席",
    itemsToBring: "換鞋、水瓶、練舞服",
    status: "confirmed"
  },
  {
    id: "performance-tbd-01",
    title: "演出服事（待確認）",
    category: "performance",
    categoryName: "演出服事",
    date: "2026-11-01",
    time: "待確認",
    dayOfWeek: "",
    month: 11,
    location: "待確認",
    locationUrl: "",
    topic: "不定期演出服事",
    description: "熱舞社不定期演出服事，詳情待確認後更新。\n若有演出邀請，請告知社長！",
    needs: "依演出需求確認人員",
    itemsToBring: "演出服、道具",
    status: "tentative"
  },

  // ==========================================
  // 2027 年 1 月練舞場地（中正紀念堂 音樂廳）
  // ==========================================
  {
    id: "practice-2701-08",
    title: "練舞 — 中正紀念堂(音樂廳) (1/8)",
    category: "practice",
    categoryName: "練舞場地",
    date: "2027-01-08",
    time: "7:30PM-9:30PM",
    dayOfWeek: "週五",
    month: 1,
    location: "中正紀念堂(音樂廳)",
    locationUrl: "https://maps.google.com/?q=國家音樂廳",
    topic: "定期練舞",
    description: "練舞地點：中正紀念堂(音樂廳) 側迴廊/藝文廣場\n捷運：中正紀念堂站 5 號出口步行 1 分鐘\n練習時間：7:30PM-9:30PM\n備註：請備足飲水、毛巾、更換舞鞋，注意音量管制。",
    needs: "全體舞者出席",
    itemsToBring: "換鞋、水瓶、毛巾、練舞服",
    status: "confirmed"
  },
  {
    id: "practice-2701-15",
    title: "練舞 — 中正紀念堂(音樂廳) (1/15)",
    category: "practice",
    categoryName: "練舞場地",
    date: "2027-01-15",
    time: "7:30PM-9:30PM",
    dayOfWeek: "週五",
    month: 1,
    location: "中正紀念堂(音樂廳)",
    locationUrl: "https://maps.google.com/?q=國家音樂廳",
    topic: "定期練舞",
    description: "練舞地點：中正紀念堂(音樂廳) 側迴廊/藝文廣場\n捷運：中正紀念堂站 5 號出口步行 1 分鐘\n練習時間：7:30PM-9:30PM\n備註：請備足飲水、毛巾、更換舞鞋，注意音量管制。",
    needs: "全體舞者出席",
    itemsToBring: "換鞋、水瓶、毛巾、練舞服",
    status: "confirmed"
  },
  {
    id: "practice-2701-22",
    title: "練舞 — 中正紀念堂(音樂廳) (1/22)",
    category: "practice",
    categoryName: "練舞場地",
    date: "2027-01-22",
    time: "7:30PM-9:30PM",
    dayOfWeek: "週五",
    month: 1,
    location: "中正紀念堂(音樂廳)",
    locationUrl: "https://maps.google.com/?q=國家音樂廳",
    topic: "定期練舞",
    description: "練舞地點：中正紀念堂(音樂廳) 側迴廊/藝文廣場\n捷運：中正紀念堂站 5 號出口步行 1 分鐘\n練習時間：7:30PM-9:30PM\n備註：請備足飲水、毛巾、更換舞鞋，注意音量管制。",
    needs: "全體舞者出席",
    itemsToBring: "換鞋、水瓶、毛巾、練舞服",
    status: "confirmed"
  },
  {
    id: "practice-2701-29",
    title: "練舞 — 中正紀念堂(音樂廳) (1/29)",
    category: "practice",
    categoryName: "練舞場地",
    date: "2027-01-29",
    time: "7:30PM-9:30PM",
    dayOfWeek: "週五",
    month: 1,
    location: "中正紀念堂(音樂廳)",
    locationUrl: "https://maps.google.com/?q=國家音樂廳",
    topic: "定期練舞",
    description: "練舞地點：中正紀念堂(音樂廳) 側迴廊/藝文廣場\n捷運：中正紀念堂站 5 號出口步行 1 分鐘\n練習時間：7:30PM-9:30PM\n備註：請備足飲水、毛巾、更換舞鞋，注意音量管制。",
    needs: "全體舞者出席",
    itemsToBring: "換鞋、水瓶、毛巾、練舞服",
    status: "confirmed"
  },

  // ==========================================
  // 2027 年 2 月練舞場地（中正紀念堂 戲劇院）
  // ==========================================
  {
    id: "practice-2702-12",
    title: "練舞 — 中正紀念堂(戲劇院) (2/12)",
    category: "practice",
    categoryName: "練舞場地",
    date: "2027-02-12",
    time: "7:30PM-9:30PM",
    dayOfWeek: "週五",
    month: 2,
    location: "中正紀念堂(戲劇院)",
    locationUrl: "https://maps.google.com/?q=國家戲劇院",
    topic: "定期練舞",
    description: "練舞地點：中正紀念堂(戲劇院) 側迴廊/藝文廣場\n捷運：中正紀念堂站 5 號出口步行 2 分鐘（愛國東路側）\n練習時間：7:30PM-9:30PM\n備註：請備足飲水、毛巾、更換舞鞋，注意音量管制。",
    needs: "全體舞者出席",
    itemsToBring: "換鞋、水瓶、毛巾、練舞服",
    status: "confirmed"
  },
  {
    id: "practice-2702-19",
    title: "練舞 — 中正紀念堂(戲劇院) (2/19)",
    category: "practice",
    categoryName: "練舞場地",
    date: "2027-02-19",
    time: "7:30PM-9:30PM",
    dayOfWeek: "週五",
    month: 2,
    location: "中正紀念堂(戲劇院)",
    locationUrl: "https://maps.google.com/?q=國家戲劇院",
    topic: "定期練舞",
    description: "練舞地點：中正紀念堂(戲劇院) 側迴廊/藝文廣場\n捷運：中正紀念堂站 5 號出口步行 2 分鐘（愛國東路側）\n練習時間：7:30PM-9:30PM\n備註：請備足飲水、毛巾、更換舞鞋，注意音量管制。",
    needs: "全體舞者出席",
    itemsToBring: "換鞋、水瓶、毛巾、練舞服",
    status: "confirmed"
  },
  {
    id: "practice-2702-26",
    title: "練舞 — 中正紀念堂(戲劇院) (2/26)",
    category: "practice",
    categoryName: "練舞場地",
    date: "2027-02-26",
    time: "7:30PM-9:30PM",
    dayOfWeek: "週五",
    month: 2,
    location: "中正紀念堂(戲劇院)",
    locationUrl: "https://maps.google.com/?q=國家戲劇院",
    topic: "定期練舞",
    description: "練舞地點：中正紀念堂(戲劇院) 側迴廊/藝文廣場\n捷運：中正紀念堂站 5 號出口步行 2 分鐘（愛國東路側）\n練習時間：7:30PM-9:30PM\n備註：請備足飲水、毛巾、更換舞鞋，注意音量管制。",
    needs: "全體舞者出席",
    itemsToBring: "換鞋、水瓶、毛巾、練舞服",
    status: "confirmed"
  }
];

// =============================================
// 類別設定 (Category Config) — 熱舞社版本
// =============================================
const CATEGORY_CONFIG = {
  practice: {
    label: "練舞場地",
    color: "#a855f7",        // 紫色
    colorDark: "#7c3aed",
    dotClass: "dot-practice",
    badgeClass: "badge-practice",
    emoji: "🕺"
  },
  anniversary: {
    label: "週年慶典",
    color: "#ec4899",        // 粉紅
    colorDark: "#be185d",
    dotClass: "dot-anniversary",
    badgeClass: "badge-anniversary",
    emoji: "🎉"
  },
  celebration: {
    label: "慶功宴",
    color: "#f59e0b",        // 金黃
    colorDark: "#b45309",
    dotClass: "dot-celebration",
    badgeClass: "badge-celebration",
    emoji: "🥂"
  },
  performance: {
    label: "演出服事",
    color: "#06b6d4",        // 青藍
    colorDark: "#0e7490",
    dotClass: "dot-performance",
    badgeClass: "badge-performance",
    emoji: "🎤"
  },
  tbd: {
    label: "待確認",
    color: "#6b7280",
    colorDark: "#4b5563",
    dotClass: "dot-tbd",
    badgeClass: "badge-tbd",
    emoji: "❓"
  }
};

// =============================================
// 場地清單 (Venues)
// =============================================
const VENUES = {
  meien: {
    id: "meien",
    name: "美恩工作室",
    shortName: "美恩家",
    tag: "室內常態練舞",
    icon: "🏠",
    address: "台北市青島東路四號七樓之三",
    mrt: "善導寺站（二號出口無電梯 / 三號出口有電梯）",
    doorbell: "73#",
    phone: "0975729815",
    note: "注意：是青島門市，人多會走去千成門市，請注意！\nGoogle搜尋：富邦來來華夏 或 7-11青島門市\n找到二號門後，按73#",
    googleMapsUrl: "https://maps.google.com/?q=台北市青島東路四號七樓之三"
  },
  cksmh_concert: {
    id: "cksmh_concert",
    name: "中正紀念堂(音樂廳)",
    shortName: "音樂廳側廣場",
    tag: "戶外排舞 ｜ 音樂廳側",
    icon: "🏛️",
    address: "台北市中正區中山南路21-1號（國家音樂廳側迴廊 / 藝文廣場）",
    mrt: "中正紀念堂站（5號出口步行1分鐘，直達音樂廳迴廊）",
    doorbell: "戶外開放迴廊 / 地下停車場上方平台",
    phone: "02-3393-9888（兩廳院服務台）",
    note: "場地可用狀態參照「熱Hope行事曆」（兩廳院檔期）：\n🔵 音樂廳可用 ｜ 🟢 兩廳皆可\n戶外練舞請遵守音量管理規範，備妥充足飲水與更換舞鞋。",
    googleMapsUrl: "https://maps.google.com/?q=國家音樂廳"
  },
  cksmh_theater: {
    id: "cksmh_theater",
    name: "中正紀念堂(戲劇院)",
    shortName: "戲劇院側廣場",
    tag: "戶外排舞 ｜ 戲劇院側",
    icon: "🎭",
    address: "台北市中正區中山南路21-1號（國家戲劇院側迴廊 / 藝文廣場）",
    mrt: "中正紀念堂站（5號出口步行2分鐘，往戲劇院迴廊）",
    doorbell: "戶外開放迴廊 / 戲劇院大階梯前平台",
    phone: "02-3393-9888（兩廳院服務台）",
    note: "場地可用狀態參照「熱Hope行事曆」（兩廳院檔期）：\n🟣 戲劇院可用 ｜ 🟢 兩廳皆可\n戶外練舞請遵守音量管理規範，備妥充足飲水與更換舞鞋。",
    googleMapsUrl: "https://maps.google.com/?q=國家戲劇院"
  },
  cksmh: {
    id: "cksmh",
    name: "中正紀念堂廣場",
    shortName: "兩廳院廣場",
    tag: "戶外大隊排舞 / 藝文廣場",
    icon: "🏛️",
    address: "台北市中正區中山南路21-1號（國家兩廳院）",
    mrt: "中正紀念堂站（5號出口步行1分鐘，直達藝文廣場）",
    doorbell: "戶外開放空間 / 兩廳院側廊",
    phone: "02-3393-9888（兩廳院服務台）",
    note: "場地可用狀態參照「熱Hope行事曆」（兩廳院檔期）：\n🟢 兩廳皆可 ｜ 🔵 音樂廳 ｜ 🟣 戲劇院 ｜ 🔴 兩廳皆不可\n戶外練舞請遵守音量管理規範，備妥充足飲水與毛巾。",
    googleMapsUrl: "https://maps.google.com/?q=中正紀念堂兩廳院藝文廣場"
  }
};

// 兩廳院檔期可用狀態圖例 (參照 熱Hope行事曆)
const CKSMH_AVAILABILITY_LEGEND = {
  both_available: {
    label: "兩廳皆可",
    color: "#10b981",
    bgColor: "rgba(16, 185, 129, 0.15)",
    borderColor: "rgba(16, 185, 129, 0.4)",
    emoji: "🟢",
    description: "國家音樂廳與戲劇院廣場均可使用，最適合大隊團練"
  },
  concert_hall: {
    label: "音樂廳",
    color: "#3b82f6",
    bgColor: "rgba(59, 130, 246, 0.15)",
    borderColor: "rgba(59, 130, 246, 0.4)",
    emoji: "🔵",
    description: "僅國家音樂廳側廣場可用"
  },
  theater: {
    label: "戲劇院",
    color: "#a855f7",
    bgColor: "rgba(168, 85, 247, 0.15)",
    borderColor: "rgba(168, 85, 247, 0.4)",
    emoji: "🟣",
    description: "僅國家戲劇院側廣場可用"
  },
  unavailable: {
    label: "兩廳皆不可",
    color: "#ef4444",
    bgColor: "rgba(239, 68, 68, 0.15)",
    borderColor: "rgba(239, 68, 68, 0.4)",
    emoji: "🔴",
    description: "兩廳院有大型活動或演出檔期，不開放借用排舞"
  }
};

// 向後相容單一場地變數
const VENUE_INFO = VENUES.meien;

// CATEGORY_MAP — app.js 使用的介面（符合 outreach 版本格式）
const CATEGORY_MAP = {
  practice:    { label: "練舞場地",   badgeClass: "badge-practice",    dotClass: "dot-practice",    color: "#a855f7" },
  anniversary: { label: "週年慶典",   badgeClass: "badge-anniversary", dotClass: "dot-anniversary", color: "#ec4899" },
  celebration: { label: "慶功宴",     badgeClass: "badge-celebration", dotClass: "dot-celebration", color: "#f59e0b" },
  performance: { label: "演出服事",   badgeClass: "badge-performance", dotClass: "dot-performance", color: "#06b6d4" },
  tbd:         { label: "待確認",     badgeClass: "badge-tbd",         dotClass: "dot-tbd",         color: "#6b7280" }
};

const MONTH_NAMES = [
  "1月 (Jan)", "2月 (Feb)", "3月 (Mar)", "4月 (Apr)",
  "5月 (May)", "6月 (Jun)", "7月 (Jul)", "8月 (Aug)",
  "9月 (Sep)", "10月 (Oct)", "11月 (Nov)", "12月 (Dec)"
];

// 全域輸出
if (typeof window !== "undefined") {
  window.EVENTS_DATA               = EVENTS_DATA;
  window.CATEGORY_MAP              = CATEGORY_MAP;
  window.MONTH_NAMES               = MONTH_NAMES;
  window.VENUE_INFO                = VENUE_INFO;
  window.VENUES                    = VENUES;
  window.CKSMH_AVAILABILITY_LEGEND = CKSMH_AVAILABILITY_LEGEND;
}
if (typeof module !== "undefined" && module.exports) {
  module.exports = { EVENTS_DATA, CATEGORY_MAP, MONTH_NAMES, VENUE_INFO, VENUES, CKSMH_AVAILABILITY_LEGEND };
}
