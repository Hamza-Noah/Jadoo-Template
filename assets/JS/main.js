$(".category-carousel").owlCarousel({
  loop: true,
  margin: 10,
  responsiveClass: true,
  responsive: {
    0: {
      items: 1,
      nav: false,
      dots: false,
    },
    600: {
      items: 1,
      nav: false,
      dots: false,
    },
    1000: {
      items: 4,
      nav: true,
      loop: false,
    },
  },
});

$(".destination-carousel").owlCarousel({
  loop: true,
  margin: 10,
  responsiveClass: true,
  responsive: {
    0: {
      items: 1,
      nav: false,
      dots: false,
    },
    600: {
      items: 1,
      nav: false,
      dots: false,
    },
    1000: {
      items: 3,
      nav: true,
      loop: false,
    },
  },
});
