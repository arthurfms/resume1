function scrolling() {
  const menu = document.querySelector(".menu");
  if (window.scrollY != 0) {
    menu.classList.add("menu_active");
  } else if (window.scrollY == 0) {
    menu.classList.remove("menu_active");
  }
}

window.addEventListener("scroll", scrolling);

window.onload = function () {
  const skills = document.querySelector(".main-skills");

  skills.addEventListener("click", skillsOnFocus);

  function skillsOnFocus() {
    console.log("worked");
    skills.querySelectorAll(".skill").forEach(function (item) {
      let width = item.querySelector(".skill__percentage").textContent;
      item.querySelector(".skill-bar__progress").style = `width: ${width}`;
    });
  }
};
