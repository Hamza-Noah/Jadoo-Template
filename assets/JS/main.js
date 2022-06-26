$(document).ready(function () {
  $(".category-carousel").owlCarousel({
    loop: true,
    margin: 10,
    responsiveClass: true,
    responsive: {
      0: {
        items: 1,
        nav: false,
        dots: true,
      },
      768: {
        items: 2,
        nav: false,
        dots: true,
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
        dots: true,
      },
      600: {
        items: 1,
        nav: false,
        dots: true,
      },
      
      900: {
        items: 2,
        nav: false,
        dots: true,
      },
      
      1200: {
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
        items: 1,
        nav: false,
        dots: false,
      },
      567: {
        items: 2,
        nav: false,
        dots: false,
      },
      767: {
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
});


// Testimonial


let bar = document.querySelector("#progress-bar");
let barValue = document.querySelector("#progress-bar-value").innerHTML;
let progress = document.getElementById("progress");

bar.style.cssText =
  " height: 10px; width: 150px; border-radius: 5px; margin-top: 15px; background-color: #F5F5F5;";

progress.style.cssText = `height: 100%; width: ${barValue}%; border-radius: 5px; background-color: #8A79DF `;

let firstTestimonial = document.querySelector(".testimonial:first-child");
let secondTestimonial = document.querySelector(".testimonial:last-child");
let btnPrevious = document.getElementById("next-testimonial");
let btnNext = document.getElementById("previous-testimonial");
let dotNext = document.getElementById("next-test");
let dotPrev = document.getElementById("prev-test");

btnNext.addEventListener("click", function () {
  firstTestimonial.classList.add("hidden-top");
  secondTestimonial.classList.remove("hidden-bottom");
  btnNext.setAttribute("disabled");
  btnPrevious.removeAttribute("disabled");
});

btnPrevious.addEventListener("click", function () {
  firstTestimonial.classList.remove("hidden-top");
  secondTestimonial.classList.add("hidden-bottom");
  btnPrevious.setAttribute("disabled");
  btnNext.removeAttribute("disabled");
});

dotNext.addEventListener("click", function () {
  firstTestimonial.classList.add("hidden-top");
  secondTestimonial.classList.remove("hidden-bottom");
  dotNext.removeAttribute("disabled");
  dotPrev.setAttribute("disabled");
  dotNext.classList.add("active");
  dotPrev.classList.remove("active")
});

dotPrev.addEventListener("click", function () {
  firstTestimonial.classList.remove("hidden-top");
  secondTestimonial.classList.add("hidden-bottom");
  dotNext.setAttribute("disabled");
  dotPrev.removeAttribute("disabled");
  dotPrev.classList.add("active");
  dotNext.classList.remove("active")
});

firstTestimonial.addEventListener("click", function () {
  firstTestimonial.classList.remove("hidden-top");
  secondTestimonial.classList.add("hidden-bottom");
});

secondTestimonial.addEventListener("click", function () {
  secondTestimonial.classList.remove("hidden-bottom");
  firstTestimonial.classList.add("hidden-top");
});


// Form Validation


