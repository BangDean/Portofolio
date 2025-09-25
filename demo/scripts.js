// Demo data dengan video lokal
const demoData = {
  education: {
    title: "Demo Website Test Bahasa Inggris",
    videoSrc: "videos/demo-pinlish.mkv",
    video: `
      <div class="mb-6">
        <div class="bg-dark-700 rounded-lg p-4">
          <h4 class="text-lg font-semibold mb-4 text-center text-green-400">Video Demo Website Test Bahasa Inggris</h4>
          <div class="relative mb-4">
            <video 
              controls 
              width="100%" 
              height="400"
              class="rounded-lg bg-dark-800"
              poster="">
              <source src="VIDEO_SOURCE_PLACEHOLDER" type="video/mp4">
              <p class="text-gray-400 text-center p-8">Browser Anda tidak mendukung video HTML5.</p>
            </video>
          </div>
          <div class="bg-dark-800 rounded-lg p-3">
            <p class="text-gray-300 text-sm">Website pembelajaran bahasa Inggris dengan sistem point dan kuis interaktif.</p>
          </div>
        </div>
      </div>
    `,
    screenshots: `
      <div class="grid md:grid-cols-2 gap-4">
        <div class="screenshot-item">
          <img src="img/pinlish/1.png" alt="Homepage - Landing page" class="w-full rounded-lg border border-dark-600 mb-2 screenshot-clickable cursor-pointer hover:scale-105 transition-transform duration-300">
          <p class="text-sm text-gray-400 text-center">Homepage - Landing page</p>
        </div>
        <div class="screenshot-item">
          <img src="img/pinlish/2.png" alt="Dashboard - Area pembelajaran" class="w-full rounded-lg border border-dark-600 mb-2 screenshot-clickable cursor-pointer hover:scale-105 transition-transform duration-300">
          <p class="text-sm text-gray-400 text-center">Dashboard - Area pembelajaran</p>
        </div>
        <div class="screenshot-item">
          <img src="img/pinlish/3.png" alt="Quiz - Test bahasa Inggris" class="w-full rounded-lg border border-dark-600 mb-2 screenshot-clickable cursor-pointer hover:scale-105 transition-transform duration-300">
          <p class="text-sm text-gray-400 text-center">Sistem Kuis - Test bahasa Inggris</p>
        </div>
        <div class="screenshot-item">
          <img src="img/pinlish/4.png" alt="Leaderboard - Ranking dan point" class="w-full rounded-lg border border-dark-600 mb-2 screenshot-clickable cursor-pointer hover:scale-105 transition-transform duration-300">
          <p class="text-sm text-gray-400 text-center">Leaderboard - Ranking dan point</p>
        </div>
      </div>
    `
  },
  
  company: {
    title: "Website Penjadwalan Kegiatan Vendor dan Perusahaan",
    videoSrc: "videos/penjadwalan-demo.mkv",
    video: `
      <div class="mb-6">
        <div class="bg-dark-700 rounded-lg p-4">
          <h4 class="text-lg font-semibold mb-4 text-center text-purple-400">Video Demo Penjadwalan Vendor</h4>
          <div class="relative mb-4">
            <video 
              controls 
              width="100%" 
              height="400"
              class="rounded-lg bg-dark-800"
              poster="img/thumbnails/company-thumbnail.jpg">
              <source src="VIDEO_SOURCE_PLACEHOLDER" type="video/mp4">
              <p class="text-gray-400 text-center p-8">Browser Anda tidak mendukung video HTML5.</p>
            </video>
          </div>
          <div class="bg-dark-800 rounded-lg p-3">
            <p class="text-gray-300 text-sm">Website penjadwalan dengan sistem manajemen kegiatan vendor dan perusahaan.</p>
          </div>
        </div>
      </div>
    `,
    screenshots: `
      <div class="grid md:grid-cols-2 gap-4">
        <div class="screenshot-item">
          <img src="img/penjadwalan/1.png" alt="Homepage - Landing page utama" class="w-full rounded-lg border border-dark-600 mb-2 screenshot-clickable cursor-pointer hover:scale-105 transition-transform duration-300">
          <p class="text-sm text-gray-400 text-center">Homepage - Landing page utama</p>
        </div>
        <div class="screenshot-item">
          <img src="img/penjadwalan/2.png" alt="Kegiatan - Halaman Kegiatan" class="w-full rounded-lg border border-dark-600 mb-2 screenshot-clickable cursor-pointer hover:scale-105 transition-transform duration-300">
          <p class="text-sm text-gray-400 text-center">Kegiatan - Halaman Kegiatan</p>
        </div>
        <div class="screenshot-item">
          <img src="img/penjadwalan/3.png" alt="Kalender - Kalender Kegiatan" class="w-full rounded-lg border border-dark-600 mb-2 screenshot-clickable cursor-pointer hover:scale-105 transition-transform duration-300">
          <p class="text-sm text-gray-400 text-center">Kalender - Kalender Kegiatan</p>
        </div>
        <div class="screenshot-item">
          <img src="img/penjadwalan/4.png" alt="Histori - Histori Kegiatan" class="w-full rounded-lg border border-dark-600 mb-2 screenshot-clickable cursor-pointer hover:scale-105 transition-transform duration-300">
          <p class="text-sm text-gray-400 text-center">Histori - Histori Kegiatan</p>
        </div>
      </div>
    `
  },

  kalkulator: {
    title: "Website Kalkulator Listrik",
    videoSrc: "videos/listrik.mkv",
    video: `
      <div class="mb-6">
        <div class="bg-dark-700 rounded-lg p-4">
          <h4 class="text-lg font-semibold mb-4 text-center text-emerald-400">Video Demo Kalkulator Listrik</h4>
          <div class="relative mb-4">
            <video 
              controls 
              width="100%" 
              height="400"
              class="rounded-lg bg-dark-800"
              poster="img/thumbnails/lms-thumbnail.jpg">
              <source src="VIDEO_SOURCE_PLACEHOLDER" type="video/mp4">
              <p class="text-gray-400 text-center p-8">Browser Anda tidak mendukung video HTML5.</p>
            </video>
          </div>
          <div class="bg-dark-800 rounded-lg p-3">
            <p class="text-gray-300 text-sm">Website kalkulator untuk menghitung kebutuhan dan biaya listrik rumah tangga.</p>
          </div>
        </div>
      </div>
    `,
    screenshots: `
      <div class="grid md:grid-cols-2 gap-4">
        <div class="screenshot-item">
          <img src="img/listrik/1.png" alt="Homepage - Landing page utama" class="w-full rounded-lg border border-dark-600 mb-2 screenshot-clickable cursor-pointer hover:scale-105 transition-transform duration-300">
          <p class="text-sm text-gray-400 text-center">Homepage - Landing page utama</p>
        </div>
        <div class="screenshot-item">
          <img src="img/listrik/2.png" alt="Hitung Daya - Perhitungan Daya Dibutuhkan" class="w-full rounded-lg border border-dark-600 mb-2 screenshot-clickable cursor-pointer hover:scale-105 transition-transform duration-300">
          <p class="text-sm text-gray-400 text-center">Hitung Daya - Perhitungan Daya Dibutuhkan</p>
        </div>
        <div class="screenshot-item">
          <img src="img/listrik/3.png" alt="Hitung Harga - Perhitungan Harga Listrik" class="w-full rounded-lg border border-dark-600 mb-2 screenshot-clickable cursor-pointer hover:scale-105 transition-transform duration-300">
          <p class="text-sm text-gray-400 text-center">Hitung Harga - Perhitungan Harga Listrik</p>
        </div>
        <div class="screenshot-item">
          <img src="img/listrik/4.png" alt="About Us - Tentang Website" class="w-full rounded-lg border border-dark-600 mb-2 screenshot-clickable cursor-pointer hover:scale-105 transition-transform duration-300">
          <p class="text-sm text-gray-400 text-center">About Us - Tentang Website</p>
        </div>
      </div>
    `
  },

  kamera: {
    title: "Kamera Keamanan Berbasis Face Recognition",
    videoSrc: "videos/kamera.mkv",
    video: `
      <div class="mb-6">
        <div class="bg-dark-700 rounded-lg p-4">
          <h4 class="text-lg font-semibold mb-4 text-center text-amber-400">Video Demo Face Recognition</h4>
          <div class="relative mb-4">
            <video 
              controls 
              width="100%" 
              height="400"
              class="rounded-lg bg-dark-800"
              poster="img/thumbnails/portfolio-thumbnail.jpg">
              <source src="VIDEO_SOURCE_PLACEHOLDER" type="video/mp4">
              <p class="text-gray-400 text-center p-8">Browser Anda tidak mendukung video HTML5.</p>
            </video>
          </div>
          <div class="bg-dark-800 rounded-lg p-3">
            <p class="text-gray-300 text-sm">Sistem keamanan otomatis dengan teknologi face recognition dan notifikasi real-time.</p>
          </div>
        </div>
      </div>
    `,
    screenshots: `
      <div class="grid md:grid-cols-2 gap-4">
        <div class="screenshot-item">
          <img src="img/kamera/1.png" alt="Jalur Rangkaian" class="w-full rounded-lg border border-dark-600 mb-2 screenshot-clickable cursor-pointer hover:scale-105 transition-transform duration-300">
          <p class="text-sm text-gray-400 text-center">Jalur Rangkaian</p>
        </div>
        <div class="screenshot-item">
          <img src="img/kamera/2.jpg" alt="Bentuk Fisik Alat" class="w-full rounded-lg border border-dark-600 mb-2 screenshot-clickable cursor-pointer hover:scale-105 transition-transform duration-300">
          <p class="text-sm text-gray-400 text-center">Bentuk Fisik Alat</p>
        </div>
        <div class="screenshot-item">
          <img src="img/kamera/3.png" alt="Face Recognition" class="w-full rounded-lg border border-dark-600 mb-2 screenshot-clickable cursor-pointer hover:scale-105 transition-transform duration-300">
          <p class="text-sm text-gray-400 text-center">Face Recognition</p>
        </div>
        <div class="screenshot-item">
          <img src="img/kamera/4.png" alt="Log Aktivitas" class="w-full rounded-lg border border-dark-600 mb-2 screenshot-clickable cursor-pointer hover:scale-105 transition-transform duration-300">
          <p class="text-sm text-gray-400 text-center">Log Aktivitas</p>
        </div>
      </div>
    `
  }
};

