/* =========================================================
   PROJECT VIDEO BPKP
   SCRIPT.JS
   VIDEO + SEARCH + FLYER + CAROUSEL + MODAL
========================================================= */


/* =========================================================
   1. DATA 18 VIDEO GOOGLE DRIVE
========================================================= */

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


/* =========================================================
   2. DATA FLYER
========================================================= */

/*
   Masukkan file flyer ke folder:

   images/flyer/

   Contoh:
   images/flyer/asesor_sdma.jpeg
*/

const flyers = [
  {
    title: "Perhitungan Kebutuhan Formasi JF Analisis Anggaran",
    image: "flyer/JF_ANAISIS_ANGGARAN.png"
  },
  {
    title: "Analisis Beban Kerja Dan Perhitungan Formasi JF Perencana",
    image: "flyer/JF_PERENCANA.png"
  },
  {
    title: "Perhitungan Kebutuhan Formasi Perancang Peraturan Undang-Undang",
    image: "flyer/PERANCANG_PPU.png"
  },
  {
    title: "Tata Cara Perhitungan Pengembang Teknologi Pembelajaran",
    image: "flyer/TEKNOLOGI_PEMBELAJARAN.png"
  },

  /*
  TAMBAHKAN FLYER LAIN DI SINI
  */

  {
    title: "Perhitungan Kebutuhan Formasi Jabtan Fungsional Statistisi",
    image: "flyer/JF_STATISTISI.png"
  }, 

  {
    title: "Analisis Beban Kerja Dan Perhitungan Formasi JF Widyaiswara",
    image: "flyer/JF_WIDYAISWARA.png"
  },
  {
    title: "Analisis Beban Kerja Dan Perhitungan Formasi JF Asesor SDMA",
    image: "flyer/JF_ASESOR_SDMA.png"
  },

  {
    title: "Tata Cara Perhitungan Formasi Pustakawan",
    image: "flyer/PUSTAKAWAN.png"
  },

  {
    title: "Analisis Beban Kerja Dan Perhitungan Formasi JF Penata Laksana Barang",
    image: "flyer/JF_PENATA_LAKSANA_BARANG.png"
  },

  {
    title: "Analisis Beban Kerja Dan Perhitungan Formasi JF Pranata Humas",
    image: "flyer/JF_PRANATA_HUMAS.png"
  },

  {
    title: "Analisis Beban Kerja Dan Perhitungan Formasi JF Arsiparis",
    image: "flyer/JF_ARSIPARIS.png"
  },

  {
    title: "Analisis Beban Kerja Dan Perhitungan Formasi JF Analisis SDMA",
    image: "flyer/JF_ANALISIS_SDMA.png"
  },

   {
    title: "Analisis Beban Kerja JF Pengelola Pengadaan Barang atau Jada",
    image: "flyer/JF_PPBJ.png"
  },

  {
    title: "Analisis Beban Kerja Dan Perhitungan Formasi JF Pranata Komputer",
    image: "flyer/JF_ARSIPARIS.png"
  },

  {
    title: "Analisis Pengelolaan APBN Dan Pranata Keunagan APBN",
    image: "flyer/JF_APBN.png"
  },

  {
    title: "Perhitungan Kebutuhan Formasi JF Analisis Hukum ",
    image: "flyer/ANALISIS_HUKUM.png"
  },

   {
    title: "Analisis Beban Kerja JF Analisis Kebijakan",
    image: "flyer/JF_ANALISIS_KEBIJAKAN.png"
  },

  {
    title: "Analisis Beban Kerja Dan Perhitungan Formasi JF Pranata SDMA",
    image: "flyer/PRANATA_SDMA.png"
  },
];


/* =========================================================
   3. AMBIL ELEMEN VIDEO
========================================================= */

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


/* =========================================================
   4. AMBIL ELEMEN FLYER
========================================================= */

const flyerCarousel =
  document.getElementById("flyerCarousel");

const flyerPrev =
  document.getElementById("flyerPrev");

const flyerNext =
  document.getElementById("flyerNext");

const viewAllFlyers =
  document.getElementById("viewAllFlyers");

const flyerModal =
  document.getElementById("flyerModal");

const flyerModalTitle =
  document.getElementById("flyerModalTitle");

const flyerModalImage =
  document.getElementById("flyerModalImage");

const closeFlyerModal =
  document.getElementById("closeFlyerModal");

const carouselDots =
  document.querySelector(".carousel-dots");


/* =========================================================
   5. MEMBUAT KARTU VIDEO
========================================================= */

