//tyewritter
var i = 0;
var text = "Front-End Developer";
var speed = 125;

setTimeout(function typeWriter() {
  if (i < text.length) {
    document.querySelector(".header__subtitle-text").innerHTML += text.charAt(i);
    i++;
    setTimeout(typeWriter, speed);
  }
}, 1500);

