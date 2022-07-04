jQuery(function ($) {
    'use strict';
    $(window).on('scroll', function () {
        if ($(this).scrollTop() > 50) {
            $('.main-nav').addClass('menu-shrink');
        } else {
            $('.main-nav').removeClass('menu-shrink');
        }
    });
    jQuery('.mean-menu').meanmenu({
        meanScreenWidth: '991'
    });
    $('.search-toggle').addClass('closed');
    $('.search-toggle .search-icon').on('click', function (e) {
        if ($('.search-toggle').hasClass('closed')) {
            $('.search-toggle').removeClass('closed').addClass('opened');
            $('.search-toggle, .search-area').addClass('opened');
            $('#search-terms').focus();
        } else {
            $('.search-toggle').removeClass('opened').addClass('closed');
            $('.search-toggle, .search-area').removeClass('opened');
        }
    });
    $('.banner-slider').owlCarousel({
        items: 1,
        loop: true,
        margin: 0,
        rtl:true,
        nav: false,
        dots: true,
        smartSpeed: 1000,
        autoplay: true,
        autoplayTimeout: 4000,
        autoplayHoverPause: true,
    });
    $('.banner-slider-two').owlCarousel({
        items: 1,
        loop: true,
        margin: 0,
        rtl:true,
        nav: false,
        dots: true,
        smartSpeed: 1000,
        autoplay: true,
        autoplayTimeout: 4000,
        autoplayHoverPause: true,
        animateOut: 'fadeOut',
        animateIn: 'fadeIn',
    });
    $('.odometer').appear(function (e) {
        var odo = $('.odometer');
        odo.each(function () {
            var countNumber = $(this).attr('data-count');
            $(this).html(countNumber);
        });
    });
    $('.progress-bar').loading();
    $('.popup-youtube').magnificPopup({
        disableOn: 700,
        type: 'iframe',
        mainClass: 'mfp-fade',
        removalDelay: 160,
        preloader: false,
        fixedContentPos: false
    });
    $('.testimonials-slider').owlCarousel({
        loop: true,
        margin: 0,
        rtl:true,
        nav: false,
        dots: true,
        smartSpeed: 1000,
        autoplay: true,
        autoplayTimeout: 4000,
        autoplayHoverPause: true,
        responsive: {
            0: {
                items: 1,
            },
            600: {
                items: 2,
            },
            1000: {
                items: 2,
            }
        }
    });
    new WOW().init();
    $('.service-slider').owlCarousel({
        loop: true,
        margin: 20,
        rtl:true,
        nav: false,
        dots: true,
        smartSpeed: 1000,
        autoplay: true,
        autoplayTimeout: 4000,
        autoplayHoverPause: true,
        responsive: {
            0: {
                items: 1,
            },
            600: {
                items: 2,
            },
            1000: {
                items: 3,
            }
        }
    });
    $('.projects-slider').owlCarousel({
        loop: true,
        margin: 20,
        rtl:true,
        nav: false,
        dots: true,
        smartSpeed: 1000,
        autoplay: true,
        autoplayTimeout: 4000,
        autoplayHoverPause: true,
        responsive: {
            0: {
                items: 1,
            },
            600: {
                items: 2,
            },
            1000: {
                items: 3,
            }
        }
    });
    $('.team-slider').owlCarousel({
        items: 4,
        loop: true,
        margin: 20,
        rtl:true,
        nav: false,
        dots: true,
        smartSpeed: 1000,
        autoplay: true,
        autoplayTimeout: 4000,
        autoplayHoverPause: true,
        responsive: {
            0: {
                items: 1,
            },
            600: {
                items: 2,
            },
            1000: {
                items: 4,
            }
        }
    });
    $('.testimonials-slider-two').owlCarousel({
        items: 1,
        loop: true,
        margin: 0,
        rtl:true,
        nav: false,
        dots: true,
        smartSpeed: 1000,
        autoplay: true,
        autoplayTimeout: 4000,
        autoplayHoverPause: true,
        animateOut: 'fadeOut',
        animateIn: 'fadeIn',
    });
    $('.minus').on('click', function () {
        var $input = $(this).parent().find('input');
        var count = parseInt($input.val()) - 1;
        count = count < 1 ? 1 : count;
        $input.val(count);
        $input.change();
        return false;
    });
    $('.plus').on('click', function () {
        var $input = $(this).parent().find('input');
        $input.val(parseInt($input.val()) + 1);
        $input.change();
        return false;
    });
    $('.accordion > li:eq(0) a').addClass('active').next().slideDown();
    $('.accordion a').on('click', function (j) {
        var dropDown = $(this).closest('li').find('p');
        $(this).closest('.accordion').find('p').not(dropDown).slideUp();
        if ($(this).hasClass('active')) {
            $(this).removeClass('active');
        } else {
            $(this).closest('.accordion').find('a.active').removeClass('active');
            $(this).addClass('active');
        }
        dropDown.stop(false, true).slideToggle();
        j.preventDefault();
    });
    let getDaysId = document.getElementById('days');
    if (getDaysId !== null) {
        const second = 1000;
        const minute = second * 60;
        const hour = minute * 60;
        const day = hour * 24;
        let countDown = new Date('October 30, 2022 00:00:00').getTime();
        setInterval(function () {
            let now = new Date().getTime();
            let distance = countDown - now;
            document.getElementById('days').innerText = Math.floor(distance / (day)), document.getElementById('hours').innerText = Math.floor((distance % (day)) / (hour)), document.getElementById('minutes').innerText = Math.floor((distance % (hour)) / (minute)), document.getElementById('seconds').innerText = Math.floor((distance % (minute)) / second);
        }, second);
    };
    $('select').niceSelect();
    jQuery(window).on('load', function () {
        jQuery('.loader').fadeOut(500);
    });
    $(function () {
        $(window).on('scroll', function () {
            var scrolled = $(window).scrollTop();
            if (scrolled > 500) $('.go-top').addClass('active');
            if (scrolled < 500) $('.go-top').removeClass('active');
        });
        $('.go-top').on('click', function () {
            $('html, body').animate({
                scrollTop: '0'
            }, 500);
        });
    });
    $('.newsletter-form').validator().on('submit', function (event) {
        if (event.isDefaultPrevented()) {
            formErrorSub();
            submitMSGSub(false, 'Please enter your email correctly.');
        } else {
            event.preventDefault();
        }
    });

    function callbackFunction(resp) {
        if (resp.result === 'success') {
            formSuccessSub();
        } else {
            formErrorSub();
        }
    }

    function formSuccessSub() {
        $('.newsletter-form')[0].reset();
        submitMSGSub(true, 'Thank you for subscribing!');
        setTimeout(function () {
            $('#validator-newsletter').addClass('hide');
        }, 4000)
    }

    function formErrorSub() {
        $('.newsletter-form').addClass('animated shake');
        setTimeout(function () {
            $('.newsletter-form').removeClass('animated shake');
        }, 1000)
    }

    function submitMSGSub(valid, msg) {
        if (valid) {
            var msgClasses = 'validation-success';
        } else {
            var msgClasses = 'validation-danger';
        }
        $('#validator-newsletter').removeClass().addClass(msgClasses).text(msg);
    }

}(jQuery));