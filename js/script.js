window.onload = function () {
  const skills = document.querySelector(".main-skills");
  window.addEventListener("scroll", handleScroll);

  function handleScroll() {
    toggleMenu();
    handleSkills();
  }

  function handleSkills() {
    if (window.scrollY > 2100 && window.scrollY < 2950) {
      skillsOnFocus();
    } else {
      skillsOffFocus();
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
    skills.querySelectorAll(".skill").forEach(function (item) {
      const width = item.querySelector(".skill__percentage").textContent;
      item.querySelector(".skill-bar__progress").style = `width: ${width}`;
    });
  }

  function skillsOffFocus() {
    skills.querySelectorAll(".skill").forEach(function (item) {
      const width = item.querySelector(".skill__percentage").textContent;
      item.querySelector(".skill-bar__progress").style = `width: 0`;
    });
  }
 //----------------------------------------

 typeWriter();

  function typeWriter() {
    var i = 0;
    var text = "Arthur Fernandes";
    var speed = 125;
    
    setTimeout(function typeWriter() {
      const element = document.querySelector("h1");
      if (i < text.length) {
        element.textContent +=
          text.charAt(i);
        i++;
        setTimeout(typeWriter, speed);
      }
    }, 1500);
  }


};
