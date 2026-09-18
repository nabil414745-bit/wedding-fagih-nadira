// ============================================================
// UNDANGAN DIGITAL PREMIUM — Nadira & Fagih
// File: js/script.js
//
// PANDUAN EDIT:
// Semua data undangan ada di object "weddingData" di bawah ini.
// Anda cukup mengubah data di sini, HTML akan otomatis mengikuti.
// ============================================================

// ==============================
// KONFIGURASI DATA UNDANGAN
// Edit bagian ini untuk mengubah data undangan
// ==============================
const weddingData = {

    // ==============================
    // EDIT TANGGAL PERNIKAHAN
    // ==============================
    weddingDate: "2026-11-01T08:00:00+07:00",

    // ==============================
    // EDIT DATA MEMPELAI WANITA
    // ==============================
    bride: {
        nickname: "Nadira",
        fullname: "Nadira Adiba Alattas",           // Contoh: "Nadira Putri Ramadhani"
        father: "Ali bin Muhammad Alattas",             // Contoh: "H. Ahmad Fauzan"
        mother: "Dina binti Zen Aljufri",             // Contoh: "Hj. Siti Aisyah"
        photo: "images/couple/nadira.png",  // Foto mempelai wanita
        instagram: "https://www.instagram.com/nadiraalattas_?igsh=dGZ6ZXhpdzUzaThl"                       // Contoh: "@nadira"
    },

    // ==============================
    // EDIT DATA MEMPELAI PRIA
    // ==============================
    groom: {
        nickname: "Fagih",
        fullname: "Ibrahim Fagih Alattas",           // Contoh: "Muhammad Fagih Pratama"
        father: "Habib Kholid bin Ibrahim Alattas",             // Contoh: "H. Budi Santoso"
        mother: "Zainab binti Abdullah Alattas",             // Contoh: "Hj. Ratna Dewi"
        photo: "images/couple/fagih.png",   // Foto mempelai pria
        instagram: "https://www.instagram.com/boim.151?igsh=dWI5ZmMxaHF1djU4"                       // Contoh: "@fagih"
    },

    // ==============================
    // EDIT DETAIL ACARA
    // ==============================
    event: {
        akad: {
            day: "Minggu",
            date: "1 November 2026",
            time: "08.00 - 10.00 WIB",
            venue: "Gedung Darul Aitam",
            address: "Jl. KH. Mas Mansyur No.47, Kebon Melati, Tanah Abang, Jakarta Pusat",
            maps: "https://www.google.com/maps/search/?api=1&query=Gedung+Darul+Aitam+Tanah+Abang"
        },
        reception: {
            day: "Minggu",
            date: "1 November 2026",
            time: "12.00 - 14.00 WIB",
            venue: "Gedung Darul Aitam",
            address: "Jl. KH. Mas Mansyur No.47, Kebon Melati, Tanah Abang, Jakarta Pusat",
            maps: "https://www.google.com/maps/search/?api=1&query=Gedung+Darul+Aitam+Tanah+Abang"
        }
    },

    // ==============================
    // EDIT LOVE STORY / KISAH CINTA
    // ==============================
    story: [
        {
            number: "01",
            title: "Pertemuan",
            year: "2025",           // Contoh: "2020"
            text: "[ISI NANTI]"            // Contoh: "Kami pertama kali bertemu di..."
        },
        {
            number: "02",
            title: "Pendekatan",
            year: "2025",           // Contoh: "2021"
            text: "[ISI NANTI]"            // Contoh: "Seiring berjalannya waktu..."
        },
        {
            number: "03",
            title: "Engagement",
            year: "2026",           // Contoh: "2025"
            text: "[ISI NANTI]"            // Contoh: "Dengan restu keluarga..."
        },
        {
            number: "04",
            title: "Pernikahan",
            year: "1 November 2026",
            text: "Hari yang dinanti telah tiba, kami mengikat Janji Suci dalam ikatan pernikahan yang suci."
        }
    ],

    // ==============================
    // EDIT WEDDING GIFT / AMPLOP DIGITAL
    // ==============================
    gift: [
        {
            bank: "Bank Central Asia (BCA)",           // Contoh: "Bank Syariah Indonesia (BSI)"
            accountNumber: "7180500850",  // Contoh: "7712345678"
            accountName: "Nadira Adiba"     // Contoh: "Nadira Putri R"
        }
    ],

    // ==============================
    // EDIT GALLERY
    // ==============================
    gallery: [
        "images/gallery/photo-01.jpg",
        "images/gallery/photo-02.jpg",
        "images/gallery/photo-03.jpg",
        "images/gallery/photo-04.jpg",
        "images/gallery/photo-05.jpg",
        "images/gallery/photo-06.jpg",
        "images/gallery/photo-07.jpg",
        "images/gallery/photo-08.jpg",
        "images/gallery/photo-09.jpg",
        "images/gallery/photo-10.jpg",
        "images/gallery/photo-11.jpg",
        "images/gallery/photo-12.jpg"
    ],

    // ==============================
    // EDIT VIDEO PREWEDDING
    // ==============================
    videoUrl: "https://drive.google.com/file/d/1lgqipWoKFmvqpHTwqZXNwwI-lYXTOivQ/preview",

    // ==============================
    // EDIT COVER BACKGROUND
    // Aesthetic Arabic Pattern & Symbol Wallpaper (Hanya di awal)
    // ==============================
    coverImages: [
        "images/bg-arabic-aesthetic.svg"
    ],

    // ==============================
    // LOGO MONOGRAM (Kaligrafi Nadira & Fagih)
    // ==============================
    logoMonogram: "images/logo-monogram.jpg",

    // ==============================
    // ILUSTRASI COUPLE (gambar di cover)
    // ==============================
    coupleIllustration: "images/couple-illustration.png?v=20260831",

    // ==============================
    // EDIT MUSIK
    // URL YouTube atau file lokal di folder music/
    // ==============================
    musicFile: "https://youtu.be/8bWRU2ipOwA?si=tFQIe8ChxyD5hCoy",

    // ==============================
    // GOOGLE SPREADSHEET INTEGRATION (OPSIONAL)
    // Masukkan URL Google Apps Script Web App Anda di sini
    // agar data RSVP & ucapan otomatis masuk ke Google Sheet secara realtime
    // (Lihat panduan di file PANDUAN_GOOGLE_SPREADSHEET.md)
    // ==============================
    googleSheetUrl: "",

    // ==============================
    // NAMA TAMU DEFAULT
    // Jika URL tidak punya ?to=NamaTamu
    // ==============================
    defaultGuest: "Man 13"
};


