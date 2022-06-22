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
    768: {
      items: 2,
      nav: false,
      dots: false,
    },
    1000: {
      items: 4,
      nav: false,
      loop: false,
      dots: false,
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

$("#brands-carousel").owlCarousel({
  loop: true,
  margin: 10,
  responsiveClass: true,
  responsive: {
    0: {
      items: 2,
      nav: false,
      dots: false,
    },
    600: {
      items: 3,
      nav: false,
      dots: false,
    },
    1000: {
      items: 5,
      nav: true,
      loop: false,
    },
  },
});