// Image Modal Controller untuk Demo (menggunakan sistem yang sama dengan main portfolio)
let demoImageModalController = null;

// Initialize Image Modal untuk Demo
function initializeDemoImageModal() {
  // Cek apakah image modal sudah ada dari main scripts
  let imageModal = document.querySelector('#imageModal');
  let modalImage = document.querySelector('#modalImage');
  let closeImageBtn = document.querySelector('.close-image-modal');
  let loadingSpinner = document.querySelector('.image-loading');

  // Jika belum ada, buat image modal khusus untuk demo
  if (!imageModal) {
    const imageModalHTML = `
      <div id="imageModal" class="fixed inset-0 bg-black/90 backdrop-blur-sm z-50 hidden items-center justify-center p-4" style="z-index: 10000;">
        <div class="relative max-w-screen-lg w-full h-full flex items-center justify-center">
          <div class="image-loading hidden w-10 h-10 border-4 border-blue-500/30 border-t-blue-500 rounded-full animate-spin"></div>
          <img id="modalImage" class="image-modal-content hidden max-w-full max-h-full object-contain rounded-lg shadow-2xl" alt="Full Size Image">
          <button class="close-image-modal absolute top-4 right-4 bg-dark-800/80 backdrop-blur-sm text-white w-12 h-12 rounded-full border border-dark-600 hover:bg-red-600 hover:border-red-500 transition-all duration-300 text-xl font-bold">×</button>
        </div>
      </div>
    `;
    document.body.insertAdjacentHTML('beforeend', imageModalHTML);
    
    // Update references
    imageModal = document.querySelector('#imageModal');
    modalImage = document.querySelector('#modalImage');
    closeImageBtn = document.querySelector('.close-image-modal');
    loadingSpinner = document.querySelector('.image-loading');
  }

  if (!imageModal || !modalImage || !closeImageBtn) return null;

  // Function to open image modal
  function openImageModal(imageSrc, imageAlt = '') {
    if (!imageSrc) return;
    
    // Show modal and loading spinner
    imageModal.classList.remove('hidden');
    imageModal.classList.add('flex');
    loadingSpinner.classList.remove('hidden');
    modalImage.classList.add('hidden');
    document.body.style.overflow = 'hidden';

    // Load image
    const img = new Image();
    img.onload = function() {
      modalImage.src = imageSrc;
      modalImage.alt = imageAlt;
      loadingSpinner.classList.add('hidden');
      modalImage.classList.remove('hidden');
    };
    img.onerror = function() {
      console.error('Failed to load image:', imageSrc);
      closeImageModal();
    };
    img.src = imageSrc;
  }

  // Function to close image modal
  function closeImageModal() {
    imageModal.classList.add('hidden');
    imageModal.classList.remove('flex');
    modalImage.classList.add('hidden');
    loadingSpinner.classList.add('hidden');
    modalImage.src = '';
    document.body.style.overflow = '';
  }

  // Event listeners
  closeImageBtn.addEventListener('click', closeImageModal);
  imageModal.addEventListener('click', (e) => {
    if (e.target === imageModal) {
      closeImageModal();
    }
  });

  // Keyboard support
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && !imageModal.classList.contains('hidden')) {
      closeImageModal();
    }
  });

  return {
    open: openImageModal,
    close: closeImageModal
  };
}

