// ==========================================
// 1. BRAND & LOGO (YAHAN SE CHANGE KAREIN)
// ==========================================
const BRAND = {
  name: "MOVIE STAR",
  tagline: "PRO",
  logoUrl: "", // Apni logo image ka naam (jaise "logo.png") yahan daalein
  showSplash: true
};

// ==========================================
// 2. TMDB & BEST WORKING SERVERS
// ==========================================
const CONFIG = {
  API_KEY: "d1c0e44767ffcaf33898ca72417e7222",
  IMG_POSTER: "https://image.tmdb.org/t/p/w500",
  IMG_BACKDROP: "https://image.tmdb.org/t/p/w1280",
  IMG_FACE: "https://image.tmdb.org/t/p/w185",
  IMG_STILL: "https://image.tmdb.org/t/p/w300"
};

const SERVERS = [
  {
    id: "vidlink",
    name: "Server 1 (Fast HD)",
    getUrl: (t, id, s, e) => t === "tv"
      ? `https://vidlink.pro/tv/${id}/${s}/${e}?primaryColor=e50914&autoplay=true`
      : `https://vidlink.pro/movie/${id}?primaryColor=e50914&autoplay=true`
  },
  {
    id: "vidsrc_cc",
    name: "Server 2 (VidSrc Pro)",
    getUrl: (t, id, s, e) => t === "tv"
      ? `https://vidsrc.cc/v2/embed/tv/${id}/${s}/${e}?autoPlay=true`
      : `https://vidsrc.cc/v2/embed/movie/${id}?autoPlay=true`
  },
  {
    id: "autoembed",
    name: "Server 3 (Hindi/Multi)",
    getUrl: (t, id, s, e) => t === "tv"
      ? `https://player.autoembed.cc/embed/tv/${id}/${s}/${e}`
      : `https://player.autoembed.cc/embed/movie/${id}`
  },
  {
    id: "vidsrc_icu",
    name: "Server 4 (HD Backup)",
    getUrl: (t, id, s, e) => t === "tv"
      ? `https://vidsrc.icu/embed/tv/${id}/${s}/${e}`
      : `https://vidsrc.icu/embed/movie/${id}`
  },
  {
    id: "embed_su",
    name: "Server 5 (Multi Audio)",
    getUrl: (t, id, s, e) => t === "tv"
      ? `https://embed.su/embed/tv/${id}/${s}/${e}`
      : `https://embed.su/embed/movie/${id}`
  }
];

// ==========================================
// 3. LIVE CRICKET CHANNELS & MATCHES (EDITABLE)
// ==========================================
const CRICKET_CONFIG = {
  // Yahan aap koi bhi working Live Stream iframe URL daal sakte hain
  liveChannels: [
    {
      id: "hindi_hd",
      name: "Star Sports 1 Hindi (Live HD)",
      tag: "LIVE • HINDI",
      embedUrl: "https://crichdplayer.xyz/embed2.php?id=starsp1"
    },
    {
      id: "eng_hd",
      name: "Star Sports 1 English (HD)",
      tag: "LIVE • ENG",
      embedUrl: "https://crichdplayer.xyz/embed2.php?id=starsp"
    },
    {
      id: "willow",
      name: "Willow Cricket HD",
      tag: "LIVE • INTL",
      embedUrl: "https://crichdplayer.xyz/embed2.php?id=willow"
    },
    {
      id: "sky_cric",
      name: "Sky Sports Cricket",
      tag: "LIVE • UK",
      embedUrl: "https://crichdplayer.xyz/embed2.php?id=skyscric"
    }
  ],
  // Latest Cricket Matches / Highlights (YouTube Video IDs — hamesha chalenge)
  highlights: [
    { title: "India vs Australia — Latest Match Highlights", badge: "HIGHLIGHTS", ytId: "b2q2yX-0M2w" },
    { title: "IPL Super Over & Best Sixes Compilation", badge: "T20", ytId: "1o2f7eS3b8M" },
    { title: "ICC World Cup — India's Best Moments", badge: "INDIA", ytId: "3P1CnWI62Ik" }
  ]
};

