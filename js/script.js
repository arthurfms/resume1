window.onload = function () {
  //Scroll Handler
  const skills = document.querySelector(".main-skills");
  toggleMenu();
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


    //FORM

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
      } else {
        buttonElement.classList.add("form__submit_active");
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
    
};
