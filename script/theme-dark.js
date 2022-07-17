class Itens {
  constructor(itenSelector) {
    this.itenSelector = itenSelector;
    this.darkClass = `${this.itenSelector}_theme-dark`;
  }

  _getIten() {
    return document.querySelector(`.${this.itenSelector}`);
  }

  _itenAddEvent() {
    const currIten = _getIten();
    currIten.addEventListener("click", handleTheme);
  }

  handleTheme() {
    const currentIten = _getIten();
    currentIten.classList.toggle(this.darkClass);
  }
}

const pageItem = new Itens("page");
const menuItem = new Itens("menu");
const sectionTitleItem = new Itens("section-title");
const workItem = new Itens("work-experience");
const timelineItem = new Itens("timeline__item");
const educationItem = new Itens("education");
const skillsItem = new Itens("main-skills");
const cardItem = new Itens("card");
const coursesItem = new Itens("courses");
const slideshowItem = new Itens("slideshow");
const themeButton = document.querySelector("#theme");

const themeItens = [
  pageItem,
  menuItem,
  sectionTitleItem,
  workItem,
  timelineItem,
  educationItem,
  skillsItem,
  cardItem,
  coursesItem,
  slideshowItem,
  themeButton,
];

function generateItens(itensList) {
  itensList.forEach((element) => {});
}