// ============================================================
// JANGAN EDIT DI BAWAH INI KECUALI ANDA TAHU APA YANG DILAKUKAN
// ============================================================


// ==============================
// UTILITY: Baca nama tamu dari URL
// ==============================
function getGuestName() {
    const urlParams = new URLSearchParams(window.location.search);
    const guestName = urlParams.get('to');
    return guestName ? decodeURIComponent(guestName) : weddingData.defaultGuest;
}


// ==============================
// LOADING SCREEN
// ==============================
function initLoadingScreen() {
    const loadingScreen = document.getElementById('loading-screen');
    if (!loadingScreen) return;

    const hide = () => {
        setTimeout(() => {
            loadingScreen.classList.add('hidden');
            setTimeout(() => {
                loadingScreen.style.display = 'none';
            }, 800);
        }, 800);
    };

    if (document.readyState === 'complete') {
        hide();
    } else {
        window.addEventListener('load', hide);
    }
}


// ==============================
// COVER SLIDESHOW
// ==============================
function initCoverSlideshow() {
    const slides = document.querySelectorAll('.cover-slide');
    if (slides.length === 0) return;

    let current = 0;
    slides[0].classList.add('active');

    if (slides.length > 1) {
        setInterval(() => {
            slides[current].classList.remove('active');
            current = (current + 1) % slides.length;
            slides[current].classList.add('active');
        }, 5000);
    }
}


// ==============================
// POPULATE DATA KE HTML
// ==============================
function populateData() {
    const d = weddingData;
    const guestName = getGuestName();

    // Cover / Opening
    const guestEl = document.getElementById('guest-name');
    if (guestEl) guestEl.textContent = guestName;

    const coverDate = document.getElementById('cover-date');
    if (coverDate) {
        const dateObj = new Date(d.weddingDate);
        const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
        coverDate.textContent = dateObj.toLocaleDateString('id-ID', options);
    }

    // Cover illustration
    if (d.coupleIllustration) {
        setAttr('cover-illustration-img', 'src', d.coupleIllustration);
    }

    // Mempelai Wanita (Bride) - ditampilkan pertama
    setText('bride-nickname', d.bride.nickname);
    setText('bride-fullname', d.bride.fullname);
    setText('bride-father', d.bride.father);
    setText('bride-mother', d.bride.mother);
    setAttr('bride-photo', 'src', d.bride.photo);
    setAttr('bride-photo', 'alt', 'Foto ' + d.bride.nickname);
    setupInstagram('bride-instagram', d.bride.instagram);

    // Mempelai Pria (Groom)
    setText('groom-nickname', d.groom.nickname);
    setText('groom-fullname', d.groom.fullname);
    setText('groom-father', d.groom.father);
    setText('groom-mother', d.groom.mother);
    setAttr('groom-photo', 'src', d.groom.photo);
    setAttr('groom-photo', 'alt', 'Foto ' + d.groom.nickname);
    setupInstagram('groom-instagram', d.groom.instagram);

    // Akad Nikah
    setText('akad-day', d.event.akad.day);
    setText('akad-date', d.event.akad.date);
    setText('akad-time', d.event.akad.time);
    setText('akad-venue', d.event.akad.venue);
    setText('akad-address', d.event.akad.address);
    setupMaps('akad-maps-btn', d.event.akad.maps);

    // Resepsi
    setText('reception-day', d.event.reception.day);
    setText('reception-date', d.event.reception.date);
    setText('reception-time', d.event.reception.time);
    setText('reception-venue', d.event.reception.venue);
    setText('reception-address', d.event.reception.address);
    setupMaps('reception-maps-btn', d.event.reception.maps);

    // Gallery
    populateGallery();

    // Wedding Gift
    populateGift();

    // Cover slides background
    populateCoverSlides();
}

