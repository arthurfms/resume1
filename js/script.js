window.onload = function () {
  const skills = document.querySelector(".main-skills");
  window.addEventListener("scroll", handleScroll);

  function handleScroll() {
    toggleMenu();
    activeScrollSkills();
  }

  function activeScrollSkills() {
    if (window.scrollY > 2054) {
      skillsOnFocus();
    }
  }

  function toggleMenu() {
    console.clear();
    console.log(window.scrollY);
    const menu = document.querySelector(".menu");
    if (window.scrollY != 0) {
      menu.classList.add("menu_active");
    } else if (window.scrollY == 0) {
      menu.classList.remove("menu_active");
    }
  }

  function skillsOnFocus() {
    console.log("worked");
    skills.querySelectorAll(".skill").forEach(function (item) {
      let width = item.querySelector(".skill__percentage").textContent;
      item.querySelector(".skill-bar__progress").style = `width: ${width}`;
    });
  }
};