// ==========================================
// 4. ALL CATEGORIES (HINDI PRIORITY + UPCOMING)
// ==========================================
const CATEGORIES = [
  { id: "hindi_trending", title: "Top Hindi Movies", icon: "ri-fire-fill", badge: "HINDI", color: "linear-gradient(135deg,#e50914,#991b1b)", type: "movie", url: (p=1) => `https://api.themoviedb.org/3/discover/movie?api_key=${CONFIG.API_KEY}&with_original_language=hi&sort_by=popularity.desc&page=${p}` },
  { id: "upcoming", title: "Upcoming Releases", icon: "ri-calendar-event-fill", badge: "UPCOMING", color: "linear-gradient(135deg,#ea580c,#9a3412)", type: "movie", url: (p=1) => `https://api.themoviedb.org/3/movie/upcoming?api_key=${CONFIG.API_KEY}&region=IN&page=${p}` },
  { id: "hindi_adult", title: "Hindi 18+ Bold & Adult", icon: "ri-fire-line", badge: "18+ HINDI", adult: true, color: "linear-gradient(135deg,#be123c,#4c0519)", type: "movie", url: (p=1) => `https://api.themoviedb.org/3/discover/movie?api_key=${CONFIG.API_KEY}&include_adult=true&with_original_language=hi&with_keywords=190370|155477|159551|293198&sort_by=popularity.desc&page=${p}`, fallbackUrl: (p=1) => `https://api.themoviedb.org/3/discover/movie?api_key=${CONFIG.API_KEY}&include_adult=true&with_original_language=hi&with_genres=10749,53&sort_by=popularity.desc&page=${p}` },
  { id: "global_adult", title: "18+ Erotic & Sexual Cinema", icon: "ri-heart-pulse-fill", badge: "18+ ADULT", adult: true, color: "linear-gradient(135deg,#db2777,#701a75)", type: "movie", url: (p=1) => `https://api.themoviedb.org/3/discover/movie?api_key=${CONFIG.API_KEY}&include_adult=true&with_keywords=190370|155477|293198&sort_by=popularity.desc&page=${p}`, fallbackUrl: (p=1) => `https://api.themoviedb.org/3/discover/movie?api_key=${CONFIG.API_KEY}&include_adult=true&certification_country=US&certification=NC-17|R&with_genres=10749&sort_by=popularity.desc&page=${p}` },
  { id: "hindi_series", title: "Hindi Web Series", icon: "ri-tv-2-fill", badge: "SERIES", color: "linear-gradient(135deg,#2563eb,#1e3a8a)", type: "tv", url: (p=1) => `https://api.themoviedb.org/3/discover/tv?api_key=${CONFIG.API_KEY}&with_original_language=hi&sort_by=popularity.desc&page=${p}` },
  { id: "hindi_drama", title: "Hindi Drama", icon: "ri-emotion-fill", badge: "DRAMA", color: "linear-gradient(135deg,#7c3aed,#4c1d95)", type: "movie", url: (p=1) => `https://api.themoviedb.org/3/discover/movie?api_key=${CONFIG.API_KEY}&with_original_language=hi&with_genres=18&sort_by=popularity.desc&page=${p}` },
  { id: "romantic", title: "Romantic & Love", icon: "ri-hearts-fill", badge: "ROMANCE", color: "linear-gradient(135deg,#ec4899,#9d174d)", type: "movie", url: (p=1) => `https://api.themoviedb.org/3/discover/movie?api_key=${CONFIG.API_KEY}&with_original_language=hi&with_genres=10749&sort_by=popularity.desc&page=${p}` },
  { id: "cartoon", title: "Cartoons & Anime", icon: "ri-bear-smile-fill", badge: "CARTOON", color: "linear-gradient(135deg,#059669,#064e3b)", type: "movie", url: (p=1) => `https://api.themoviedb.org/3/discover/movie?api_key=${CONFIG.API_KEY}&with_genres=16&sort_by=popularity.desc&page=${p}` },
  { id: "south", title: "South Indian Hits", icon: "ri-flashlight-fill", badge: "SOUTH", color: "linear-gradient(135deg,#d97706,#78350f)", type: "movie", url: (p=1) => `https://api.themoviedb.org/3/discover/movie?api_key=${CONFIG.API_KEY}&with_original_language=te|ta|ml|kn&sort_by=popularity.desc&page=${p}` },
  { id: "scifi", title: "Science Fiction", icon: "ri-aliens-fill", badge: "SCI-FI", color: "linear-gradient(135deg,#0891b2,#164e63)", type: "movie", url: (p=1) => `https://api.themoviedb.org/3/discover/movie?api_key=${CONFIG.API_KEY}&with_genres=878&sort_by=popularity.desc&page=${p}` },
  { id: "crime", title: "Crime & Gangster", icon: "ri-police-badge-fill", badge: "CRIME", color: "linear-gradient(135deg,#475569,#0f172a)", type: "movie", url: (p=1) => `https://api.themoviedb.org/3/discover/movie?api_key=${CONFIG.API_KEY}&with_genres=80&sort_by=popularity.desc&page=${p}` },
  { id: "music", title: "Music & Musicals", icon: "ri-music-2-fill", badge: "MUSIC", color: "linear-gradient(135deg,#9333ea,#581c87)", type: "movie", url: (p=1) => `https://api.themoviedb.org/3/discover/movie?api_key=${CONFIG.API_KEY}&with_genres=10402&sort_by=popularity.desc&page=${p}` },
  { id: "action", title: "Action & Thriller", icon: "ri-sword-fill", badge: "ACTION", color: "linear-gradient(135deg,#dc2626,#450a0a)", type: "movie", url: (p=1) => `https://api.themoviedb.org/3/discover/movie?api_key=${CONFIG.API_KEY}&with_genres=28&sort_by=popularity.desc&page=${p}` },
  { id: "horror", title: "Horror & Mystery", icon: "ri-ghost-2-fill", badge: "HORROR", color: "linear-gradient(135deg,#334155,#020617)", type: "movie", url: (p=1) => `https://api.themoviedb.org/3/discover/movie?api_key=${CONFIG.API_KEY}&with_genres=27,9648&sort_by=popularity.desc&page=${p}` },
  { id: "global_tv", title: "Trending TV Shows", icon: "ri-global-fill", badge: "TV SHOWS", color: "linear-gradient(135deg,#0284c7,#0c4a6e)", type: "tv", url: (p=1) => `https://api.themoviedb.org/3/trending/tv/week?api_key=${CONFIG.API_KEY}&page=${p}` }
];

