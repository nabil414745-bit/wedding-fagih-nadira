// ============================================================
// GOOGLE SHEETS INIT — Nadira & Fagih Wedding
// File: js/firebase-init.js
//
// Data RSVP & ucapan dibaca & disimpan via Google Apps Script
// URL dikonfigurasi di weddingData.googleSheetUrl (script.js)
// ============================================================

// ==============================
// STATUS
// ==============================
window.jsonbinReady = false;
window.firebaseReady = false;

// ==============================
// INISIALISASI
// Tunggu DOM siap lalu cek apakah googleSheetUrl sudah diisi
// ==============================
(function initGoogleSheets() {
    // Dispatch event setelah DOM siap agar script.js bisa listen
    function dispatchReady() {
        // Cek URL dari weddingData (didefinisikan di script.js)
        const url = (window.weddingData && window.weddingData.googleSheetUrl)
            ? window.weddingData.googleSheetUrl.trim()
            : '';

        if (!url) {
            console.info('[GSheets] googleSheetUrl belum diisi. Data hanya di localStorage.');
            return;
        }

        window.jsonbinReady = true;
        window.firebaseReady = true;
        document.dispatchEvent(new Event('firebase-ready'));
        console.info('[GSheets] Siap! Sumber data: Google Sheets.');
    }

    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', dispatchReady);
    } else {
        // DOM sudah siap, tapi tunggu sebentar agar weddingData terdefinisi
        setTimeout(dispatchReady, 50);
    }
})();


// ==============================
// AMBIL SEMUA UCAPAN dari Google Sheets (via doGet)
// ==============================
async function gsheetsGetWishes() {
    const url = (window.weddingData && window.weddingData.googleSheetUrl)
        ? window.weddingData.googleSheetUrl.trim()
        : '';

    if (!url) return [];

    try {
        const res = await fetch(url, { method: 'GET' });
        if (!res.ok) throw new Error('HTTP ' + res.status);
        const data = await res.json();
        if (data.status === 'success' && Array.isArray(data.wishes)) {
            return data.wishes;
        }
        return [];
    } catch (e) {
        console.warn('[GSheets] Gagal ambil ucapan:', e.message || e);
        return [];
    }
}

// ==============================
// SIMPAN UCAPAN ke Google Sheets (via doPost)
// ==============================
async function gsheetsSaveWish(formData) {
    const url = (window.weddingData && window.weddingData.googleSheetUrl)
        ? window.weddingData.googleSheetUrl.trim()
        : '';

    if (!url) return null;

    try {
        await fetch(url, {
            method: 'POST',
            mode: 'no-cors', // Google Apps Script butuh no-cors
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(formData)
        });

        // no-cors tidak bisa baca response, tapi data sudah terkirim.
        // Kembalikan null agar script.js tahu untuk tidak update cache dari sini
        return null;
    } catch (e) {
        console.warn('[GSheets] Gagal simpan:', e.message || e);
        return null;
    }
}


// ==============================
// ADAPTER untuk script.js
// Interface yang diharapkan script.js
// ==============================

window.fbSaveRSVP = async function(data) {
    return Promise.resolve();
};

window.fbSaveWish = async function(data) {
    // Simpan ke Google Sheets (no-cors, jadi tidak bisa baca response)
    await gsheetsSaveWish(data);
    // Return null agar script.js menggunakan cache lokal (sudah ditambah di sana)
    return null;
};

window.fbListenWishes = function(callback) {
    if (!window.firebaseReady) return null;

    const url = (window.weddingData && window.weddingData.googleSheetUrl)
        ? window.weddingData.googleSheetUrl.trim()
        : '';

    if (!url) return null;

    // Load awal dari Google Sheets, fallback ke localStorage jika gagal
    gsheetsGetWishes().then(wishes => {
        if (wishes && wishes.length > 0) {
            callback(wishes);
        } else {
            // Gagal atau kosong: tampilkan dari localStorage
            const localWishes = JSON.parse(localStorage.getItem('wedding-wishes') || '[]');
            callback(localWishes);
        }
    }).catch(() => {
        const localWishes = JSON.parse(localStorage.getItem('wedding-wishes') || '[]');
        callback(localWishes);
    });

    // Refresh setiap 30 detik agar ucapan tamu lain muncul realtime
    const interval = setInterval(() => {
        gsheetsGetWishes().then(wishes => {
            if (wishes && wishes.length > 0) {
                callback(wishes);
            }
        }).catch(() => {});
    }, 30000);

    return interval;
};

window.fbListenRSVP = function(callback) {
    if (!window.firebaseReady) return null;

    gsheetsGetWishes().then(wishes => {
        if (wishes && wishes.length > 0) callback(wishes);
    }).catch(() => {});

    return null;
};