// Function untuk attach click handler ke screenshot images
function attachScreenshotClickHandlers() {
  // Wait for content to be loaded in modal
  setTimeout(() => {
    const screenshots = document.querySelectorAll('.screenshot-clickable');
    
    screenshots.forEach(img => {
      // Remove existing handlers to prevent duplicates
      img.removeEventListener('click', handleScreenshotClick);
      // Add click handler
      img.addEventListener('click', handleScreenshotClick);
      
      // Add visual indicator
      if (!img.classList.contains('screenshot-enhanced')) {
        img.classList.add('screenshot-enhanced');
        
        // Add zoom indicator
        const indicator = document.createElement('div');
        indicator.className = 'absolute top-2 right-2 bg-black/70 text-white text-xs px-2 py-1 rounded opacity-0 transition-opacity duration-300';
        indicator.innerHTML = '🔍 Klik untuk perbesar';
        
        const container = img.parentElement;
        if (container) {
          container.style.position = 'relative';
          container.appendChild(indicator);
          
          img.addEventListener('mouseenter', () => {
            indicator.style.opacity = '1';
          });
          img.addEventListener('mouseleave', () => {
            indicator.style.opacity = '0';
          });
        }
      }
    });
  }, 100);
}

// Handle screenshot click
function handleScreenshotClick(e) {
  e.preventDefault();
  e.stopPropagation();
  
  const img = e.target;
  const imageSrc = img.src;
  const imageAlt = img.alt || 'Screenshot';
  
  if (demoImageModalController && imageSrc) {
    demoImageModalController.open(imageSrc, imageAlt);
  }
}

