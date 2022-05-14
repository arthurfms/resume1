//tyewritter
var i = 0;
var text = "Front-End Developer";
var speed = 125;

setTimeout(function typeWriter() {
  if (i < text.length) {
    document.getElementById("header__subtitle").innerHTML += text.charAt(i);
    i++;
    setTimeout(typeWriter, speed);
  }
}, 1000);

window.onload = function () {
  typeWriter();
};

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("slide");
  if (n > slides.length) {
    slideIndex = 1;
  }
  if (n < 1) {
    slideIndex = slides.length;
  }
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slides[slideIndex - 1].style.display = "flex";
}

let slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
  showSlides((slideIndex += n));
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides((slideIndex = n));
}
