# 💍 Undangan Digital — Nadira & Fagih

Website undangan pernikahan digital premium yang modern, elegan, dan responsif.

---

## 📁 Struktur Folder

```
wedding-fagih-nadira/
├── index.html              ← Halaman utama undangan
├── README.md               ← File panduan ini
│
├── css/
│   └── style.css           ← Semua styling/desain
│
├── js/
│   └── script.js           ← Semua logika & data undangan
│
├── images/
│   ├── cover/              ← Foto cover/opening (3 foto)
│   │   ├── cover01.jpg
│   │   ├── cover02.jpg
│   │   └── cover03.jpg
│   │
│   ├── couple/             ← Foto mempelai
│   │   ├── nadira.jpg
│   │   └── fagih.jpg
│   │
│   └── gallery/            ← Foto galeri (12+ foto)
│       ├── gallery01.jpg
│       ├── gallery02.jpg
│       └── ... dst
│
└── music/
    └── music.mp3           ← File musik latar
```

---

## 🚀 Cara Menjalankan

### Cara 1: Buka Langsung
1. Klik dua kali pada file `index.html`
2. Website akan terbuka di browser

### Cara 2: Menggunakan Live Server (Rekomendasi)
1. Install ekstensi **Live Server** di VS Code
2. Klik kanan pada `index.html` → **Open with Live Server**
3. Website akan terbuka dengan auto-reload

### Cara 3: Menggunakan Python
```bash
cd wedding-fagih-nadira
python -m http.server 8000
```
Buka browser ke `http://localhost:8000`

---

## ✏️ Cara Mengganti Data

Semua data undangan ada di **satu tempat** yaitu file `js/script.js` di bagian object `weddingData`.

### 1. Mengganti Nama Mempelai
Buka `js/script.js`, cari bagian:
```javascript
bride: {
    nickname: "Nadira",
    fullname: "[ISI NANTI]",     // ← Ganti nama lengkap
    father: "[ISI NANTI]",       // ← Ganti nama ayah
    mother: "[ISI NANTI]",       // ← Ganti nama ibu
    instagram: ""                 // ← Isi username Instagram (opsional)
},
groom: {
    nickname: "Fagih",
    fullname: "[ISI NANTI]",
    father: "[ISI NANTI]",
    mother: "[ISI NANTI]",
    instagram: ""
}
```

### 2. Mengganti Foto
- **Foto Mempelai**: Ganti file `images/couple/nadira.jpg` dan `images/couple/fagih.jpg`
- **Foto Cover**: Ganti file di folder `images/cover/` (cover01.jpg, cover02.jpg, cover03.jpg)
- **Foto Gallery**: Ganti file di folder `images/gallery/` (gallery01.jpg, gallery02.jpg, dst)

> **Tips**: Ukuran foto optimal:
> - Cover: 1080x1920px (portrait)
> - Couple: 600x800px (portrait)
> - Gallery: 800x800px (square)

### 3. Mengganti Tanggal Pernikahan
```javascript
weddingDate: "2026-12-20T09:00:00+07:00",
// Format: YYYY-MM-DDTHH:MM:SS+07:00
// Contoh: "2027-01-15T08:00:00+07:00"
```

### 4. Mengganti Lokasi Acara
```javascript
event: {
    akad: {
        day: "Minggu",
        date: "20 Desember 2026",
        time: "08:00 - 10:00 WIB",
        venue: "Masjid Agung",
        address: "Jl. Contoh No. 1",
        maps: "https://maps.google.com/..."  // ← Paste link Google Maps
    },
    reception: {
        // ... sama seperti akad
    }
}
```

### 5. Mengganti Love Story
```javascript
story: [
    {
        number: "01",
        title: "Pertemuan",
        year: "2020",
        text: "Kami pertama kali bertemu di..."
    },
    // ... tambah/hapus sesuai kebutuhan
]
```

### 6. Mengganti Rekening (Wedding Gift)
```javascript
gift: [
    {
        bank: "Bank Syariah Indonesia (BSI)",
        accountNumber: "7712345678",
        accountName: "Nadira Putri R"
    },
    // Tambah rekening lain jika perlu
]
```

### 7. Mengganti Musik
1. Siapkan file musik format `.mp3`
2. Rename menjadi `music.mp3`
3. Taruh di folder `music/`
4. Selesai! (atau ubah path di `weddingData.musicFile`)

### 8. Mengganti Video
```javascript
videoUrl: "https://www.youtube.com/embed/XXXXXXXXXX",
// Cara dapat embed URL:
// 1. Buka video YouTube
// 2. Klik Share → Embed
// 3. Copy URL dari src="..."
```

