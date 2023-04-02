const images = {
  image1: [
    {
      id: 1,
      url: "https://cdn.pixabay.com/photo/2016/07/11/17/43/abstract-1510187_960_720.png",
      alt: "Some Images",
    },
    {
      id: 2,
      url: "https://images.pexels.com/photos/1456291/pexels-photo-1456291.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      alt: "Some Images",
    },
    {
      id: 3,
      url: "https://images.pexels.com/photos/1005058/pexels-photo-1005058.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      alt: "Some Images",
    },
  ],
};
const swiperContainer = document.querySelector(".swiper-container");

let swiper = new Swiper(".step-list__slider", {
  slidesPerView: 1.2,
  spaceBetween: 20,
  centeredSlides: true,
  scrollbar: {
    hide: false,
    draggable: true,
    snapOnRelease: false,
  },
  pagination: {
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
    depth: 400,
    modifier: 1,
  },
  effect: "coverflow",
  scrollbar: {
    el: ".swiper-scrollbar",
    dragClass: "swiper-scrollbar-drag",
    draggable: true,
  },
  breakpoints: {
    800: {
      slidesPerView: 1.8,
    },
    1024: {
      slidesPerView: 1.8,
    },
  },
  // loop: true,
});

const img = images.image1.map((image1, index) => {
  return `<div class="swiper-slide" aria-label=${
    index + 1
  }><img class="swiper-slide__img" src="${image1.url}" alt="${
    image1.alt
  }" /></div>`;
});

swiperContainer.innerHTML = img;
