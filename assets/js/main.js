// Royal Power Service - Main JavaScript
// Modern Landing Page Functionality

document.addEventListener('DOMContentLoaded', function() {
    // Initialize Splide Sliders
    initHeroSlider();
    initProductsSlider();
    initClientsSlider();

    // Initialize Mobile Menu
    initMobileMenu();

    // Initialize Scroll Effects
    initScrollEffects();

    // Initialize Scroll Reveal Animations
    initScrollReveal();

    // Initialize Smooth Scroll
    initSmoothScroll();

    // Initialize Contact Form (if exists)
    initContactForm();

    // Update Copyright Year
    updateCopyrightYear();

    // Update Years of Experience
    updateYearsExperience();
});

// Dynamic Copyright Year
function updateCopyrightYear() {
    const copyrightYearElements = document.querySelectorAll('.copyright-year');
    const currentYear = new Date().getFullYear();

    copyrightYearElements.forEach(element => {
        element.textContent = currentYear;
    });
}

// Dynamic Years of Experience (Founded in 2009)
function updateYearsExperience() {
    const FOUNDING_YEAR = 2009;
    const currentYear = new Date().getFullYear();
    const yearsOfExperience = currentYear - FOUNDING_YEAR;

    const experienceElements = document.querySelectorAll('.years-experience');
    experienceElements.forEach(element => {
        element.textContent = yearsOfExperience + '+';
        // Update data-count attribute for counter animation
        if (element.hasAttribute('data-count')) {
            element.setAttribute('data-count', yearsOfExperience);
        }
    });
}

// Hero Slider Initialization
function initHeroSlider() {
    const heroSlider = document.getElementById('hero-slider');
    if (heroSlider) {
        new Splide('#hero-slider', {
            type: 'fade',
            rewind: true,
            autoplay: true,
            interval: 5000,
            pauseOnHover: false,
            pauseOnFocus: false,
            arrows: true,
            pagination: true,
            speed: 1000,
            easing: 'ease-in-out',
            // CLS optimizations
            waitForTransition: false,
            updateOnMove: false,
            trimSpace: false,
        }).mount();
    }
}

// Products Slider Initialization
function initProductsSlider() {
    const productsSlider = document.getElementById('products-slider');
    if (productsSlider) {
        new Splide('#products-slider', {
            type: 'loop',
            fixedWidth: '380px',
            perMove: 1,
            gap: '1.5rem',
            autoplay: true,
            interval: 3000,
            pauseOnHover: true,
            arrows: false,
            pagination: true,
            breakpoints: {
                1024: {
                    fixedWidth: '340px',
                },
                768: {
                    fixedWidth: '300px',
                    gap: '1rem',
                },
                480: {
                    fixedWidth: '280px',
                    gap: '0.75rem',
                },
                375: {
                    fixedWidth: '260px',
                    gap: '0.5rem',
                },
            },
        }).mount();
    }
}

// Clients Logo Slider Initialization (Auto-scroll)
function initClientsSlider() {
    const clientsSlider = document.getElementById('clients-slider');
    if (clientsSlider) {
        const splide = new Splide('#clients-slider', {
            type: 'loop',
            fixedWidth: '220px',
            perMove: 1,
            gap: '1rem',
            arrows: false,
            pagination: false,
            drag: 'free',
            focus: 'center',
            autoScroll: {
                speed: 1,
                pauseOnHover: true,
                pauseOnFocus: false,
            },
            breakpoints: {
                640: {
                    fixedWidth: '180px',
                    gap: '0.5rem',
                },
            },
        });

        // Mount with AutoScroll extension if available
        if (window.splide && window.splide.Extensions && window.splide.Extensions.AutoScroll) {
            splide.mount({ AutoScroll: window.splide.Extensions.AutoScroll });
        } else {
            splide.mount();
        }
    }
}

// Mobile Menu Toggle
function initMobileMenu() {
    const mobileMenuButton = document.getElementById('mobile-menu-button');
    const mobileMenu = document.getElementById('mobile-menu');
    const menuIcon = document.getElementById('menu-icon');

    if (mobileMenuButton && mobileMenu) {
        mobileMenuButton.addEventListener('click', function() {
            const isOpen = mobileMenu.classList.contains('active');

            if (isOpen) {
                // Close menu
                mobileMenu.classList.remove('active');
                mobileMenu.classList.add('hidden');
                menuIcon.classList.remove('fa-times');
                menuIcon.classList.add('fa-bars');
            } else {
                // Open menu
                mobileMenu.classList.remove('hidden');
                // Small delay to trigger CSS transition
                setTimeout(() => {
                    mobileMenu.classList.add('active');
                }, 10);
                menuIcon.classList.remove('fa-bars');
                menuIcon.classList.add('fa-times');
            }
        });

        // Close menu when clicking on a link
        const mobileLinks = mobileMenu.querySelectorAll('a');
        mobileLinks.forEach(link => {
            link.addEventListener('click', () => {
                mobileMenu.classList.remove('active');
                setTimeout(() => {
                    mobileMenu.classList.add('hidden');
                }, 300);
                menuIcon.classList.remove('fa-times');
                menuIcon.classList.add('fa-bars');
            });
        });
    }
}

