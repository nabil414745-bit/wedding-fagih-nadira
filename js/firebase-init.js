// ============================================================
// JSONBIN.IO INIT — Nadira & Fagih Wedding
// File: js/firebase-init.js  (diganti ke JSONBin - lebih mudah!)
//
// CARA SETUP (2 MENIT):
// 1. Buka https://jsonbin.io
// 2. Klik "Create Account" → login pakai Google
// 3. Setelah login → klik nama profil pojok kanan atas → "API Keys"
// 4. Copy "Secret Key" yang tertera
// 5. Paste di bawah ini pada bagian: apiKey: "PASTE_DI_SINI"
// ============================================================

// ==============================
// KONFIGURASI JSONBIN
// ==============================
window.jsonbinConfig = {
    apiKey: "",          // ← Paste Secret Key dari jsonbin.io di sini
    binId: "",           // ← Akan otomatis terisi setelah pertama kali ada data masuk
    collectionName: "wedding-rsvp-nadira-fagih"
};

// ==============================
// STATUS JSONBIN
// ==============================
window.jsonbinReady = false;
window.jsonbinBinId = "";

// Alias agar script.js tetap kompatibel
window.firebaseReady = false;

// ==============================
// INISIALISASI JSONBIN
// ==============================
(function initJsonBin() {
    const key = window.jsonbinConfig.apiKey;
    if (!key || key.trim() === '') {
        console.info('[JSONBin] API Key belum diisi, data RSVP hanya disimpan di localStorage.');
        return;
    }

    window.jsonbinReady = true;
    window.firebaseReady = true; // alias agar script.js tetap jalan

    // Cek apakah Bin ID sudah ada di localStorage
    const savedBinId = localStorage.getItem('wedding-jsonbin-id');
    if (savedBinId) {
        window.jsonbinBinId = savedBinId;
        window.jsonbinConfig.binId = savedBinId;
        console.info('[JSONBin] Menggunakan Bin ID:', savedBinId);
    }

    // Dispatch event agar script.js tahu JSONBin sudah siap
    document.addEventListener('DOMContentLoaded', function() {
        document.dispatchEvent(new Event('firebase-ready'));
    });
    if (document.readyState !== 'loading') {
        setTimeout(() => document.dispatchEvent(new Event('firebase-ready')), 100);
    }

    console.info('[JSONBin] Siap! Data RSVP akan tersimpan di cloud.');
})();


// ==============================
// FUNGSI UTILITAS JSONBIN
// ==============================
const JSONBIN_BASE = 'https://api.jsonbin.io/v3';

/**
 * Buat bin baru atau dapatkan semua ucapan
 */
async function jsonbinGetWishes() {
    const key = window.jsonbinConfig.apiKey;
    const binId = window.jsonbinConfig.binId;

    if (!binId) return [];

    try {
        const res = await fetch(`${JSONBIN_BASE}/b/${binId}/latest`, {
            headers: { 'X-Master-Key': key }
        });
        const data = await res.json();
        return data.record?.wishes || [];
    } catch (e) {
        console.warn('[JSONBin] Gagal ambil data:', e);
        return [];
    }
}

async function jsonbinGetRSVP() {
    const key = window.jsonbinConfig.apiKey;
    const binId = window.jsonbinConfig.binId;

    if (!binId) return [];

    try {
        const res = await fetch(`${JSONBIN_BASE}/b/${binId}/latest`, {
            headers: { 'X-Master-Key': key }
        });
        const data = await res.json();
        return data.record?.rsvp || [];
    } catch (e) {
        return [];
    }
}

/**
 * Simpan data baru (tambah ke list)
 */
async function jsonbinSave(formData) {
    const key = window.jsonbinConfig.apiKey;
    let binId = window.jsonbinConfig.binId;

    try {
        let currentWishes = [];
        let currentRSVP = [];

        if (binId) {
            // Ambil data yang sudah ada
            const res = await fetch(`${JSONBIN_BASE}/b/${binId}/latest`, {
                headers: { 'X-Master-Key': key }
            });
            const existing = await res.json();
            currentWishes = existing.record?.wishes || [];
            currentRSVP = existing.record?.rsvp || [];
        }

        // Tambah data baru
        currentWishes.unshift(formData);
        currentRSVP.push(formData);

        const newRecord = { wishes: currentWishes, rsvp: currentRSVP };

        if (binId) {
            // Update bin yang sudah ada
            await fetch(`${JSONBIN_BASE}/b/${binId}`, {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json',
                    'X-Master-Key': key
                },
                body: JSON.stringify(newRecord)
            });
        } else {
            // Buat bin baru
            const res = await fetch(`${JSONBIN_BASE}/b`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'X-Master-Key': key,
                    'X-Bin-Name': 'wedding-nadira-fagih',
                    'X-Bin-Private': 'false'
                },
                body: JSON.stringify(newRecord)
            });
            const created = await res.json();
            binId = created.metadata?.id;
            if (binId) {
                window.jsonbinConfig.binId = binId;
                window.jsonbinBinId = binId;
                localStorage.setItem('wedding-jsonbin-id', binId);
                console.info('[JSONBin] Bin baru dibuat:', binId);
            }
        }

        return currentWishes;
    } catch (e) {
        console.warn('[JSONBin] Gagal simpan:', e);
        return null;
    }
}

// ==============================
// ADAPTER untuk script.js
// (menyesuaikan interface yang diharapkan script.js)
// ==============================

window.fbSaveRSVP = async function(data) {
    // Simpan via JSONBin (gabung dengan wishes)
    return Promise.resolve();
};

window.fbSaveWish = async function(data) {
    return jsonbinSave(data);
};

window.fbListenWishes = function(callback) {
    if (!window.jsonbinReady) return null;

    // Load awal
    jsonbinGetWishes().then(wishes => {
        if (wishes.length > 0) callback(wishes);
    });

    // Poll setiap 30 detik untuk cek ucapan baru
    const interval = setInterval(() => {
        jsonbinGetWishes().then(wishes => {
            callback(wishes);
        });
    }, 30000);

    return interval;
};

window.fbListenRSVP = function(callback) {
    if (!window.jsonbinReady) return null;

    jsonbinGetRSVP().then(rsvp => {
        if (rsvp.length > 0) callback(rsvp);
    });

    return null;
};
