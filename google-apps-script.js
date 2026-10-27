/**
 * =========================================================================
 * 熱舞社行事曆 Dance Club Schedule - Google Apps Script (Web App) API 接收端
 * =========================================================================
 * 
 * 📌 部署 3 分鐘教學：
 * 
 * 1. 打開你的 Google 試算表（或建立一個新的試算表）：
 *    👉 試算表名稱可自訂，工作表建議命名為「熱舞社行事曆」（或預設的「工作表1」皆可）。
 * 
 * 2. 開啟 Apps Script 編輯器：
 *    👉 在試算表上方選單點選【擴充功能】➔【Apps Script】。
 * 
 * 3. 貼上程式碼：
 *    👉 將 Apps Script 編輯器中現有的所有程式碼清空，把本檔案全部程式碼貼上。
 *    👉 點選上方磁碟機圖示【儲存 💾】。
 * 
 * 4. （強烈推薦）一鍵初始化試算表：
 *    👉 在上方工具列的函數下拉選單中，選取【setupSheet】。
 *    👉 點擊旁邊的【執行】（第一次執行時 Google 會跳出授權視窗，點選「審查權限」➔ 選擇你的帳號 ➔「進階」➔「前往專案(不安全)」➔「允許」）。
 *    👉 執行完成後回到你的 Google 試算表，會看到 15 個標準欄位標題與初始練舞日程已自動排版建立完畢！
 * 
 * 5. 發布為 Web App (網頁應用程式)：
 *    👉 點擊右上角藍色按鈕【部署】➔【新增部署】。
 *    👉 點選左側齒輪 ⚙️ 圖示，選擇【網頁應用程式 (Web app)】。
 *    👉 設定如下（非常重要！）：
 *       - 說明：Dance Club Schedule API
 *       - 執行身分：我 (你的帳號 / user's email)
 *       - 誰可以存取：所有人 (Anyone)  <--- ⚠️ 必須選「所有人」，前端網頁才能免登入直接同步！
 *    👉 點擊【部署】，複製產生的【網頁應用程式網址】（網址結尾為 /exec）。
 * 
 * 6. 連接至熱舞社行事曆 App：
 *    👉 打開熱舞社行事曆 App，點擊頂部【雲端同步】或 ⚙️ 齒輪。
 *    👉 將該網址貼入「Google 試算表發布網址 (CSV / Web App API)」，點擊【儲存設定並同步】。
 *    👉 即刻啟用真正的雙向即時雲端同步！
 * =========================================================================
 */

// 15 個標準欄位標題
var HEADERS = [
  "id",
  "category",
  "categoryName",
  "title",
  "date",
  "time",
  "dayOfWeek",
  "month",
  "location",
  "locationUrl",
  "topic",
  "description",
  "needs",
  "itemsToBring",
  "status"
];

/**
 * HTTP GET 處理端：從 Google 試算表讀取所有活動資料並回傳 JSON
 */
