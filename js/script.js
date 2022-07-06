window.onload = function () {
  const menu = document.querySelector(".menu");
  const about = document.querySelector(".about");
  const work = document.querySelector(".work-experience");
  const education = document.querySelector(".education");
  const skills = document.querySelector(".main-skills");
  const portfolio = document.querySelector(".portfolio");
  const courses = document.querySelector(".courses");
  const contact = document.querySelector(".contact");

  const menuAbout = document.querySelector("#menu__about");
  const menuWork = document.querySelector("#menu__work");
  const menuEducation = document.querySelector("#menu__education");
  const menuSkills = document.querySelector("#menu__skills");
  const menuPortfolio = document.querySelector("#menu__portfolio");
  const menuCourses = document.querySelector("#menu__courses");
  const menuContact = document.querySelector("#menu__contact");

  defineMenuObserver(about, menuAbout, 0.75);
  defineMenuObserver(work, menuWork, 0.3);
  defineMenuObserver(education, menuEducation, 0.65);
  defineMenuObserver(skills, menuSkills, 0.65);
  defineMenuObserver(portfolio, menuPortfolio, 0.3);
  defineMenuObserver(courses, menuCourses, 0.65);
  defineMenuObserver(contact, menuContact, 0.65);




  function activateMenuItem (item) {
    item.classList.add("menu__item_active");
  }
  function deactivateMenuItem (item) {
    item.classList.remove("menu__item_active");
  }
  // Menu Handler
  function activateMenu() {
    menu.classList.remove("menu_active");
  }
  function deactivateMenu() {
    menu.classList.add("menu_active");
  }

  let menuHandler = new IntersectionObserver(
    function (entries) {
      if (entries[0].isIntersecting === true) {
        activateMenu();
      } else {
        deactivateMenu();
      }
    },
    { threshold: [0.95] }
  );

  menuHandler.observe(document.querySelector(".header"));

//test
function defineMenuObserver (section, menuSection, thresh) {
  let skillsObserver = new IntersectionObserver(
    function (entries) {
      if (entries[0].isIntersecting === true) {
        activateMenuItem (menuSection);
      } else {
        deactivateMenuItem (menuSection);
      }
    },
    { threshold: thresh }
  );

  skillsObserver.observe(section);
}

//test





  // Skills Handler

  function activateSkills() {
    skills.querySelectorAll(".skill").forEach(function (item) {
      const width = item.querySelector(".skill__percentage").textContent;
      item.querySelector(".skill-bar__progress").style = `width: ${width}`;
    });
  }

  function deactivateSkills() {
    skills.querySelectorAll(".skill").forEach(function (item) {
      const width = item.querySelector(".skill__percentage").textContent;
      item.querySelector(".skill-bar__progress").style = `width: 0`;
    });
  }

  let skillsObserver = new IntersectionObserver(
    function (entries) {
      if (entries[0].isIntersecting === true) {
        activateSkills();
      } else {
        deactivateSkills();
      }
    },
    { threshold: [0.25] }
  );

  skillsObserver.observe(skills);

  //Typewriter

  typeWriter();

  function typeWriter() {
    var i = 0;
    var text = "Arthur Fernandes";
    var speed = 125;

    setTimeout(function typeWriter() {
      const element = document.querySelector("h1");
      if (i < text.length) {
        element.textContent += text.charAt(i);
        i++;
        setTimeout(typeWriter, speed);
      }
    }, 1500);
  }

  //SLIDESHOW
  const slides = [
    {
      title: "Web Development Bootcamp",
      subtitle: "Practicum by Yandex. FEBRUARY, 2022 - JANUARY, 2023",
      description:
        "10 months Web Development bootcamp, foccusing on all frontend technologies, programming languages and methodologies. The course is separated in sprints, trying to generate a real world development enviroment.",
      skills: ["HTML", "CSS", "JavaScript", "BEM Methodology", "React"],
    },
    {
      title: "Frontend Engineering",
      subtitle: "EBAC. JANUARY, 2022 - JANUARY, 2023",
      description:
        "A year long course about all frontend engineering framework, passing throughout web design, frontend programming and different profession frameworks.",
      skills: [
        "HTML",
        "CSS",
        "Sass",
        "Bootstrap",
        "JavaScript",
        "JQuery",
        "React",
        "Ajax",
      ],
    },
    {
      title: "Java Object-Oriented Development",
      subtitle: "Universidade Estadual do Ceará. MAY, 2020 - SEPTEMBER, 2020",
      description:
        "2 courses with two months each about Java development, foccusing on Web Applications and Object-Oriented programming.",
      skills: ["Java"],
    },
  ];

  let currentSlide = 0;
  const slideTemplate = document.querySelector("#slide").content;
  const skillTemplate = document.querySelector("#skill").content;

  function generateSlide(title, subtitle, description, skills) {
    const slide = slideTemplate.querySelector(".slide").cloneNode(true);
    const skillSection = slide.querySelector(".slide__skills");

    slide.querySelector(".slide__title").textContent = title;
    slide.querySelector(".slide__subtitle").textContent = subtitle;
    slide.querySelector(".slide__description").textContent = description;

    skills.forEach(function (item) {
      const skill = skillTemplate
        .querySelector(".slide__skill")
        .cloneNode(true);
      skill.querySelector("p").textContent = item;
      skillSection.append(skill);
    });

    return slide;
  }

  function newSlide(slide) {
    return generateSlide(
      slide.title,
      slide.subtitle,
      slide.description,
      slide.skills
    );
  }

  function replaceSlide(slide) {
    const actualSlide = document.querySelector(".slide");
    actualSlide.replaceWith(newSlide(slide));
  }

  function nextSlide() {
    if (currentSlide == slides.length - 1) {
      replaceSlide(slides[0]);
      currentSlide = 0;
    } else {
      replaceSlide(slides[currentSlide + 1]);
      currentSlide = currentSlide + 1;
    }
  }

  function previousSlide() {
    if (currentSlide == 0) {
      replaceSlide(slides[slides.length - 1]);
      currentSlide = slides.length - 1;
    } else {
      replaceSlide(slides[currentSlide - 1]);
      currentSlide = currentSlide - 1;
    }
  }

  document
    .querySelector(".slideshow__button_backwards")
    .addEventListener("click", function () {
      previousSlide();
    });

  document
    .querySelector(".slideshow__button_forwards")
    .addEventListener("click", function () {
      nextSlide();
    });

  const showInputError = (formElement, inputElement, errorMessage) => {
    const errorElement = formElement.querySelector(`.${inputElement.id}-error`);
    inputElement.classList.add("form__input_type_error");
    errorElement.textContent = errorMessage;
    errorElement.classList.add("form__input-error_active");
  };

  const hideInputError = (formElement, inputElement) => {
    const errorElement = formElement.querySelector(`.${inputElement.id}-error`);
    inputElement.classList.remove("form__input_type_error");
    errorElement.classList.remove("form__input-error_active");
    errorElement.textContent = "";
  };

  const checkInputValidity = (formElement, inputElement) => {
    if (!inputElement.validity.valid) {
      showInputError(formElement, inputElement, inputElement.validationMessage);
    } else {
      hideInputError(formElement, inputElement);
    }
  };

  const hasInvalidInput = (inputList) => {
    return inputList.some((inputElement) => {
      return !inputElement.validity.valid;
    });
  };

  const toggleSubmitButton = (inputList, buttonElement) => {
    if (hasInvalidInput(inputList)) {
      buttonElement.classList.remove("form__submit_active");
      buttonElement.removeEventListener("click", getEntries);
    } else {
      buttonElement.classList.add("form__submit_active");
      buttonElement.addEventListener("click", getEntries);
    }
  };

  const setEventListeners = (formElement) => {
    const inputList = Array.from(formElement.querySelectorAll(".form__input"));
    const submitButton = formElement.querySelector(".form__submit");
    toggleSubmitButton(inputList, submitButton);

    inputList.forEach((inputElement) => {
      inputElement.addEventListener("input", function () {
        checkInputValidity(formElement, inputElement);
        toggleSubmitButton(inputList, submitButton);
      });
    });
  };

  const enableValidation = () => {
    const formList = Array.from(document.querySelectorAll(".form"));
    formList.forEach((formElement) => {
      formElement.addEventListener("submit", (evt) => {
        evt.preventDefault();
      });

      setEventListeners(formElement);
    });
  };

  enableValidation();

  //FORM

  function genEntry(info) {
    let gen = info
      .replaceAll("+", "%2B")
      .replaceAll("%", "%25")
      .replaceAll(" ", "+")
      .replaceAll("\n", "%0A")
      .replaceAll("#", "%23")
      .replaceAll("&", "%26")
      .replaceAll("*", "%2A")
      .replaceAll("<", "%3C")
      .replaceAll("=", "%3D")
      .replaceAll(">", "%3E")
      .replaceAll("[", "%5B")
      .replaceAll("\\", "%5C")
      .replaceAll("]", "%5D")
      .replaceAll("^", "%5E")
      .replaceAll("`", "%60")
      .replaceAll("{", "%7B")
      .replaceAll("|", "%7C")
      .replaceAll("}", "%7D")
      .replaceAll("€", "%E2%82%AC")
      .replaceAll("‚", "%E2%80%9A")
      .replaceAll("ƒ", "%C6%92")
      .replaceAll("„", "%E2%80%9E")
      .replaceAll("…", "%E2%80%A6")
      .replaceAll("†", "%E2%80%A0")
      .replaceAll("‡", "%E2%80%A1")
      .replaceAll("ˆ", "%CB%86")
      .replaceAll("‰", "%E2%80%B0")
      .replaceAll("Š", "%C5%A0")
      .replaceAll("‹", "%E2%80%B9")
      .replaceAll("Œ", "%C5%92")
      .replaceAll("Ž", "%C5%BD")
      .replaceAll("‘", "%E2%80%98")
      .replaceAll("’", "%E2%80%99")
      .replaceAll("“", "%E2%80%9C")
      .replaceAll("”", "%E2%80%9D")
      .replaceAll("•", "%E2%80%A2")
      .replaceAll("–", "%E2%80%93")
      .replaceAll("—", "%E2%80%94")
      .replaceAll("˜", "%CB%9C")
      .replaceAll("™", "%E2%84")
      .replaceAll("š", "%C5%A1")
      .replaceAll("›", "%E2%80")
      .replaceAll("œ", "%C5%93")
      .replaceAll("ž", "%C5%BE")
      .replaceAll("Ÿ", "%C5%B8")
      .replaceAll("¡", "%C2%A1")
      .replaceAll("¢", "%C2%A2")
      .replaceAll("£", "%C2%A3")
      .replaceAll("¤", "%C2%A4")
      .replaceAll("¥", "%C2%A5")
      .replaceAll("¦", "%C2%A6")
      .replaceAll("§", "%C2%A7")
      .replaceAll("¨", "%C2%A8")
      .replaceAll("©", "%C2%A9")
      .replaceAll("ª", "%C2%AA")
      .replaceAll("«", "%C2%AB")
      .replaceAll("¬", "%C2%AC")
      .replaceAll("®", "%C2%AE")
      .replaceAll("¯", "%C2%AF")
      .replaceAll("°", "%C2%B0")
      .replaceAll("±", "%C2%B1")
      .replaceAll("²", "%C2%B2")
      .replaceAll("³", "%C2%B3")
      .replaceAll("´", "%C2%B4")
      .replaceAll("µ", "%C2%B5")
      .replaceAll("¶", "%C2%B6")
      .replaceAll("·", "%C2%B7")
      .replaceAll("¸", "%C2%B8")
      .replaceAll("¹", "%C2%B9")
      .replaceAll("º", "%C2%BA")
      .replaceAll("»", "%C2%BB")
      .replaceAll("¼", "%C2%BC")
      .replaceAll("½", "%C2%BD")
      .replaceAll("¾", "%C2%BE")
      .replaceAll("¿", "%C2%BF")
      .replaceAll("À", "%C3%80")
      .replaceAll("Á", "%C3%81")
      .replaceAll("Â", "%C3%82")
      .replaceAll("Ã", "%C3%83")
      .replaceAll("Ä", "%C3%84")
      .replaceAll("Å", "%C3%85")
      .replaceAll("Æ", "%C3%86")
      .replaceAll("Ç", "%C3%87")
      .replaceAll("È", "%C3%88")
      .replaceAll("É", "%C3%89")
      .replaceAll("Ê", "%C3%8A")
      .replaceAll("Ë", "%C3%8B")
      .replaceAll("Ì", "%C3%8C")
      .replaceAll("Í", "%C3%8D")
      .replaceAll("Î", "%C3%8E")
      .replaceAll("Ï", "%C3%8F")
      .replaceAll("Ð", "%C3%90")
      .replaceAll("Ñ", "%C3%91")
      .replaceAll("Ò", "%C3%92")
      .replaceAll("Ó", "%C3%93")
      .replaceAll("Ô", "%C3%94")
      .replaceAll("Õ", "%C3%95")
      .replaceAll("Ö", "%C3%96")
      .replaceAll("×", "%C3%97")
      .replaceAll("Ø", "%C3%98")
      .replaceAll("Ù", "%C3%99")
      .replaceAll("Ú", "%C3%9A")
      .replaceAll("Û", "%C3%9B")
      .replaceAll("Ü", "%C3%9C")
      .replaceAll("Ý", "%C3%9D")
      .replaceAll("Þ", "%C3%9E")
      .replaceAll("ß", "%C3%9F")
      .replaceAll("à", "%C3%A0")
      .replaceAll("á", "%C3%A1")
      .replaceAll("â", "%C3%A2")
      .replaceAll("ã", "%C3%A3")
      .replaceAll("ä", "%C3%A4")
      .replaceAll("å", "%C3%A5")
      .replaceAll("æ", "%C3%A6")
      .replaceAll("ç", "%C3%A7")
      .replaceAll("è", "%C3%A8")
      .replaceAll("é", "%C3%A9")
      .replaceAll("ê", "%C3%AA")
      .replaceAll("ë", "%C3%AB")
      .replaceAll("ì", "%C3%AC")
      .replaceAll("í", "%C3%AD")
      .replaceAll("î", "%C3%AE")
      .replaceAll("ï", "%C3%AF")
      .replaceAll("ð", "%C3%B0")
      .replaceAll("ñ", "%C3%B1")
      .replaceAll("ò", "%C3%B2")
      .replaceAll("ó", "%C3%B3")
      .replaceAll("ô", "%C3%B4")
      .replaceAll("õ", "%C3%B5")
      .replaceAll("ö", "%C3%B6")
      .replaceAll("÷", "%C3%B7")
      .replaceAll("ø", "%C3%B8")
      .replaceAll("ù", "%C3%B9")
      .replaceAll("ú", "%C3%BA")
      .replaceAll("û", "%C3%BB")
      .replaceAll("ü", "%C3%BC")
      .replaceAll("ý", "%C3%BD")
      .replaceAll("þ", "%C3%BE")
      .replaceAll("ÿ", "%C3%BF");

    return gen;
  }

  function genLink(name, email, subject, message) {
    var link =
      "https://docs.google.com/forms/d/e/1FAIpQLSeJfpSrGuskr7TRRpqjJZhvTV_XOQxIMLurwpSO71ejFwCbPw/formResponse?usp=pp_url&entry.1790382040=" +
      genEntry(name) +
      "&entry.1803059108=" +
      genEntry(email) +
      "&entry.992996464=" +
      genEntry(subject) +
      "&entry.1805953836=" +
      genEntry(message);

    return link;
  }

  function send(link) {
    const form = document.querySelector(".form");

    const sendElement =
      '<iframe class="form__temp" src="' +
      link +
      '" style="display:none;"></iframe>';

    form.insertAdjacentHTML("afterend", sendElement);

    setTimeout(function deleting() {
      const deleting = document.querySelector(".form__temp");
      deleting.remove();
    }, 2500);

    clearEntries();
    enableValidation();
  }

  function clearEntries() {
    const name = document.querySelector("#name-input");
    const email = document.querySelector("#email-input");
    const subject = document.querySelector("#subject-input");
    const message = document.querySelector("#message-input");

    name.value = "";
    email.value = "";
    subject.value = "";
    message.value = "";
  }

  function getEntries() {
    const name = document.querySelector("#name-input").value;
    const email = document.querySelector("#email-input").value;
    const subject = document.querySelector("#subject-input").value;
    const message = document.querySelector("#message-input").value;

    let link = genLink(name, email, subject, message);
    send(link);
  }
};