// ==========================================
// 5. STORAGE & CLEAN DOWNLOAD CONFIG
// ==========================================
const DOWNLOAD_CONFIG = {
  // Agar kisi movie ka Direct .mp4 file link ho toh TMDB ID ke saath yahan daalein:
  directLinks: {
    // Example: "550": { "480p": "https://cdn.yoursite.com/movie-480p.mp4", "720p": "https://cdn.yoursite.com/movie-720p.mp4" }
  },
  // Apna Telegram Channel / Bot link jahan se users direct file download kar sakein:
  telegramBotUrl: "https://t.me/yourchannel"
};

const Store = {
  getWatchlist: () => JSON.parse(localStorage.getItem("ms_watchlist") || "[]"),
  isSaved: (type, id) => Store.getWatchlist().some(x => x.type === type && String(x.id) === String(id)),
  toggleWatchlist(item) {
    let list = Store.getWatchlist();
    if (Store.isSaved(item.type, item.id)) {
      list = list.filter(x => !(x.type === item.type && String(x.id) === String(item.id)));
      localStorage.setItem("ms_watchlist", JSON.stringify(list));
      return false;
    }
    list.unshift(item);
    localStorage.setItem("ms_watchlist", JSON.stringify(list.slice(0, 60)));
    return true;
  },
  getHistory: () => JSON.parse(localStorage.getItem("ms_history") || "[]"),
  addHistory(item) {
    let list = Store.getHistory().filter(x => !(x.type === item.type && String(x.id) === String(item.id)));
    list.unshift({ ...item, watchedAt: Date.now() });
    localStorage.setItem("ms_history", JSON.stringify(list.slice(0, 20)));
  },
  getDownloads: () => JSON.parse(localStorage.getItem("ms_downloads") || "[]"),
  saveDownloads: (list) => localStorage.setItem("ms_downloads", JSON.stringify(list)),
  addDownload(item) {
    let list = Store.getDownloads();
    const uid = `${item.type}_${item.id}_${item.quality}`;
    if (list.some(d => d.uid === uid)) return uid;
    list.unshift({ ...item, uid, progress: 0, status: "ready", addedAt: Date.now() });
    Store.saveDownloads(list);
    return uid;
  },
  deleteDownloads(uids) {
    const set = new Set(uids);
    Store.saveDownloads(Store.getDownloads().filter(d => !set.has(d.uid)));
  }
};

