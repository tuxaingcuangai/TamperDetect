"use strict";
(function () {

    /**************************************
    ***** 1. Portfolio Slider 1
    **************************************/
    $(".bp-slider-style-1").each(function (i) {
        let bpSliderStyle = $(this).get(0);
        let prev = $(this).parents(".bp-slide-wrap").find(".btn-prev").get(0);
        let next = $(this).parents(".bp-slide-wrap").find(".btn-next").get(0);

        let swiper = new Swiper(bpSliderStyle, {
            slidesPerView: 1,
            centerMode: false,
            loop: true,
            spaceBetween: 30,
            slideToClickedSlide: true,
            autoplay: {
                delay: 5000,
            },
            navigation: {
                nextEl: next,
                prevEl: prev,
            },
            speed: 800,
            breakpoints: {
                0: {
                    slidesPerView: 1,
                },
                575: {
                    slidesPerView: 2,
                },
                768: {
                    slidesPerView: 1.8,
                },
                1024: {
                    slidesPerView: 2.2,
                },
                1200: {
                    slidesPerView: 4,
                },
            },
        });
        // Stop the autoplay initially
        swiper.autoplay.start();

        // Add mouseenter and mouseleave event handlers to start and stop the autoplay
        $(this).on('mouseenter', function () {
            swiper.autoplay.stop();
        }).on('mouseleave', function () {
            swiper.autoplay.start();
        });
    });
    /**************************************
    ***** 2. Banner Gallery Slider
    **************************************/
    let bpGallerySlider = $(".banner-gallery--slider").each(function (i) {
        let bpSliderStyle = $(this).get(0);
        let prev = $(this).parents(".bp-slide-wrap").find(".btn-prev").get(0);
        let next = $(this).parents(".bp-slide-wrap").find(".btn-next").get(0);

        let swiper = new Swiper(bpSliderStyle, {
            spaceBetween: 36,
            centeredSlides: false,
            speed: 4000,
            autoplay: {
                delay: 1,
                reverseDirection: true
            },
            loop: true,
            slidesPerView: 'auto',
            allowTouchMove: true,
            disableOnInteraction: true,
            breakpoints: {
                0: {
                    slidesPerView: 1.5,
                    spaceBetween: 10,
                    speed: 6000
                },
                575: {
                    slidesPerView: 2,
                },
                768: {
                    slidesPerView: 3.8,
                },
                1024: {
                    slidesPerView: 4,
                },
                1200: {
                    slidesPerView: 7.6,
                },
            }
        });
        if (bpSliderStyle) {
            gsap.from(".banner-gallery--slider", {
                y: -50,
                stagger: .3,
                opacity: 0,
                ease: Expo,
                duration: 2
            })
        }
    });

    /**************************************
    ***** 3. Instagram Slider
    **************************************/
    $(".bp-slider-style-2").each(function (i) {
        let bpSliderStyle = $(this).get(0);
        let prev = $(this).parents(".bp-slide-wrap").find(".btn-prev").get(0);
        let next = $(this).parents(".bp-slide-wrap").find(".btn-next").get(0);

        new Swiper(bpSliderStyle, {
            slidesPerView: 6,
            centerMode: false,
            centeredSlides: true,
            loop: true,
            spaceBetween: 30,
            freeMode: false,
            slideToClickedSlide: false,
            autoplay: {
                delay: 5000,
            },
            navigation: {
                nextEl: next,
                prevEl: prev,
            },
            speed: 800,
            breakpoints: {
                0: {
                    slidesPerView: 1,
                },
                575: {
                    slidesPerView: 2,
                },
                768: {
                    slidesPerView: 3,
                },
                1024: {
                    slidesPerView: 3.5,
                },
                1200: {
                    slidesPerView: 6.5,
                }
            },
        });
    });

    /**************************************
    ***** 4. Review Slider
    **************************************/
    $(".review-active").each(function (i) {
        let bpSliderStyle = $(this).get(0);
        let prev = $(this).parents(".bp-slide-wrap").find(".btn-prev").get(0);
        let next = $(this).parents(".bp-slide-wrap").find(".btn-next").get(0);

        new Swiper(bpSliderStyle, {
            slidesPerView: 6,
            centerMode: false,
            centeredSlides: false,
            loop: false,
            spaceBetween: 15,
            freeMode: false,
            slideToClickedSlide: false,
            autoplay: {
                delay: 5000,
            },
            navigation: {
                nextEl: next,
                prevEl: prev,
            },
            pagination: {
                el: ".review-active__pagination",
                clickable: true,
            },
            speed: 800,
            breakpoints: {
                0: {
                    slidesPerView: 1,
                },
                575: {
                    slidesPerView: 1,
                },
                768: {
                    slidesPerView: 1,
                },
                1024: {
                    slidesPerView: 1,
                },
                1200: {
                    slidesPerView: 1,
                },
                1900: {
                    slidesPerView: 1,
                },
            },
        });
    });

    /**************************************
    ***** 5. Sponsors Slider
    **************************************/
    $(".sponsor-active").each(function (i) {
        let bpSliderStyle = $(this).get(0);
        let prev = $(this).parents(".bp-slide-wrap").find(".btn-prev").get(0);
        let next = $(this).parents(".bp-slide-wrap").find(".btn-next").get(0);

        new Swiper(bpSliderStyle, {
            slidesPerView: 6,
            centerMode: false,
            centeredSlides: false,
            loop: true,
            spaceBetween: 15,
            freeMode: false,
            slideToClickedSlide: true,
            autoplay: {
                delay: 5000,
            },
            navigation: {
                nextEl: next,
                prevEl: prev,
            },
            pagination: false,
            speed: 800,
            breakpoints: {
                0: {
                    slidesPerView: 1,
                },
                575: {
                    slidesPerView: 2,
                },
                768: {
                    slidesPerView: 3,
                },
                1024: {
                    slidesPerView: 4,
                },
                1200: {
                    slidesPerView: 5,
                },
                1900: {
                    slidesPerView: 5,
                },
            },
        });
    });

    /**************************************
    ***** 6. Aos Activation
    **************************************/
    AOS.init();

    /**************************************
    ***** 7. MagnifiPopup Activation
    **************************************/
    $(".popup-image").magnificPopup({
        type: "image",
        gallery: {
            enabled: true,
        },
    });

    $(document).ready(function () {
        $('#play-button').magnificPopup({
            disableOn: 700,
            type: 'iframe',
            mainClass: 'mfp-fade',
            removalDelay: 160,
            preloader: false,
            fixedContentPos: false
        });
    });

    /**************************************
    ***** 8. Image Reveal Animation
    **************************************/
    function reveal1() {
        var reveals = document.querySelectorAll(".reveal1");

        for (var i = 0; i < reveals.length; i++) {
            var windowHeight = window.innerHeight;
            var elementTop = reveals[i].getBoundingClientRect().top;
            var elementVisible = 150;
            if (elementTop < windowHeight - elementVisible) {
                reveals[i].classList.add("active");
            } else {
                reveals[i].classList.remove("active");
            }
        }
    }
    window.addEventListener("scroll", reveal1);

    /**************************************
    ***** GSAP & Scroll Plugins
    **************************************/
    gsap.registerPlugin(ScrollTrigger);

    /**************************************
    ***** 9. Home 1 Background Para
    **************************************/
    gsap.utils.toArray('.content-section').forEach(section => {
        const parallax_elems = section.querySelectorAll('.scroll-effect-parallax');

        gsap.to(parallax_elems, {
            backgroundPosition: '50% 100%',
            ease: 'none',
            scrollTrigger: {
                trigger: section,
                start: 'top bottom',
                end: 'bottom top',
                scrub: true,
            }
        });
    });

    /**************************************
    ***** 10. Gsap Home 1,2,3 Hero Section content Animation
    **************************************/
    //---Must Added .gsap-active class with body tag
    let gsapActive = document.querySelector(".gsap-active");

    if (gsapActive) {
        gsap.from(".contact-content__item", {
            y: -50,
            stagger: .3,
            opacity: 0,
            ease: Expo,
            duration: 2
        })
    }
    if (gsapActive) {
        gsap.from(".contact-content__item--arrow", {
            y: -50,
            stagger: .3,
            opacity: 0,
            ease: Expo,
            duration: 1
        })
    }

    let animationActive = document.querySelector(".animation-active");
    if (animationActive) {
        gsap.from(".banner-content__title, .banner-content__text, .fade-down", {
            y: -50,
            stagger: .3,
            opacity: 0,
            ease: Expo,
            duration: 1.5
        })
    }

    /**************************************
    ***** 11. Gsap Reveal Special
    **************************************/
    let revealContainers = document.querySelectorAll(".bp-reveal")
    if (revealContainers) {
        revealContainers.forEach((container) => {
            let image = container.querySelector('img');
            let t1 = gsap.timeline({
                scrollTrigger: {
                    trigger: container,
                }
            })
            t1.set(container, { autoAlpha: 1 });
            t1.from(container, 1.5, {
                yPercent: -100,
                ease: Power2.out
            })
            t1.from(image, 1.5, {
                yPercent: 100,
                scale: 1.3,
                delay: -1.5,
                ease: Power2.out
            })
        })
    }

    /**************************************
    ***** 12. Custom Video Play Moveable
    **************************************/
    function videoConAnimation() {
        let videoCon = document.querySelector("#video-container");
        let playButton = document.querySelector("#play-button");
        // When mouseEnter on video container
        if (videoCon) {
            videoCon.addEventListener("mouseenter", function () {
                gsap.to(playButton, {
                    scale: 1,
                    opacity: 1
                })
            })
        }
        // When mouseleave on video container
        if (videoCon) {
            videoCon.addEventListener("mouseleave", function () {
                gsap.to(playButton, {
                    scale: 0,
                    opacity: 0
                })
            })
        }
        // When mouseMove on video container
        if (videoCon) {
            videoCon.addEventListener("mousemove", function (dets) {
                gsap.to(playButton, {
                    left: dets.x - 60,
                    top: dets.y - 50
                })
            })
        }
    }
    videoConAnimation();

    /**************************************
    ***** 13. Custom Mobile Menu
    **************************************/
    let hamburgerIcon = document.querySelectorAll(".hamburger-icon");
    let bodyTag = document.querySelector("body");
    let mobileMenu = document.querySelectorAll(".mobile-overlay");

    // Hamburger Toggle Button Add
    $(hamburgerIcon).on("click", function () {
        $("body").addClass("mobile-overlay--visible");
    });
    // Hamburger Toggle Button Remove
    $(".mobile-overlay--backdrop, .mobile-overlay__close").on("click", function () {
        $(bodyTag).removeClass("mobile-overlay--visible");
    });

    // Mobile Menu Dropdown Toggle
    if ($(".main-menu .main-menu__sub-menu").length) {
        $(".main-menu .main-menu__child:not(:has(.main-menu__dropdown-btn))").append(
            '<div class="main-menu__dropdown-btn"><span class="plus-line"></span></div>'
        );
    }
    // Mobile Menu Copy From Main Menu
    if ($(mobileMenu).length) {
        let mobileMenuContentCopy = $(".header__navigation .header__menu").html();
        $(".mobile-overlay .mobile-overlay__main-menu").append(mobileMenuContentCopy);

        // Dropdown btn
        $(".mobile-overlay .main-menu__dropdown-btn").on("click", function () {
            var $clickedDropdownBtn = $(this);
            var $subMenu = $clickedDropdownBtn.prev(".main-menu__sub-menu");
            var $openSubMenus = $(".mobile-overlay .main-menu__sub-menu:visible");
            var $mainMenuChild = $clickedDropdownBtn.closest(".main-menu__child");

            // Check if the clicked submenu is already open
            var isSubMenuOpen = $subMenu.is(":visible");

            // Remove "open" and "active" classes from all dropdown buttons and menu items
            $(".mobile-overlay .main-menu__dropdown-btn").removeClass("open");
            $(".mobile-overlay .main-menu__child").removeClass("active");

            // Toggle the "open" class of the clicked dropdown if it's not already open
            if (!isSubMenuOpen) {
                $clickedDropdownBtn.addClass("open");
                $mainMenuChild.addClass("active");
            }

            // Close all open sub-menus except the one associated with the clicked dropdown
            $openSubMenus.not($subMenu).slideUp(300);

            // Toggle the associated sub-menu
            $subMenu.slideToggle(300);
        });
        // end
    }

    /**************************************
    ***** 14. Custom Counter
    **************************************/
    // Function to animate the counters
    function animateCounter(counter) {
        const targetValue = parseInt(counter.getAttribute("data-counter"));
        const animationDuration = 3000; // Set the desired animation duration in milliseconds
        const startTimestamp = performance.now();

        function updateCounter(timestamp) {
            const elapsed = timestamp - startTimestamp;
            const progress = Math.min(elapsed / animationDuration, 1);

            const currentValue = Math.floor(targetValue * progress);
            counter.textContent = currentValue;

            if (progress < 1) {
                requestAnimationFrame(updateCounter);
            }
        }

        requestAnimationFrame(updateCounter);
    }

    // Start the counting animation when the counter is intersecting with the viewport
    function startCounterAnimation(entries, observer) {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                const counter = entry.target.querySelector(".counters");
                animateCounter(counter);
                observer.unobserve(entry.target);
            }
        });
    }

    // Create an intersection observer instance
    const observer = new IntersectionObserver(startCounterAnimation, {
        rootMargin: "0px",
        threshold: 0.2, // Adjust the threshold value as needed (0.2 means 20% visibility)
    });

    // Observe all counter blocks
    const counterBlocks = document.querySelectorAll(".count-start");
    counterBlocks.forEach((counterBlock) => {
        observer.observe(counterBlock);
    });

    /**************************************
    ***** 15. Custom Data Background
    **************************************/
    $("[data-bg-image]").each(function () {
        const img = $(this).data("bg-image");
        $(this).css({
            backgroundImage: `url(${img})`,
        });
    });

    /**************************************
    ***** 16. Preloader
    **************************************/
    $(window).on("load", function () {
        let preloader = $("#preloader");
        preloader &&
            $("#preloader").delay(380).fadeOut("slow", function () {
                $(this).remove();
            });
    });

    /**************************************
    ***** 17. Scroll Bottom To Top
    **************************************/
    let scrollToTopBtn = document.querySelector(".scrollToTopBtn")
    if (scrollToTopBtn) {
        let rootElement = document.documentElement

        function handleScroll() {
            // Do something on scroll - 0.15 is the percentage the page has to scroll before the button appears
            // This can be changed - experiment
            let scrollTotal = rootElement.scrollHeight - rootElement.clientHeight
            if ((rootElement.scrollTop / scrollTotal) > 0.15) {
                // Show button
                scrollToTopBtn.classList.add("showBtn")
            } else {
                // Hide button
                scrollToTopBtn.classList.remove("showBtn")
            }
        }

        function scrollToTop() {
            // Scroll to top logic
            rootElement.scrollTo({
                top: 0,
                behavior: "smooth"
            })
        }
        scrollToTopBtn.addEventListener("click", scrollToTop)
        document.addEventListener("scroll", handleScroll)
    }

    /**************************************
    ***** 18. Header Sticky 
    **************************************/
    $(window).on("scroll", function () {
        if ($("header").hasClass("sticky-on")) {
            var stickyPlaceHolder = $("#sticky-placeholder"),
                menu = $("#navbar-wrap"),
                menuH = menu.outerHeight(),
                topbarH = $("#topbar-wrap").outerHeight() || 0,
                targrtScroll = topbarH,
                header = $("header");
            if ($(window).scrollTop() > targrtScroll) {
                header.addClass("sticky").removeClass("smooth-scroll");
                stickyPlaceHolder.height(menuH);
            } else {
                header.removeClass("sticky").addClass("smooth-scroll");
                stickyPlaceHolder.height(0);
            }
        }
    });

    /**************************************
    ***** 19. Current Page Active Class Menu
    **************************************/
    // Get the current URL
    var currentURL = window.location.href;

    // Get all the links in the main menu
    var mainMenuLinks = document.querySelectorAll(".main-menu__list a");

    // Get all the links in the submenus
    var submenuLinks = document.querySelectorAll(".main-menu__sub-menu a");

    // Remove the "active" class from all submenu items
    submenuLinks.forEach(function (link) {
        var parentLi = link.closest("li");
        if (parentLi.classList.contains("active")) {
            parentLi.classList.remove("active");
        }
    });

    // Iterate through the main menu links and add the "active" class to the matching item
    mainMenuLinks.forEach(function (link) {
        var parentLi = link.closest("li");
        if (link.href === currentURL) {
            parentLi.classList.add("active");
        }
    });

    // Iterate through the submenu links and add the "active" class to the matching item
    submenuLinks.forEach(function (link) {
        if (link.href === currentURL) {
            var parentLi = link.closest("li");
            parentLi.classList.add("active");
        }
    });

    /**************************************
    ***** 19. Progressbar
    **************************************/
    let getDivs = document.querySelectorAll(".skill-bar");

    getDivs.forEach(function (skillbar) {
        let data = skillbar.getAttribute("data-width");
        skillbar.style.width = data;
    });

    // Intersection Observer options
    const observerOptions = {
        root: null,
        rootMargin: "0px",
        threshold: 0.2, // Adjust this threshold value as needed
    };

    // Callback function for Intersection Observer
    function animateOnScroll(entries, observer) {
        entries.forEach((entry) => {
            if (
                entry.isIntersecting &&
                !entry.target.classList.contains("animated")
            ) {
                const skillBar = entry.target;

                // Animate skills block number and progress bar
                const skillsNumber = skillBar.querySelector(".skills-block__number");
                const progressBar = skillBar.querySelector(
                    ".skills-block__progress-bar"
                );

                skillsNumber.style.width = skillsNumber.getAttribute("data-width");
                progressBar.style.width = progressBar.getAttribute("data-width");

                skillsNumber.style.transitionDuration = "60s"; // Adjust the transition duration as needed
                progressBar.style.transitionDuration = "60s"; // Adjust the transition duration as needed

                skillsNumber.classList.add("slideInLeft", "animated");
                progressBar.classList.add("slideInLeft", "animated");

                // Add a class to mark the element as animated
                skillBar.classList.add("animated");

                // Remove the Intersection Observer once animation is triggered
                observer.unobserve(skillBar);
            }
        });
    }

    // Create the Intersection Observer
    const skillBarObserver = new IntersectionObserver(
        animateOnScroll,
        observerOptions
    );

    // Select all skill bars
    const skillBars = document.querySelectorAll(".skills-progress__item");

    // Observe each skill bar
    skillBars.forEach((skillBar) => {
        skillBarObserver.observe(skillBar);
    });

    /**************************************
    ***** 19. Custom Pricing Switch
    **************************************/
    $(".price-switcher__switch .price-switcher__toggle[type='checkbox']").click(function () {
        if ($(this).is(":checked")) {
            $("#yearly").addClass("show");
            $("#monthly").removeClass("show");
        } else if ($(this).is(":not(:checked)")) {
            $("#monthly").addClass("show");
            $("#yearly").removeClass("show");
        }
    });


})();