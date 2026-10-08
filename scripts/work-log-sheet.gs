/**
 * National Filings: website work log → "national filings works" Google Sheet.
 *
 * Replaces =IMPORTDATA(): Google refreshes that whenever it likes (sometimes hours late) and it breaks with #REF!
 * when anything is typed below A1. This script writes the log itself:
 *   - the daily publish workflow (.github/workflows/daily-publish.yml) calls it right after each page goes live;
 *   - an hourly trigger refreshes it as a backup.
 *
 * Setup (5 minutes, in the sheet's own Google account):
 * 1. In the sheet: Extensions → Apps Script. Replace the code with this file. Set KEY below to a long random string. Save.
 * 2. Run `install` once (select it in the toolbar, click Run, allow access). It writes the log and adds the hourly trigger.
 * 3. Deploy → New deployment → type "Web app". Execute as: Me. Who has access: Anyone. Deploy, then copy the web app URL.
 * 4. In GitHub (repo Settings → Secrets → Actions) set SHEET_HOOK_URL to:  <web app URL>?key=<KEY>
 * After editing this script later, use Deploy → Manage deployments → Edit → New version, so the URL stays the same.
 */
const KEY = "change-me";
const LOG_URL = "https://www.nationalfilings.co.in/publish-log.csv";
const COLUMNS = 4; // Date, Work done, Page, URL

/** Fetch the work log and write it to the first tab, columns A to D (everything else in the sheet is left alone). */
function refreshWorkLog() {
  // cache-busting query so a just-published row is never served from a stale cache
  const res = UrlFetchApp.fetch(LOG_URL + "?t=" + Date.now(), { muteHttpExceptions: true });
  if (res.getResponseCode() !== 200) throw new Error("Work log fetch failed: HTTP " + res.getResponseCode());
  const rows = Utilities.parseCsv(res.getContentText()).filter((r) => r.length === COLUMNS);
  if (rows.length < 1) throw new Error("Work log is empty");

  const sheet = SpreadsheetApp.getActiveSpreadsheet().getSheets()[0];
  sheet.getRange(1, 1, sheet.getMaxRows(), COLUMNS).clearContent();
  sheet.getRange(1, 1, rows.length, COLUMNS).setNumberFormat("@").setValues(rows); // "@" keeps dates as text
  sheet.getRange(1, 1, 1, COLUMNS).setFontWeight("bold");
  sheet.setFrozenRows(1);
  return rows.length - 1;
}

/** Web app endpoint the publish workflow calls after each launch: GET <url>?key=KEY → "ok" */
function doGet(e) {
  if (!e || !e.parameter || e.parameter.key !== KEY) return ContentService.createTextOutput("forbidden");
  try {
    const n = refreshWorkLog();
    return ContentService.createTextOutput("ok " + n);
  } catch (err) {
    return ContentService.createTextOutput("error " + err);
  }
}

/** Run once: writes the log now and adds the hourly backup refresh (removes any earlier copy of the trigger). */
function install() {
  ScriptApp.getProjectTriggers()
    .filter((t) => t.getHandlerFunction() === "refreshWorkLog")
    .forEach((t) => ScriptApp.deleteTrigger(t));
  ScriptApp.newTrigger("refreshWorkLog").timeBased().everyHours(1).create();
  refreshWorkLog();
}
