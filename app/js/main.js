$(function () {
    $('.slider__propose').slick({
        prevArrow: '<button type="button" class="slick-prev"><img src="./images/arrow-prev.svg"></button>',
        nextArrow: '<button type="button" class="slick-next"><img src="./images/arrow-next.svg"></button>',
        slidesToShow: 2,
        responsive: [
            {
                breakpoint: 641,
                settings: {
                    slidesToShow: 1,
                    prevArrow: '<button type="button" class="slick-prev"><img src="./images/arrow-left-resp.svg"></button>',
                    nextArrow: '<button type="button" class="slick-next"><img src="./images/arrow-right-resp.svg"></button>'
                }
            },
            {
                breakpoint: 1001,
                settings: {
                    slidesToShow: 1
                }
            }
        ]
    });

    $('.slider__comfort-1').slick({
        arrows: false,
        slidesToShow: 4,
        rows: 2,
        touchThreshold: 15,
        responsive: [
            {
                breakpoint: 321,
                settings: {
                    slidesToShow: 1,
                    rows: 2
                }
            },
            {
                breakpoint: 641,
                settings: {
                    rows: 1
                }
            }
        ]
    });
});