function createVideoCard(video) {

  const card = document.createElement("article");
  card.className = "video-card";


  /* THUMBNAIL */

  const thumbnail = document.createElement("div");
  thumbnail.className = "video-thumbnail";


  const thumbnailImage =
    document.createElement("img");

  thumbnailImage.src =
    video.thumbnail;

  thumbnailImage.alt =
    `Thumbnail ${video.title}`;

  thumbnailImage.className =
    "thumbnail-image";

  thumbnailImage.loading =
    "lazy";


  /* TOMBOL PLAY */

  const playButton =
    document.createElement("button");

  playButton.type =
    "button";

  playButton.className =
    "thumbnail-play";

  playButton.textContent =
    "▶";

  playButton.setAttribute(
    "aria-label",
    `Putar video ${video.title}`
  );


  playButton.addEventListener(
    "click",
    () => playVideo(video)
  );


  thumbnailImage.addEventListener(
    "click",
    () => playVideo(video)
  );


  thumbnail.append(
    thumbnailImage,
    playButton
  );


  /* INFORMASI VIDEO */

  const videoInfo =
    document.createElement("div");

  videoInfo.className =
    "video-info";


  const videoDetails =
    document.createElement("div");

  videoDetails.className =
    "video-details";


  const title =
    document.createElement("h3");

  title.textContent =
    video.title;


  const description =
    document.createElement("p");

  description.className =
    "video-meta";

  description.textContent =
    "Perhitungan Analisis Beban Kerja";


  videoDetails.append(
    title,
    description
  );


  videoInfo.appendChild(
    videoDetails
  );


  card.append(
    thumbnail,
    videoInfo
  );


  return card;
}


/* =========================================================
   6. NORMALISASI PENCARIAN
========================================================= */

function normalizeText(text) {

  return String(text)
    .toLocaleLowerCase("id-ID")
    .normalize("NFKC")
    .replace(/\s+/g, " ")
    .trim();

}


/* =========================================================
   7. MENAMPILKAN VIDEO
========================================================= */

function renderVideos(keyword = "") {

  const searchTerm =
    normalizeText(keyword);


  const filteredVideos =
    videos.filter((video) => {

      const title =
        normalizeText(video.title);

      return title.includes(
        searchTerm
      );

    });


  const fragment =
    document.createDocumentFragment();


  filteredVideos.forEach(
    (video) => {

      const card =
        createVideoCard(video);

      fragment.appendChild(card);

    }
  );


  videoGrid.replaceChildren(
    fragment
  );


  videoCounter.textContent =
    `${filteredVideos.length} dari ${videos.length} video tersedia`;


  emptyMessage.hidden =
    filteredVideos.length > 0;

}


/* =========================================================
   8. SEARCH REAL-TIME
========================================================= */

searchInput.addEventListener(
  "input",
  function () {

    renderVideos(
      this.value
    );

  }
);


searchInput.addEventListener(
  "search",
  function () {

    renderVideos(
      this.value
    );

  }
);


/* =========================================================
   9. PEMUTAR VIDEO GOOGLE DRIVE
========================================================= */

function playVideo(video) {

  const videoUrl =
    `https://drive.google.com/file/d/${video.id}/preview`;


  modalPlayer.replaceChildren();


  modalTitle.textContent =
    video.title;


  const iframe =
    document.createElement("iframe");


  iframe.src =
    videoUrl;

  iframe.title =
    video.title;


  iframe.setAttribute(
    "allow",
    "autoplay; fullscreen; picture-in-picture"
  );


  iframe.setAttribute(
    "allowfullscreen",
    ""
  );


  iframe.setAttribute(
    "referrerpolicy",
    "strict-origin-when-cross-origin"
  );


  modalPlayer.appendChild(
    iframe
  );


  if (!videoModal.open) {

    videoModal.showModal();

  }

}


/* =========================================================
   10. MENUTUP VIDEO
========================================================= */

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


/* CLICK BACKDROP */

videoModal.addEventListener(
  "click",
  function (event) {

    if (
      event.target !==
      videoModal
    ) {
      return;
    }


    const rect =
      videoModal
        .getBoundingClientRect();


    const outside =
      event.clientX < rect.left ||
      event.clientX > rect.right ||
      event.clientY < rect.top ||
      event.clientY > rect.bottom;


    if (outside) {

      hideVideoModal();

    }

  }
);


/* =========================================================
   11. MEMBUAT KARTU FLYER
========================================================= */

