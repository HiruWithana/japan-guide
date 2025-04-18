var swiper = new Swiper(".imageSliderHome", {
  spaceBetween: 0,
  loop: true,
  slidesPerView: 1,
  effect: "fade",
  fadeEffect: {
    crossFade: true,
  },
  navigation: {
    nextEl: ".swiper-button-next-custom",
    prevEl: ".swiper-button-prev-custom",
  },
});