function doGet(e) {
  try {
    var sheet = getTargetSheet_();
    var lastRow = sheet.getLastRow();
    
    // 如果只有標題列或無資料
    if (lastRow <= 1) {
      return createJsonResponse_({
        status: "success",
        count: 0,
        data: []
      });
    }

    // 讀取所有資料
    var data = sheet.getRange(2, 1, lastRow - 1, HEADERS.length).getValues();
    var events = [];

    for (var i = 0; i < data.length; i++) {
      var row = data[i];
      // 若 id 與 title 都為空則跳過
      if (!row[0] && !row[3]) continue;

      var dateStr = "";
      if (row[4] instanceof Date) {
        dateStr = Utilities.formatDate(row[4], Session.getScriptTimeZone() || "Asia/Taipei", "yyyy-MM-dd");
      } else {
        var rawDate = String(row[4] || "").trim().replace(/\//g, "-");
        var dm = rawDate.match(/^(\d{4})-(\d{1,2})-(\d{1,2})/);
        if (dm) {
          dateStr = dm[1] + "-" + ("0" + dm[2]).slice(-2) + "-" + ("0" + dm[3]).slice(-2);
        } else {
          dateStr = rawDate;
        }
      }

      var monthVal = parseInt(row[7], 10);
      if ((isNaN(monthVal) || !monthVal) && dateStr) {
        var parts = dateStr.split("-");
        if (parts.length >= 2) monthVal = parseInt(parts[1], 10);
      }

      var evt = {
        id: String(row[0] || "evt-" + (i + 1)),
        category: String(row[1] || "practice"),
        categoryName: String(row[2] || "練舞場地"),
        title: String(row[3] || ""),
        date: dateStr,
        time: String(row[5] || ""),
        dayOfWeek: String(row[6] || ""),
        month: monthVal || 11,
        location: String(row[8] || ""),
        locationUrl: String(row[9] || ""),
        topic: String(row[10] || ""),
        description: String(row[11] || ""),
        needs: String(row[12] || ""),
        itemsToBring: String(row[13] || ""),
        status: String(row[14] || "confirmed")
      };

      events.push(evt);
    }

    return createJsonResponse_({
      status: "success",
      count: events.length,
      data: events
    });
  } catch (err) {
    return createJsonResponse_({
      status: "error",
      message: err.toString()
    });
  }
}

/**
 * HTTP POST 處理端：接收前端傳入的 JSON 陣列，整批覆寫或更新試算表
 */
function doPost(e) {
  try {
    var sheet = getTargetSheet_();
    var postData = "";

    if (e && e.postData && e.postData.contents) {
      postData = e.postData.contents;
    }

    if (!postData) {
      return createJsonResponse_({
        status: "error",
        message: "No post data received"
      });
    }

    var payload = JSON.parse(postData);
    var incomingEvents = Array.isArray(payload) ? payload : (payload.events || payload.data || []);

    if (!Array.isArray(incomingEvents)) {
      return createJsonResponse_({
        status: "error",
        message: "Payload format invalid: expected an array of events"
      });
    }

    // 確保標題列完整
    sheet.getRange(1, 1, 1, HEADERS.length).setValues([HEADERS]);

    // 讀取既有工作表資料（以 id 建立索引與行號對應）
    var lastRow = sheet.getLastRow();
    var existingIdMap = {}; // id -> rowIndex (1-indexed)
    var maxRow = 1;

    if (lastRow > 1) {
      var existingData = sheet.getRange(2, 1, lastRow - 1, HEADERS.length).getValues();
      for (var r = 0; r < existingData.length; r++) {
        var rowId = String(existingData[r][0] || "").trim();
        if (rowId) {
          existingIdMap[rowId] = r + 2; // 第 1 列是標題，故第一筆資料是第 2 列
        }
      }
      maxRow = lastRow;
    }

    // 逐筆進行 Upsert（存在則更新該列，不存在則追加到最下方）
    var updatedCount = 0;
    var insertedCount = 0;
    var newRowsToAppend = [];

    for (var i = 0; i < incomingEvents.length; i++) {
      var item = incomingEvents[i];
      var id = String(item.id || "").trim();
      if (!id && !item.title) continue;
      if (!id) id = "evt-" + new Date().getTime() + "-" + i;

      var rowData = [
        id,
        item.category || "practice",
        item.categoryName || "練舞場地",
        item.title || "",
        item.date || "",
        item.time || "",
        item.dayOfWeek || "",
        item.month || "",
        item.location || "",
        item.locationUrl || "",
        item.topic || "",
        item.description || "",
        item.needs || "",
        item.itemsToBring || "",
        item.status || "confirmed"
      ];

      if (existingIdMap[id]) {
        // ID 已存在：精確更新該列，絕不影響其他手動新增的列
        var targetRowIndex = existingIdMap[id];
        sheet.getRange(targetRowIndex, 1, 1, HEADERS.length).setValues([rowData]);
        updatedCount++;
      } else {
        // ID 不存在：排入追加清單
        newRowsToAppend.push(rowData);
        insertedCount++;
      }
    }

    // 若有新資料，批次追加到試算表末尾
    if (newRowsToAppend.length > 0) {
      sheet.getRange(maxRow + 1, 1, newRowsToAppend.length, HEADERS.length).setValues(newRowsToAppend);
    }

    return createJsonResponse_({
      status: "success",
      message: "成功同步！更新 " + updatedCount + " 筆、新增 " + insertedCount + " 筆，未變更的手動資料完整保留。",
      updatedCount: updatedCount,
      insertedCount: insertedCount,
      totalReceived: incomingEvents.length,
      timestamp: new Date().toISOString()
    });
  } catch (err) {
    return createJsonResponse_({
      status: "error",
      message: "寫入試算表失敗: " + err.toString()
    });
  }
}

/**
 * 輔助函數：建立 JSON 回傳格式並設定 CORS 標頭
 */
function createJsonResponse_(obj) {
  return ContentService.createTextOutput(JSON.stringify(obj))
    .setMimeType(ContentService.MimeType.JSON);
}

/**
 * 輔助函數：取得目標工作表
 */
function getTargetSheet_() {
  var ss = SpreadsheetApp.getActiveSpreadsheet();
  var sheet = ss.getSheetByName("熱舞社行事曆") || ss.getSheetByName("工作表1") || ss.getSheetByName("Sheet1") || ss.getActiveSheet();
  return sheet;
}

/**
 * 🛠️ 一鍵快速建置工作表與初始化範本資料（在 Apps Script 點擊執行）
 */
function setupSheet() {
  var ss = SpreadsheetApp.getActiveSpreadsheet();
  var sheet = ss.getSheetByName("熱舞社行事曆");
  if (!sheet) {
    sheet = ss.getActiveSheet();
    sheet.setName("熱舞社行事曆");
  }

  // 1. 設定標題列與美化樣式
  var headerRange = sheet.getRange(1, 1, 1, HEADERS.length);
  headerRange.setValues([HEADERS]);
  headerRange.setFontWeight("bold");
  headerRange.setFontColor("#ffffff");
  headerRange.setBackground("#4c1d95"); // 深紫色專業熱舞風格
  headerRange.setHorizontalAlignment("center");
  sheet.setRowHeight(1, 36);
  sheet.setFrozenRows(1);

  // 2. 自動調整欄寬
  sheet.setColumnWidth(1, 140); // id
  sheet.setColumnWidth(2, 110); // category
  sheet.setColumnWidth(3, 110); // categoryName
  sheet.setColumnWidth(4, 250); // title
  sheet.setColumnWidth(5, 120); // date
  sheet.setColumnWidth(6, 120); // time
  sheet.setColumnWidth(7, 80);  // dayOfWeek
  sheet.setColumnWidth(8, 70);  // month
  sheet.setColumnWidth(9, 140); // location
  sheet.setColumnWidth(10, 180); // locationUrl
  sheet.setColumnWidth(11, 200); // topic
  sheet.setColumnWidth(12, 320); // description
  sheet.setColumnWidth(13, 180); // needs
  sheet.setColumnWidth(14, 180); // itemsToBring
  sheet.setColumnWidth(15, 100); // status

  // 3. 寫入初始範本活動
  var initialEvents = [
    [
      "practice-2611-01", "practice", "練舞場地", "練舞 — 美恩家 (11/5)", "2026-11-05", "7:30PM-9:30PM", "週四", 11,
      "美恩工作室", "https://maps.google.com/?q=台北市青島東路四號七樓之三", "定期練舞",
      "練舞地點：美恩工作室\n捷運：善導寺站（二號出口，有電梯）\n地址：台北市青島東路四號七樓之三\n門鈴：73#\n\nGoogle搜尋：富邦來來華夏 或 7-11青島門市\n找到二號門後，按73# 或撥 0975729815",
      "全體舞者出席", "換鞋、水瓶、練舞服", "confirmed"
    ],
    [
      "anniversary-2611-01", "anniversary", "週年慶典", "🎉 熱舞社二週年（副堂）(11/13)", "2026-11-13", "待確認", "週五", 11,
      "副堂", "", "熱舞社成立二週年慶典",
      "熱舞社二週年紀念活動！\n地點：副堂\n\n這是我們一起走過兩年的里程碑，一起慶祝、回顧、展望未來！",
      "全體舞者、歷屆夥伴", "美好的心情、回憶！", "confirmed"
    ],
    [
      "practice-2611-02", "practice", "練舞場地", "練舞 — 美恩家 (11/20)", "2026-11-20", "7:30PM-9:30PM", "週五", 11,
      "美恩工作室", "https://maps.google.com/?q=台北市青島東路四號七樓之三", "定期練舞",
      "練舞地點：美恩工作室\n捷運：善導寺站（二號出口，有電梯）\n地址：台北市青島東路四號七樓之三\n門鈴：73#\n\nGoogle搜尋：富邦來來華夏 或 7-11青島門市\n找到二號門後，按73# 或撥 0975729815",
      "全體舞者出席", "換鞋、水瓶、練舞服", "confirmed"
    ],
    [
      "practice-cksmh-2611-01", "practice", "練舞場地", "戶外練舞 — 中正紀念堂廣場 (11/28)", "2026-11-28", "7:30PM-9:30PM", "週六", 11,
      "中正紀念堂廣場", "https://maps.google.com/?q=中正紀念堂兩廳院藝文廣場", "戶外大隊排舞與隊形演練",
      "練舞地點：中正紀念堂廣場（兩廳院藝文廣場）\n捷運：中正紀念堂站 5 號出口步行 1 分鐘\n檔期參照：熱Hope行事曆（兩廳院檔期）\n備註：請備足飲水、毛巾、備用鞋、耳機或中小型音響（注意音量管制）。",
      "全體舞者出席", "水瓶、換鞋、毛巾、防曬防蚊用品", "confirmed"
    ],
    [
      "practice-2612-01", "practice", "練舞場地", "練舞 — 美恩家 (12/4)", "2026-12-04", "7:30PM-9:30PM", "週五", 12,
      "美恩工作室", "https://maps.google.com/?q=台北市青島東路四號七樓之三", "定期練舞",
      "練舞地點：美恩工作室\n捷運：善導寺站（二號出口，有電梯）\n地址：台北市青島東路四號七樓之三\n門鈴：73#\n\nGoogle搜尋：富邦來來華夏 或 7-11青島門市\n找到二號門後，按73# 或撥 0975729815",
      "全體舞者出席", "換鞋、水瓶、練舞服", "confirmed"
    ],
    [
      "celebration-2612-01", "celebration", "慶功宴", "🥂 美恩家慶功宴 (12/11)", "2026-12-11", "待確認", "週五", 12,
      "美恩工作室", "https://maps.google.com/?q=台北市青島東路四號七樓之三", "年末慶功宴",
      "年末慶功宴！一起慶祝今年的成果與努力🎊\n地點：美恩工作室\n捷運：善導寺站（二號出口，有電梯）\n地址：台北市青島東路四號七樓之三\n門鈴：73#",
      "全體舞者參加", "好心情、可以帶小點心分享！", "confirmed"
    ],
    [
      "practice-2612-02", "practice", "練舞場地", "練舞 — 美恩家 (12/18)", "2026-12-18", "7:30PM-9:30PM", "週五", 12,
      "美恩工作室", "https://maps.google.com/?q=台北市青島東路四號七樓之三", "定期練舞",
      "練舞地點：美恩工作室\n捷運：善導寺站（二號出口，有電梯）\n地址：台北市青島東路四號七樓之三\n門鈴：73#\n\nGoogle搜尋：富邦來來華夏 或 7-11青島門市\n找到二號門後，按73# 或撥 0975729815",
      "全體舞者出席", "換鞋、水瓶、練舞服", "confirmed"
    ],
    [
      "performance-tbd-01", "performance", "演出服事", "演出服事（待確認）", "2026-11-01", "待確認", "", 11,
      "待確認", "", "不定期演出服事",
      "熱舞社不定期演出服事，詳情待確認後更新。\n若有演出邀請，請告知社長！",
      "依演出需求確認人員", "演出服、道具", "tentative"
    ],
    // 2027 年 1 月 中正紀念堂(音樂廳)
    [
      "practice-2701-08", "practice", "練舞場地", "練舞 — 中正紀念堂(音樂廳) (1/8)", "2027-01-08", "7:30PM-9:30PM", "週五", 1,
      "中正紀念堂(音樂廳)", "https://maps.google.com/?q=國家音樂廳", "定期練舞",
      "練舞地點：中正紀念堂(音樂廳) 側迴廊/藝文廣場\n捷運：中正紀念堂站 5 號出口步行 1 分鐘\n練習時間：7:30PM-9:30PM\n備註：請備足飲水、毛巾、更換舞鞋，注意音量管制。",
      "全體舞者出席", "換鞋、水瓶、毛巾、練舞服", "confirmed"
    ],
    [
      "practice-2701-15", "practice", "練舞場地", "練舞 — 中正紀念堂(音樂廳) (1/15)", "2027-01-15", "7:30PM-9:30PM", "週五", 1,
      "中正紀念堂(音樂廳)", "https://maps.google.com/?q=國家音樂廳", "定期練舞",
      "練舞地點：中正紀念堂(音樂廳) 側迴廊/藝文廣場\n捷運：中正紀念堂站 5 號出口步行 1 分鐘\n練習時間：7:30PM-9:30PM\n備註：請備足飲水、毛巾、更換舞鞋，注意音量管制。",
      "全體舞者出席", "換鞋、水瓶、毛巾、練舞服", "confirmed"
    ],
    [
      "practice-2701-22", "practice", "練舞場地", "練舞 — 中正紀念堂(音樂廳) (1/22)", "2027-01-22", "7:30PM-9:30PM", "週五", 1,
      "中正紀念堂(音樂廳)", "https://maps.google.com/?q=國家音樂廳", "定期練舞",
      "練舞地點：中正紀念堂(音樂廳) 側迴廊/藝文廣場\n捷運：中正紀念堂站 5 號出口步行 1 分鐘\n練習時間：7:30PM-9:30PM\n備註：請備足飲水、毛巾、更換舞鞋，注意音量管制。",
      "全體舞者出席", "換鞋、水瓶、毛巾、練舞服", "confirmed"
    ],
    [
      "practice-2701-29", "practice", "練舞場地", "練舞 — 中正紀念堂(音樂廳) (1/29)", "2027-01-29", "7:30PM-9:30PM", "週五", 1,
      "中正紀念堂(音樂廳)", "https://maps.google.com/?q=國家音樂廳", "定期練舞",
      "練舞地點：中正紀念堂(音樂廳) 側迴廊/藝文廣場\n捷運：中正紀念堂站 5 號出口步行 1 分鐘\n練習時間：7:30PM-9:30PM\n備註：請備足飲水、毛巾、更換舞鞋，注意音量管制。",
      "全體舞者出席", "換鞋、水瓶、毛巾、練舞服", "confirmed"
    ],
    // 2027 年 2 月 中正紀念堂(戲劇院)
    [
      "practice-2702-12", "practice", "練舞場地", "練舞 — 中正紀念堂(戲劇院) (2/12)", "2027-02-12", "7:30PM-9:30PM", "週五", 2,
      "中正紀念堂(戲劇院)", "https://maps.google.com/?q=國家戲劇院", "定期練舞",
      "練舞地點：中正紀念堂(戲劇院) 側迴廊/藝文廣場\n捷運：中正紀念堂站 5 號出口步行 2 分鐘（愛國東路側）\n練習時間：7:30PM-9:30PM\n備註：請備足飲水、毛巾、更換舞鞋，注意音量管制。",
      "全體舞者出席", "換鞋、水瓶、毛巾、練舞服", "confirmed"
    ],
    [
      "practice-2702-19", "practice", "練舞場地", "練舞 — 中正紀念堂(戲劇院) (2/19)", "2027-02-19", "7:30PM-9:30PM", "週五", 2,
      "中正紀念堂(戲劇院)", "https://maps.google.com/?q=國家戲劇院", "定期練舞",
      "練舞地點：中正紀念堂(戲劇院) 側迴廊/藝文廣場\n捷運：中正紀念堂站 5 號出口步行 2 分鐘（愛國東路側）\n練習時間：7:30PM-9:30PM\n備註：請備足飲水、毛巾、更換舞鞋，注意音量管制。",
      "全體舞者出席", "換鞋、水瓶、毛巾、練舞服", "confirmed"
    ],
    [
      "practice-2702-26", "practice", "練舞場地", "練舞 — 中正紀念堂(戲劇院) (2/26)", "2027-02-26", "7:30PM-9:30PM", "週五", 2,
      "中正紀念堂(戲劇院)", "https://maps.google.com/?q=國家戲劇院", "定期練舞",
      "練舞地點：中正紀念堂(戲劇院) 側迴廊/藝文廣場\n捷運：中正紀念堂站 5 號出口步行 2 分鐘（愛國東路側）\n練習時間：7:30PM-9:30PM\n備註：請備足飲水、毛巾、更換舞鞋，注意音量管制。",
      "全體舞者出席", "換鞋、水瓶、毛巾、練舞服", "confirmed"
    ]
  ];

  sheet.getRange(2, 1, initialEvents.length, HEADERS.length).setValues(initialEvents);

  Logger.log("✅ 熱舞社試算表格式與初始行程已完成初始化設定！");
}
