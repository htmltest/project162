$(document).ready(function() {

    $('.slider-list').slick({
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        prevArrow: '<button type="button" class="slick-prev"><svg width="19px" height="32px" viewBox="0 0 19 32" xmlns="http://www.w3.org/2000/svg"><g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd"><g transform="translate(-1595.000000, -296.000000)" stroke="#FFFFFF" stroke-width="2"><g transform="translate(308.000000, 297.000000)"><g transform="translate(1288.000000, 0.000000)"><polyline transform="translate(8.000000, 15.000000) scale(-1, 1) translate(-8.000000, -15.000000) " points="16 0 0 15 16 30"></polyline></g></g></g></g></svg></button>',
        nextArrow: '<button type="button" class="slick-next"><svg width="19px" height="32px" viewBox="0 0 19 32" xmlns="http://www.w3.org/2000/svg"><g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd"><g transform="translate(-1595.000000, -296.000000)" stroke="#FFFFFF" stroke-width="2"><g transform="translate(308.000000, 297.000000)"><g transform="translate(1288.000000, 0.000000)"><polyline transform="translate(8.000000, 15.000000) scale(-1, 1) translate(-8.000000, -15.000000) " points="16 0 0 15 16 30"></polyline></g></g></g></g></svg></button>',
        dots: true,
        autoplay: true,
        autoplaySpeed: 5000,
        pauseOnFocus: false,
        pauseOnHover: false,
        pauseOnDotsHover: false
    });

    $('.slider-mobile-list').slick({
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        prevArrow: '<button type="button" class="slick-prev"><svg width="19px" height="32px" viewBox="0 0 19 32" xmlns="http://www.w3.org/2000/svg"><g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd"><g transform="translate(-1595.000000, -296.000000)" stroke="#FFFFFF" stroke-width="2"><g transform="translate(308.000000, 297.000000)"><g transform="translate(1288.000000, 0.000000)"><polyline transform="translate(8.000000, 15.000000) scale(-1, 1) translate(-8.000000, -15.000000) " points="16 0 0 15 16 30"></polyline></g></g></g></g></svg></button>',
        nextArrow: '<button type="button" class="slick-next"><svg width="19px" height="32px" viewBox="0 0 19 32" xmlns="http://www.w3.org/2000/svg"><g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd"><g transform="translate(-1595.000000, -296.000000)" stroke="#FFFFFF" stroke-width="2"><g transform="translate(308.000000, 297.000000)"><g transform="translate(1288.000000, 0.000000)"><polyline transform="translate(8.000000, 15.000000) scale(-1, 1) translate(-8.000000, -15.000000) " points="16 0 0 15 16 30"></polyline></g></g></g></g></svg></button>',
        dots: true,
        autoplay: true,
        autoplaySpeed: 5000,
        pauseOnFocus: false,
        pauseOnHover: false,
        pauseOnDotsHover: false
    });

    $('.menu-item').click(function(e) {
        var curBlock = $($(this).attr('href'));
        if (curBlock.length > 0) {
            $('html, body').animate({'scrollTop': curBlock.offset().top});
        }
        e.preventDefault();
    });

    $('.gallery').slick({
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        prevArrow: '<button type="button" class="slick-prev"><svg width="19px" height="32px" viewBox="0 0 19 32" xmlns="http://www.w3.org/2000/svg"><g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd"><g transform="translate(-1595.000000, -296.000000)" stroke="#FFFFFF" stroke-width="2"><g transform="translate(308.000000, 297.000000)"><g transform="translate(1288.000000, 0.000000)"><polyline transform="translate(8.000000, 15.000000) scale(-1, 1) translate(-8.000000, -15.000000) " points="16 0 0 15 16 30"></polyline></g></g></g></g></svg></button>',
        nextArrow: '<button type="button" class="slick-next"><svg width="19px" height="32px" viewBox="0 0 19 32" xmlns="http://www.w3.org/2000/svg"><g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd"><g transform="translate(-1595.000000, -296.000000)" stroke="#FFFFFF" stroke-width="2"><g transform="translate(308.000000, 297.000000)"><g transform="translate(1288.000000, 0.000000)"><polyline transform="translate(8.000000, 15.000000) scale(-1, 1) translate(-8.000000, -15.000000) " points="16 0 0 15 16 30"></polyline></g></g></g></g></svg></button>',
        dots: false
    });

    $('.video-item a, .info-link a').click(function (e) {
        $('.pu-wrapp').addClass('pu-visible')
        $('.pu-video').empty();
        $('.pu-video').append('<iframe src frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen=""></iframe>');
        $('.pu-wrapp').find('iframe').attr('src', $(this).attr('href'));
        e.preventDefault();
    });

    $('.pu-wrapp, .close').click(function () {
        $('.pu-wrapp').removeClass('pu-visible')
        $('.pu-video').empty();
    });

    $(document).keydown(function(e) {
        if (e.keyCode == 27) {
            $('.pu-wrapp').removeClass('pu-visible')
            $('.pu-video').empty();
        }
    });

    $('.purchase-site-close-icon').click(function() {
        $('html').removeClass('purchase-visible');
    });

    $('.purchase-bg').click(function() {
        $('html').removeClass('purchase-visible');
    });

    $('.buy-link').click(function(e) {
        $('.purchase-site-details a[data-shop="dns"]').attr('href', $(this).attr('data-dns'));
        $('.purchase-site-details a[data-shop="aliexpress"]').attr('href', $(this).attr('data-aliexpress'));
        $('.purchase-site-details a[data-shop="onlinetrade"]').attr('href', $(this).attr('data-onlinetrade'));
        $('.purchase-site-details a[data-shop="mvideo"]').attr('href', $(this).attr('data-mvideo'));
        $('html').addClass('purchase-visible');
        e.preventDefault();
    });

});