// Helper: Set text content by ID
function setText(id, text) {
    const el = document.getElementById(id);
    if (el) el.textContent = text;
}

// Helper: Set attribute by ID
function setAttr(id, attr, value) {
    const el = document.getElementById(id);
    if (el) el.setAttribute(attr, value);
}

// Helper: Setup Instagram link
function setupInstagram(id, username) {
    const el = document.getElementById(id);
    if (!el) return;
    if (username && username.trim() !== '') {
        if (username.startsWith('http://') || username.startsWith('https://')) {
            el.href = username;
        } else {
            el.href = 'https://instagram.com/' + username.replace('@', '');
        }
        el.style.display = 'inline-flex';
    } else {
        el.style.display = 'none';
    }
}

// Helper: Setup Maps button
function setupMaps(id, url) {
    const el = document.getElementById(id);
    if (!el) return;
    if (url) {
        el.href = url;
        el.style.display = 'inline-flex';
    } else {
        el.style.display = 'none';
    }
}


// ==============================
// POPULATE: Cover Slides
// ==============================
function populateCoverSlides() {
    const container = document.getElementById('cover-slides');
    if (!container) return;

    container.innerHTML = '';
    weddingData.coverImages.forEach((img, i) => {
        const div = document.createElement('div');
        div.className = 'cover-slide' + (i === 0 ? ' active' : '');
        div.style.backgroundImage = `url('${img}')`;
        container.appendChild(div);
    });
}


// ==============================
// POPULATE: Love Story Timeline
// ==============================
function populateStory() {
    const container = document.getElementById('story-timeline');
    if (!container) return;

    container.innerHTML = '';
    const progressEl = document.createElement('div');
    progressEl.className = 'timeline-progress';
    progressEl.id = 'timeline-progress';
    container.appendChild(progressEl);

    weddingData.story.forEach((item, i) => {
        const el = document.createElement('div');
        el.className = 'timeline-item reveal';
        el.style.transitionDelay = (i * 0.15) + 's';
        el.innerHTML = `
            <div class="timeline-dot"></div>
            <div class="timeline-number">${item.number}</div>
            <div class="timeline-title">${item.title}</div>
            <div class="timeline-year">${item.year}</div>
            <div class="timeline-text">${item.text}</div>
        `;
        container.appendChild(el);
    });
}


// ==============================
// POPULATE: Gallery
// ==============================
function populateGallery() {
    const container = document.getElementById('gallery-grid');
    if (!container) return;

    container.innerHTML = '';
    weddingData.gallery.forEach((img, i) => {
        const el = document.createElement('div');
        el.className = 'gallery-item reveal-scale';
        el.style.transitionDelay = (i * 0.05) + 's';
        el.setAttribute('data-index', i);
        el.innerHTML = `<img src="${img}" alt="Gallery ${i + 1}" loading="lazy">`;
        el.addEventListener('click', () => openLightbox(i));
        container.appendChild(el);
    });
}


// ==============================
// POPULATE: Video
// ==============================
function populateVideo() {
    const wrapper = document.getElementById('video-content');
    if (!wrapper) return;

    const url = weddingData.videoUrl ? weddingData.videoUrl.trim() : '';

    if (!url) {
        wrapper.innerHTML = `
            <div class="video-placeholder">
                <div class="video-placeholder-icon">▶</div>
                <div class="video-placeholder-text">Video prewedding akan segera hadir</div>
            </div>`;
        return;
    }

    // Cek apakah file video lokal (misal: .mp4, .webm, .mov)
    if (url.match(/\.(mp4|webm|ogg|mov)(\?.*)?$/i)) {
        wrapper.innerHTML = `
            <video controls playsinline preload="metadata" style="width: 100%; height: 100%; object-fit: cover; border-radius: inherit;">
                <source src="${url}" type="video/mp4">
                Browser Anda tidak mendukung tag video.
            </video>`;
        return;
    }

    // Format URL YouTube jika pengguna memasukkan link biasa (watch / youtu.be)
    let embedUrl = url;
    if (url.includes('drive.google.com/file/d/')) {
        embedUrl = url.replace(/\/view(\?.*)?$/i, '/preview');
        if (!embedUrl.endsWith('/preview')) {
            embedUrl = embedUrl.replace(/\/+$/, '') + '/preview';
        }
    } else if (url.includes('youtube.com/watch?v=')) {
        const videoId = url.split('watch?v=')[1].split('&')[0];
        embedUrl = 'https://www.youtube.com/embed/' + videoId;
    } else if (url.includes('youtu.be/')) {
        const videoId = url.split('youtu.be/')[1].split('?')[0];
        embedUrl = 'https://www.youtube.com/embed/' + videoId;
    }

    wrapper.innerHTML = `<iframe src="${embedUrl}" 
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
        allowfullscreen loading="lazy" title="Video Prewedding"></iframe>`;
}


