/**
 * National Filings: website enquiries → Google Sheet (+ email alert).
 *
 * Setup (5 minutes):
 * 1. Create a Google Sheet, then Extensions → Apps Script. Replace the code with this file.
 * 2. Set SECRET (any long random string) and NOTIFY_EMAIL below. Save.
 * 3. Deploy → New deployment → type "Web app". Execute as: Me. Who has access: Anyone. Deploy and allow access.
 * 4. Copy the web app URL. On Railway set LEAD_WEBHOOK_URL to it and LEAD_WEBHOOK_SECRET to the same SECRET.
 * After editing this script later, use Deploy → Manage deployments → Edit → New version, so the URL stays the same.
 */
const SECRET = "change-me";
const NOTIFY_EMAIL = ""; // e.g. "leads@example.com"; comma-separate several; leave empty for no email
const HEADERS = ["Received", "Name", "Phone", "Email", "Service", "City", "Message", "Page"];

function doPost(e) {
  try {
    const d = JSON.parse(e.postData.contents);
    if (d.secret !== SECRET) return reply({ ok: false, error: "bad secret" });

    const sheet = SpreadsheetApp.getActiveSpreadsheet().getSheets()[0];
    if (sheet.getLastRow() === 0) {
      sheet.appendRow(HEADERS);
      sheet.getRange(1, 1, 1, HEADERS.length).setFontWeight("bold");
      sheet.setFrozenRows(1);
    }
    // Leading apostrophe stops Sheets treating text like "+91 …" or "=…" as a number or formula
    const cell = (v) => "'" + String(v || "");
    sheet.appendRow([new Date(), cell(d.name), cell(d.phone), cell(d.email), cell(d.service), cell(d.city), cell(d.message), cell(d.page)]);

    if (NOTIFY_EMAIL) {
      MailApp.sendEmail({
        to: NOTIFY_EMAIL,
        replyTo: d.email || undefined,
        subject: "New enquiry: " + d.service + " – " + d.name,
        body: ["Name: " + d.name, "Phone: " + d.phone, "Email: " + (d.email || "–"), "Service: " + d.service, "City: " + (d.city || "–"), "Message: " + (d.message || "–"), "", SpreadsheetApp.getActiveSpreadsheet().getUrl()].join("\n"),
      });
    }
    return reply({ ok: true });
  } catch (err) {
    return reply({ ok: false, error: String(err) });
  }
}

function reply(obj) {
  return ContentService.createTextOutput(JSON.stringify(obj)).setMimeType(ContentService.MimeType.JSON);
}
