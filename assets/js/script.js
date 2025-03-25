

$(document).ready(function () {
  $("toggle").click(function () {
    $("nav").toggle();
  });
});

const announcementSwiper = new Swiper(".announcement", {
  centeredSlides: true,
  slidesPerView: 1,
  grabCursor: true,
  loop: true,

  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev"
  },

  // Enabled autoplay mode
  autoplay: {
    delay: 3000,
    disableOnInteraction: false,
  },

  // If we need pagination
  pagination: {
    el: ".swiper-pagination",
    dynamicBullets: false,
    clickable: true,
  },

  // Responsive breakpoints
  breakpoints: {
    640: {
      slidesPerView: 1.25,
      spaceBetween: 20,
    },
    1024: {
      slidesPerView: 2,
      spaceBetween: 20,
    },
  },
});

const  trendingSwiper = new Swiper(".trending", {
  centeredSlides: false,
  slidesPerView: 2,
  spaceBetween: 20,
  grabCursor: true,
  loop: true,

  navigation: {
    nextEl: ".swiper-button-next", 
    prevEl: ".swiper-button-prev",  
  },

  autoplay: {
    delay: 3000,
    disableOnInteraction: false,
  },

  breakpoints: {
    320: { slidesPerView: 1.5 },
    768: { slidesPerView: 2 },
    1024: { slidesPerView: 4 },
    1280: { slidesPerView: 5 },
  }
});

const  topSwiper = new Swiper(".topslide", {
  centeredSlides: false,
  slidesPerView: 2,
  spaceBetween: 20,
  grabCursor: true,
  loop: true,

  navigation: {
    nextEl: ".swiper-button-next", 
    prevEl: ".swiper-button-prev",  
  },

  autoplay: {
    delay: 3000,
    disableOnInteraction: false,
  },

  breakpoints: {
    320: { slidesPerView: 1.5},
    768: { slidesPerView: 2 },
    1024: { slidesPerView: 4 },
    1280: { slidesPerView: 5 },
  }
});