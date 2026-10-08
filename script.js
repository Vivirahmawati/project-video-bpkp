
/* ==========================================
   PROJECT VIDEO BPKP
   SCRIPT.JS - DENGAN THUMBNAIL
========================================== */


/* ==========================================
   1. DATA 18 VIDEO GOOGLE DRIVE
========================================== */

const videos = [
  {
    title: "Video Perhitungan ABK JF Perencana",
    id: "1w7XcqgpYApwKaVGtHa3BuNOHAyLWwN-s",
    thumbnail: "images/jf_perencana.jpeg"
  },
  {
    title: "Pustakawan",
    id: "1V7DxZfr26b53L4iNReDZwW2kcB8ySSaD",
    thumbnail: "images/pustakawan.jpeg"
  },
  {
    title: "Perancang PPU",
    id: "1W3BaDHCRGyT7NidWPfyGmCq0uNAfaIpq",
    thumbnail: "images/ppu.jpeg"
  },
  {
    title: "Pengembang Teknologi Pembelajaran",
    id: "1CDw1NrEXS7XcqnSFofGlvAiMKJPE0Bbv",
    thumbnail: "images/teknologi_pembelajaran.jpeg"
  },
  {
    title: "JF Statistisi",
    id: "1BqbHyTJ-uRkNPBox-z9qMdIPXjg_CmZ9",
    thumbnail: "images/statistisi.jpeg"
  },
  {
    title: "JF Pranata Humas",
    id: "1TjnFDSmAGzMQyGno6WMdUtlWZmAQr79-",
    thumbnail: "images/pranata_humas.jpeg"
  },
  {
    title: "JF PPBJ",
    id: "1AI3zp59A0sFvVX-Xc1gEK3wdTpm1RKZd",
    thumbnail: "images/barang_jasa.jpeg"
  },
  {
    title: "JF APBN",
    id: "1T50eEEKlOX4g0hZkFg6PWNRSnsAf-LfZ",
    thumbnail: "images/apbn.jpeg"
  },
  {
    title: "Widyaiswara",
    id: "1Uac3EyBeg2zT9osUEmiShgYDf0Rb42-6",
    thumbnail: "images/widyaiswara.jpeg"
  },
  {
    title: "Pranata SDMA",
    id: "17m5kr9QTBPobvJT3l8I_w38Z-suZAGgj",
    thumbnail: "images/jf_pranada_sdma.jpeg"
  },
  {
    title: "Pranata Komputer",
    id: "15XdFHN1AAA_3IDkVqbX3dxJ13jr3gnyq",
    thumbnail: "images/pranata_komputer.jpeg"
  },
  {
    title: "Pranata Laksana Barang",
    id: "18MBxV5J3NTzbPKzod4S-23KaGxFQ8Az6",
    thumbnail: "images/penata_laksana_barang.jpeg"
  },
  {
    title: "Asesor SDMA",
    id: "1TomJH5wg16b8W3Ab50zJ2js6BYVGB6n6",
    thumbnail: "images/asesor_sdma.jpeg"
  },
  {
    title: "Arsiparis",
    id: "1eJuJGLrBgoLaHj6VgnRmeJ9gggxQzF84",
    thumbnail: "images/arsiparis.jpeg"
  },
  {
    title: "Analis SDMA",
    id: "1VVAUpUYnY8JIv-TMx8fWCEF3nI4bx7pQ",
    thumbnail: "images/jf_analisis_sdma.jpeg"
  },
  {
    title: "Analis Kebijakan",
    id: "1ZLOCSryjZFcaD_OcRja0ZuF_hZAdYx1J",
    thumbnail: "images/jf_analisis_kebijakan.jpeg"
  },
  {
    title: "Analis Hukum",
    id: "104JWLfxuCW6sGEeh--5xGYvdnbSdZNe8",
    thumbnail: "images/jf_analisis_hukum.jpeg"
  },
  {
    title: "Analis Anggaran",
    id: "1YfgZakJgt9V451oSn78auA8xXIvzimJl",
    thumbnail: "images/analisi_anggaran.jpeg"
  }
];


/* ==========================================
   2. AMBIL ELEMEN HTML
========================================== */

const videoGrid =
  document.getElementById("videoGrid");

const searchInput =
  document.getElementById("searchInput");

const emptyMessage =
  document.getElementById("emptyMessage");

const videoCounter =
  document.getElementById("videoCounter");

const videoModal =
  document.getElementById("videoModal");

const modalTitle =
  document.getElementById("modalTitle");

const modalPlayer =
  document.getElementById("modalPlayer");

const closeModal =
  document.getElementById("closeModal");


/* ==========================================
   3. MEMBUAT KARTU VIDEO
========================================== */

