/* ==========================================
   SEABUD - Seafood Restaurant Template
   Main JavaScript Functions
   ========================================== */

(function ($) {
    "use strict";

    /* ==========================================
       PAGE LOAD
       ========================================== */
    $(window).on("load", function () {
        // Trigger WOW after load
        initWow();
        initCounters();
    });

    /* ==========================================
       STICKY HEADER
       ========================================== */
    $(window).on("scroll", function () {
        var scroll = $(window).scrollTop();
        if (scroll >= 100) {
            $(".header-sticky").addClass("is-sticky");
        } else {
            $(".header-sticky").removeClass("is-sticky");
        }
    });

    /* ==========================================
       SLICKNAV MOBILE MENU (disabled - using custom side menu)
       ========================================== */
    // SlickNav is no longer used. Custom side menu is built in HTML.

    /* ==========================================
       WOW.JS SCROLL ANIMATIONS
       ========================================== */
    function initWow() {
        if (typeof WOW !== "undefined") {
            new WOW({
                boxClass: "wow",
                animateClass: "animated",
                offset: 100,
                mobile: true,
                live: true,
            }).init();
        }
    }

    /* ==========================================
       GSAP TEXT ANIMATIONS
       ========================================== */
    function initTextAnimations() {
        if (typeof gsap === "undefined" || typeof SplitText === "undefined") return;

        gsap.registerPlugin(ScrollTrigger);

        // text-anime-style-3: Character reveal from bottom
        $(".text-anime-style-3").each(function () {
            var element = this;
            var split = new SplitText(element, {
                type: "chars,words",
                charsClass: "split-inner",
            });

            gsap.set(split.chars, {
                opacity: 0,
                y: 30,
                rotationX: -40,
            });

            ScrollTrigger.create({
                trigger: element,
                start: "top 85%",
                onEnter: function () {
                    gsap.to(split.chars, {
                        opacity: 1,
                        y: 0,
                        rotationX: 0,
                        stagger: 0.03,
                        duration: 0.6,
                        ease: "back.out(1.5)",
                    });
                },
                once: true,
            });
        });
    }

    /* ==========================================
       IMAGE REVEAL ANIMATIONS
       ========================================== */
    function initImageAnimations() {
        if (typeof gsap === "undefined") return;

        gsap.registerPlugin(ScrollTrigger);

        $(".image-anime").each(function () {
            var element = this;
            var img = $(element).find("img");

            gsap.set(img, { scale: 1.3, opacity: 0 });

            ScrollTrigger.create({
                trigger: element,
                start: "top 80%",
                onEnter: function () {
                    gsap.to(img, {
                        scale: 1,
                        opacity: 1,
                        duration: 1.2,
                        ease: "power3.out",
                    });
                },
                once: true,
            });
        });

        // Reveal effect
        $(".reveal").each(function () {
            var element = this;
            gsap.set(element, { clipPath: "inset(0 100% 0 0)" });

            ScrollTrigger.create({
                trigger: element,
                start: "top 80%",
                onEnter: function () {
                    gsap.to(element, {
                        clipPath: "inset(0 0% 0 0)",
                        duration: 1,
                        ease: "power3.inOut",
                    });
                },
                once: true,
            });
        });
    }

    /* ==========================================
       SWIPER HERO SLIDER
       ========================================== */
    function initHeroSlider() {
        if (typeof Swiper === "undefined") return;

        new Swiper(".hero-slider", {
            slidesPerView: 1,
            loop: true,
            speed: 1000,
            autoplay: {
                delay: 5000,
                disableOnInteraction: false,
            },
            effect: "fade",
            fadeEffect: { crossFade: true },
            pagination: {
                el: ".hero-pagination",
                clickable: true,
            },
        });
    }

    /* ==========================================
       SWIPER TESTIMONIAL SLIDER
       ========================================== */
    function initTestimonialSlider() {
        if (typeof Swiper === "undefined") return;

        new Swiper(".testimonial-slider", {
            slidesPerView: 1,
            spaceBetween: 30,
            loop: true,
            autoplay: {
                delay: 5000,
                disableOnInteraction: false,
            },
            pagination: {
                el: ".testimonial-pagination",
                clickable: true,
            },
            speed: 800,
            effect: "fade",
            fadeEffect: {
                crossFade: true,
            },
        });
    }

    /* ==========================================
       COUNTER UP
       ========================================== */
    function initCounters() {
        if ($.fn.counterUp) {
            $(".counter").counterUp({
                delay: 10,
                time: 2000,
            });
        }
    }

    /* ==========================================
       MAGNIFIC POPUP (GALLERY)
       ========================================== */
    function initMagnificPopup() {
        if (!$.fn.magnificPopup) return;

        $(".gallery-grid").magnificPopup({
            delegate: "a.gallery-grid-link",
            type: "image",
            gallery: {
                enabled: true,
                navigateByImgClick: true,
                preload: [0, 1],
            },
            mainClass: "mfp-fade",
            removalDelay: 300,
        });
    }

    /* ==========================================
       PARALLAX EFFECT
       ========================================== */
    function initParallax() {
        $(window).on("scroll", function () {
            var scrolled = $(window).scrollTop();
            $(".parallaxie").each(function () {
                var offset = $(this).offset().top;
                var height = $(this).outerHeight();
                if (
                    scrolled + $(window).height() > offset &&
                    scrolled < offset + height
                ) {
                    var yPos = (scrolled - offset) * 0.3;
                    $(this).css("background-position-y", yPos + "px");
                }
            });
        });
    }

    /* ==========================================
       SMOOTH SCROLL
       ========================================== */
    function initSmoothScroll() {
        $('a[href*="#"]:not([href="#"])').on("click", function () {
            if (
                location.pathname.replace(/^\//, "") ===
                    this.pathname.replace(/^\//, "") &&
                location.hostname === this.hostname
            ) {
                var target = $(this.hash);
                target = target.length
                    ? target
                    : $("[name=" + this.hash.slice(1) + "]");
                if (target.length) {
                    $("html, body").animate(
                        { scrollTop: target.offset().top - 80 },
                        800
                    );
                    return false;
                }
            }
        });
    }

    /* ==========================================
       SCROLL TO TOP
       ========================================== */
    function initScrollToTop() {
        $(".footer-top-button a").on("click", function (e) {
            e.preventDefault();
            $("html, body").animate({ scrollTop: 0 }, 800);
        });
    }

    /* ==========================================
       SCROLLING TICKER
       ========================================== */
    function initScrollingTicker() {
        $(".scrolling-ticker-box").each(function () {
            var content = $(this).find(".scrolling-content");
            if (content.length) {
                var clone = content.clone();
                $(this).append(clone);
            }
        });
    }

    /* ==========================================
       FORM VALIDATION
       ========================================== */
    function initFormValidation() {
        if ($.fn.validator) {
            $(".reserve-table-form form").validator();
        }
    }

    /* ==========================================
       WHY CHOOSE US - HOVER EFFECT
       ========================================== */
    function initWhyChoose() {
        $(".why-choose-item").on("mouseenter", function () {
            $(".why-choose-item").removeClass("active");
            $(this).addClass("active");
        });
    }

    /* ==========================================
       NAVBAR TOGGLE - Side Menu
       ========================================== */
    function initNavbarToggle() {
        var $toggle = $(".navbar-toggle");
        var $sideMenu = $(".responsive-menu");
        var $overlay = $(".menu-overlay");
        var $body = $("body");

        function openMenu() {
            $toggle.addClass("menu-open");
            $sideMenu.addClass("menu-active");
            $overlay.addClass("active");
            $body.css("overflow", "hidden");
        }

        function closeMenu() {
            $toggle.removeClass("menu-open");
            $sideMenu.removeClass("menu-active");
            $overlay.removeClass("active");
            $body.css("overflow", "");
        }

        $toggle.on("click", function () {
            if ($sideMenu.hasClass("menu-active")) {
                closeMenu();
            } else {
                openMenu();
            }
        });

        $overlay.on("click", function () {
            closeMenu();
        });

        // Close menu on nav link click
        $sideMenu.find("a").on("click", function() {
            closeMenu();
        });

        // Close on Escape key
        $(document).on("keydown", function(e) {
            if (e.key === "Escape" && $sideMenu.hasClass("menu-active")) {
                closeMenu();
            }
        });
    }

    /* ==========================================
       MAGIC CURSOR
       ========================================== */
    function initMagicCursor() {
        if (typeof MagicCursor !== "undefined") {
            new MagicCursor();
        }
    }

    /* ==========================================
       INITIALIZE ON DOCUMENT READY
       ========================================== */
    $(document).ready(function () {
        initMagicCursor();
        initHeroSlider();
        initTextAnimations();
        initImageAnimations();
        initTestimonialSlider();
        initMagnificPopup();
        initParallax();
        initSmoothScroll();
        initScrollToTop();
        initScrollingTicker();
        initFormValidation();
        initWhyChoose();
        initNavbarToggle();
    });
})(jQuery);
