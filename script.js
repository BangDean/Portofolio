        // Typing animation untuk nama
        const nameText = "M.Ghibran Adean";
        const typedNameElement = document.getElementById('typed-name');
        const cursor = document.querySelector('.typing-cursor');
        let nameIndex = 0;

        function typeNameAnimation() {
            typedNameElement.textContent = '';
            nameIndex = 0;
            cursor.style.display = 'inline-block';
            cursor.style.opacity = '1';
            
            function typeName() {
                if (nameIndex < nameText.length) {
                    typedNameElement.textContent += nameText.charAt(nameIndex);
                    nameIndex++;
                    setTimeout(typeName, 100);
                } else {
                    setTimeout(() => {
                        cursor.style.opacity = '0';
                        setTimeout(() => {
                            cursor.style.display = 'none';
                        }, 500);
                    }, 1000);
                }
            }
            
            typeName();
        }

        // Mobile menu toggle
        document.getElementById('mobile-menu-btn').addEventListener('click', function() {
            const mobileMenu = document.getElementById('mobile-menu');
            mobileMenu.classList.toggle('hidden');
        });

        // Typing animation for professions
        const typingTexts = document.querySelectorAll('.typing-text');
        let currentTextIndex = 0;

        function changeTypingText() {
            typingTexts[currentTextIndex].classList.remove('active');
            currentTextIndex = (currentTextIndex + 1) % typingTexts.length;
            typingTexts[currentTextIndex].classList.add('active');
        }

        setInterval(changeTypingText, 3000);

        // Skills rating system
        const skillRatings = {
            'html': 4,
            'css': 4,
            'php': 4,
            'javascript': 2,
            'mysql': 4,
            'illustrator': 3,
            'photoshop': 2,
            'office': 5
        };

        // Add hover effect to skills
        document.querySelectorAll('.skill-item').forEach(item => {
            const skill = item.dataset.skill;
            const rating = skillRatings[skill];
            
            item.addEventListener('mouseenter', function() {
                const starsContainer = this.querySelector('.stars');
                starsContainer.innerHTML = '';
                
                for (let i = 1; i <= 5; i++) {
                    const star = document.createElement('span');
                    star.innerHTML = '★';
                    star.className = 'star';
                    star.style.animationDelay = (i * 0.1) + 's';
                    
                    if (i <= rating) {
                        if (skill === 'html') star.style.color = '#f97316';
                        else if (skill === 'css') star.style.color = '#3b82f6';
                        else if (skill === 'php') star.style.color = '#4f46e5';
                        else if (skill === 'javascript') star.style.color = '#eab308';
                        else if (skill === 'mysql') star.style.color = '#0891b2';
                        else if (skill === 'illustrator') star.style.color = '#ea580c';
                        else if (skill === 'photoshop') star.style.color = '#0284c7';
                        else if (skill === 'office') star.style.color = '#dc2626';
                        else star.style.color = '#3b82f6';
                    } else {
                        star.style.color = '#ddd';
                    }
                    
                    starsContainer.appendChild(star);
                }
            });
        });

        // Project slider
        let currentSlide = 0;
        const slides = document.querySelectorAll('.slide');
        const slideButtons = document.querySelectorAll('.slide-btn');

        function changeSlide(index) {
            slides[currentSlide].classList.remove('active');
            slideButtons[currentSlide].classList.remove('bg-blue-600');
            slideButtons[currentSlide].classList.add('bg-blue-300');
            
            currentSlide = index;
            
            slides[currentSlide].classList.add('active');
            slideButtons[currentSlide].classList.remove('bg-blue-300');
            slideButtons[currentSlide].classList.add('bg-blue-600');
        }

        function nextSlide() {
            const nextIndex = (currentSlide + 1) % slides.length;
            changeSlide(nextIndex);
        }

        function prevSlide() {
            const prevIndex = (currentSlide - 1 + slides.length) % slides.length;
            changeSlide(prevIndex);
        }

        // Auto slide every 6 seconds
        setInterval(() => {
            nextSlide();
        }, 6000);

        // Modal functions
        function openModal(modalId) {
            document.getElementById(modalId).style.display = 'block';
        }

        function closeModal(modalId) {
            document.getElementById(modalId).style.display = 'none';
        }

        // Image modal for full size view
        function openImageModal(imageSrc) {
            document.getElementById('modalImage').src = imageSrc;
            document.getElementById('imageModal').style.display = 'block';
        }

        // Close modal when clicking outside
        window.addEventListener('click', function(event) {
            if (event.target.classList.contains('modal')) {
                event.target.style.display = 'none';
            }
        });

        // Smooth scrolling for navigation links
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', function (e) {
                e.preventDefault();
                const target = document.querySelector(this.getAttribute('href'));
                if (target) {
                    target.scrollIntoView({
                        behavior: 'smooth',
                        block: 'start'
                    });
                }
                
                // Close mobile menu after clicking
                document.getElementById('mobile-menu').classList.add('hidden');
            });
        });

        // Form submission
        document.querySelector('form').addEventListener('submit', function(e) {
            e.preventDefault();
            alert('Terima kasih! Pesan Anda telah dikirim. Saya akan segera menghubungi Anda kembali.');
            this.reset();
        });

        // Navbar scroll effect
        window.addEventListener('scroll', function() {
            const navbar = document.getElementById('navbar');
            
            if (window.scrollY > 100) {
                navbar.style.background = 'rgba(17, 24, 39, 0.98)';
                navbar.style.boxShadow = '0 4px 20px rgba(107, 114, 128, 0.1)';
            } else {
                navbar.style.background = 'rgba(17, 24, 39, 0.95)';
                navbar.style.boxShadow = '0 2px 10px rgba(0, 0, 0, 0.1)';
            }
        });

        // Section Animation - Intersection Observer (DIPERBAIKI)
        const sectionObserver = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const section = entry.target;
                    
                    // Reset animasi jika section sudah pernah terlihat
                    section.classList.remove('section-visible');
                    const animateElements = section.querySelectorAll('.animate-element');
                    animateElements.forEach(element => {
                        element.classList.remove('element-visible');
                    });
                    
                    // Trigger animasi dengan delay kecil
                    setTimeout(() => {
                        section.classList.add('section-visible');
                        
                        // Animate elements within the section
                        animateElements.forEach((element, index) => {
                            const delay = element.dataset.delay || (index * 100);
                            setTimeout(() => {
                                element.classList.add('element-visible');
                            }, parseInt(delay));
                        });
                    }, 50);
                }
            });
        }, {
            threshold: 0.2, // Trigger ketika 20% section terlihat
            rootMargin: '0px 0px -100px 0px' // Margin untuk trigger lebih sensitif
        });

        // Initialize animations when DOM is loaded
        document.addEventListener('DOMContentLoaded', function() {
            // Mulai typing animation nama
            setTimeout(typeNameAnimation, 500);
            
            // Observe all sections with animation
            const sections = document.querySelectorAll('.section-animate');
            sections.forEach(section => {
                sectionObserver.observe(section);
            });
            
            // Trigger home section animation immediately
            const homeSection = document.getElementById('home');
            if (homeSection) {
                setTimeout(() => {
                    homeSection.classList.add('section-visible');
                    const animateElements = homeSection.querySelectorAll('.animate-element');
                    animateElements.forEach((element, index) => {
                        const delay = element.dataset.delay || (index * 100);
                        setTimeout(() => {
                            element.classList.add('element-visible');
                        }, parseInt(delay) + 200);
                    });
                }, 100);
            }
        });

