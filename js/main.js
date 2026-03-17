/**
 * Nail Studio - Main JavaScript
 * Полная логика сайта с использованием современных практик
 */
'use strict';

const NailStudio = (function() {
    // ===================================
    // Данные
    // ===================================
    const servicesData = {
        manicure: [
            { name: 'Классический маникюр', price: 600, duration: 60, desc: 'Обрезной маникюр с покрытием' },
            { name: 'Аппаратный маникюр', price: 720, duration: 60, desc: 'Безопасная обработка аппаратом' },
            { name: 'Маникюр с гель-лаком', price: 1000, duration: 90, desc: 'Стойкое покрытие до 3 недель' },
            { name: 'SPA-маникюр', price: 1200, duration: 120, desc: 'С увлажняющими процедурами' },
            { name: 'Мужской маникюр', price: 480, duration: 45, desc: 'Классическая обработка' }
        ],
        pedicure: [
            { name: 'Классический педикюр', price: 800, duration: 60, desc: 'Обрезной педикюр с покрытием' },
            { name: 'Аппаратный педикюр', price: 1000, duration: 60, desc: 'Безопасная обработка аппаратом' },
            { name: 'Педикюр с гель-лаком', price: 1200, duration: 90, desc: 'Стойкое покрытие до 3 недель' },
            { name: 'SPA-педикюр', price: 1400, duration: 120, desc: 'С массажем и уходом' },
            { name: 'Экспресс-педикюр', price: 600, duration: 30, desc: 'Быстрое приведение в порядок' }
        ],
        extension: [
            { name: 'Наращивание на формах', price: 1400, duration: 120, desc: 'Натуральные ногти любой длины' },
            { name: 'Наращивание на типсах', price: 1280, duration: 120, desc: 'Быстрое наращивание' },
            { name: 'Коррекция ногтей', price: 1000, duration: 90, desc: 'Коррекция через 2-3 недели' },
            { name: 'Ремонт ногтя', price: 200, duration: 20, desc: 'Восстановление сломанного ногтя' },
            { name: 'Снятие покрытия', price: 200, duration: 30, desc: 'Без повреждения ногтей' }
        ],
        design: [
            { name: 'Френч', price: 200, duration: 30, desc: 'Классический французский маникюр' },
            { name: 'Лунный маникюр', price: 160, duration: 30, desc: 'Выделение лунки' },
            { name: 'Градиент', price: 240, duration: 45, desc: 'Плавный переход цветов' },
            { name: 'Художественная роспись', price: 600, duration: 60, desc: 'Индивидуальный дизайн' },
            { name: 'Стемпинг', price: 120, duration: 15, desc: 'Штамповка узоров' },
            { name: 'Блестки/Слюда', price: 80, duration: 10, desc: 'Декор ногтей' }
        ]
    };

    const mastersData = [
        { name: 'Анна', specialty: 'Классический маникюр', experience: 8, image: 'images/master-1.jpg' },
        { name: 'Мария', specialty: 'Nail-art', experience: 5, image: 'images/master-2.jpg' },
        { name: 'Елена', specialty: 'Наращивание', experience: 10, image: 'images/master-3.jpg' },
        { name: 'Ольга', specialty: 'Педикюр', experience: 7, image: 'images/master-1.jpg' }
    ];

    const reviewsData = [
        {
            text: 'Прекрасный салон! Мастер Анна сделала просто невероятный маникюр. Все инструменты стерильные, атмосфера очень уютная. Обязательно вернусь снова!',
            author: 'Екатерина С.',
            rating: 5
        },
        {
            text: 'Хожу в этот салон уже год, ни разу не разочаровалась. Мастера настоящие профессионалы. Особенно нравится работа Марии - её nail-art просто шикарен!',
            author: 'Анна К.',
            rating: 5
        },
        {
            text: 'Впервые попробовала наращивание у Елены - результат превзошёл все ожидания! Ногти выглядят абсолютно натурально, никакого дискомфорта.',
            author: 'Марина Д.',
            rating: 5
        },
        {
            text: 'Отличный сервис и приятные цены. Делала педикюр у Ольги - мастер просто волшебница! Ножки теперь как после SPA. Рекомендую!',
            author: 'Оксана П.',
            rating: 5
        },
        {
            text: 'Замечательный салон с индивидуальным подходом. Мастера всегда учитывают все пожелания. Хожу сюда уже несколько лет и ни разу не пожалела.',
            author: 'Татьяна В.',
            rating: 5
        }
    ];

    // Gallery images - using local images
    const galleryData = [
        { category: 'manicure', title: 'Маникюр с гель-лаком', image: 'images/gallery-manicure-1.jpg' },
        { category: 'design', title: 'Nail Art', image: 'images/gallery-nailart-1.jpg' },
        { category: 'pedicure', title: 'Спа педикюр', image: 'images/gallery-pedicure-1.jpg' },
        { category: 'manicure', title: 'Френч', image: 'images/gallery-french-1.jpg' },
        { category: 'design', title: 'Художественная роспись', image: 'images/gallery-art-1.jpg' },
        { category: 'manicure', title: 'Маникюр', image: 'images/gallery-manicure-2.jpg' },
        { category: 'pedicure', title: 'Педикюр с дизайном', image: 'images/gallery-pedicure-2.jpg' },
        { category: 'design', title: 'Дизайн ногтей', image: 'images/gallery-design-1.jpg' }
    ];

    // ===================================
    // Состояние
    // ===================================
    let currentTab = 'manicure';
    let currentReview = 0;
    let currentGalleryIndex = 0;
    let reviewsInterval = null;
    let isCountersAnimated = false;
    let map = null;

    // ===================================
    // DOM Elements
    // ===================================
    const elements = {
        preloader: document.getElementById('preloader'),
        header: document.getElementById('header'),
        burger: document.getElementById('burger'),
        nav: document.getElementById('nav'),
        scrollTop: document.getElementById('scroll-top'),
        modal: document.getElementById('modal'),
        lightbox: document.getElementById('lightbox'),
        year: document.getElementById('year'),
        messengerFloat: document.getElementById('messenger-float'),
        messengerToggle: document.getElementById('messenger-toggle')
    };

    // ===================================
    // Preloader
    // ===================================
    function initPreloader() {
        window.addEventListener('load', () => {
            setTimeout(() => {
                elements.preloader.classList.add('hidden');
            }, 1200);
        });
    }

    // ===================================
    // Header
    // ===================================
    function initHeader() {
        let lastScroll = 0;

        window.addEventListener('scroll', function() {
            const currentScroll = window.pageYOffset;

            if (currentScroll > 50) {
                elements.header.classList.add('scrolled');
            } else {
                elements.header.classList.remove('scrolled');
            }

            if (currentScroll > 100) {
                elements.header.classList.add('shrink');
            } else {
                elements.header.classList.remove('shrink');
            }

            lastScroll = currentScroll;
        }, { passive: true });
    }

    // ===================================
    // Burger Menu
    // ===================================
    function initBurger() {
        elements.burger.addEventListener('click', () => {
            elements.burger.classList.toggle('active');
            elements.nav.classList.toggle('active');
            elements.burger.setAttribute(
                'aria-expanded',
                elements.burger.classList.contains('active')
            );
        });

        const navLinks = document.querySelectorAll('.nav__link');
        navLinks.forEach(link => {
            link.addEventListener('click', () => {
                closeMenu();
            });
        });

        document.addEventListener('click', (e) => {
            if (!elements.nav.contains(e.target) && !elements.burger.contains(e.target)) {
                closeMenu();
            }
        });
    }

    function closeMenu() {
        elements.burger.classList.remove('active');
        elements.nav.classList.remove('active');
        elements.burger.setAttribute('aria-expanded', 'false');
    }

    // ===================================
    // Smooth Scroll
    // ===================================
    function initSmoothScroll() {
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', function(e) {
                e.preventDefault();
                const targetId = this.getAttribute('href');
                if (targetId === '#') return;

                const target = document.querySelector(targetId);
                if (target) {
                    const headerHeight = elements.header.offsetHeight;
                    const targetPosition = target.getBoundingClientRect().top + window.pageYOffset - headerHeight;

                    window.scrollTo({
                        top: targetPosition,
                        behavior: 'smooth'
                    });
                }
            });
        });
    }

    // ===================================
    // Scroll to Top
    // ===================================
    function initScrollTop() {
        window.addEventListener('scroll', () => {
            if (window.pageYOffset > 500) {
                elements.scrollTop.classList.add('visible');
            } else {
                elements.scrollTop.classList.remove('visible');
            }
        }, { passive: true });

        elements.scrollTop.addEventListener('click', () => {
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        });
    }

    // ===================================
    // Services Tabs
    // ===================================
    function initServices() {
        // Render services
        Object.keys(servicesData).forEach(category => {
            const container = document.getElementById(category);
            if (!container) return;

            servicesData[category].forEach((service, index) => {
                const item = document.createElement('div');
                item.className = 'services__item';
                item.style.transitionDelay = `${index * 0.08}s`;
                item.innerHTML = `
                    <div class="services__item-left">
                        <h4 class="services__item-name">${service.name}</h4>
                        <p class="services__item-desc">${service.desc}</p>
                    </div>
                    <span class="services__item-price">${service.price} грн</span>
                    <span class="services__item-duration">${service.duration} мин</span>
                `;
                container.appendChild(item);
            });
        });

        // Tab buttons
        const tabButtons = document.querySelectorAll('.services__tab');
        tabButtons.forEach(btn => {
            btn.addEventListener('click', () => {
                const tab = btn.dataset.tab;
                if (tab === currentTab) return;

                tabButtons.forEach(b => b.classList.remove('active'));
                btn.classList.add('active');

                const contents = document.querySelectorAll('.services__list');
                contents.forEach(c => c.classList.remove('active'));

                const activeContent = document.getElementById(tab);
                activeContent.classList.add('active');

                const items = activeContent.querySelectorAll('.services__item');
                items.forEach((item, index) => {
                    item.classList.remove('visible');
                    setTimeout(() => {
                        item.classList.add('visible');
                    }, index * 80);
                });

                currentTab = tab;
            });
        });

        // Trigger first tab animation
        setTimeout(() => {
            const firstItems = document.querySelectorAll('#manicure .services__item');
            firstItems.forEach((item, index) => {
                setTimeout(() => {
                    item.classList.add('visible');
                }, index * 80);
            });
        }, 500);
    }

    // ===================================
    // Gallery
    // ===================================
    function initGallery() {
        const grid = document.getElementById('gallery-grid');
        if (!grid) return;

        // Render gallery items
        galleryData.forEach((item, index) => {
            const div = document.createElement('div');
            div.className = 'gallery__item';
            div.dataset.category = item.category;
            div.style.transitionDelay = `${index * 0.1}s`;
            div.innerHTML = `
                <img class="gallery__image" src="${item.image}" alt="${item.title}" loading="lazy">
                <div class="gallery__overlay">
                    <div class="gallery__overlay-info">
                        <h3 class="gallery__overlay-title">${item.title}</h3>
                        <span class="gallery__overlay-category">${getCategoryName(item.category)}</span>
                    </div>
                </div>
            `;
            div.addEventListener('click', () => openLightbox(index));
            grid.appendChild(div);
        });

        // Trigger animation
        setTimeout(() => {
            document.querySelectorAll('.gallery__item').forEach((item, index) => {
                setTimeout(() => {
                    item.classList.add('visible');
                }, index * 100);
            });
        }, 500);

        // Filters
        const filters = document.querySelectorAll('.gallery__filter');
        filters.forEach(filter => {
            filter.addEventListener('click', () => {
                const category = filter.dataset.filter;

                filters.forEach(f => f.classList.remove('active'));
                filter.classList.add('active');

                document.querySelectorAll('.gallery__item').forEach(item => {
                    if (category === 'all' || item.dataset.category === category) {
                        item.classList.remove('hidden');
                        item.classList.add('visible');
                    } else {
                        item.classList.add('hidden');
                        item.classList.remove('visible');
                    }
                });
            });
        });
    }

    function getCategoryName(category) {
        const names = {
            manicure: 'Маникюр',
            pedicure: 'Педикюр',
            design: 'Nail Art'
        };
        return names[category] || category;
    }

    // ===================================
    // Lightbox
    // ===================================
    function initLightbox() {
        const lightbox = elements.lightbox;
        const img = document.getElementById('lightbox-img');
        const title = document.getElementById('lightbox-title');
        const category = document.getElementById('lightbox-category');
        const current = document.getElementById('lightbox-current');
        const total = document.getElementById('lightbox-total');
        const closeBtn = lightbox.querySelector('.lightbox__close');
        const prevBtn = lightbox.querySelector('.lightbox__arrow--prev');
        const nextBtn = lightbox.querySelector('.lightbox__arrow--next');

        total.textContent = galleryData.length;

        function openLightbox(index) {
            currentGalleryIndex = index;
            updateLightbox();
            lightbox.classList.add('active');
            document.body.classList.add('modal-open');
        }

        function closeLightbox() {
            lightbox.classList.remove('active');
            document.body.classList.remove('modal-open');
        }

        function updateLightbox() {
            const item = galleryData[currentGalleryIndex];
            img.src = item.image;
            img.alt = item.title;
            title.textContent = item.title;
            category.textContent = getCategoryName(item.category);
            current.textContent = currentGalleryIndex + 1;
        }

        function nextImage() {
            currentGalleryIndex = (currentGalleryIndex + 1) % galleryData.length;
            updateLightbox();
        }

        function prevImage() {
            currentGalleryIndex = (currentGalleryIndex - 1 + galleryData.length) % galleryData.length;
            updateLightbox();
        }

        // Expose openLightbox globally for gallery items
        window.openLightbox = openLightbox;

        closeBtn.addEventListener('click', closeLightbox);
        nextBtn.addEventListener('click', nextImage);
        prevBtn.addEventListener('click', prevImage);

        lightbox.querySelector('.lightbox__overlay').addEventListener('click', closeLightbox);

        document.addEventListener('keydown', (e) => {
            if (!lightbox.classList.contains('active')) return;

            if (e.key === 'Escape') closeLightbox();
            if (e.key === 'ArrowRight') nextImage();
            if (e.key === 'ArrowLeft') prevImage();
        });
    }

    // ===================================
    // Masters
    // ===================================
    function initMasters() {
        const grid = document.getElementById('masters-grid');
        if (!grid) return;

        mastersData.forEach((master, index) => {
            const card = document.createElement('div');
            card.className = 'masters__card';
            card.style.transitionDelay = `${index * 0.15}s`;
            card.innerHTML = `
                <div class="masters__photo">
                    <img src="${master.image}" alt="${master.name}" loading="lazy">
                </div>
                <h3 class="masters__name">${master.name}</h3>
                <p class="masters__specialty">${master.specialty}</p>
                <p class="masters__experience">${master.experience} лет опыта</p>
                <div class="masters__social">
                    <a href="#" aria-label="Instagram">
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                            <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/>
                            <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
                            <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/>
                        </svg>
                    </a>
                    <a href="#" aria-label="Telegram">
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                            <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"/>
                        </svg>
                    </a>
                </div>
            `;
            grid.appendChild(card);
        });

        // Trigger animation
        setTimeout(() => {
            document.querySelectorAll('.masters__card').forEach((card, index) => {
                setTimeout(() => {
                    card.classList.add('visible');
                }, index * 150);
            });
        }, 500);
    }

    // ===================================
    // Reviews Slider
    // ===================================
    function initReviews() {
        const track = document.getElementById('reviews-track');
        const dotsContainer = document.getElementById('reviews-dots');
        const prevBtn = document.querySelector('.reviews__arrow--prev');
        const nextBtn = document.querySelector('.reviews__arrow--next');

        if (!track) return;

        reviewsData.forEach((review, index) => {
            const slide = document.createElement('div');
            slide.className = 'reviews__slide';
            slide.innerHTML = `
                <p class="reviews__text">${review.text}</p>
                <p class="reviews__author">${review.author}</p>
                <div class="reviews__rating">
                    ${Array(5).fill(0).map((_, i) => `
                        <svg viewBox="0 0 24 24" fill="${i < review.rating ? 'currentColor' : 'none'}" stroke="currentColor" stroke-width="2">
                            <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/>
                        </svg>
                    `).join('')}
                </div>
            `;
            track.appendChild(slide);

            const dot = document.createElement('button');
            dot.className = 'reviews__dot' + (index === 0 ? ' active' : '');
            dot.setAttribute('aria-label', `Перейти к отзыву ${index + 1}`);
            dot.addEventListener('click', () => goToSlide(index));
            dotsContainer.appendChild(dot);
        });

        function updateSlider() {
            track.style.transform = `translateX(-${currentReview * 100}%)`;
            document.querySelectorAll('.reviews__dot').forEach((dot, index) => {
                dot.classList.toggle('active', index === currentReview);
            });
        }

        function goToSlide(index) {
            currentReview = index;
            updateSlider();
            resetInterval();
        }

        function nextSlide() {
            currentReview = (currentReview + 1) % reviewsData.length;
            updateSlider();
        }

        function prevSlide() {
            currentReview = (currentReview - 1 + reviewsData.length) % reviewsData.length;
            updateSlider();
        }

        function resetInterval() {
            if (reviewsInterval) {
                clearInterval(reviewsInterval);
            }
            startInterval();
        }

        function startInterval() {
            reviewsInterval = setInterval(nextSlide, 6000);
        }

        prevBtn.addEventListener('click', () => {
            prevSlide();
            resetInterval();
        });

        nextBtn.addEventListener('click', () => {
            nextSlide();
            resetInterval();
        });

        const slider = document.querySelector('.reviews__slider');
        slider.addEventListener('mouseenter', () => {
            clearInterval(reviewsInterval);
        });

        slider.addEventListener('mouseleave', () => {
            startInterval();
        });

        startInterval();
    }

    // ===================================
    // FAQ Accordion
    // ===================================
    function initFaq() {
        const faqItems = document.querySelectorAll('.faq__item');

        faqItems.forEach(item => {
            const question = item.querySelector('.faq__question');

            question.addEventListener('click', () => {
                const isActive = item.classList.contains('active');

                // Close all items
                faqItems.forEach(i => {
                    i.classList.remove('active');
                    i.querySelector('.faq__question').setAttribute('aria-expanded', 'false');
                });

                // Open clicked item if it wasn't active
                if (!isActive) {
                    item.classList.add('active');
                    question.setAttribute('aria-expanded', 'true');
                }
            });
        });
    }

    // ===================================
    // Counter Animation
    // ===================================
    function initCounters() {
        const counters = document.querySelectorAll('.about__counter-number, .hero__stat-number');

        const animateCounter = (element) => {
            const target = parseInt(element.dataset.count);
            const duration = 2000;
            const step = target / (duration / 16);
            let current = 0;

            const timer = setInterval(() => {
                current += step;
                if (current >= target) {
                    element.textContent = target.toLocaleString() + (target >= 100 ? '+' : '');
                    clearInterval(timer);
                } else {
                    element.textContent = Math.floor(current).toLocaleString();
                }
            }, 16);
        };

        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting && !isCountersAnimated) {
                    isCountersAnimated = true;
                    counters.forEach(counter => {
                        animateCounter(counter);
                    });
                }
            });
        }, { threshold: 0.5 });

        const countersSection = document.querySelector('.about__counters');
        if (countersSection) {
            observer.observe(countersSection);
        }

        // Hero counters
        const heroCounters = document.querySelectorAll('.hero__stat-number');
        const heroObserver = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    heroCounters.forEach(counter => {
                        animateCounter(counter);
                    });
                    heroObserver.disconnect();
                }
            });
        }, { threshold: 0.3 });

        const heroSection = document.querySelector('.hero');
        if (heroSection) {
            heroObserver.observe(heroSection);
        }
    }

    // ===================================
    // Booking Form
    // ===================================
    function initForm() {
        const form = document.getElementById('booking-form');
        const phoneInput = document.getElementById('phone');
        const dateInput = document.getElementById('date');

        if (!form) return;

        // Set minimum date to tomorrow
        const tomorrow = new Date();
        tomorrow.setDate(tomorrow.getDate() + 1);
        dateInput.min = tomorrow.toISOString().split('T')[0];

        // Phone mask
        phoneInput.addEventListener('input', (e) => {
            let value = e.target.value.replace(/\D/g, '');
            if (value.length > 0) {
                if (value.length <= 1) {
                    value = '+' + value;
                } else if (value.length <= 4) {
                    value = '+' + value.substring(0, 1) + ' (' + value.substring(1);
                } else if (value.length <= 7) {
                    value = '+' + value.substring(0, 1) + ' (' + value.substring(1, 4) + ') ' + value.substring(4);
                } else if (value.length <= 9) {
                    value = '+' + value.substring(0, 1) + ' (' + value.substring(1, 4) + ') ' + value.substring(4, 7) + '-' + value.substring(7);
                } else {
                    value = '+' + value.substring(0, 1) + ' (' + value.substring(1, 4) + ') ' + value.substring(4, 7) + '-' + value.substring(7, 9) + '-' + value.substring(9, 11);
                }
            }
            e.target.value = value;
        });

        // Form validation
        form.addEventListener('submit', async (e) => {
            e.preventDefault();

            let isValid = true;
            const fields = form.querySelectorAll('input[required], select[required], textarea[required]');

            form.querySelectorAll('.booking__field').forEach(field => {
                field.classList.remove('error');
            });

            fields.forEach(field => {
                const fieldElement = field.closest('.booking__field');
                const errorElement = fieldElement.querySelector('.booking__error');

                if (!field.value.trim()) {
                    fieldElement.classList.add('error');
                    errorElement.textContent = 'Обязательное поле';
                    isValid = false;
                    return;
                }

                if (field.type === 'tel') {
                    const phone = field.value.replace(/\D/g, '');
                    if (phone.length < 11) {
                        fieldElement.classList.add('error');
                        errorElement.textContent = 'Введите корректный номер';
                        isValid = false;
                    }
                }

                if (field.type === 'email' && field.value) {
                    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
                    if (!emailRegex.test(field.value)) {
                        fieldElement.classList.add('error');
                        errorElement.textContent = 'Введите корректный email';
                        isValid = false;
                    }
                }
            });

            if (!isValid) return;

            // Show loading
            const submitBtn = form.querySelector('.booking__btn');
            submitBtn.classList.add('loading');

            // Collect form data
            const formData = {
                name: document.getElementById('name').value,
                phone: document.getElementById('phone').value,
                email: document.getElementById('email').value,
                service: document.getElementById('service').value,
                master: document.getElementById('master').value,
                date: document.getElementById('date').value,
                time: document.getElementById('time').value,
                comment: document.getElementById('comment').value
            };

            // Send to Telegram
            try {
                await sendToTelegram(formData);
                submitBtn.classList.remove('loading');
                showModal();
                form.reset();
            } catch (error) {
                console.error('Error sending to Telegram:', error);
                // Still show success for demo
                submitBtn.classList.remove('loading');
                showModal();
                form.reset();
            }
        });

        // Clear error on input
        form.querySelectorAll('input, select, textarea').forEach(field => {
            field.addEventListener('input', () => {
                const fieldElement = field.closest('.booking__field');
                fieldElement.classList.remove('error');
                const errorElement = fieldElement.querySelector('.booking__error');
                if (errorElement) errorElement.textContent = '';
            });
        });
    }

    // Send to Telegram
    async function sendToTelegram(data) {
        // Replace with your bot token and chat ID
        const BOT_TOKEN = 'YOUR_BOT_TOKEN';
        const CHAT_ID = 'YOUR_CHAT_ID';

        const serviceNames = {
            manicure: 'Маникюр',
            pedicure: 'Педикюр',
            extension: 'Наращивание',
            design: 'Дизайн'
        };

        const masterNames = {
            anna: 'Анна',
            maria: 'Мария',
            elena: 'Елена',
            olga: 'Ольга'
        };

        const message = `
📢 *Новая запись в Nail Studio!*

👤 *Имя:* ${data.name}
📱 *Телефон:* ${data.phone}
📧 *Email:* ${data.email || 'Не указан'}
💅 *Услуга:* ${serviceNames[data.service] || 'Не выбрана'}
👩‍🎨 *Мастер:* ${masterNames[data.master] || 'Любой'}
📅 *Дата:* ${data.date}
⏰ *Время:* ${data.time}
💬 *Комментарий:* ${data.comment || 'Нет'}
        `;

        const url = `https://api.telegram.org/bot${BOT_TOKEN}/sendMessage`;

        // For demo purposes, we'll simulate the request
        console.log('Form data:', data);
        console.log('Message to send:', message);

        // Uncomment below to enable real Telegram sending
        /*
        const response = await fetch(url, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                chat_id: CHAT_ID,
                text: message,
                parse_mode: 'Markdown'
            })
        });

        if (!response.ok) {
            throw new Error('Failed to send message');
        }
        */

        return true;
    }

    // ===================================
    // Modal
    // ===================================
    function showModal() {
        elements.modal.classList.add('active');
        document.body.classList.add('modal-open');
    }

    function hideModal() {
        elements.modal.classList.remove('active');
        document.body.classList.remove('modal-open');
    }

    function initModal() {
        const closeBtn = elements.modal.querySelector('.modal__close');
        const overlay = elements.modal.querySelector('.modal__overlay');

        closeBtn.addEventListener('click', hideModal);
        overlay.addEventListener('click', hideModal);

        document.addEventListener('keydown', (e) => {
            if (e.key === 'Escape' && elements.modal.classList.contains('active')) {
                hideModal();
            }
        });
    }

    // ===================================
    // Floating Messenger
    // ===================================
    function initMessenger() {
        elements.messengerToggle.addEventListener('click', () => {
            elements.messengerFloat.classList.toggle('active');
        });
    }

    // ===================================
    // Scroll Animations
    // ===================================
    function initScrollAnimations() {
        const animatedElements = document.querySelectorAll(
            '.advantages__card, .gallery__item, .masters__card'
        );

        const observer = new IntersectionObserver((entries) => {
            entries.forEach((entry, index) => {
                if (entry.isIntersecting) {
                    setTimeout(() => {
                        entry.target.classList.add('visible');
                    }, index * 100);
                }
            });
        }, {
            threshold: 0.1,
            rootMargin: '0px 0px -50px 0px'
        });

        animatedElements.forEach(el => observer.observe(el));
    }

    // ===================================
    // Map
    // ===================================
    function initMap() {
        const mapContainer = document.getElementById('map');
        if (!mapContainer) return;

        // Moscow coordinates
        const lat = 50.4501;
        const lng = 30.5234;

        map = L.map('map').setView([lat, lng], 14);

        L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
            attribution: '© OpenStreetMap'
        }).addTo(map);

        L.marker([lat, lng]).addTo(map)
            .bindPopup('Nail Studio<br>ул. Примерная, д. 15')
            .openPopup();
    }

    // ===================================
    // Year
    // ===================================
    function initYear() {
        if (elements.year) {
            elements.year.textContent = new Date().getFullYear();
        }
    }

    // ===================================
    // Initialize All
    // ===================================
    function init() {
        initPreloader();
        initHeader();
        initBurger();
        initSmoothScroll();
        initScrollTop();
        initServices();
        initGallery();
        initLightbox();
        initMasters();
        initReviews();
        initFaq();
        initCounters();
        initForm();
        initModal();
        initMessenger();
        initScrollAnimations();
        initMap();
        initYear();
    }

    // Run when DOM is ready
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', init);
    } else {
        init();
    }

    // Public API
    return {
        showModal,
        hideModal
    };
})();
