// scripts.js - Dark Theme Portfolio JavaScript with Enhanced Skills

// DOM helpers
const qs = (selector) => document.querySelector(selector);
const qsa = (selector) => document.querySelectorAll(selector);

// Initialize when DOM loaded
document.addEventListener('DOMContentLoaded', function() {
    initializeApp();
});

function initializeApp() {
    setCurrentYear();
    initializeNavigation();
    initializeScrollEffects();
    initializeRevealAnimations();
    initializeSkillsAnimation();
    initializeBackToTop();
    initializeSmoothScrolling();
    makeQuickViewImagesClickable();
}

// Set current year
function setCurrentYear() {
    const yearElement = qs('#year');
    if (yearElement) {
        yearElement.textContent = new Date().getFullYear();
    }
}

// Enhanced Skills Animation (inspired by your reference code)
function initializeSkillsAnimation() {
    const skillItems = qsa('.skill-item');
    
    if (!skillItems.length) return;

    // Create Intersection Observer for skills
    const skillsObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const skillItem = entry.target;
                const delay = skillItem.dataset.delay || 0;
                
                // Add animation with delay
                setTimeout(() => {
                    skillItem.classList.add('animate');
                    
                    // Add hover effect enhancement
                    const card = skillItem.querySelector('.skill-card');
                    const icon = skillItem.querySelector('i');
                    
                    if (card && icon) {
                        // Add enhanced hover listeners
                        card.addEventListener('mouseenter', () => {
                            icon.style.transform = 'scale(1.2) rotate(10deg)';
                        });
                        
                        card.addEventListener('mouseleave', () => {
                            icon.style.transform = 'scale(1) rotate(0deg)';
                        });
                    }
                }, delay);
                
                // Stop observing once animated
                skillsObserver.unobserve(skillItem);
            }
        });
    }, {
        threshold: 0.2,
        rootMargin: '0px 0px -50px 0px'
    });

    // Observe all skill items
    skillItems.forEach(item => {
        skillsObserver.observe(item);
    });
}

// Navigation functionality
function initializeNavigation() {
    const navToggle = qs('.nav-toggle');
    const navLinksMobile = qs('.nav-links-mobile');
    const navIcon = qs('.nav-icon');
    const navLinks = qsa('.nav-link');

    if (!navToggle || !navLinksMobile) return;

    navToggle.addEventListener('click', (e) => {
        e.stopPropagation();
        toggleMobileNav();
    });

    document.addEventListener('click', (e) => {
        if (window.innerWidth <= 768) {
            const nav = qs('.nav');
            if (nav && !nav.contains(e.target)) {
                closeMobileNav();
            }
        }
    });

    window.addEventListener('resize', debounce(() => {
        if (window.innerWidth > 768) {
            closeMobileNav();
        }
    }, 250));

    navLinks.forEach(link => {
        link.addEventListener('click', handleNavLinkClick);
    });

    function toggleMobileNav() {
        const isExpanded = navToggle.getAttribute('aria-expanded') === 'true';
        const newState = !isExpanded;
        
        navToggle.setAttribute('aria-expanded', String(newState));
        
        if (newState) {
            navLinksMobile.classList.remove('hidden');
            navLinksMobile.classList.add('active');
        } else {
            navLinksMobile.classList.remove('active');
            setTimeout(() => {
                if (!navLinksMobile.classList.contains('active')) {
                    navLinksMobile.classList.add('hidden');
                }
            }, 300);
        }
        
        if (navIcon) {
            navIcon.style.transform = newState ? 'rotate(90deg)' : 'rotate(0deg)';
            navIcon.textContent = newState ? '✕' : '☰';
        }
    }

    function closeMobileNav() {
        navToggle.setAttribute('aria-expanded', 'false');
        navLinksMobile.classList.remove('active');
        setTimeout(() => {
            navLinksMobile.classList.add('hidden');
        }, 300);
        
        if (navIcon) {
            navIcon.style.transform = 'rotate(0deg)';
            navIcon.textContent = '☰';
        }
    }

    function handleNavLinkClick(e) {
        e.preventDefault();
        const targetId = this.getAttribute('href');
        const targetElement = qs(targetId);
        
        if (targetElement) {
            const navbar = qs('.nav');
            if (navbar) {
                navbar.classList.remove('nav-hidden');
            }
            
            const navbarHeight = navbar ? navbar.offsetHeight : 80;
            const isMobile = window.innerWidth <= 768;
            const extraOffset = isMobile ? 20 : 30;
            
            const targetPosition = targetElement.getBoundingClientRect().top + 
                                 window.scrollY - navbarHeight - extraOffset;
            
            window.scrollTo({ 
                top: Math.max(0, targetPosition), 
                behavior: 'smooth' 
            });
            
            if (isMobile) {
                closeMobileNav();
            }
        }
    }
}

