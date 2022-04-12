import $ from "jquery";

export default function () {
    $('.accordion__title-box').on('click', function () {
        // $('.accordion__item').removeClass('accordion__item--active');
        $(this).siblings('.accordion__text-box').slideToggle();
        $(this).parent('.accordion__item').toggleClass('accordion__item--active');
        // $(this).parent('.accordion__item').addClass('accordion__item--active');
        // $(this).removeClass('accordion__item--active');
        // $(this).addClass('accordion__item--active');
        // $(this).children('.accordion__item-text').slideToggle();
        // $(this).children('.accordion__item-title').toggleClass('accordion__item-title--active');;
    });
}