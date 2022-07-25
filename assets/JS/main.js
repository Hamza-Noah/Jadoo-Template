
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

// Trip

let bar = document.querySelector("#progress-bar");
let barValue = document.querySelector("#progress-bar-value").innerHTML;
let progress = document.getElementById("progress");

bar.style.cssText =
  " height: 10px; width: 150px; border-radius: 5px; margin-top: 15px; background-color: #F5F5F5;";

progress.style.cssText = `height: 100%; width: ${barValue}%; border-radius: 5px; background-color: #8A79DF `;

// Testimonials

let testimonials = Array.from(document.querySelectorAll(".testimonial"));
let shownTestimonial = document.querySelector(".active-top");

testimonials.forEach((testimonial, index) => {
  testimonial.addEventListener("click", function () {
    if (testimonial.classList.contains("active-bottom")) {
      $(".active-top").addClass("hidden");
      $(".active-top").removeClass("active-top");
      $(".test-nav").removeClass("active");

      testimonial.classList.remove("active-bottom");
      testimonial.classList.add("active-top");

      if (index < 4) {
        testimonial.nextElementSibling.classList.remove("hidden");
        testimonial.nextElementSibling.classList.add("active-bottom");
        dotsArr[index].classList.add("active");
      } else {
        testimonials[0].classList.remove("hidden");
        testimonials[0].classList.add("active-bottom");
        dotsArr[index].classList.add("active");
      }
    }
  });
});

let dotsArr = Array.from(document.querySelectorAll(".test-nav"));

dotsArr.forEach((dot, index) => {
  dot.addEventListener("click", function () {
    $(".testimonial").addClass("hidden");
    $(".testimonial").removeClass("active-top");
    $(".active-bottom").removeClass("active-bottom");
    $(".test-nav").removeClass("active");

    testimonials[index].classList.add("active-top");
    testimonials[index].classList.remove("hidden");

    if (index < 4) {
      testimonials[index + 1].classList.remove("hidden");
      testimonials[index + 1].classList.add("active-bottom");
    } else {
      testimonials[0].classList.remove("hidden");
      testimonials[0].classList.add("active-bottom");
    }

    dot.classList.add("active");
  });
});

let nextTestimonial = document.getElementById("next-testimonial");
let previousTestimonial = document.getElementById("previous-testimonial");
let testIndex = 0;

nextTestimonial.addEventListener("click", function () {
  testimonials.forEach((testimonial, index) => {
    if (testimonials[index].classList.contains("active-top")) {
      testIndex = index;

      $(".testimonial").addClass("hidden");
      $(".testimonial").removeClass("active-top");
      $(".active-bottom").removeClass("active-bottom");
      $(".test-nav").removeClass("active");
    }
  });

  if (testIndex < 3) {
    testimonials[testIndex + 1].classList.replace("hidden", "active-top");
    testimonials[testIndex + 2].classList.replace("hidden", "active-bottom");
    dotsArr[testIndex + 1].classList.add("active");
  } else if (testIndex == 3) {
    testimonials[testIndex + 1].classList.replace("hidden", "active-top");
    testimonials[0].classList.replace("hidden", "active-bottom");
    dotsArr[testIndex + 1].classList.add("active");
  } else {
    testimonials[0].classList.replace("hidden", "active-top");
    testimonials[1].classList.replace("hidden", "active-bottom");
    dotsArr[0].classList.add("active");
  }
});

previousTestimonial.addEventListener("click", function () {
  testimonials
    .slice()
    .reverse()
    .forEach((testimonial, index) => {
      if (testimonials[index].classList.contains("active-top")) {
        testIndex = index;

        $(".testimonial").addClass("hidden");
        $(".testimonial").removeClass("active-top");
        $(".active-bottom").removeClass("active-bottom");
        $(".test-nav").removeClass("active");
      }
    });

  if (testIndex > 0) {
    testimonials[testIndex - 1].classList.replace("hidden", "active-top");
    testimonials[testIndex].classList.replace("hidden", "active-bottom");
    dotsArr[testIndex - 1].classList.add("active");
  } else if (testIndex == 0) {
    testimonials[4].classList.replace("hidden", "active-top");
    testimonials[testIndex].classList.replace("hidden", "active-bottom");
    dotsArr[4].classList.add("active");
  }
});

// Form Validation

let form = document.getElementById("form");

form.addEventListener("submit", function (event) {
  event.preventDefault();
  let email = document.getElementById("email");
  let emailValidation =
    /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  let notValid = document.querySelector(".invalid-feedback");
  let valid = document.querySelector(".valid-feedback");

  if (emailValidation.test(email.value)) {
    console.log(email.value);
    valid.style.cssText =
      "display: block; position: absolute; bottom: -30px; left: 10px";
    notValid.style.cssText = "display: none;";
  } else {
    notValid.style.cssText =
      "display: block; position: absolute; bottom: -30px; left: 10px";
    valid.style.cssText = "display: none;";
  }
});