function createFlyerCard(flyer) {

  const card =
    document.createElement("article");

  card.className =
    "flyer-card";


  const preview =
    document.createElement("button");

  preview.type =
    "button";

  preview.className =
    "flyer-preview";


  preview.setAttribute(
    "aria-label",
    `Lihat flyer ${flyer.title}`
  );


  /* GAMBAR */

  const image =
    document.createElement("img");

  image.src =
    flyer.image;

  image.alt =
    `Flyer ${flyer.title}`;

  image.loading =
    "lazy";


  /* ICON PREVIEW */

  const previewIcon =
    document.createElement("span");

  previewIcon.className =
    "preview-icon";

  previewIcon.textContent =
    "◉";


  preview.append(
    image,
    previewIcon
  );


  /* JUDUL */

  const title =
    document.createElement("h3");

  title.textContent =
    flyer.title;


  preview.addEventListener(
    "click",
    () => openFlyer(flyer)
  );


  card.append(
    preview,
    title
  );


  return card;
}


/* =========================================================
   12. RENDER FLYER
========================================================= */

function renderFlyers() {

  if (!flyerCarousel) {
    return;
  }


  const fragment =
    document.createDocumentFragment();


  flyers.forEach(
    (flyer) => {

      const card =
        createFlyerCard(flyer);

      fragment.appendChild(card);

    }
  );


  flyerCarousel.replaceChildren(
    fragment
  );


  updateCarouselDots();

}


/* =========================================================
   13. POPUP FLYER
========================================================= */

function openFlyer(flyer) {

  if (!flyerModal) {
    return;
  }


  flyerModalTitle.textContent =
    flyer.title;


  flyerModalImage.src =
    flyer.image;


  flyerModalImage.alt =
    `Flyer ${flyer.title}`;


  if (!flyerModal.open) {

    flyerModal.showModal();

  }

}


/* MENUTUP FLYER */

function hideFlyerModal() {

  if (
    flyerModal &&
    flyerModal.open
  ) {

    flyerModal.close();

  }

}


if (closeFlyerModal) {

  closeFlyerModal.addEventListener(
    "click",
    hideFlyerModal
  );

}


/* BACKDROP FLYER */

if (flyerModal) {

  flyerModal.addEventListener(
    "click",
    function (event) {

      if (
        event.target !==
        flyerModal
      ) {
        return;
      }


      const rect =
        flyerModal
          .getBoundingClientRect();


      const outside =
        event.clientX < rect.left ||
        event.clientX > rect.right ||
        event.clientY < rect.top ||
        event.clientY > rect.bottom;


      if (outside) {

        hideFlyerModal();

      }

    }
  );

}


/* =========================================================
   14. CAROUSEL FLYER
========================================================= */

function getCarouselScrollAmount() {

  const card =
    flyerCarousel
      ?.querySelector(
        ".flyer-card"
      );


  if (!card) {

    return 300;

  }


  const style =
    window.getComputedStyle(
      flyerCarousel
    );


  const gap =
    parseFloat(
      style.columnGap ||
      style.gap ||
      0
    );


  return (
    card.getBoundingClientRect().width +
    gap
  );

}


/* TOMBOL KANAN */

if (flyerNext) {

  flyerNext.addEventListener(
    "click",
    () => {

      flyerCarousel.scrollBy({
        left:
          getCarouselScrollAmount(),

        behavior:
          "smooth"
      });

    }
  );

}


/* TOMBOL KIRI */

if (flyerPrev) {

  flyerPrev.addEventListener(
    "click",
    () => {

      flyerCarousel.scrollBy({
        left:
          -getCarouselScrollAmount(),

        behavior:
          "smooth"
      });

    }
  );

}


/* =========================================================
   15. DOT CAROUSEL
========================================================= */

function getVisibleFlyerCount() {

  const width =
    window.innerWidth;


  if (width <= 430) {

    return 1;

  }


  if (width <= 700) {

    return 2;

  }


  if (width <= 950) {

    return 3;

  }


  return 4;

}


function getTotalPages() {

  const visible =
    getVisibleFlyerCount();


  return Math.max(
    1,
    Math.ceil(
      flyers.length / visible
    )
  );

}


function updateCarouselDots() {

  if (!carouselDots) {
    return;
  }


  carouselDots.innerHTML = "";


  const pages =
    getTotalPages();


  for (
    let index = 0;
    index < pages;
    index++
  ) {

    const dot =
      document.createElement("button");


    dot.type =
      "button";


    dot.className =
      "dot";


    dot.setAttribute(
      "aria-label",
      `Halaman flyer ${index + 1}`
    );


    if (index === 0) {

      dot.classList.add(
        "active"
      );

    }


    dot.addEventListener(
      "click",
      () => {

        scrollFlyerPage(
          index
        );

      }
    );


    carouselDots.appendChild(
      dot
    );

  }

}