// Scroll Effects (Nav shadow, etc.)
function initScrollEffects() {
    const nav = document.getElementById('main-nav');
    let lastScroll = 0;

    window.addEventListener('scroll', () => {
        const currentScroll = window.pageYOffset;

        // Add shadow to nav on scroll
        if (currentScroll > 10) {
            nav.classList.add('nav-scrolled');
        } else {
            nav.classList.remove('nav-scrolled');
        }

        lastScroll = currentScroll;
    });
}

// Scroll Reveal Animation
function initScrollReveal() {
    const fadeElements = document.querySelectorAll('.fade-in-up');

    const observerOptions = {
        root: null,
        rootMargin: '100px 0px',
        threshold: 0.1
    };

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    fadeElements.forEach(element => {
        observer.observe(element);
    });
}

// Smooth Scroll for Anchor Links
function initSmoothScroll() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            const href = this.getAttribute('href');
            if (href !== '#' && href.length > 1) {
                e.preventDefault();
                const target = document.querySelector(href);
                if (target) {
                    const headerOffset = 80;
                    const elementPosition = target.getBoundingClientRect().top;
                    const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

                    window.scrollTo({
                        top: offsetPosition,
                        behavior: 'smooth'
                    });
                }
            }
        });
    });
}

// Contact Form Handler
function initContactForm() {
    const contactForm = document.getElementById('contact-form');

    // Check for success parameter in URL (redirect from Formsubmit)
    const urlParams = new URLSearchParams(window.location.search);
    if (urlParams.get('success') === 'true') {
        showNotification('Thank you for your message! We will get back to you soon.', 'success');
        // Clean up URL without refreshing the page
        window.history.replaceState({}, document.title, window.location.pathname);
    }

    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            // Get form data
            const formData = new FormData(this);
            const data = Object.fromEntries(formData);

            // Simple validation
            if (!data.name || !data.email || !data.message) {
                e.preventDefault();
                showNotification('Please fill in all required fields.', 'error');
                return;
            }

            // Email validation
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (!emailRegex.test(data.email)) {
                e.preventDefault();
                showNotification('Please enter a valid email address.', 'error');
                return;
            }

            // Check daily submission limit
            if (hasSubmittedToday(data.email)) {
                e.preventDefault();
                showNotification('You have already sent a message today. Please try again tomorrow.', 'error');
                return;
            }

            // Mark as submitted for today
            markAsSubmitted(data.email);

            // Form is valid - let Formsubmit handle the submission
            // No preventDefault() here so the form submits to Formsubmit
        });
    }
}

// Check if email has already submitted today
function hasSubmittedToday(email) {
    const submissions = JSON.parse(localStorage.getItem('contact_submissions') || '{}');
    const today = new Date().toDateString();
    const emailKey = email.toLowerCase().trim();

    return submissions[emailKey] === today;
}

// Mark email as submitted for today
function markAsSubmitted(email) {
    const submissions = JSON.parse(localStorage.getItem('contact_submissions') || '{}');
    const today = new Date().toDateString();
    const emailKey = email.toLowerCase().trim();

    // Clean up old entries (not from today)
    Object.keys(submissions).forEach(key => {
        if (submissions[key] !== today) {
            delete submissions[key];
        }
    });

    submissions[emailKey] = today;
    localStorage.setItem('contact_submissions', JSON.stringify(submissions));
}

// Notification Helper
function showNotification(message, type = 'info') {
    // Create notification element
    const notification = document.createElement('div');
    notification.className = `fixed top-4 right-4 px-6 py-4 rounded-lg shadow-lg z-50 transform translate-x-full transition-transform duration-300 ${
        type === 'success' ? 'bg-green-500' :
        type === 'error' ? 'bg-red-500' :
        'bg-blue-500'
    } text-white`;
    notification.textContent = message;

    document.body.appendChild(notification);

    // Slide in
    setTimeout(() => {
        notification.classList.remove('translate-x-full');
    }, 100);

    // Remove after 4 seconds
    setTimeout(() => {
        notification.classList.add('translate-x-full');
        setTimeout(() => {
            notification.remove();
        }, 300);
    }, 4000);
}