// Smooth scrolling for internal links
function initializeSmoothScrolling() {
    const internalLinks = qsa('a[href^="#"]');
    
    internalLinks.forEach(link => {
        if (!link.classList.contains('nav-link')) {
            link.addEventListener('click', (e) => {
                e.preventDefault();
                const targetId = link.getAttribute('href');
                const targetElement = qs(targetId);
                
                if (targetElement) {
                    const navbar = qs('.nav');
                    const navbarHeight = navbar ? navbar.offsetHeight : 0;
                    const targetPosition = targetElement.getBoundingClientRect().top + 
                                         window.scrollY - navbarHeight - 20;
                    
                    window.scrollTo({ 
                        top: Math.max(0, targetPosition), 
                        behavior: 'smooth' 
                    });
                }
            });
        }
    });
}

// Enhanced scroll effects
function initializeScrollEffects() {
    let lastScrollY = 0;
    let ticking = false;

    const navbar = qs('.nav');
    if (!navbar) return;

    function handleScroll() {
        const currentScrollY = window.scrollY;
        const isMobile = window.innerWidth <= 768;
        const threshold = isMobile ? 80 : 120;
        const sensitivity = isMobile ? 8 : 15;
        
        // Update navbar background
        if (currentScrollY <= 50) {
            navbar.style.background = 'rgba(15, 23, 42, 0.8)';
            navbar.classList.remove('nav-hidden');
        } else {
            navbar.style.background = 'rgba(15, 23, 42, 0.95)';
            
            if (currentScrollY > threshold) {
                const navLinksMobile = qs('.nav-links-mobile');
                const isMobileNavOpen = navLinksMobile && navLinksMobile.classList.contains('active');
                
                if (currentScrollY > lastScrollY + sensitivity) {
                    if (!isMobileNavOpen) {
                        navbar.classList.add('nav-hidden');
                    }
                } else if (currentScrollY < lastScrollY - sensitivity) {
                    navbar.classList.remove('nav-hidden');
                }
            }
        }
        
        lastScrollY = currentScrollY;
        ticking = false;
    }

    window.addEventListener('scroll', () => {
        if (!ticking) {
            requestAnimationFrame(handleScroll);
            ticking = true;
        }
    }, { passive: true });

    handleScroll();
}

// Reveal animations with Intersection Observer
function initializeRevealAnimations() {
    const revealElements = qsa('.reveal');
    
    if (!revealElements.length) return;

    const revealObserver = new IntersectionObserver((entries) => {
        entries.forEach((entry, index) => {
            if (entry.isIntersecting) {
                setTimeout(() => {
                    entry.target.classList.add('active');
                }, index * 100);
            } else {
                entry.target.classList.remove('active');
            }
        });
    }, { 
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    });

    revealElements.forEach(element => {
        revealObserver.observe(element);
    });
}

// Back to top functionality
function initializeBackToTop() {
    const backToTopBtn = qs('#backToTop');
    if (!backToTopBtn) return;

    let isVisible = false;

    function toggleBackToTop() {
        const shouldShow = window.scrollY > 400;
        
        if (shouldShow && !isVisible) {
            backToTopBtn.classList.remove('hidden');
            backToTopBtn.classList.add('show');
            isVisible = true;
        } else if (!shouldShow && isVisible) {
            backToTopBtn.classList.remove('show');
            setTimeout(() => {
                if (!isVisible) {
                    backToTopBtn.classList.add('hidden');
                }
            }, 300);
            isVisible = false;
        }
    }

    window.addEventListener('scroll', throttle(toggleBackToTop, 100), { passive: true });

    backToTopBtn.addEventListener('click', () => {
        window.scrollTo({ 
            top: 0, 
            behavior: 'smooth' 
        });
    });
}

