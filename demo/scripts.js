    // Demo data
    const demoData = {
      ecommerce: {
        title: "Demo Toko Online Elektronik",
        video: `
          <div class="mb-6">
            <div class="bg-dark-700 rounded-lg p-8 text-center">
              <i class="fas fa-video text-4xl text-primary mb-4"></i>
              <h4 class="text-lg font-semibold mb-2">Video Demo</h4>
              <p class="text-gray-400 mb-4">Video demonstrasi akan ditempatkan di sini</p>
              <div class="bg-dark-800 border-2 border-dashed border-dark-600 rounded-lg h-64 flex items-center justify-center">
                <p class="text-gray-500">Video Player Placeholder</p>
              </div>
            </div>
          </div>
        `,
        screenshots: `
          <div class="grid md:grid-cols-2 gap-4">
            <div class="screenshot-item">
              <img src="https://via.placeholder.com/500x300/1e293b/3b82f6?text=Product+Detail" alt="Product Detail" class="w-full rounded-lg border border-dark-600 mb-2">
              <p class="text-sm text-gray-400 text-center">Detail Produk - Informasi lengkap produk</p>
            </div>
            <div class="screenshot-item">
              <img src="https://via.placeholder.com/500x300/1e293b/3b82f6?text=Shopping+Cart" alt="Shopping Cart" class="w-full rounded-lg border border-dark-600 mb-2">
              <p class="text-sm text-gray-400 text-center">Keranjang Belanja - Sistem checkout</p>
            </div>
            <div class="screenshot-item">
              <img src="https://via.placeholder.com/500x300/1e293b/3b82f6?text=Admin+Dashboard" alt="Admin Dashboard" class="w-full rounded-lg border border-dark-600 mb-2">
              <p class="text-sm text-gray-400 text-center">Dashboard Admin - Manajemen produk</p>
            </div>
          </div>
        `
      },
      company: {
        title: "Demo Website Company Profile",
        video: `
          <div class="mb-6">
            <div class="bg-dark-700 rounded-lg p-8 text-center">
              <i class="fas fa-video text-4xl text-purple-500 mb-4"></i>
              <h4 class="text-lg font-semibold mb-2">Video Demo</h4>
              <p class="text-gray-400 mb-4">Video demonstrasi navigasi dan fitur website</p>
              <div class="bg-dark-800 border-2 border-dashed border-dark-600 rounded-lg h-64 flex items-center justify-center">
                <p class="text-gray-500">Video Player Placeholder</p>
              </div>
            </div>
          </div>
        `,
        screenshots: `
          <div class="grid md:grid-cols-2 gap-4">
            <div class="screenshot-item">
              <img src="https://via.placeholder.com/500x300/1e293b/8b5cf6?text=Hero+Section" alt="Hero Section" class="w-full rounded-lg border border-dark-600 mb-2">
              <p class="text-sm text-gray-400 text-center">Hero Section - Landing page utama</p>
            </div>
            <div class="screenshot-item">
              <img src="https://via.placeholder.com/500x300/1e293b/8b5cf6?text=About+Us" alt="About Us" class="w-full rounded-lg border border-dark-600 mb-2">
              <p class="text-sm text-gray-400 text-center">About Us - Profil perusahaan</p>
            </div>
            <div class="screenshot-item">
              <img src="https://via.placeholder.com/500x300/1e293b/8b5cf6?text=Services" alt="Services" class="w-full rounded-lg border border-dark-600 mb-2">
              <p class="text-sm text-gray-400 text-center">Services - Layanan perusahaan</p>
            </div>
            <div class="screenshot-item">
              <img src="https://via.placeholder.com/500x300/1e293b/8b5cf6?text=Contact" alt="Contact" class="w-full rounded-lg border border-dark-600 mb-2">
              <p class="text-sm text-gray-400 text-center">Contact - Form kontak dan informasi</p>
            </div>
          </div>
        `
      },
      lms: {
        title: "Demo Sistem Manajemen Pembelajaran",
        video: `
          <div class="mb-6">
            <div class="bg-dark-700 rounded-lg p-8 text-center">
              <i class="fas fa-video text-4xl text-emerald-500 mb-4"></i>
              <h4 class="text-lg font-semibold mb-2">Video Demo</h4>
              <p class="text-gray-400 mb-4">Demonstrasi fitur pembelajaran dan kuis</p>
              <div class="bg-dark-800 border-2 border-dashed border-dark-600 rounded-lg h-64 flex items-center justify-center">
                <p class="text-gray-500">Video Player Placeholder</p>
              </div>
            </div>
          </div>
        `,
        screenshots: `
          <div class="grid md:grid-cols-2 gap-4">
            <div class="screenshot-item">
              <img src="https://via.placeholder.com/500x300/1e293b/10b981?text=Student+Dashboard" alt="Student Dashboard" class="w-full rounded-lg border border-dark-600 mb-2">
              <p class="text-sm text-gray-400 text-center">Dashboard Siswa - Progress pembelajaran</p>
            </div>
            <div class="screenshot-item">
              <img src="https://via.placeholder.com/500x300/1e293b/10b981?text=Course+Materials" alt="Course Materials" class="w-full rounded-lg border border-dark-600 mb-2">
              <p class="text-sm text-gray-400 text-center">Materi Pelajaran - Download dan view</p>
            </div>
            <div class="screenshot-item">
              <img src="https://via.placeholder.com/500x300/1e293b/10b981?text=Quiz+System" alt="Quiz System" class="w-full rounded-lg border border-dark-600 mb-2">
              <p class="text-sm text-gray-400 text-center">Sistem Kuis - Evaluasi pembelajaran</p>
            </div>
            <div class="screenshot-item">
              <img src="https://via.placeholder.com/500x300/1e293b/10b981?text=Teacher+Panel" alt="Teacher Panel" class="w-full rounded-lg border border-dark-600 mb-2">
              <p class="text-sm text-gray-400 text-center">Panel Guru - Manajemen kelas</p>
            </div>
          </div>
        `
      },
      portfolio: {
        title: "Demo Website Portfolio Kreatif",
        video: `
          <div class="mb-6">
            <div class="bg-dark-700 rounded-lg p-8 text-center">
              <i class="fas fa-video text-4xl text-amber-500 mb-4"></i>
              <h4 class="text-lg font-semibold mb-2">Video Demo</h4>
              <p class="text-gray-400 mb-4">Showcase animasi dan interaksi portfolio</p>
              <div class="bg-dark-800 border-2 border-dashed border-dark-600 rounded-lg h-64 flex items-center justify-center">
                <p class="text-gray-500">Video Player Placeholder</p>
              </div>
            </div>
          </div>
        `,
        screenshots: `
          <div class="grid md:grid-cols-2 gap-4">
            <div class="screenshot-item">
              <img src="https://via.placeholder.com/500x300/1e293b/f59e0b?text=Portfolio+Hero" alt="Portfolio Hero" class="w-full rounded-lg border border-dark-600 mb-2">
              <p class="text-sm text-gray-400 text-center">Hero Section - Intro dengan animasi</p>
            </div>
            <div class="screenshot-item">
              <img src="https://via.placeholder.com/500x300/1e293b/f59e0b?text=Projects+Gallery" alt="Projects Gallery" class="w-full rounded-lg border border-dark-600 mb-2">
              <p class="text-sm text-gray-400 text-center">Gallery Proyek - Interactive showcase</p>
            </div>
            <div class="screenshot-item">
              <img src="https://via.placeholder.com/500x300/1e293b/f59e0b?text=Skills+Section" alt="Skills Section" class="w-full rounded-lg border border-dark-600 mb-2">
              <p class="text-sm text-gray-400 text-center">Skills Section - Animated progress bars</p>
            </div>
            <div class="screenshot-item">
              <img src="https://via.placeholder.com/500x300/1e293b/f59e0b?text=Contact+Form" alt="Contact Form" class="w-full rounded-lg border border-dark-600 mb-2">
              <p class="text-sm text-gray-400 text-center">Contact Form - Interactive contact</p>
            </div>
          </div>
        `
      }
    };

    function showVideo(projectType) {
      const data = demoData[projectType];
      if (data) {
        document.getElementById('modalTitle').textContent = data.title;
        document.getElementById('modalContent').innerHTML = data.video + `
          <div class="mt-6 p-4 bg-dark-700 rounded-lg">
            <h5 class="font-semibold mb-2">Informasi:</h5>
            <p class="text-gray-400 text-sm">Video demonstrasi ini menunjukkan fitur-fitur utama dan cara kerja aplikasi secara lengkap. File video asli dapat disediakan dalam format MP4 atau format lainnya sesuai kebutuhan.</p>
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
            <p class="text-gray-400 text-sm">Screenshot ini adalah placeholder. Ganti dengan screenshot asli dari proyek yang telah dikerjakan. Pastikan kualitas gambar cukup tinggi untuk memberikan impression profesional.</p>
          </div>
        `;
        document.getElementById('demoModal').classList.remove('hidden');
        document.getElementById('demoModal').classList.add('flex');
        document.body.style.overflow = 'hidden';
      }
    }

    function closeModal() {
      document.getElementById('demoModal').classList.add('hidden');
      document.getElementById('demoModal').classList.remove('flex');
      document.body.style.overflow = '';
    }

    // Close modal on escape key
    document.addEventListener('keydown', function(e) {
      if (e.key === 'Escape') {
        closeModal();
      }
    });

    // Close modal on backdrop click
    document.getElementById('demoModal').addEventListener('click', function(e) {
      if (e.target === this) {
        closeModal();
      }
    });