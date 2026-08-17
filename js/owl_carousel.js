$(document).ready(function () {

    $(".owl-carousel").owlCarousel({
        loop: true,
        margin: 20,
        // nav: true,
        // dots: true,
        autoplay: true,
        autoplayTimeout: 3000,
        autoplayHoverPause: true,

        responsive: {
            0: {
                items: 1
            },
            576: {
                items: 2
            },
            992: {
                items: 5
            }
        }
    });

});