function showVideo(projectType) {
  const data = demoData[projectType];
  if (data) {
    document.getElementById('modalTitle').textContent = data.title;
    const videoContent = data.video.replace('VIDEO_SOURCE_PLACEHOLDER', data.videoSrc);
    document.getElementById('modalContent').innerHTML = videoContent + `
      <div class="mt-6 p-4 bg-dark-700 rounded-lg">
        <h5 class="font-semibold mb-2">Informasi:</h5>
        <p class="text-gray-400 text-sm">Video demonstrasi menunjukkan fitur-fitur utama dan cara kerja aplikasi secara lengkap.</p>
      </div>
    `;
    document.getElementById('demoModal').classList.remove('hidden');
    document.getElementById('demoModal').classList.add('flex');
    document.body.style.overflow = 'hidden';
  }
}

function showScreenshots(projectType) {
  const data = demoData[projectType];
  if (data) {
    document.getElementById('modalTitle').textContent = data.title;
    document.getElementById('modalContent').innerHTML = data.screenshots + `
      <div class="mt-6 p-4 bg-dark-700 rounded-lg">
        <h5 class="font-semibold mb-2">Catatan:</h5>
        <p class="text-gray-400 text-sm">Screenshot dari proyek yang telah dikerjakan. <strong>Klik pada gambar untuk melihat dalam ukuran penuh.</strong></p>
      </div>
    `;
    document.getElementById('demoModal').classList.remove('hidden');
    document.getElementById('demoModal').classList.add('flex');
    document.body.style.overflow = 'hidden';
    
    // Initialize image modal if not already done
    if (!demoImageModalController) {
      demoImageModalController = initializeDemoImageModal();
    }
    
    // Attach click handlers to screenshots
    attachScreenshotClickHandlers();
  }
}

function closeModal() {
  document.getElementById('demoModal').classList.add('hidden');
  document.getElementById('demoModal').classList.remove('flex');
  document.body.style.overflow = '';
}

// Initialize when DOM is loaded
document.addEventListener('DOMContentLoaded', function() {
  // Initialize image modal controller
  demoImageModalController = initializeDemoImageModal();
});

// Close modal on escape key
document.addEventListener('keydown', function(e) {
  if (e.key === 'Escape') {
    const demoModal = document.getElementById('demoModal');
    if (demoModal && !demoModal.classList.contains('hidden')) {
      closeModal();
    }
  }
});

// Close modal on backdrop click
document.getElementById('demoModal')?.addEventListener('click', function(e) {
  if (e.target === this) {
    closeModal();
  }
});