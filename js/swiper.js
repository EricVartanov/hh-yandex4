const swiper1 = new Swiper(".idc-swiper", {
    // Default parameters
    slidesPerView: "auto",
    spaceBetween: 15,
    loop: true,
    direction: "horizontal",
    grabCursor: true,

    // Responsive breakpoints

    breakpoints: {
        700: {
            slidesPerView: "auto",
            spaceBetween: 5,
        },
        1020: {
            slidesPerView: "auto",
            spaceBetween: 15,
        },
    },

    navigation: {
        nextEl: ".idc-swiper-button-next",
        prevEl: ".idc-swiper-button-prev",
    },
});
