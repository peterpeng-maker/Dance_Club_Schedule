# 熱舞社行事曆 — Google Apps Script (Web App) API 設定指南

本專案支援將 **Google 試算表 (Google Sheets)** 透過 **Google Apps Script (Web App)** 作為雲端 API 接收端，實現**「雙向即時同步」**：
- **讀取同步 (GET / Pull)**：在 Google Sheets 修改練舞時間或地點，網頁端點擊「雲端同步」立即拉取最新行程。
- **寫入同步 (POST / Push)**：在網頁端編輯、新增或刪除活動，點擊「推送到雲端」立即自動寫回 Google Sheets！

---

## 🚀 3 步驟快速設定

### 第一步：建立 Google 試算表
1. 打開 [Google 雲端硬碟](https://drive.google.com/)，新增一個 **Google 試算表**（例如命名為 `熱舞社行事曆`）。
2. 工作表名稱建議命名為 `熱舞社行事曆`（若使用預設的 `工作表1` 亦可相容）。

---

### 第二步：貼上 Google Apps Script 程式碼
1. 在 Google 試算表上方選單點選 **【擴充功能】➔【Apps Script】**。
2. 將編輯器內原本預設的程式碼清空。
3. 打開本專案中的 [`google-apps-script.js`](file:///Users/yee/Downloads/Antigravity%20IDE/Dance_Club_Schedule/google-apps-script.js)（或在行事曆 App 彈窗中點擊「複製腳本程式碼」），將全部程式碼貼入 Apps Script 編輯器中。
4. 點選工具列上方的 **【儲存 💾】** 圖示。

#### （強烈建議）一鍵排版並建立初始練舞日程：
- 在上方工具列的函數選單中，選取 **`setupSheet`**。
- 點擊旁邊的 **【執行 ▶️】**。
- *第一次執行時，Google 會要求授權*：
  1. 點擊「審查權限」
  2. 選擇你的 Google 帳號
  3. 點選左下方「進階」
  4. 點選「前往『未命名專案』(不安全)」
  5. 點選「允許」
- 執行完成後回到你的 Google 試算表，會看到 15 個標準欄位標題與紫色的標題列，以及 11 月、12 月練舞與二週年慶典行程已自動排版建立完畢！

---

### 第三步：部署為 Web App (取得 API 網址)
1. 在 Apps Script 編輯器右上角，點選藍色按鈕 **【部署】➔【新增部署】**。
2. 點選左側齒輪圖示 ⚙️，選擇 **【網頁應用程式 (Web app)】**。
3. 填寫部署資訊（**⚠️ 注意「誰可以存取」非常關鍵**）：
   - **說明**：`Dance Club Schedule API`
   - **執行身分**：`我 (你的 Google 帳號)`
   - **誰可以存取**：`所有人 (Anyone)`  👈 **務必選「所有人」，前端網頁才能直接跨來源免登入呼叫 API！**
4. 點選 **【部署】**。
5. 複製視窗中顯示的 **【網頁應用程式網址】**（網址結尾通常為 `/exec`）。

---

### 第四步：貼入熱舞社行事曆 App
1. 打開熱舞社行事曆 App（瀏覽器開啟 `index.html`）。
2. 點擊頂部 **「雲端同步」** 或 **⚙️ 齒輪按鈕**。
3. 將剛剛複製的 `/exec` 網址貼入輸入框中。
4. 點擊 **「儲存網址設定」**。
5. 連線成功後，頂部狀態燈號會變為 **🟢 已連接 Google Apps Script API**！

---

## 💡 常見問題與排查 (FAQ)

- **Q: 點擊同步時出現 CORS 或連線錯誤？**
  - 請檢查 Apps Script 部署設定中的「誰可以存取」是否確實為「所有人 (Anyone)」。若不是，請點選「部署 ➔ 管理部署 ➔ 編輯」修改後重新發布。
- **Q: 也可以只用 CSV 匯入嗎？**
  - 可以！專案內附有 [`Dance_Club_Schedule_Template.csv`](file:///Users/yee/Downloads/Antigravity%20IDE/Dance_Club_Schedule/Dance_Club_Schedule_Template.csv)，也可以直接在 Google 試算表點選「檔案 ➔ 匯入 ➔ 上傳」來匯入資料。
