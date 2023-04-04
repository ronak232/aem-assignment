import Swiper, {
  Navigation,
  Pagination,
  EffectCoverflow,
  Scrollbar,
} from "swiper";
import data from "../components/data.json";

(function () {
  "use strict";

  const swiperContainer = document.querySelectorAll(".swiper-container");
  if (swiperContainer) {
    let swiper = new Swiper(".step-list__slider", {
      modules: [Navigation, Pagination, EffectCoverflow, Scrollbar],
      slidesPerView: 1,
      spaceBetween: 20,
      centeredSlides: true,
      scrollbar: {
        hide: false,
        draggable: true,
        snapOnRelease: false,
      },
      pagination: {
        el: ".swiper-pagination",
        type: "fraction",
        renderBullet: function (index, className) {
          return `<span class="${className}" aria-label="Slide ${
            index + 1
          }" role="button" tabindex="0"></span>`;
        },
      },
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },
      coverflowEffect: {
        rotate: 0,
        stretch: 80,
        depth: 350,
        modifier: 1,
      },
      effect: "coverflow",
      scrollbar: {
        el: ".swiper-scrollbar",
        dragClass: "swiper-scrollbar-drag",
        draggable: true,
        dragSize: "100px",
      },
      breakpoints: {
        768: {
          slidesPerView: 1.5,
        },
        1024: {
          slidesPerView: 1.9,
        },
      },
      // loop: true,
    });

    swiperContainer.forEach((item) => {
      const img = data.image1
        .map((image1, index) => {
          return `<div class="swiper-slide" aria-label=${
            index + 1
          }><img class="swiper-slide__img" src=${image1.url} alt=${
            image1.alt
          } /></div>`;
        })
        .join("");
      item.innerHTML = img;
    });
  }
})();
//   "use strict";
