'use strict';



/**
 * add event on element
 */

const addEventOnElem = function (elem, type, callback) {
  if (elem.length > 1) {
    for (let i = 0; i < elem.length; i++) {
      elem[i].addEventListener(type, callback);
    }
  } else {
    elem.addEventListener(type, callback);
  }
}



/**
 * navbar toggle
 */

const navbar = document.querySelector("[data-navbar]");
const navTogglers = document.querySelectorAll("[data-nav-toggler]");
const navLinks = document.querySelectorAll("[data-nav-link]");

const toggleNavbar = function () { navbar.classList.toggle("active"); }

addEventOnElem(navTogglers, "click", toggleNavbar);

const closeNavbar = function () { navbar.classList.remove("active"); }

addEventOnElem(navLinks, "click", closeNavbar);



/**
 * header & back top btn active
 */

const header = document.querySelector("[data-header]");
const backTopBtn = document.querySelector("[data-back-top-btn]");

window.addEventListener("scroll", function () {
  if (window.scrollY >= 100) {
    header.classList.add("active");
    backTopBtn.classList.add("active");
  } else {
    header.classList.remove("active");
    backTopBtn.classList.remove("active");
  }
});



function playVideo() {
    const modal = document.getElementById("videoModal");
    const video = document.getElementById("gymVideo");

    modal.style.display = "block";
    video.play();
}



/**
 * Fitness Gallary
 */

const images = [
  "./assets/images/equipment/equipment1.webp",
  "./assets/images/equipment/equipment2.webp",
  "./assets/images/equipment/internal3.webp",
  "./assets/images/equipment/shop front view.png",
  "./assets/images/equipment/front.png",
  "./assets/images/equipment/frontbanner.webp",
  "./assets/images/equipment/frontview.png",
  "./assets/images/equipment/front.png",
  
];

let currentIndex = 0;

function showImage() {
  document.getElementById("galleryImage").src =
    images[currentIndex];
}

function nextImage() {
  currentIndex = (currentIndex + 1) % images.length;
  showImage();
}

function previousImage() {
  currentIndex = (currentIndex - 1 + images.length) % images.length;
  showImage();
}

// Auto slide every 3 seconds
setInterval(nextImage, 3000);