// ==============================
// POPULATE: Wedding Gift
// ==============================
function populateGift() {
    const container = document.getElementById('gift-cards');
    if (!container) return;

    container.innerHTML = '';
    weddingData.gift.forEach((item, i) => {
        const el = document.createElement('div');
        el.className = 'gift-card reveal';
        el.style.transitionDelay = (i * 0.15) + 's';
        el.innerHTML = `
            <div class="gift-bank-name">${item.bank}</div>
            <div class="gift-account-number" id="acc-num-${i}">${item.accountNumber}</div>
            <div class="gift-account-name">a.n. ${item.accountName}</div>
            <button class="btn-copy" onclick="copyToClipboard('${item.accountNumber}')">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                    <rect x="9" y="9" width="13" height="13" rx="2" ry="2"></rect>
                    <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path>
                </svg>
                Salin No. Rekening
            </button>
        `;
        container.appendChild(el);
    });
}


// ==============================
// LIGHTBOX GALLERY
// ==============================
let currentLightboxIndex = 0;

function openLightbox(index) {
    currentLightboxIndex = index;
    const lightbox = document.getElementById('lightbox');
    const lightboxImg = document.getElementById('lightbox-img');
    if (!lightbox || !lightboxImg) return;

    lightboxImg.src = weddingData.gallery[index];
    lightbox.classList.add('active');
    document.body.style.overflow = 'hidden';
}

function closeLightbox() {
    const lightbox = document.getElementById('lightbox');
    if (!lightbox) return;
    lightbox.classList.remove('active');
    document.body.style.overflow = '';
}

function prevLightbox() {
    currentLightboxIndex = (currentLightboxIndex - 1 + weddingData.gallery.length) % weddingData.gallery.length;
    document.getElementById('lightbox-img').src = weddingData.gallery[currentLightboxIndex];
}

function nextLightbox() {
    currentLightboxIndex = (currentLightboxIndex + 1) % weddingData.gallery.length;
    document.getElementById('lightbox-img').src = weddingData.gallery[currentLightboxIndex];
}


// ==============================
// COPY TO CLIPBOARD
// ==============================
function copyToClipboard(text) {
    navigator.clipboard.writeText(text).then(() => {
        showToast('Nomor rekening berhasil disalin ✓');
    }).catch(() => {
        // Fallback
        const textarea = document.createElement('textarea');
        textarea.value = text;
        document.body.appendChild(textarea);
        textarea.select();
        document.execCommand('copy');
        document.body.removeChild(textarea);
        showToast('Nomor rekening berhasil disalin ✓');
    });
}
window.copyToClipboard = copyToClipboard;


// ==============================
// TOAST NOTIFICATION
// ==============================
function showToast(message) {
    let toast = document.getElementById('toast');
    if (!toast) {
        toast = document.createElement('div');
        toast.id = 'toast';
        toast.className = 'toast';
        document.body.appendChild(toast);
    }
    toast.textContent = message;
    toast.classList.add('show');
    setTimeout(() => {
        toast.classList.remove('show');
    }, 2500);
}


// ==============================
// COUNTDOWN TIMER
// ==============================
function initCountdown() {
    const countdownDate = new Date(weddingData.weddingDate).getTime();

    function updateCountdown() {
        const now = new Date().getTime();
        const distance = countdownDate - now;

        if (distance <= 0) {
            // Hari pernikahan sudah tiba
            const container = document.getElementById('countdown-container');
            if (container) {
                container.innerHTML = '<div class="countdown-finished">✦ THE DAY HAS ARRIVED ✦</div>';
            }
            return;
        }

        const days = Math.floor(distance / (1000 * 60 * 60 * 24));
        const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((distance % (1000 * 60)) / 1000);

        setText('cd-days', String(days).padStart(2, '0'));
        setText('cd-hours', String(hours).padStart(2, '0'));
        setText('cd-minutes', String(minutes).padStart(2, '0'));
        setText('cd-seconds', String(seconds).padStart(2, '0'));

        requestAnimationFrame(() => {
            setTimeout(updateCountdown, 1000);
        });
    }

    updateCountdown();
}


// ==============================
// OPEN INVITATION (BUKA UNDANGAN)
// ==============================
function initOpenInvitation() {
    const openBtn = document.getElementById('btn-open');
    const openingScreen = document.getElementById('opening-screen');
    const mainInvitation = document.getElementById('main-invitation');
    const bottomNav = document.querySelector('.bottom-nav');
    const desktopNav = document.querySelector('.desktop-nav');
    const musicBtn = document.querySelector('.music-btn');

    if (!openBtn || !openingScreen || !mainInvitation) return;

    openBtn.addEventListener('click', (e) => {
        // Ripple effect
        const rect = openBtn.getBoundingClientRect();
        const ripple = document.createElement('span');
        ripple.className = 'ripple';
        ripple.style.left = (e.clientX - rect.left) + 'px';
        ripple.style.top = (e.clientY - rect.top) + 'px';
        openBtn.appendChild(ripple);
        setTimeout(() => ripple.remove(), 600);

        // Animasi buka undangan
        setTimeout(() => {
            openingScreen.classList.add('opened');
            mainInvitation.classList.add('visible');

            // Tampilkan navigasi
            if (bottomNav) bottomNav.classList.add('visible');
            if (desktopNav) desktopNav.classList.add('visible');
            if (musicBtn) musicBtn.classList.add('visible');

            // Play musik
            playMusic();

            // Scroll ke section pertama
            setTimeout(() => {
                const firstSection = document.getElementById('section-ayat');
                if (firstSection) {
                    firstSection.scrollIntoView({ behavior: 'smooth' });
                }
            }, 600);
        }, 300);
    });
}