// Counter Animation (for stats section)
function animateCounter(element, target, duration = 2000) {
    let start = 0;
    const increment = target / (duration / 16);

    function updateCounter() {
        start += increment;
        if (start < target) {
            element.textContent = Math.ceil(start);
            requestAnimationFrame(updateCounter);
        } else {
            element.textContent = target;
        }
    }

    updateCounter();
}

// Initialize counters when stats section is visible
const statsSection = document.querySelector('.bg-royal-blue');
if (statsSection) {
    const statsObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const counters = entry.target.querySelectorAll('[data-count]');
                counters.forEach(counter => {
                    const target = parseInt(counter.getAttribute('data-count'));
                    if (target) {
                        animateCounter(counter, target);
                    }
                });
                statsObserver.unobserve(entry.target);
            }
        });
    }, { threshold: 0.5 });

    statsObserver.observe(statsSection);
}

// Lazy loading images (native browser support fallback)
if ('loading' in HTMLImageElement.prototype) {
    const images = document.querySelectorAll('img[loading="lazy"]');
    images.forEach(img => {
        img.src = img.dataset.src || img.src;
    });
} else {
    // Fallback for browsers that don't support lazy loading
    const lazyImages = document.querySelectorAll('img[data-src]');
    const lazyImageObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                img.src = img.dataset.src;
                img.classList.remove('loading');
                lazyImageObserver.unobserve(img);
            }
        });
    });

    lazyImages.forEach(img => {
        lazyImageObserver.observe(img);
    });
}

// Preload critical images
function preloadImages(urls) {
    urls.forEach(url => {
        const img = new Image();
        img.src = url;
    });
}

// Preload hero slider images
preloadImages([
    'assets/images/home-slide1.webp',
    'assets/images/home-slide2.webp',
    'assets/images/home-slide3.webp'
]);

// Product Image Slideshow (for Spare Parts and Controller sections)
function initProductSlideshows() {
    // Regular product slideshows (no badge change) - with staggered delays
    const slideshows = document.querySelectorAll('.product-slideshow');
    slideshows.forEach((slideshow, index) => {
        const images = slideshow.querySelectorAll('.slideshow-image');
        if (images.length < 2) return;

        const interval = parseInt(slideshow.dataset.interval) || 4000;
        const initialDelay = index * 2000; // Stagger each slideshow by 2 seconds
        let currentIndex = 0;

        // Start slideshow after initial delay
        setTimeout(() => {
            setInterval(() => {
                // Fade out current image
                images[currentIndex].classList.remove('active');
                images[currentIndex].style.opacity = '0';

                // Move to next image
                currentIndex = (currentIndex + 1) % images.length;

                // Fade in next image
                images[currentIndex].classList.add('active');
                images[currentIndex].style.opacity = '1';
            }, interval);
        }, initialDelay);
    });

    // Controller slideshow with dynamic badge - starts after other slideshows
    const controllerSlideshow = document.querySelector('.controller-slideshow');
    if (controllerSlideshow) {
        const images = controllerSlideshow.querySelectorAll('.slideshow-image');
        const badge = controllerSlideshow.parentElement.querySelector('.controller-badge');

        if (images.length >= 2 && badge) {
            const interval = parseInt(controllerSlideshow.dataset.interval) || 4000;
            const initialDelay = 3000; // Start 3 seconds after page load
            let currentIndex = 0;

            setTimeout(() => {
                setInterval(() => {
                    // Fade out current image
                    images[currentIndex].classList.remove('active');
                    images[currentIndex].style.opacity = '0';

                    // Move to next image
                    currentIndex = (currentIndex + 1) % images.length;

                    // Fade in next image
                    images[currentIndex].classList.add('active');
                    images[currentIndex].style.opacity = '1';

                    // Update badge text with animation
                    const newBadgeText = images[currentIndex].dataset.badge;
                    if (newBadgeText) {
                        badge.style.transform = 'scale(0.9)';
                        badge.style.opacity = '0.5';

                        setTimeout(() => {
                            badge.textContent = newBadgeText;
                            badge.style.transform = 'scale(1)';
                            badge.style.opacity = '1';
                        }, 150);
                    }
                }, interval);
            }, initialDelay);
        }
    }
}

// Initialize product slideshows when DOM is ready
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initProductSlideshows);
} else {
    initProductSlideshows();
}
