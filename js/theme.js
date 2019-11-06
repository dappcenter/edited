/*
 Theme Name: Paintball & Strikeball Club - Premium HTML5 Template
 Theme URL: http://themewar.com/html/paintball
 Author: ThemeWar
 Author URI: http://themewar.com/
 Description: Paintball & Strikeball Club - Premium HTML5 Template
 Version: 1.0
 */

/*=======================================================================
 [Table of contents]
 =========================================================================
 [01] REVOLUTION SLIDER
 [02] RECENT POST
 [03] GOOGLE MAP
 [04] FIXED HEADER
 [05] SEARCH FORM
 [06] GET A QUOTE
 [07] FUN FACT
 [08] CONTACT FORM
 [09] SKILL JQUERY
 [10] BLOG POST
 [11] SELECT OPTION
 [12] BLOG TESTMONIAL CAROSEL
 [13] SHOP PRICE RANGE
 [14] COLOR PRESET
 [15] BACK TO TOP
 [16] MOBILE MENU

 ==========================================================================*/

(function ($) {
    'use strict';
    /*=======================================================================
     [01] REVOLUTION SLIDER
     =========================================================================*/
    var rev = $("#slider");
    if (rev.length > 0)
    {
        $('.tp-banner').revolution({
            delay: 4000,
            startwidth: 1980,
            startheight: 800,
            startWithSlide: 0,
            fullScreenAlignForce: "off",
            navigationType: "bullet",
            navigationArrows: "off",
            navigationStyle: "round",
            touchenabled: "off",
            onHoverStop: "off",
            navOffsetHorizontal: 0,
            navOffsetVertical: 0,
            shadow: 0,
            fullWidth: "off",
            fullScreen: "off",
            navigationVOffset: 0
        });
    }

    /*=======================================================================
     [02] RECENT POST
     =========================================================================*/
    var recentPostCaro = $('#recentPostCaro');
    if (recentPostCaro.length > 0) {
        recentPostCaro.owlCarousel({
            items: 2,
            dots: false,
            autoplay: true,
            nav: true,
            navText: ['<i class="fa fa-angle-left"></i>', '<i class="fa fa-angle-right"></i>'],
            responsive: {
                0: {
                    items: 1
                },
                480: {
                    items: 1
                },
                768: {
                    items: 2
                }
            }
        });
    }


    /*=======================================================================
     [02] RECENT POST
     =========================================================================*/
    var clientCaro = $('#clientCaro');
    if (clientCaro.length > 0) {
        clientCaro.owlCarousel({
            items: 7,
            dots: false,
            nav: false,
            responsive: {
                0: {
                    items: 1
                },
                480: {
                    items: 1
                },
                768: {
                    items: 4
                },
                1240: {
                    items: 7
                }
            }
        });
    }

    /*=======================================================================
     [03] GOOGLE MAP
     =========================================================================*/
    if ($('#map').length > 0) {
        var map;
        map = new GMaps({
            el: '#map',
            lat: 53.967015,
            lng: -1.079608,
            scrollwheel: false,
            zoom: 16,
            zoomControl: true,
            panControl: false,
            streetViewControl: false,
            mapTypeControl: false,
            overviewMapControl: false,
            clickable: false
        });
        var image = '';
        map.addMarker({
            lat: 53.967015,
            lng: -1.079608,
            icon: 'images/marker.png',
            animation: google.maps.Animation.DROP,
            verticalAlign: 'bottom',
            horizontalAlign: 'center',
            backgroundColor: '#d3cfcf'
        });
        var styles = [
            {
                "featureType": "road",
                "stylers": [
                    {"color": "#292533"}
                ]
            }, {
                "featureType": "water",
                "stylers": [
                    {"color": "#262330"}
                ]
            }, {
                "featureType": "landscape",
                "stylers": [
                    {"color": "#312e3b"}
                ]
            }, {
                "elementType": "labels.text.fill",
                "stylers": [
                    {"color": "#262330"}
                ]
            }, {
                "featureType": "poi",
                "stylers": [
                    {"color": "#ac3646"}
                ]
            }, {
                "elementType": "labels.text",
                "stylers": [
                    {"saturation": 1},
                    {"weight": 0.1},
                    {"color": "#aaa9ac"}
                ]
            }
        ];
        map.addStyle({
            styledMapName: "Styled Map",
            styles: styles,
            mapTypeId: "map_style"
        });
        map.setStyle("map_style");
    }

    if ($('#map2').length > 0) {
        var map;
        map = new GMaps({
            el: '#map2',
            lat: 53.967015,
            lng: -1.079608,
            scrollwheel: false,
            zoom: 16,
            zoomControl: true,
            panControl: false,
            streetViewControl: false,
            mapTypeControl: false,
            overviewMapControl: false,
            clickable: false
        });
        var image = '';
        map.addMarker({
            lat: 53.967015,
            lng: -1.079608,
            icon: 'images/marker2.png',
            animation: google.maps.Animation.DROP,
            verticalAlign: 'bottom',
            horizontalAlign: 'center',
            backgroundColor: '#d3cfcf'
        });
        var styles = [
            {
                "featureType": "road",
                "stylers": [
                    {"color": "#292533"}
                ]
            }, {
                "featureType": "water",
                "stylers": [
                    {"color": "#262330"}
                ]
            }, {
                "featureType": "landscape",
                "stylers": [
                    {"color": "#312e3b"}
                ]
            }, {
                "elementType": "labels.text.fill",
                "stylers": [
                    {"color": "#262330"}
                ]
            }, {
                "featureType": "poi",
                "stylers": [
                    {"color": "#ac3646"}
                ]
            }, {
                "elementType": "labels.text",
                "stylers": [
                    {"saturation": 1},
                    {"weight": 0.1},
                    {"color": "#aaa9ac"}
                ]
            }
        ];
        map.addStyle({
            styledMapName: "Styled Map",
            styles: styles,
            mapTypeId: "map_style"
        });
        map.setStyle("map_style");
    }
    /*=======================================================================
     [04] FIXED HEADER
     =========================================================================*/
    $(window).on('scroll', function () {
        if ($(window).scrollTop() > 500)
        {
            $(".isSticky").addClass('fixedHeader');
        } else
        {
            $(".isSticky").removeClass('fixedHeader');
        }
        if ($(window).scrollTop() > 60)
        {
            $(".isStickyInner").addClass('fixedHeader');
        } else
        {
            $(".isStickyInner").removeClass('fixedHeader');
        }
    });
    /*=======================================================================
     [05] SEARCH FORM
     =========================================================================*/
    if ($('.headerSearch').length > 0) {
        $('#searchBtn').on('click', function (e) {
            e.preventDefault();
            $('.headerSearch').toggleClass('active');
        })
    }

    /*=======================================================================
     [06] GET A QUOTE
     =========================================================================*/
    if ($('#quoteForm').length > 0)
    {
        $('#quoteForm').on('submit', function (e) {
            e.preventDefault();
            $('#q_submit').val('Processing...');
            var q_name = $('#q_name').val(),
                    q_email = $('#q_email').val(),
                    q_phone = $('#q_phone').val(),
                    q_msg = $('#q_msg').val(),
                    required = 0;
            $('.required', this).each(function () {
                if ($(this).val() == '')
                {
                    $(this).addClass('reqError');
                    required += 1;
                } else
                {
                    if ($(this).hasClass('reqError')) {
                        $(this).removeClass('reqError');
                        if (required > 0)
                        {
                            required -= 1;
                        }
                    }
                }
            });
        });
        $(".required").on('keyup', function () {
            $(this).removeClass('reqError');
        });
    }

    /*=======================================================================
     [07] FUN FACT
     =========================================================================*/
    var skl = true;
    $('.singleFun').appear();
    $('.singleFun').on('appear', function () {
        if (skl)
        {
            $('.count').each(function () {
                var $this = $(this);
                jQuery({Counter: 0}).animate({Counter: $this.attr('data-counter')}, {
                    duration: 6000,
                    easing: 'swing',
                    step: function (now) {
        	            $this.text(parseFloat(now).toFixed(0).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ","));
        	        }
                });
            });
            skl = false;
        }
    });
    /*=======================================================================
     [08] CONTACT FORM
     =========================================================================*/
    if ($('#contactForm').length > 0) {
        $('#contactForm').on('submit', function (e) {
            e.preventDefault();
            $('#con_submit').val('Processing...');
            var con_name = $('#con_name').val(),
                    con_email = $('#con_email').val(),
                    con_phone = $('#con_phone').val(),
                    con_msg = $('#con_msg').val(),
                    required = 0;
            $('.required', this).each(function () {
                if ($(this).val() == '') {
                    $(this).addClass('reqError');
                    required += 1;
                } else {
                    if ($(this).hasClass('reqError')) {
                        $(this).removeClass('reqError');
                        if (required > 0) {
                            required -= 1;
                        }
                    }
                }
            });
            if (required === 0) {
                $.ajax({
                    type: 'POST',
                    url: 'php/mail.php',
                    data: ({
                        con_name: con_name,
                        con_email: con_email,
                        con_phone: con_phone,
                        con_msg: con_msg
                    }),
                    success: function (data) {

                        alert(data);
                        $('#contactForm input, #contactForm textarea').val('');
                        $("#con_submit").val('Done!');
                    }

                });
            } else {
                $('#con_submit').val('Failed !');
            }

        });
        $('.required').on('keyup', function () {
            $(this).removeClass('reqError');
        });
    }

    /*=======================================================================
     [09] SKILL JQUERY
     =========================================================================*/
    $('.singleSkill').appear();
    $('.singleSkill').on('appear', loadSkills);
    var coun = true;
    function loadSkills()
    {
        $(".singleSkill").each(function () {
            var datacount = $(this).attr("data-limit");
            $(".skill3", this).animate({'width': datacount + '%'}, 2000);
            if (coun)
            {
                $(this).find('.parcen3').each(function () {
                    var $this = $(this);
                    $({Counter: 0}).animate({Counter: datacount}, {
                        duration: 2000,
                        easing: 'swing',
                        step: function () {
                            $this.text(Math.ceil(this.Counter) + '%');
                        }
                    });
                });
            }
        });
        coun = false;
    }
    ;
    /*=======================================================================
     [10] BLOG POST
     =========================================================================*/
    var blogCarousel = $('#blogCarousel');
    if (blogCarousel.length > 0) {
        blogCarousel.owlCarousel({
            items: 1,
            dots: false,
            autoplay: true,
            nav: true,
            navText: ['<i class="fa fa-angle-left"></i>', '<i class="fa fa-angle-right"></i>']
        });
    }
    /*=======================================================================
     [11] SELECT OPTION
     =========================================================================*/
    /*var selectDivselect = $('.selectDiv select');
    if (selectDivselect.length > 0) {
        selectDivselect.select2();
    }
    var selectDivshort = $('.selectDiv.sorting select');
    if (selectDivshort.length > 0) {
        selectDivshort.select2({
            minimumResultsForSearch: Infinity
        });
    }*/

    /*=======================================================================
     [12] BLOG TESTMONIAL CAROSEL
     =========================================================================*/
    var testCaro = $('#testCaro');
    if (testCaro.length > 0) {
        testCaro.owlCarousel({
            items: 1,
            dots: false,
            autoplay: true,
            nav: false
        });
    }

    /*=======================================================================
     [12] BLOG TESTMONIAL CAROSEL
     =========================================================================*/
    var postCaro = $('#postCaro');
    if (postCaro.length > 0) {
        postCaro.owlCarousel({
            items: 1,
            dots: false,
            autoplay: true,
            nav: true,
            navText: ['<i class="fa fa-angle-left"></i>', '<i class="fa fa-angle-right"></i>']
        });
    }

    /*=======================================================================
     [13] SHOP PRICE RANGE
     =========================================================================*/
    if ($("#slider-range").length > 0) {
        $("#slider-range").slider({
            range: true,
            min: 0,
            max: 500,
            values: [10, 250],
            slide: function (event, ui) {
                $("#amount").html("$" + ui.values[ 0 ] + " - $" + ui.values[ 1 ]);
            }
        });
        $("#amount").html("$" + $("#slider-range").slider("values", 0) + " - $" + $("#slider-range").slider("values", 1));
    }


    /*=======================================================================
     [14] COLOR PRESET
     =========================================================================*/
    if ($(".colorPreset").length > 0)
    {
        var switchs = true;
        $(".switchButton").on('click', function (e) {
            e.preventDefault();
            if (switchs)
            {
                $(this).addClass('active');
                $(".colorPreset").animate({'right': '0px'}, 400);
                switchs = false;
            } else
            {
                $(this).removeClass('active');
                $(".colorPreset").animate({'right': '-250px'}, 400);
                switchs = true;
            }
        });
        $(".colorSwitch a").on('click', function (e) {
            e.preventDefault();
            var color = $(this).attr('href');
            $(".colorSwitch a").removeClass('active');
            $(this).addClass('active');
            $("#colorChem").attr('href', 'css/lay_colors/' + color + '.css');
        });
        $(".lightDark a").on('click', function (e) {
            e.preventDefault();
            var colorschem = $(this).attr('href');
            $(".lightDark a").removeClass('active');
            $(this).addClass('active');
            $("#lightDark").attr('href', 'css/lay_colors/' + colorschem + '.css');
            $("#loadding img").attr('src', 'images/loaddingl.png');
        });
        $(".layout a").on('click', function (e) {
            e.preventDefault();
            var layout = $(this).attr('href');
            $(".layout a").removeClass('active');
            $(this).addClass('active');
            $("#layout").attr('href', 'css/lay_colors/' + layout + '.css');
        });
        $(".patterns a").on('click', function (e) {
            e.preventDefault();
            var bg = $(this).attr('href');
            if ($('.boxed').hasClass('active')) {
                $('.patterns a').removeClass('active');
                $(this).addClass('active');
                $('body').removeClass('bgp1 bgp2 bgp3 bgp4 bgp5 bgp6 bgp6 bgp7 bgp8 bgp9');
                $('body').addClass(bg);
            } else {
                alert('Please, active box layout First.');
            }
            $(".patterns a").removeClass('active');
            $(this).addClass('active');
        });
    }
    ;
    /*=======================================================================
     [15] BACK TO TOP
     =========================================================================*/
    $(window).on('scroll', function () {
        if ($(window).scrollTop() > $(window).height())
        {
            $("#backToTop").addClass('showit');
        } else
        {
            $("#backToTop").removeClass('showit');
        }
    });
    $("body, html").on("click", "#backToTop", function (e) {
        e.preventDefault();
        $('html, body').animate({scrollTop: 0}, 800);
    });
    $("body, html").on("click", "#learnMore", function (e) {
        e.preventDefault();
        $('html, body').animate({scrollTop: $("#choseSection").offset().top}, 800);
    });
    $("body, html").on("click", "#fragTossTile", function (e) {
        e.preventDefault();
        $('html, body').animate({scrollTop: $("#fragTossGame").offset().top}, 800);
    });
    $("body, html").on("click", "#fragBoxTile", function (e) {
        e.preventDefault();
        $('html, body').animate({scrollTop: $("#fragBoxGame").offset().top}, 800);
    });
    $("body, html").on("click", "#fragRaffleTile", function (e) {
        e.preventDefault();
        $('html, body').animate({scrollTop: $("#fragRaffleGame").offset().top}, 800);
    });
    $("body, html").on("click", "#fragPowerTile", function (e) {
        e.preventDefault();
        $('html, body').animate({scrollTop: $("#fragPowerGame").offset().top}, 800);
    });
    $("body, html").on("click", "#fragDiceTile", function (e) {
        e.preventDefault();
        $('html, body').animate({scrollTop: $("#fragDiceGame").offset().top}, 800);
    });
    $("body, html").on("click", "#fragBondsTile", function (e) {
        e.preventDefault();
        $('html, body').animate({scrollTop: $("#fragBondsGame").offset().top}, 800);
    });
    /*=======================================================================
     [16] MOBILE MENU
     =========================================================================*/
    if ($('.mobileMenu, .mobileMenu2').length > 0) {
        $('.mobileMenu, .mobileMenu2').on('click', function () {
            $(this).toggleClass('active');
            $('.mainNav > ul, .mainNav2 > ul').slideToggle('slow');
        });
        if ($(window).width() < 767)
        {
            $('.mainNav > ul li.has-menu-items > a, .mainNav2 > ul li.has-menu-items > a').on('click', function (e) {
                e.preventDefault();
                $(this).parent().toggleClass('active');
                $(this).parent().children('.sub-menu').slideToggle('slow');
            });
        }
    }

    /*=======================================================================
     [16] MOBILE MENU
     =========================================================================*/
    var popUp = $('a.popUp');
    if (popUp.length > 0) {
        popUp.magnificPopup({
            type: 'image',
            gallery: {
                enabled: true
            }
        });
    }

    /*=======================================================================
     [17] PRELOADER
     =========================================================================*/
    var preloader = $('.preloader');
    if (preloader.length > 0) {
        $(window).load(function () {
            preloader.delay(500).fadeOut('slow');
        });
    }


    /*=======================================================================
     [18] TESTMONIAL
     =========================================================================*/
    var testcalousel = $('.testimonials-carousel');
    if (testcalousel.length > 0) {
        testcalousel.owlCarousel({
            items: 3,
            dots: false,
            nav: true,
            navText: ['1','2'],
            center: true,
            loop: true,
            mouseDrag: false,
            responsive: {
                0: {
                    items: 3
                },
                480: {
                    items: 3
                },
                768: {
                    items: 3
                },
                1240: {
                    items: 3
                }
            }
        });
    }

    var testimCarousel = $(".testimonials-carousel");
    testimCarousel.on('initialized.owl.carousel', function(e){
        var currentItem = e.item.index - 2;
        $(".testimonials-body").find("[data-slide='"+ currentItem +"']").fadeIn(300);
    });
    testimCarousel.on('translate.owl.carousel', function(e){
        var currentItem = e.item.index - 2;
        $(".testimonials-body .blockquote-big").fadeOut(200);
        $(".testimonials-body").find("[data-slide='"+ currentItem +"']").delay(400).fadeIn(300);
    });





})(jQuery);