// Utility functions
function debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}

function throttle(func, limit) {
    let inThrottle;
    return function() {
        const args = arguments;
        const context = this;
        if (!inThrottle) {
            func.apply(context, args);
            inThrottle = true;
            setTimeout(() => inThrottle = false, limit);
        }
    };
}

// Keyboard navigation
function initializeKeyboardNavigation() {
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape') {
            const navLinksMobile = qs('.nav-links-mobile');
            const navToggle = qs('.nav-toggle');
            
            if (navLinksMobile && navLinksMobile.classList.contains('active')) {
                navToggle.click();
            }
        }
        
        if (e.key === 'ArrowUp' && e.ctrlKey) {
            e.preventDefault();
            window.scrollTo({ top: 0, behavior: 'smooth' });
        }
    });
}

// Initialize keyboard navigation
document.addEventListener('DOMContentLoaded', () => {
    initializeKeyboardNavigation();
});

// Performance optimization
function preloadCriticalResources() {
    const criticalImages = [
        'img/profile.jpg',
        'https://via.placeholder.com/600x300'
    ];
    
    criticalImages.forEach(src => {
        const link = document.createElement('link');
        link.rel = 'preload';
        link.as = 'image';
        link.href = src;
        document.head.appendChild(link);
    });
}

window.addEventListener('load', preloadCriticalResources);

// Export for potential module use
window.PortfolioApp = {
    initializeSkillsAnimation,
    initializeRevealAnimations,
    debounce,
    throttle
};