/* SCROLL KE PAGE */

function scrollFlyerPage(page) {

  if (!flyerCarousel) {
    return;
  }


  const cardWidth =
    getCarouselScrollAmount();


  const visible =
    getVisibleFlyerCount();


  flyerCarousel.scrollTo({

    left:
      page *
      cardWidth *
      visible,

    behavior:
      "smooth"

  });

}


/* UPDATE DOT SETELAH SCROLL */

function updateActiveDot() {

  if (
    !flyerCarousel ||
    !carouselDots
  ) {
    return;
  }


  const dots =
    carouselDots
      .querySelectorAll(
        ".dot"
      );


  if (!dots.length) {
    return;
  }


  const cardWidth =
    getCarouselScrollAmount();


  const visible =
    getVisibleFlyerCount();


  const pageWidth =
    cardWidth * visible;


  const page =
    Math.round(
      flyerCarousel.scrollLeft /
      pageWidth
    );


  dots.forEach(
    (dot, index) => {

      dot.classList.toggle(
        "active",
        index === page
      );

    }
  );

}


if (flyerCarousel) {

  flyerCarousel.addEventListener(
    "scroll",
    updateActiveDot,
    {
      passive: true
    }
  );

}


/* =========================================================
   16. LIHAT SEMUA FLYER
========================================================= */

let allFlyersVisible = false;


if (viewAllFlyers) {

  viewAllFlyers.addEventListener(
    "click",
    () => {

      allFlyersVisible =
        !allFlyersVisible;


      flyerCarousel.classList.toggle(
        "show-all",
        allFlyersVisible
      );


      viewAllFlyers.innerHTML =
        allFlyersVisible
          ? "Tampilkan Ringkas <span>↑</span>"
          : "Lihat Semua Flyer <span>→</span>";


      if (flyerPrev) {

        flyerPrev.hidden =
          allFlyersVisible;

      }


      if (flyerNext) {

        flyerNext.hidden =
          allFlyersVisible;

      }


      if (carouselDots) {

        carouselDots.hidden =
          allFlyersVisible;

      }

    }
  );

}


/* =========================================================
   17. NAVIGASI
========================================================= */

const navLinks =
  document.querySelectorAll(
    ".nav-link"
  );


navLinks.forEach(
  (link) => {

    link.addEventListener(
      "click",
      function () {

        navLinks.forEach(
          (item) => {

            item.classList.remove(
              "active"
            );

          }
        );


        this.classList.add(
          "active"
        );

      }
    );

  }
);


/* =========================================================
   18. ESCAPE UNTUK MENUTUP MODAL
========================================================= */

document.addEventListener(
  "keydown",
  function (event) {

    if (
      event.key !==
      "Escape"
    ) {
      return;
    }


    hideVideoModal();

    hideFlyerModal();

  }
);


/* =========================================================
   19. RESPONSIVE CAROUSEL
========================================================= */

window.addEventListener(
  "resize",
  () => {

    updateCarouselDots();

    updateActiveDot();

  }
);

/* =========================================================
   20. ABOUT MODAL
========================================================= */

const openAboutModal =
  document.getElementById("openAboutModal");

const aboutModal =
  document.getElementById("aboutModal");

const closeAboutModal =
  document.getElementById("closeAboutModal");


if (
  openAboutModal &&
  aboutModal
) {

  openAboutModal.addEventListener(
    "click",
    () => {

      if (!aboutModal.open) {
        aboutModal.showModal();
      }

    }
  );

}


if (closeAboutModal) {

  closeAboutModal.addEventListener(
    "click",
    () => {

      if (aboutModal.open) {
        aboutModal.close();
      }

    }
  );

}


/* klik area gelap di luar modal */

if (aboutModal) {

  aboutModal.addEventListener(
    "click",
    function (event) {

      if (event.target !== aboutModal) {
        return;
      }

      const rect =
        aboutModal.getBoundingClientRect();

      const outside =
        event.clientX < rect.left ||
        event.clientX > rect.right ||
        event.clientY < rect.top ||
        event.clientY > rect.bottom;

      if (outside) {
        aboutModal.close();
      }

    }
  );

}

/* =========================================================
   21. INITIAL LOAD
========================================================= */

renderVideos();

renderFlyers();