// ==============================
// MUSIC PLAYER (YouTube Background Audio & HTML5 Audio)
// ==============================
let audioPlayer = null;
let isMusicPlaying = false;
let ytMusicPlayer = null;
let isYtReady = false;

function getYouTubeVideoId(url) {
    if (!url) return null;
    if (url.includes('youtu.be/')) {
        return url.split('youtu.be/')[1].split(/[?&#]/)[0];
    } else if (url.includes('youtube.com/watch')) {
        const match = url.match(/[?&]v=([^&#]+)/);
        return match ? match[1] : null;
    } else if (url.includes('youtube.com/embed/')) {
        return url.split('youtube.com/embed/')[1].split(/[?&#]/)[0];
    } else if (url.length === 11 && !url.includes('/') && !url.includes('.')) {
        return url;
    }
    return null;
}

function initMusic() {
    const ytId = getYouTubeVideoId(weddingData.musicFile);

    if (ytId) {
        window.onYouTubeIframeAPIReady = function() {
            let container = document.getElementById('yt-music-container');
            if (!container) {
                container = document.createElement('div');
                container.id = 'yt-music-container';
                container.style.cssText = 'position:fixed; bottom:-999px; right:-999px; width:1px; height:1px; opacity:0; pointer-events:none; z-index:-1;';
                document.body.appendChild(container);
            }

            ytMusicPlayer = new YT.Player('yt-music-container', {
                height: '1',
                width: '1',
                videoId: ytId,
                playerVars: {
                    autoplay: 0,
                    controls: 0,
                    loop: 1,
                    playlist: ytId,
                    playsinline: 1,
                    enablejsapi: 1,
                    origin: window.location.origin
                },
                events: {
                    onReady: (e) => {
                        isYtReady = true;
                        try {
                            e.target.setVolume(70);
                        } catch (err) {}
                        if (isMusicPlaying) {
                            ytMusicPlayer.playVideo();
                        }
                    },
                    onStateChange: (e) => {
                        if (e.data === 1) { // YT.PlayerState.PLAYING
                            isMusicPlaying = true;
                            updateMusicBtn(true);
                        } else if (e.data === 2) { // YT.PlayerState.PAUSED
                            isMusicPlaying = false;
                            updateMusicBtn(false);
                        } else if (e.data === 0) { // YT.PlayerState.ENDED
                            if (ytMusicPlayer && ytMusicPlayer.playVideo) {
                                ytMusicPlayer.playVideo();
                            }
                        }
                    }
                }
            });
        };

        if (!window.YT) {
            const tag = document.createElement('script');
            tag.src = "https://www.youtube.com/iframe_api";
            const firstScriptTag = document.getElementsByTagName('script')[0];
            if (firstScriptTag && firstScriptTag.parentNode) {
                firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);
            } else {
                document.head.appendChild(tag);
            }
        } else if (window.YT && window.YT.Player) {
            window.onYouTubeIframeAPIReady();
        }
    } else {
        audioPlayer = new Audio(weddingData.musicFile);
        audioPlayer.loop = true;
        audioPlayer.volume = 0.6;
    }

    const musicBtn = document.querySelector('.music-btn');
    if (!musicBtn) return;

    musicBtn.addEventListener('click', () => {
        if (isMusicPlaying) {
            pauseMusic();
        } else {
            playMusic();
        }
    });
}

function playMusic() {
    isMusicPlaying = true;
    updateMusicBtn(true);

    const ytId = getYouTubeVideoId(weddingData.musicFile);
    if (ytId) {
        if (ytMusicPlayer && typeof ytMusicPlayer.playVideo === 'function') {
            try {
                ytMusicPlayer.unMute();
                ytMusicPlayer.playVideo();
            } catch (err) {
                console.error(err);
            }
        }
        return;
    }

    if (audioPlayer) {
        audioPlayer.play().catch(() => {});
    }
}

function pauseMusic() {
    isMusicPlaying = false;
    updateMusicBtn(false);

    const ytId = getYouTubeVideoId(weddingData.musicFile);
    if (ytId) {
        if (ytMusicPlayer && typeof ytMusicPlayer.pauseVideo === 'function') {
            try {
                ytMusicPlayer.pauseVideo();
            } catch (err) {
                console.error(err);
            }
        }
        return;
    }

    if (audioPlayer) {
        audioPlayer.pause();
    }
}

function updateMusicBtn(playing) {
    const musicBtn = document.querySelector('.music-btn');
    if (!musicBtn) return;
    if (playing) {
        musicBtn.classList.add('playing');
    } else {
        musicBtn.classList.remove('playing');
    }
}


// ==============================
// SCROLL REVEAL (IntersectionObserver)
// ==============================
function initScrollReveal() {
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('revealed');
            }
        });
    }, {
        threshold: 0.15,
        rootMargin: '0px 0px -50px 0px'
    });

    // Observe semua elemen dengan class reveal
    document.querySelectorAll('.reveal, .reveal-left, .reveal-right, .reveal-scale').forEach(el => {
        observer.observe(el);
    });
}


// ==============================
// TIMELINE PROGRESS ANIMATION
// ==============================
function initTimelineProgress() {
    const timeline = document.querySelector('.timeline');
    const progress = document.getElementById('timeline-progress');
    if (!timeline || !progress) return;

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const scrollPercent = Math.min(1, entry.intersectionRatio * 2);
                progress.style.height = (scrollPercent * 100) + '%';
            }
        });
    }, {
        threshold: Array.from({ length: 20 }, (_, i) => i / 20)
    });

    observer.observe(timeline);

    // Also update based on scroll
    window.addEventListener('scroll', () => {
        if (!timeline) return;
        const rect = timeline.getBoundingClientRect();
        const windowHeight = window.innerHeight;
        const scrolled = (windowHeight - rect.top) / (rect.height + windowHeight);
        const percent = Math.max(0, Math.min(1, scrolled)) * 100;
        progress.style.height = percent + '%';
    }, { passive: true });
}