// Projects Slider Functionality
function initializeProjectsSlider() {
    const slidesContainer = qs('#slidesContainer');
    const prevBtn = qs('.slider-prev');
    const nextBtn = qs('.slider-next');
    const progressDots = qsa('.progress-dot');
    const pausePlayBtn = qs('#pausePlay');
    const currentSlideElement = qs('.current-slide');
    const totalSlidesElement = qs('.total-slides');
    const quickViewModal = qs('#quickViewModal');
    const closeModalBtn = qs('.close-modal');
    const quickViewBtns = qsa('.quick-view-btn');
    const sliderWrapper = qs('.slider-wrapper');

    if (!slidesContainer) return;

    let currentSlide = 0;
    const totalSlides = qsa('.slide').length;
    let autoPlayInterval;
    let isPlaying = true;
    let isTransitioning = false;

    // Initialize slider
    function initSlider() {
        updateSlider();
        updateProgressDots();
        updateSlideCounter();
        startAutoPlay();
        
        // Set total slides
        if (totalSlidesElement) {
            totalSlidesElement.textContent = totalSlides;
        }
    }

    // Update slider position
    function updateSlider() {
        if (isTransitioning) return;
        
        isTransitioning = true;
        const translateX = -currentSlide * 100;
        slidesContainer.style.transform = `translateX(${translateX}%)`;
        
        setTimeout(() => {
            isTransitioning = false;
        }, 600);
        
        updateProgressDots();
        updateSlideCounter();
    }

    // Update progress dots
    function updateProgressDots() {
        progressDots.forEach((dot, index) => {
            if (index === currentSlide) {
                dot.classList.add('active');
            } else {
                dot.classList.remove('active');
            }
        });
    }

    // Update slide counter
    function updateSlideCounter() {
        if (currentSlideElement) {
            currentSlideElement.textContent = currentSlide + 1;
        }
    }

    // Next slide
    function nextSlide() {
        currentSlide = (currentSlide + 1) % totalSlides;
        updateSlider();
    }

    // Previous slide
    function prevSlide() {
        currentSlide = (currentSlide - 1 + totalSlides) % totalSlides;
        updateSlider();
    }

    // Go to specific slide
    function goToSlide(index) {
        if (index !== currentSlide && !isTransitioning) {
            currentSlide = index;
            updateSlider();
        }
    }

    // Auto play functionality
    function startAutoPlay() {
        if (autoPlayInterval) clearInterval(autoPlayInterval);
        
        autoPlayInterval = setInterval(() => {
            if (isPlaying && !document.hidden) {
                nextSlide();
            }
        }, 5000);
    }

    function pauseAutoPlay() {
        isPlaying = false;
        if (pausePlayBtn) {
            pausePlayBtn.innerHTML = '▶️ Play';
        }
    }

    function resumeAutoPlay() {
        isPlaying = true;
        if (pausePlayBtn) {
            pausePlayBtn.innerHTML = '⏸️ Pause';
        }
    }

    // Event listeners
    if (nextBtn) {
        nextBtn.addEventListener('click', () => {
            nextSlide();
            pauseAutoPlay();
        });
    }

    if (prevBtn) {
        prevBtn.addEventListener('click', () => {
            prevSlide();
            pauseAutoPlay();
        });
    }

    // Progress dots click
    progressDots.forEach((dot, index) => {
        dot.addEventListener('click', () => {
            goToSlide(index);
            pauseAutoPlay();
        });
    });

    // Pause/Play toggle
    if (pausePlayBtn) {
        pausePlayBtn.addEventListener('click', () => {
            if (isPlaying) {
                pauseAutoPlay();
            } else {
                resumeAutoPlay();
            }
        });
    }

    // Pause on hover
    if (sliderWrapper) {
        sliderWrapper.addEventListener('mouseenter', () => {
            if (isPlaying) pauseAutoPlay();
        });

        sliderWrapper.addEventListener('mouseleave', () => {
            if (!isPlaying) resumeAutoPlay();
        });
    }

    // Keyboard navigation
    document.addEventListener('keydown', (e) => {
        if (!quickViewModal.classList.contains('show')) {
            if (e.key === 'ArrowLeft') {
                prevSlide();
                pauseAutoPlay();
            } else if (e.key === 'ArrowRight') {
                nextSlide();
                pauseAutoPlay();
            }
        }
    });

    // Touch/swipe support
    let startX = 0;
    let endX = 0;

    if (sliderWrapper) {
        sliderWrapper.addEventListener('touchstart', (e) => {
            startX = e.touches[0].clientX;
        }, { passive: true });

        sliderWrapper.addEventListener('touchmove', (e) => {
            endX = e.touches[0].clientX;
        }, { passive: true });

        sliderWrapper.addEventListener('touchend', () => {
            const threshold = 50;
            const diff = startX - endX;

            if (Math.abs(diff) > threshold) {
                if (diff > 0) {
                    nextSlide();
                } else {
                    prevSlide();
                }
                pauseAutoPlay();
            }
        });
    }

    // Quick View Modal functionality
    const projectData = {
        ecommerce: {
            title: "Website Belajar Bahasa Inggris Online",
            content: `
                <div class="grid md:grid-cols-2 gap-6">
                    <div>
                        <img src="img/slider/pinlish.png" alt="Education WebsiteScreenshot" class="w-full rounded-lg border border-dark-600">
                    </div>
                    <div>
                        <h4 class="text-lg font-semibold text-white mb-3">Fitur Utama:</h4>
                        <ul class="text-gray-300 space-y-2 mb-4">
                            <li>• Terdapat 4 ketegori test yaitu, listening, speaking, reading dan writing quiz</li>
                            <li>• Terdapat sistem poin yang memotivasi untuk menyelesaikan test</li>
                            <li>• Dashboard admin sebagai pengatur soal yang diberikan ke user</li>
                            <li>• Sistem nyawa yang dapat membuat user menjadi hati - hati dalm menjawab</li>
                        </ul>
                        <div class="flex flex-wrap gap-2 mb-4">
                            <span class="px-3 py-1 bg-orange-500/20 text-orange-400 rounded-full text-sm">HTML5</span>
                            <span class="px-3 py-1 bg-blue-500/20 text-blue-400 rounded-full text-sm">CSS3</span>
                            <span class="px-3 py-1 bg-purple-600/20 text-purple-400 rounded-full text-sm">PHP</span>
                            <span class="px-3 py-1 bg-blue-400/20 text-blue-400 rounded-full text-sm">MySQL</span>
                            <span class="px-3 py-1 bg-yellow-500/20 text-yellow-400 rounded-full text-sm">JavaScript</span>                           
                        </div>
                        <p class="text-gray-400 text-sm">Waktu pengerjaan: 4 minggu</p>
                    </div>
                </div>
            `
        },
        company: {
            title: "Website Penjadwalan Kegiatan Kerjasama Antara Vendor dan PT PLN (Persero)",
            content: `
                <div class="grid md:grid-cols-2 gap-6">
                    <div>
                        <img src="img/slider/penjadwalan.png" alt="Corporate Website Screenshot" class="w-full rounded-lg border border-dark-600">
                    </div>
                    <div>
                        <h4 class="text-lg font-semibold text-white mb-3">Fitur Utama:</h4>
                        <ul class="text-gray-300 space-y-2 mb-4">
                            <li>• Mempermudah perusahaan dalam penjadwalan kegiatan dengan vendor</li>
                            <li>• Terdapat sistem history yang mempermudah perusahaan dalam melihat progress kegiatan</li>
                            <li>• Terdapat sistem eksport history untuk mempermudah perusahaan menyimpan data kegiatan dalam bentuk fisik</li>
                            <li>• Terdapat sistem reset akun yang mempermudah vendor dalam mereset akunnya</li>

                        </ul>
                        <div class="flex flex-wrap gap-2 mb-4">
                            <span class="px-3 py-1 bg-orange-500/20 text-orange-400 rounded-full text-sm">HTML5</span>
                            <span class="px-3 py-1 bg-blue-500/20 text-blue-400 rounded-full text-sm">CSS3</span>
                            <span class="px-3 py-1 bg-purple-600/20 text-purple-400 rounded-full text-sm">PHP</span>
                            <span class="px-3 py-1 bg-blue-400/20 text-blue-400 rounded-full text-sm">MySQL</span>
                            <span class="px-3 py-1 bg-yellow-500/20 text-yellow-400 rounded-full text-sm">JavaScript</span>                           
                        </div>
                        <p class="text-gray-400 text-sm">Waktu pengerjaan: 3 minggu</p>
                    </div>
                </div>
            `
        },
        lms: {
            title: "Website Analisa Harga Listrik",
            content: `
                <div class="grid md:grid-cols-2 gap-6">
                    <div>
                        <img src="img/slider/listrik.png" alt="Website Analisa Harga Listrik Screenshot" class="w-full rounded-lg border border-dark-600">
                    </div>
                    <div>
                        <h4 class="text-lg font-semibold text-white mb-3">Fitur Utama:</h4>
                        <ul class="text-gray-300 space-y-2 mb-4">
                            <li>• Menghitung kebutuhan daya listrik berdasarkan jumlah dan jenis perangkat elektronik</li>
                            <li>• Mengestimasi biaya listrik bulanan sesuai pemakaian daya</li>
                            <li>• Memberikan gambaran efisiensi penggunaan listrik agar lebih hemat energi</li>
                            <li>• Menyediakan informasi praktis tentang listrik untuk membantu pengguna mengatur konsumsi listrik di rumah</li>
                        </ul>
                        <div class="flex flex-wrap gap-2 mb-4">
                            <span class="px-3 py-1 bg-orange-500/20 text-orange-400 rounded-full text-sm">HTML5</span>
                            <span class="px-3 py-1 bg-blue-500/20 text-blue-400 rounded-full text-sm">CSS3</span>
                            <span class="px-3 py-1 bg-yellow-500/20 text-yellow-400 rounded-full text-sm">JavaScript</span>
                        </div>
                        <p class="text-gray-400 text-sm">Waktu pengerjaan: 1 minggu</p>
                    </div>
                </div>
            `
        },
        portfolio: {
            title: "Kamera Keamanan Berbasis Face Recognition",
            content: `
                <div class="grid md:grid-cols-2 gap-6">
                    <div>
                        <img src="img/slider/kamera.jpg" alt="Kamera Face Recognition Screenshot" class="w-full rounded-lg border border-dark-600">
                    </div>
                    <div>
                        <h4 class="text-lg font-semibold text-white mb-3">Fitur Utama:</h4>
                        <ul class="text-gray-300 space-y-2 mb-4">
                            <li>• Mengenali wajah individu yang masuk dan keluar</li>
                            <li>• Mencatat log aktivitas secara otomatis</li>
                            <li>• Merekam video sebagai bukti keamanan</li>
                            <li>• Mengirim notifikasi melalui aplikasi Telegram</li>
                        </ul>
                        <div class="flex flex-wrap gap-2 mb-4">
                            <span class="px-3 py-1 bg-green-500/20 text-green-400 rounded-full text-sm">Python</span>
                            <span class="px-3 py-1 bg-blue-300/20 text-blue-300 rounded-full text-sm">C++</span>                        </div>
                        <p class="text-gray-400 text-sm">Waktu pengerjaan: 4 minggu</p>
                    </div>
                </div>
            `
        }
    };

    // Quick view button handlers
    quickViewBtns.forEach(btn => {
        btn.addEventListener('click', (e) => {
            e.preventDefault();
            const projectType = btn.dataset.project;
            const projectInfo = projectData[projectType];
            
            if (projectInfo && quickViewModal) {
                const modalTitle = qs('#modalTitle');
                const modalContent = qs('#modalContent');
                
                if (modalTitle) modalTitle.textContent = projectInfo.title;
                if (modalContent) modalContent.innerHTML = projectInfo.content;
                
                quickViewModal.classList.remove('hidden');
                quickViewModal.classList.add('show');
                document.body.style.overflow = 'hidden';
                
                pauseAutoPlay();
            }
        });
    });

    // Close modal handlers
    function closeModal() {
        if (quickViewModal) {
            quickViewModal.classList.remove('show');
            quickViewModal.classList.add('hidden');
            document.body.style.overflow = '';
            resumeAutoPlay();
        }
    }

    if (closeModalBtn) {
        closeModalBtn.addEventListener('click', closeModal);
    }

    if (quickViewModal) {
        quickViewModal.addEventListener('click', (e) => {
            if (e.target === quickViewModal) {
                closeModal();
            }
        });
    }

    // Escape key to close modal
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && quickViewModal.classList.contains('show')) {
            closeModal();
        }
    });

    // Visibility API for auto-play
    document.addEventListener('visibilitychange', () => {
        if (document.hidden) {
            pauseAutoPlay();
        } else if (isPlaying) {
            resumeAutoPlay();
        }
    });

    // Initialize slider
    initSlider();
}

