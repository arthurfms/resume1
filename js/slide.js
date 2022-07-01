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
  }
];

const slideSection = document.querySelector(".slide");
const slideTemplate = document.querySelector("#slide").content;
const skillTemplate = document.querySelector("#skill").content;

function generateSlide(title, subtitle, description, skills) {
  const slide = slideTemplate.querySelector(".slide").cloneNode(true);
  const skillSection = slide.querySelector(".slide__skills");

  slide.querySelector(".slide__title").textContent = title;
  slide.querySelector(".slide__subtitle").textContent = subtitle;
  slide.querySelector(".slide__description").textContent = description;

  skills.forEach(function (item) {
    const skill = skillTemplate.querySelector(".slide__skill").cloneNode(true);
    skill.querySelector("p").textContent = item;
    skillSection.append(skill);
  });

  return slide;
}

function createSlide (slide) {
  
  console.log(generateSlide(slide.title, slide.subtitle, slide.description, slide.skills));
}

createSlide(slides[0]);