// ==============================
// FLOATING PETALS (MAROON & GOLD)
// ==============================
function initPetals() {
    const container = document.getElementById('petals-container');
    if (!container) return;

    // Periksa performa — kurangi petals di HP
    const isMobile = window.innerWidth < 768;
    const petalCount = isMobile ? 6 : 12;
    const petalColors = ['#9B2D3E', '#7E1A29', '#B33C4E', '#C9A96E', '#8C2333'];

    function createPetal() {
        const petal = document.createElement('div');
        petal.className = 'petal';

        const randomColor = petalColors[Math.floor(Math.random() * petalColors.length)];

        // SVG petal shape
        petal.innerHTML = `<svg viewBox="0 0 24 24"><path d="M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10c.8 0 1.5-.5 1.5-1.2 0-.3-.1-.6-.3-.8-.2-.3-.3-.6-.3-.9 0-.8.5-1.5 1.2-1.5H16c3.3 0 6-2.7 6-6 0-5.5-4.5-10-10-10z" fill="${randomColor}" opacity="0.6"/></svg>`;

        // Random posisi horizontal
        petal.style.left = Math.random() * 100 + '%';

        // Random ukuran
        const size = 12 + Math.random() * 16;
        petal.querySelector('svg').style.width = size + 'px';
        petal.querySelector('svg').style.height = size + 'px';

        // Random durasi animasi (15-30 detik)
        const duration = 15 + Math.random() * 15;
        petal.style.animationDuration = duration + 's';

        // Random delay
        petal.style.animationDelay = Math.random() * 10 + 's';

        container.appendChild(petal);

        // Hapus petal setelah animasi selesai untuk performa
        setTimeout(() => {
            petal.remove();
            createPetal(); // Buat yang baru
        }, (duration + 10) * 1000);
    }

    for (let i = 0; i < petalCount; i++) {
        setTimeout(() => createPetal(), i * 2000);
    }
}


// ==============================
// RSVP & UCAPAN DOA (MERGED)
// Data tersimpan ke Firebase (jika tersedia) + localStorage sebagai backup
// ==============================
let wishesPerPage = 5;
let wishesShown = 0;
let firebaseWishesCache = null; // Cache data dari Firebase
let firebaseRSVPCache = null;   // Cache data RSVP dari Firebase

function initRSVP() {
    const form = document.getElementById('rsvp-form');
    if (!form) return;

    // Load existing wishes (dari localStorage dulu, Firebase menyusul)
    loadWishes();

    // Jika Firebase sudah siap, langsung listen
    if (window.firebaseReady) {
        startFirebaseListeners();
    } else {
        // Tunggu Firebase siap (jika config diisi)
        document.addEventListener('firebase-ready', function () {
            startFirebaseListeners();
        });
    }

    form.addEventListener('submit', (e) => {
        e.preventDefault();

        const name = form.querySelector('#rsvp-name').value.trim();
        const attendanceInput = form.querySelector('input[name="attendance"]:checked');
        const attendance = attendanceInput ? attendanceInput.value : '';
        const message = form.querySelector('#rsvp-message').value.trim();

        if (!name) {
            showToast('Silakan masukkan nama Anda');
            return;
        }
        if (!attendance) {
            showToast('Silakan pilih konfirmasi kehadiran (Hadir / Tidak Hadir)');
            return;
        }
        if (!message) {
            showToast('Silakan tulis ucapan & doa untuk mempelai');
            return;
        }

        const formData = {
            name: name,
            attendance: attendance,
            message: message,
            timestamp: new Date().toISOString()
        };

        // Simpan ke localStorage (offline backup)
        saveRSVP(formData);
        saveWish(formData);

        // Kirim ke JSONBin/Firebase (jika siap)
        if (window.jsonbinReady || window.firebaseReady) {
            window.fbSaveWish(formData)
                .then(allWishes => {
                    // Jika dapat data terbaru dari cloud, langsung render
                    if (allWishes && allWishes.length > 0) {
                        firebaseWishesCache = allWishes;
                        renderWishes(allWishes, false);
                    }
                })
                .catch(err => console.warn('[JSONBin] Gagal simpan:', err));
        }

        // Kirim ke Google Spreadsheet (jika URL sudah diisi)
        if (weddingData.googleSheetUrl && weddingData.googleSheetUrl.trim()) {
            sendRSVPToGoogleSheet(formData);
        }

        // Reset form
        form.reset();

        // Jika Firebase tidak aktif, reload manual
        if (!window.firebaseReady) {
            wishesShown = 0;
            loadWishes();
        }

        showToast('Konfirmasi & doa restu berhasil dikirim ✓');
    });

    // Tombol Export ke CSV / Excel
    const exportBtn = document.getElementById('btn-export-csv');
    if (exportBtn) {
        exportBtn.addEventListener('click', () => {
            exportRSVPToCSV();
        });
    }

    // Load more button
    const loadMoreBtn = document.getElementById('btn-load-wishes');
    if (loadMoreBtn) {
        loadMoreBtn.addEventListener('click', () => {
            loadWishes(true);
        });
    }
}