function initializeApp() {
    setCurrentYear();
    initializeNavigation();
    initializeScrollEffects();
    initializeRevealAnimations();
    initializeSkillsAnimation();
    initializeProjectsSlider();
    initializeBackToTop();
    initializeSmoothScrolling();
}

// Tambahkan CSS untuk image modal (masukkan ke styles.css atau dalam <style> tag)
const imageModalCSS = `
/* Image Modal Styles */
#imageModal {
    z-index: 9999;
    backdrop-filter: blur(8px);
}

#imageModal .image-modal-content {
    max-width: 95vw;
    max-height: 95vh;
    object-fit: contain;
    border-radius: 12px;
    box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.8);
}

#imageModal .close-image-modal {
    position: absolute;
    top: 20px;
    right: 20px;
    background: rgba(15, 23, 42, 0.8);
    border: 1px solid rgba(100, 116, 139, 0.3);
    color: white;
    width: 50px;
    height: 50px;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 24px;
    cursor: pointer;
    transition: all 0.3s ease;
    backdrop-filter: blur(8px);
}

#imageModal .close-image-modal:hover {
    background: rgba(239, 68, 68, 0.8);
    border-color: rgba(239, 68, 68, 0.5);
    transform: scale(1.1);
}

.modal-image-clickable {
    cursor: pointer;
    transition: all 0.3s ease;
    position: relative;
}

.modal-image-clickable::after {
    content: "🔍";
    position: absolute;
    top: 8px;
    right: 8px;
    background: rgba(0, 0, 0, 0.7);
    color: white;
    padding: 4px 8px;
    border-radius: 6px;
    font-size: 12px;
    opacity: 0;
    transition: opacity 0.3s ease;
}

.modal-image-clickable:hover::after {
    opacity: 1;
}

.modal-image-clickable:hover {
    transform: scale(1.02);
    box-shadow: 0 10px 25px rgba(0, 0, 0, 0.3);
}

/* Loading spinner */
.image-loading {
    width: 40px;
    height: 40px;
    border: 4px solid rgba(59, 130, 246, 0.3);
    border-top: 4px solid #3B82F6;
    border-radius: 50%;
    animation: spin 1s linear infinite;
}

@keyframes spin {
    0% { transform: rotate(0deg); }
    100% { transform: rotate(360deg); }
}
`;