### 9. Mengganti Google Maps
```javascript
event: {
    akad: {
        maps: "https://goo.gl/maps/xxxxx"  // ← Paste dari Google Maps
    }
}
```
Cara mendapatkan link:
1. Buka Google Maps
2. Cari lokasi
3. Klik **Share** → **Copy link**

### 10. Nama Tamu Dinamis
Tambahkan parameter `?to=` di URL:
```
https://domain.com/index.html?to=Nabil%20Alatas
```
Maka akan tampil: **Kepada Yth. Nabil Alatas**

Jika tidak ada parameter, tampil: **Man 13** (default)

Untuk mengubah nama default:
```javascript
defaultGuest: "Man 13"
```

---

## 🌐 Cara Deploy ke Hosting

### Netlify (Gratis & Mudah)
1. Buka [netlify.com](https://netlify.com)
2. Drag & drop folder `wedding-fagih-nadira` ke halaman Netlify
3. Website langsung online!
4. Custom domain bisa diatur di Settings

### GitHub Pages (Gratis)
1. Buat repository baru di GitHub
2. Upload semua file
3. Settings → Pages → Source: main branch
4. Website online di `username.github.io/repo-name`

### Hosting Biasa (cPanel)
1. Login ke cPanel
2. Buka File Manager
3. Upload semua file ke `public_html`
4. Website online!

---

## 📋 Daftar Bagian yang Masih [ISI NANTI]

| No | Bagian | Lokasi di script.js |
|----|--------|-------------------|
| 1 | Nama lengkap mempelai wanita | `bride.fullname` |
| 2 | Nama ayah mempelai wanita | `bride.father` |
| 3 | Nama ibu mempelai wanita | `bride.mother` |
| 4 | Instagram mempelai wanita | `bride.instagram` |
| 5 | Nama lengkap mempelai pria | `groom.fullname` |
| 6 | Nama ayah mempelai pria | `groom.father` |
| 7 | Nama ibu mempelai pria | `groom.mother` |
| 8 | Instagram mempelai pria | `groom.instagram` |
| 9 | Hari akad | `event.akad.day` |
| 10 | Tanggal akad | `event.akad.date` |
| 11 | Waktu akad | `event.akad.time` |
| 12 | Tempat akad | `event.akad.venue` |
| 13 | Alamat akad | `event.akad.address` |
| 14 | Link Maps akad | `event.akad.maps` |
| 15 | Hari resepsi | `event.reception.day` |
| 16 | Tanggal resepsi | `event.reception.date` |
| 17 | Waktu resepsi | `event.reception.time` |
| 18 | Tempat resepsi | `event.reception.venue` |
| 19 | Alamat resepsi | `event.reception.address` |
| 20 | Link Maps resepsi | `event.reception.maps` |
| 21 | Cerita Love Story (4 bagian) | `story[0-3]` |
| 22 | Nama bank | `gift[0].bank` |
| 23 | Nomor rekening | `gift[0].accountNumber` |
| 24 | Nama rekening | `gift[0].accountName` |
| 25 | Video prewedding | `videoUrl` |

---

## 🎨 Fitur Utama

- ✅ Opening screen fullscreen dengan slideshow
- ✅ Animasi kelopak bunga yang halus
- ✅ Custom loading screen
- ✅ Nama tamu dinamis dari URL
- ✅ Ayat Al-Quran dengan typography Arabic
- ✅ Profil mempelai (Nadira & Fagih)
- ✅ Countdown timer
- ✅ Love Story timeline
- ✅ Detail Akad & Resepsi
- ✅ Google Maps integration
- ✅ Gallery dengan lightbox
- ✅ Video prewedding (YouTube)
- ✅ Wedding Gift (salin rekening)
- ✅ RSVP form
- ✅ Ucapan & Doa
- ✅ Floating music player
- ✅ Floating bottom navigation (mobile)
- ✅ Desktop navigation
- ✅ Responsive (360px - 1440px)
- ✅ Scroll reveal animations
- ✅ Lazy loading images
- ✅ Paper texture overlay

---

## ⚡ Teknologi

- **HTML5** — Semantic markup
- **CSS3** — Custom properties, animations, glassmorphism
- **JavaScript** — Vanilla JS, IntersectionObserver, localStorage
- **Google Fonts** — Cormorant Garamond, Poppins, Great Vibes, Amiri
- **Tanpa framework/library** — Ringan & cepat

---

Dibuat dengan ❤️ untuk Nadira & Fagih