// Mulai listener Firebase real-time
function startFirebaseListeners() {
    // Listen ucapan
    window.fbListenWishes(function (wishes) {
        firebaseWishesCache = wishes;
        renderWishes(wishes, false);
    });

    // Listen RSVP (untuk export)
    window.fbListenRSVP(function (rsvpList) {
        firebaseRSVPCache = rsvpList;
    });
}

// Kirim data ke Google Apps Script Web App
function sendRSVPToGoogleSheet(data) {
    const url = weddingData.googleSheetUrl.trim();
    if (!url) return;

    fetch(url, {
        method: 'POST',
        mode: 'no-cors',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    }).then(() => {
        console.log('RSVP berhasil disinkronkan ke Google Sheet');
    }).catch(err => {
        console.warn('Gagal sinkron ke Google Sheet:', err);
    });
}

// Download file Excel/CSV data RSVP
function exportRSVPToCSV() {
    // Prioritaskan data dari Firebase, fallback ke localStorage
    let rsvpList = [];

    if (window.firebaseReady && firebaseRSVPCache && firebaseRSVPCache.length > 0) {
        rsvpList = firebaseRSVPCache;
    } else {
        rsvpList = JSON.parse(localStorage.getItem('wedding-rsvp') || '[]');
    }

    if (rsvpList.length === 0) {
        showToast('Belum ada data RSVP yang tersimpan');
        return;
    }

    let csvContent = "data:text/csv;charset=utf-8,\uFEFF";
    csvContent += "Waktu,Nama Tamu,Konfirmasi Kehadiran,Ucapan & Doa\r\n";

    rsvpList.forEach(row => {
        const time = row.timestamp ? new Date(row.timestamp).toLocaleString('id-ID') : '-';
        const name = `"${(row.name || '').replace(/"/g, '""')}"`;
        const attendance = row.attendance === 'hadir' ? 'Hadir' : 'Tidak Hadir';
        const msg = `"${(row.message || '').replace(/"/g, '""')}"`;
        csvContent += `${time},${name},${attendance},${msg}\r\n`;
    });

    const encodedUri = encodeURI(csvContent);
    const link = document.createElement("a");
    link.setAttribute("href", encodedUri);
    link.setAttribute("download", `RSVP_${weddingData.bride.nickname}_${weddingData.groom.nickname}.csv`);
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    showToast('File spreadsheet (.csv) berhasil di-download ✓');
}

// Simpan RSVP ke localStorage (offline backup)
function saveRSVP(data) {
    let rsvpList = JSON.parse(localStorage.getItem('wedding-rsvp') || '[]');
    rsvpList.push(data);
    localStorage.setItem('wedding-rsvp', JSON.stringify(rsvpList));
}

function saveWish(data) {
    let wishesList = JSON.parse(localStorage.getItem('wedding-wishes') || '[]');
    wishesList.unshift(data); // Terbaru di atas
    localStorage.setItem('wedding-wishes', JSON.stringify(wishesList));
}

function loadWishes(loadMore = false) {
    // Jika Firebase sudah aktif dan ada cache, render dari Firebase
    if (window.firebaseReady && firebaseWishesCache !== null) {
        renderWishes(firebaseWishesCache, loadMore);
        return;
    }

    // Fallback: localStorage
    let wishesList = JSON.parse(localStorage.getItem('wedding-wishes') || '[]');
    renderWishes(wishesList, loadMore);
}