// Inject CSS
const styleSheet = document.createElement("style");
styleSheet.textContent = imageModalCSS;
document.head.appendChild(styleSheet);

// Image Modal HTML (tambahkan ke HTML utama setelah quickViewModal)
const imageModalHTML = `
<div id="imageModal" class="fixed inset-0 bg-black/90 backdrop-blur-sm z-50 hidden items-center justify-center p-4">
    <div class="relative max-w-screen-lg w-full h-full flex items-center justify-center">
        <div class="image-loading hidden"></div>
        <img id="modalImage" class="image-modal-content hidden" alt="Full Size Image">
        <button class="close-image-modal" aria-label="Close image">×</button>
    </div>
</div>
`;

// Insert image modal into DOM
document.body.insertAdjacentHTML('beforeend', imageModalHTML);

// Image Modal Functionality
function initializeImageModal() {
    const imageModal = document.querySelector('#imageModal');
    const modalImage = document.querySelector('#modalImage');
    const closeImageBtn = document.querySelector('.close-image-modal');
    const loadingSpinner = document.querySelector('.image-loading');

    if (!imageModal || !modalImage || !closeImageBtn) return;

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

    // Return functions for external use
    return {
        open: openImageModal,
        close: closeImageModal
    };
}

// Initialize image modal
const imageModalController = initializeImageModal();

