# 📊 Panduan Menghubungkan RSVP & Ucapan ke Google Spreadsheet

Undangan pernikahan Nadira & Faqih sudah dilengkapi dengan 2 cara untuk melihat dan merekap data tamu yang mengisi RSVP:

---

## 🚀 OPSI 1: Download Langsung dari Halaman Undangan (Paling Mudah)

Di bagian bawah daftar ucapan RSVP pada undangan, sudah tersedia tombol:
> **`[📥 Download Rekap RSVP (Excel / .csv)]`**

Saat tombol ini diklik, seluruh data nama tamu, status kehadiran (Hadir / Tidak Hadir), waktu, serta ucapan & doa restu akan langsung terunduh ke komputer/HP Anda dalam format **Excel / Spreadsheet (.csv)**.

---

## 🌐 OPSI 2: Terhubung Otomatis Real-Time ke Google Spreadsheet

Jika Anda ingin data tamu **langsung masuk secara otomatis ke Google Spreadsheet online** setiap kali ada tamu yang mengisi dari HP mereka:

### Langkah 1: Buat Google Spreadsheet Baru
1. Buka [Google Sheets](https://sheets.new) di browser Anda.
2. Beri nama spreadsheet, contoh: `RSVP Undangan Nadira & Faqih`.
3. Pada baris pertama (Baris 1), buat 4 judul kolom:
   - Kolom A: `Timestamp`
   - Kolom B: `Nama Tamu`
   - Kolom C: `Kehadiran`
   - Kolom D: `Ucapan & Doa`

---

### Langkah 2: Pasang Google Apps Script
1. Di Google Sheets tersebut, klik menu **Extensions (Ekstensi)** > **Apps Script**.
2. Hapus semua kode default di layar editor, lalu **Copy & Paste** kode di bawah ini:

```javascript
function doPost(e) {
  try {
    var sheet = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();
    var data = JSON.parse(e.postData.contents);
    
    var timestamp = data.timestamp ? new Date(data.timestamp).toLocaleString("id-ID", {timeZone: "Asia/Jakarta"}) : new Date().toLocaleString("id-ID", {timeZone: "Asia/Jakarta"});
    var name = data.name || "-";
    var attendance = data.attendance === "hadir" ? "Hadir" : "Tidak Hadir";
    var message = data.message || "-";
    
    sheet.appendRow([timestamp, name, attendance, message]);
    
    return ContentService.createTextOutput(JSON.stringify({ "status": "success" }))
      .setMimeType(ContentService.MimeType.JSON);
  } catch (error) {
    return ContentService.createTextOutput(JSON.stringify({ "status": "error", "message": error.toString() }))
      .setMimeType(ContentService.MimeType.JSON);
  }
}
```

---

### Langkah 3: Deploy sebagai Web App (Dapatkan URL)
1. Klik tombol biru **Deploy** (di pojok kanan atas editor Apps Script) > pilih **New deployment**.
2. Klik ikon gerigi ⚙️ di sebelah *Select type* > pilih **Web app**.
3. Atur konfigurasi:
   - **Description**: `RSVP Wedding Webhook`
   - **Execute as**: `Me (email Anda)`
   - **Who has access**: Pilih **`Anyone`** *(Penting: agar form tamu bisa mengirim data tanpa perlu login Google)*
4. Klik **Deploy**.
5. Klik **Authorize access** > Pilih akun Google Anda > Klik *Advanced* > Klik *Go to Untitled project (unsafe)* > Klik *Allow*.
6. Salin **Web app URL** yang muncul (contoh: `https://script.google.com/macros/s/AKfycbx.../exec`).

---

### Langkah 4: Tempel URL ke file `js/script.js`
Buka file `js/script.js` dan cari baris `googleSheetUrl: ""`, lalu masukkan URL yang Anda dapatkan:

```javascript
    // ==============================
    // GOOGLE SPREADSHEET INTEGRATION
    // ==============================
    googleSheetUrl: "https://script.google.com/macros/s/AKfycbx.../exec",
```

Selesai! Sekarang setiap kali tamu mengisi RSVP di undangan, data otomatis langsung masuk ke baris baru Google Spreadsheet Anda secara real-time! ✨