// Fungsi Download CV
document.addEventListener('DOMContentLoaded', function() {
    const downloadBtn = document.getElementById('downloadCV');
    const downloadIcon = document.getElementById('downloadIcon');
    const downloadText = document.getElementById('downloadText');

    // Event listener untuk tombol download
    downloadBtn.addEventListener('click', function() {
        downloadCV();
    });
});

function downloadCV() {
    const downloadBtn = document.getElementById('downloadCV');
    const downloadIcon = document.getElementById('downloadIcon');
    const downloadText = document.getElementById('downloadText');

    // Ubah tampilan tombol saat loading
    downloadIcon.className = 'fas fa-spinner fa-spin mr-2';
    downloadText.textContent = 'Downloading...';
    downloadBtn.disabled = true;

    // Path ke file CV PDF (sesuaikan dengan lokasi file Anda)
    const cvPath = 'cv/CV-M-Ghibran-Adean.pdf'; // Ganti dengan path file CV Anda
    
    // Buat element link untuk download
    const link = document.createElement('a');
    link.href = cvPath;
    link.download = 'CV-M-Ghibran-Adean.pdf'; // Nama file saat di download
    
    // Trigger download
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);

    // Reset tombol setelah 1.5 detik
    setTimeout(() => {
        downloadIcon.className = 'fas fa-download mr-2';
        downloadText.textContent = 'Download CV';
        downloadBtn.disabled = false;
    }, 1500);
}

// Fungsi alternatif jika ingin menggunakan fetch untuk download
function downloadCVWithFetch() {
    const downloadBtn = document.getElementById('downloadCV');
    const downloadIcon = document.getElementById('downloadIcon');
    const downloadText = document.getElementById('downloadText');

    // Ubah tampilan tombol saat loading
    downloadIcon.className = 'fas fa-spinner fa-spin mr-2';
    downloadText.textContent = 'Downloading...';
    downloadBtn.disabled = true;

    const cvPath = 'cv/CV-M-Ghibran-Adean.pdf';

    fetch(cvPath)
        .then(response => {
            if (!response.ok) {
                throw new Error('File CV tidak ditemukan');
            }
            return response.blob();
        })
        .then(blob => {
            // Buat URL untuk blob
            const url = window.URL.createObjectURL(blob);
            const link = document.createElement('a');
            link.href = url;
            link.download = 'CV-M-Ghibran-Adean.pdf';
            
            // Trigger download
            document.body.appendChild(link);
            link.click();
            document.body.removeChild(link);
            
            // Bersihkan URL
            window.URL.revokeObjectURL(url);
            
            // Reset tombol
            downloadIcon.className = 'fas fa-download mr-2';
            downloadText.textContent = 'Download CV';
            downloadBtn.disabled = false;
        })
        .catch(error => {
            console.error('Error downloading CV:', error);
            alert('Maaf, file CV tidak dapat didownload. Pastikan file sudah tersedia.');
            
            // Reset tombol
            downloadIcon.className = 'fas fa-download mr-2';
            downloadText.textContent = 'Download CV';
            downloadBtn.disabled = false;
        });
}