// Function to make images in quick view clickable
function makeQuickViewImagesClickable() {
    // Observer untuk mendeteksi perubahan dalam modal content
    const observer = new MutationObserver((mutations) => {
        mutations.forEach((mutation) => {
            if (mutation.type === 'childList') {
                // Cari semua gambar dalam quick view modal yang baru ditambahkan
                const quickViewModal = document.querySelector('#quickViewModal');
                if (quickViewModal && !quickViewModal.classList.contains('hidden')) {
                    const images = quickViewModal.querySelectorAll('img:not(.modal-image-clickable)');
                    
                    images.forEach(img => {
                        // Tambah class dan event listener
                        img.classList.add('modal-image-clickable');
                        
                        img.addEventListener('click', (e) => {
                            e.preventDefault();
                            e.stopPropagation();
                            
                            const imageSrc = img.src;
                            const imageAlt = img.alt || 'Project Image';
                            
                            if (imageModalController && imageSrc) {
                                imageModalController.open(imageSrc, imageAlt);
                            }
                        });
                    });
                }
            }
        });
    });

    // Observe perubahan dalam body
    observer.observe(document.body, {
        childList: true,
        subtree: true
    });

    // Juga langsung handle gambar yang sudah ada
    const existingImages = document.querySelectorAll('#quickViewModal img');
    existingImages.forEach(img => {
        if (!img.classList.contains('modal-image-clickable')) {
            img.classList.add('modal-image-clickable');
            
            img.addEventListener('click', (e) => {
                e.preventDefault();
                e.stopPropagation();
                
                const imageSrc = img.src;
                const imageAlt = img.alt || 'Project Image';
                
                if (imageModalController && imageSrc) {
                    imageModalController.open(imageSrc, imageAlt);
                }
            });
        }
    });
}

// Initialize clickable images
document.addEventListener('DOMContentLoaded', () => {
    makeQuickViewImagesClickable();
});

// Juga export untuk digunakan di initializeApp()
window.initializeImageModal = makeQuickViewImagesClickable;
