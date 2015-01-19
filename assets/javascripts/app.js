$(function() {
    'use strict';
    $('.fancybox-foto').fancybox();

    var main = (function() {

        function setHeight() {
            var resizeTimer;
            var h = document.documentElement.clientHeight;
            clearTimeout(resizeTimer);

            resizeTimer = setTimeout(function() {
                $('main').css('height', h + 'px');
            }, 250)

        };

        return {
            setHeight: setHeight
        }

    }());

    var isotope = (function() {
        var el = $('.isotope');
        var btns = $('.portfolio__btn-nav');

        function _btnsHandler() {
            var filterValue = $(this).attr('data-filter');
            $('.portfolio__btn-nav').removeClass('is-active').attr('aria-selected','false');
            $(this).addClass('is-active').attr('aria-selected','true');
            el.isotope({
                filter: filterValue
            });
        }

        function init() {
            setTimeout(function(){
                el.isotope({
                    itemSelector: '.portfolio__projects-item',
                    layoutMode: 'fitRows'
                });    
            },2000)
            
            btns.on('click', _btnsHandler);
        };

        return {
            init: init
        };

    }());

    var scrollTo = (function() {
        var el = $('[data-scroll]');

        function _scroll() {
            var id = $(this).attr('href');
            var h = $('.header').outerHeight();
            var scroll = $(id).offset().top - h;

            _removeActive();
            $(this).addClass('is-active');

            $('html,body').animate({
                scrollTop: scroll
            }, 650);

            return false;   
        };

        function _removeActive() {
            el.removeClass('is-active');
        };

        function init() {
            el.on('click', _scroll);
        };

        return {
            init: init
        };

    }());

    var topo = (function() {

        function ajustaTopo() {
            var scroll = $(window).scrollTop();
            var header = $('.header');
            var home = $('.home');
            var limit = home.height() - header.height();
            return scroll >= limit ? $('.header').addClass('is-fixed') : $('.header').removeClass('is-fixed');
        };

        return {
            ajustaTopo: ajustaTopo
        };

    }());

    var menuActive = (function() {
        var h = $('.header').outerHeight();
        var page = {
            about: parseInt($('#sobre').offset().top - h),
            portfolio: parseInt($('#portfolio').offset().top - h),
            formacao: parseInt($('#formacao').offset().top - h),
            contato: parseInt($('#contato').offset().top - h)
        };

        function _verifyPage(scroll) {
            if (scroll >= page.contato) {
                return 'contato';
            } else if (scroll >= page.formacao) {
                return 'formacao';
            } else if (scroll >= page.portfolio) {
                return 'portfolio';
            } else if (scroll >= page.about) {
                return 'sobre';
            }
        };

        function init() {
            var scroll = $(window).scrollTop();
            var p = _verifyPage(scroll);
            var menuItem = $('.menu__link');

            menuItem.removeClass('is-active');
            menuItem.filter('[href="#' + p + '"]').addClass('is-active');

        };

        return {
            init: init
        };

    }());

    var btnMenuMobile = (function() {
        var btn = $('#btn-menu-mobile');
        var menu = btn.siblings('.menu');
        var menuLink = menu.find('.menu__link');
        var icon = btn.children();

        function init() {
            menuLink.on('click',_close);
            btn.on('click',_toggle);
        };

        function _toggle(){
            if(!menu.hasClass('is-active')) {
                menu.addClass('is-active');
                icon.removeClass('fa-bars').addClass('fa-close');
            }

            else {
                menu.removeClass('is-active');
                icon.removeClass('fa-close').addClass('fa-bars');
            }

        };

        function _close(){
            menu.removeClass('is-active');
            icon.removeClass('fa-close').addClass('fa-bars');
        };

        return {
            init: init
        };

    }());

    var loadFonts = (function() {

         var fonts = {
             fontAwesome: "<link href='//maxcdn.bootstrapcdn.com/font-awesome/4.2.0/css/font-awesome.min.css' rel='stylesheet'>",
             google: "<link href='http://fonts.googleapis.com/css?family=Open+Sans:400,700,300%7cNews+Cycle:700' rel='stylesheet'>"
         };

         function init() {
            setTimeout(function(){
             $('head').append($(fonts.fontAwesome), $(fonts.google));
            },1000)
         };

         return {
             init: init
         };

    }());


    main.setHeight();
    isotope.init();
    scrollTo.init();
    btnMenuMobile.init();
    loadFonts.init();

    $(window).on('scroll', function() {
        menuActive.init();
        topo.ajustaTopo();
    });

    $(window).on('resize', function(){
        main.setHeight();
    })

    $('#form-contato').on('submit', function() {

        $.post('contato.php', {
                nome: $('#nome').val(),
                email: $('#email').val(),
                mensagem: $('#mensagem').val()
            },

            function(data) {
                $('#msg-obr').html('<img src="img/gif-load.gif"/>');

                $('#nome').val('');
                $('#email').val('');
                $('#mensagem').val('');

                $('#msg-obr').fadeOut(450, function() {
                    $('#msg-obr').html(data);
                    $('#msg-obr').fadeIn(450);
                });

            });

        return false;

    });

});
