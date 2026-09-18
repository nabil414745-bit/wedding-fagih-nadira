// ============================================================
// FIREBASE INIT — Nadira & Fagih Wedding
// File: js/firebase-init.js
//
// CARA SETUP FIREBASE:
// 1. Buka https://console.firebase.google.com
// 2. Klik "Add project" → beri nama (misal: "nadira-fagih-wedding")
// 3. Setelah project dibuat, klik ikon Web (</>)
// 4. Register app, copy firebaseConfig yang diberikan, paste ke bawah
// 5. Di sidebar Firebase Console → Build → Realtime Database
// 6. Klik "Create Database" → pilih lokasi (Singapore) → "Start in test mode"
// 7. Selesai! Data RSVP akan tersimpan permanen di Firebase
// ============================================================

// ==============================
// KONFIGURASI FIREBASE
// Ganti dengan config project Firebase Anda
// ==============================
window.firebaseConfig = {
    apiKey: "",
    authDomain: "",
    databaseURL: "",
    projectId: "",
    storageBucket: "",
    messagingSenderId: "",
    appId: ""
};

// ==============================
// STATUS FIREBASE
// ==============================
window.firebaseReady = false;
window.firebaseDB = null;

// ==============================
// INISIALISASI FIREBASE
// Hanya jalan jika config sudah diisi
// ==============================
(function initFirebase() {
    const config = window.firebaseConfig;

    // Cek apakah config sudah diisi
    if (!config.apiKey || !config.databaseURL) {
        console.info('[Firebase] Config belum diisi, data RSVP hanya disimpan di localStorage.');
        return;
    }

    // Load Firebase SDK secara dinamis
    const scriptApp = document.createElement('script');
    scriptApp.src = 'https://www.gstatic.com/firebasejs/10.12.2/firebase-app-compat.js';
    scriptApp.onload = function () {
        const scriptDB = document.createElement('script');
        scriptDB.src = 'https://www.gstatic.com/firebasejs/10.12.2/firebase-database-compat.js';
        scriptDB.onload = function () {
            try {
                firebase.initializeApp(config);
                window.firebaseDB = firebase.database();
                window.firebaseReady = true;
                console.info('[Firebase] Berhasil terhubung ke Realtime Database.');

                // Dispatch event agar script.js tahu Firebase sudah siap
                document.dispatchEvent(new Event('firebase-ready'));
            } catch (e) {
                console.warn('[Firebase] Gagal inisialisasi:', e);
            }
        };
        document.head.appendChild(scriptDB);
    };
    document.head.appendChild(scriptApp);
})();

// ==============================
// FUNGSI UTILITAS FIREBASE
// ==============================

/**
 * Simpan data RSVP ke Firebase
 * @param {Object} data - { name, attendance, message, timestamp }
 * @returns {Promise}
 */
window.fbSaveRSVP = function (data) {
    if (!window.firebaseReady || !window.firebaseDB) {
        return Promise.resolve(null);
    }
    const ref = window.firebaseDB.ref('rsvp');
    return ref.push(data);
};

/**
 * Simpan ucapan ke Firebase
 * @param {Object} data - { name, attendance, message, timestamp }
 * @returns {Promise}
 */
window.fbSaveWish = function (data) {
    if (!window.firebaseReady || !window.firebaseDB) {
        return Promise.resolve(null);
    }
    const ref = window.firebaseDB.ref('wishes');
    return ref.push(data);
};

/**
 * Subscribe ke data ucapan secara real-time
 * @param {Function} callback - dipanggil setiap ada perubahan data
 */
window.fbListenWishes = function (callback) {
    if (!window.firebaseReady || !window.firebaseDB) {
        return null;
    }
    const ref = window.firebaseDB.ref('wishes').orderByChild('timestamp');
    ref.on('value', function (snapshot) {
        const wishes = [];
        snapshot.forEach(function (child) {
            wishes.push({ key: child.key, ...child.val() });
        });
        // Urutkan terbaru di atas
        wishes.reverse();
        callback(wishes);
    });
    return ref;
};

/**
 * Subscribe ke data RSVP secara real-time (untuk export)
 * @param {Function} callback
 */
window.fbListenRSVP = function (callback) {
    if (!window.firebaseReady || !window.firebaseDB) {
        return null;
    }
    const ref = window.firebaseDB.ref('rsvp').orderByChild('timestamp');
    ref.on('value', function (snapshot) {
        const list = [];
        snapshot.forEach(function (child) {
            list.push({ key: child.key, ...child.val() });
        });
        callback(list);
    });
    return ref;
};