// Render daftar ucapan ke DOM
function renderWishes(wishesList, loadMore = false) {
    const container = document.getElementById('wishes-list');
    const loadMoreBtn = document.getElementById('btn-load-wishes');
    const wishesCountEl = document.getElementById('wishes-count');
    if (!container) return;

    // Update count
    if (wishesCountEl) {
        wishesCountEl.innerHTML = '<span class="wishes-count-icon">💌</span> ' + wishesList.length + ' Ucapan & Doa';
    }

    if (!loadMore) {
        container.innerHTML = '';
        wishesShown = 0;
    }

    const start = wishesShown;
    const end = Math.min(start + wishesPerPage, wishesList.length);

    for (let i = start; i < end; i++) {
        const wish = wishesList[i];
        const card = document.createElement('div');
        card.className = 'wish-card';

        const timeAgo = getTimeAgo(new Date(wish.timestamp));
        const attendanceBadge = wish.attendance === 'hadir'
            ? '<span class="wish-badge wish-badge-hadir">✓ Hadir</span>'
            : '<span class="wish-badge wish-badge-tidak">✗ Tidak Hadir</span>';

        card.innerHTML = `
            <div class="wish-card-top">
                <div class="wish-name">${escapeHtml(wish.name)}</div>
                ${attendanceBadge}
            </div>
            <div class="wish-time">${timeAgo}</div>
            <div class="wish-message">${escapeHtml(wish.message)}</div>
        `;
        container.appendChild(card);
    }

    wishesShown = end;

    // Show/hide load more button
    if (loadMoreBtn) {
        loadMoreBtn.style.display = wishesShown >= wishesList.length ? 'none' : 'inline-flex';
    }
}

// initWishes is now merged into initRSVP — keep as no-op for compatibility
function initWishes() {
    // Merged into initRSVP
}

// Helper: Format waktu relatif
function getTimeAgo(date) {
    const seconds = Math.floor((new Date() - date) / 1000);
    if (seconds < 60) return 'Baru saja';
    if (seconds < 3600) return Math.floor(seconds / 60) + ' menit yang lalu';
    if (seconds < 86400) return Math.floor(seconds / 3600) + ' jam yang lalu';
    return Math.floor(seconds / 86400) + ' hari yang lalu';
}

// Helper: Escape HTML untuk keamanan
function escapeHtml(text) {
    const div = document.createElement('div');
    div.textContent = text;
    return div.innerHTML;
}


// ==============================
// BOTTOM NAVIGATION (Active state)
// ==============================
function initNavigation() {
    const sections = document.querySelectorAll('.section[id]');
    const navItems = document.querySelectorAll('.bottom-nav-item, .desktop-nav-item');

    if (sections.length === 0 || navItems.length === 0) return;

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const sectionId = entry.target.id;
                navItems.forEach(item => {
                    item.classList.remove('active');
                    if (item.getAttribute('href') === '#' + sectionId) {
                        item.classList.add('active');
                    }
                });
            }
        });
    }, {
        threshold: 0.3
    });

    sections.forEach(section => observer.observe(section));

    // Smooth scroll for nav items
    navItems.forEach(item => {
        item.addEventListener('click', (e) => {
            e.preventDefault();
            const targetId = item.getAttribute('href');
            const targetEl = document.querySelector(targetId);
            if (targetEl) {
                targetEl.scrollIntoView({ behavior: 'smooth' });
            }
        });
    });
}


// ==============================
// LIGHTBOX KEYBOARD NAVIGATION
// ==============================
function initLightboxKeyboard() {
    document.addEventListener('keydown', (e) => {
        const lightbox = document.getElementById('lightbox');
        if (!lightbox || !lightbox.classList.contains('active')) return;

        if (e.key === 'Escape') closeLightbox();
        if (e.key === 'ArrowLeft') prevLightbox();
        if (e.key === 'ArrowRight') nextLightbox();
    });

    // Close on background click
    const lightbox = document.getElementById('lightbox');
    if (lightbox) {
        lightbox.addEventListener('click', (e) => {
            if (e.target === lightbox) closeLightbox();
        });
    }
}


// ==============================
// LIGHTBOX SWIPE (Mobile)
// ==============================
function initLightboxSwipe() {
    const lightboxImg = document.getElementById('lightbox-img');
    if (!lightboxImg) return;

    let touchStartX = 0;
    let touchEndX = 0;

    lightboxImg.addEventListener('touchstart', (e) => {
        touchStartX = e.changedTouches[0].screenX;
    }, { passive: true });

    lightboxImg.addEventListener('touchend', (e) => {
        touchEndX = e.changedTouches[0].screenX;
        const diff = touchStartX - touchEndX;
        if (Math.abs(diff) > 50) {
            if (diff > 0) nextLightbox();
            else prevLightbox();
        }
    }, { passive: true });
}


// ==============================
// INISIALISASI SEMUA
// ==============================
document.addEventListener('DOMContentLoaded', () => {
    // 1. Loading screen
    initLoadingScreen();

    // 2. Populate data dari konfigurasi ke HTML
    populateData();

    // 3. Cover slideshow
    initCoverSlideshow();

    // 4. Buka undangan button
    initOpenInvitation();

    // 5. Music player
    initMusic();

    // 6. Countdown timer
    initCountdown();

    // 7. Scroll reveal animations
    initScrollReveal();

    // 8. Timeline progress
    initTimelineProgress();

    // 9. Floating petals
    initPetals();

    // 10. RSVP form
    initRSVP();

    // 11. Ucapan & Doa
    initWishes();

    // 12. Navigation
    initNavigation();

    // 13. Lightbox keyboard
    initLightboxKeyboard();

    // 14. Lightbox swipe
    initLightboxSwipe();
});