function createVideoCard(video) {

  const card = document.createElement("article");
  card.className = "video-card";

  // Bagian thumbnail
  const thumbnail = document.createElement("div");
  thumbnail.className = "video-thumbnail";

  // Gambar thumbnail
  const thumbnailImage = document.createElement("img");

  thumbnailImage.src = video.thumbnail;
  thumbnailImage.alt = `Thumbnail ${video.title}`;
  thumbnailImage.className = "thumbnail-image";
  thumbnailImage.loading = "lazy";

  // Tombol play tunggal di tengah
  const playButton = document.createElement("button");

  playButton.type = "button";
  playButton.className = "thumbnail-play";
  playButton.textContent = "▶";

  playButton.setAttribute(
    "aria-label",
    `Putar video ${video.title}`
  );

  // Klik tombol untuk membuka video
  playButton.addEventListener("click", () => {
    playVideo(video);
  });

  // Klik gambar juga bisa membuka video
  thumbnailImage.addEventListener("click", () => {
    playVideo(video);
  });

  thumbnail.append(
    thumbnailImage,
    playButton
  );

  // Informasi video
  const videoInfo = document.createElement("div");
  videoInfo.className = "video-info";

  const videoDetails = document.createElement("div");
  videoDetails.className = "video-details";

  const title = document.createElement("h3");
  title.textContent = video.title;

  const description = document.createElement("p");
  description.className = "video-meta";
  description.textContent =
    "Perhitungan Analisis Beban Kerja";

  videoDetails.append(
    title,
    description
  );

  videoInfo.appendChild(videoDetails);

  card.append(
    thumbnail,
    videoInfo
  );

  return card;
}


/* ==========================================
   4. NORMALISASI PENCARIAN
========================================== */

function normalizeText(text) {

  return String(text)
    .toLocaleLowerCase("id-ID")
    .normalize("NFKC")
    .replace(/\s+/g, " ")
    .trim();

}


/* ==========================================
   5. MENAMPILKAN DAN MEMFILTER VIDEO
========================================== */

function renderVideos(keyword = "") {

  const searchTerm = normalizeText(keyword);

  const filteredVideos = videos.filter((video) => {

    const title = normalizeText(video.title);

    return title.includes(searchTerm);

  });

  const fragment = document.createDocumentFragment();

  filteredVideos.forEach((video) => {

    const card = createVideoCard(video);

    fragment.appendChild(card);

  });

  videoGrid.replaceChildren(fragment);

  videoCounter.textContent =
    `${filteredVideos.length} dari ${videos.length} video tersedia`;

  emptyMessage.hidden =
    filteredVideos.length > 0;

}


/* ==========================================
   6. FITUR PENCARIAN REAL-TIME
========================================== */

searchInput.addEventListener("input", function () {

  renderVideos(this.value);

});

searchInput.addEventListener("search", function () {

  renderVideos(this.value);

});


/* ==========================================
   7. PEMUTAR VIDEO GOOGLE DRIVE
========================================== */

function playVideo(video) {

  const videoUrl =
    `https://drive.google.com/file/d/${video.id}/preview`;

  // Hentikan pemutar sebelumnya
  modalPlayer.replaceChildren();

  modalTitle.textContent = video.title;

  const iframe = document.createElement("iframe");

  iframe.src = videoUrl;
  iframe.title = video.title;

  iframe.setAttribute(
    "allow",
    "autoplay; fullscreen; picture-in-picture"
  );

  iframe.setAttribute("allowfullscreen", "");

  iframe.setAttribute(
    "referrerpolicy",
    "strict-origin-when-cross-origin"
  );

  modalPlayer.appendChild(iframe);

  if (!videoModal.open) {
    videoModal.showModal();
  }

}


/* ==========================================
   8. MENUTUP DAN MENGHENTIKAN VIDEO
========================================== */

function stopVideo() {

  modalPlayer.replaceChildren();

}

function hideVideoModal() {

  if (videoModal.open) {
    videoModal.close();
  }

}

closeModal.addEventListener(
  "click",
  hideVideoModal
);

videoModal.addEventListener(
  "close",
  stopVideo
);


/* ==========================================
   9. KLIK AREA LUAR POPUP
========================================== */

videoModal.addEventListener("click", function (event) {

  if (event.target !== videoModal) {
    return;
  }

  const rect = videoModal.getBoundingClientRect();

  const outside =
    event.clientX < rect.left ||
    event.clientX > rect.right ||
    event.clientY < rect.top ||
    event.clientY > rect.bottom;

  if (outside) {
    hideVideoModal();
  }

});


/* ==========================================
   10. TAMPILKAN VIDEO
========================================== */

renderVideos();