function esc(str) {
  return String(str || "").replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;").replace(/'/g, "&#39;");
}

function goToWatch(type, id) {
  window.location.href = `watch.html?type=${encodeURIComponent(type)}&id=${encodeURIComponent(id)}`;
}

function makeCardHTML(item, fallbackType = "movie", isAdult = false) {
  const type = (item.media_type === "tv" || item.media_type === "movie") ? item.media_type : (item.type || fallbackType);
  const title = item.title || item.name || "Untitled";
  const year = (item.release_date || item.first_air_date || "").split("-")[0] || "New";
  const rating = item.vote_average ? item.vote_average.toFixed(1) : "—";
  const lang = (item.original_language || "").toUpperCase();
  const poster = item.poster_path ? CONFIG.IMG_POSTER + item.poster_path : "https://via.placeholder.com/300x450/141622/64748b?text=No+Poster";

  return `
    <div class="m-card" onclick="goToWatch('${type}', '${item.id}')">
      <div class="m-poster">
        <img src="${poster}" alt="${esc(title)}" loading="lazy" />
        <span class="badge-tl ${isAdult ? "adult" : ""}">${isAdult ? "18+" : (type === "tv" ? "SERIES" : "HD")}</span>
        <span class="badge-tr"><i class="ri-star-fill"></i> ${rating}</span>
        <div class="m-play-hover"><i class="ri-play-circle-fill"></i></div>
      </div>
      <div class="m-info">
        <div class="m-title">${esc(title)}</div>
        <div class="m-meta"><span>${year}</span><span>${lang}</span></div>
      </div>
    </div>
  `;
}

async function fetchCategoryItems(cat, page = 1) {
  const res = await fetch(cat.url(page));
  const data = await res.json();
  let results = (data.results || []).filter(i => i.media_type !== "person");
  if (cat.fallbackUrl && results.length < 12) {
    try {
      const fb = await fetch(cat.fallbackUrl(page)).then(r => r.json());
      const ids = new Set(results.map(r => r.id));
      (fb.results || []).forEach(it => { if (!ids.has(it.id)) results.push(it); });
    } catch (e) {}
  }
  return { results, total_pages: data.total_pages || 1 };
}

// ==========================================
// 6. BRAND LOGO & SPLASH SCREEN
// ==========================================
function applyBrandAndSplash() {
  document.querySelectorAll(".brand").forEach(el => {
    if (BRAND.logoUrl) {
      el.innerHTML = `<img src="${BRAND.logoUrl}" alt="${BRAND.name}" style="height:34px;object-fit:contain;" />`;
    } else {
      el.innerHTML = `${BRAND.name} <span class="brand-pill">${BRAND.tagline}</span>`;
    }
  });

  if (BRAND.showSplash && !sessionStorage.getItem("ms_splash_done")) {
    sessionStorage.setItem("ms_splash_done", "1");
    const splash = document.createElement("div");
    splash.style.cssText = "position:fixed;inset:0;z-index:9999;background:#06070b;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:16px;transition:opacity 0.45s ease;";
    splash.innerHTML = `
      ${BRAND.logoUrl
        ? `<img src="${BRAND.logoUrl}" style="height:76px;object-fit:contain;" />`
        : `<div style="font-size:34px;font-weight:900;background:linear-gradient(135deg,#e50914,#ff3d5a);-webkit-background-clip:text;-webkit-text-fill-color:transparent;letter-spacing:1.5px;">${BRAND.name}</div>`
      }
      <div style="width:140px;height:4px;background:#1b1f30;border-radius:10px;overflow:hidden;">
        <div id="splashBar" style="width:0%;height:100%;background:#e50914;transition:width 1s ease;"></div>
      </div>
    `;
    document.body.appendChild(splash);
    setTimeout(() => { const b = document.getElementById("splashBar"); if (b) b.style.width = "100%"; }, 40);
    setTimeout(() => { splash.style.opacity = "0"; setTimeout(() => splash.remove(), 450); }, 1150);
  }
}

document.addEventListener("DOMContentLoaded", applyBrandAndSplash);