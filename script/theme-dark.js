class Theme {
  constructor(itemSelectors) {
    this.pageSelector = itemSelectors.page;
    this.menuItem = itemSelectors.menuItem;
    this.sectionTitleItem = itemSelectors.sectionTitleItem;
    this.workItem = itemSelectors.workItem;
    this.timelineItem = itemSelectors.timelineItem;
    this.educationItem = itemSelectors.educationItem;
    this.skillsItem = itemSelectors.skillsItem;
    this.cardItem = itemSelectors.cardItem;
    this.coursesItem = itemSelectors.coursesItem;
    this.slideshowItem = itemSelectors.slideshowItem;
    this.themeButton = itemSelectors.themeButton;
    this.darkClass = `${this.itenSelector}_theme-dark`;
  }

  _getItens() {
    return document.querySelector(`.${this.itenSelector}`);
  }

  _buttonAddEvent() {
    const currIten = _getIten();
    currIten.addEventListener("click", handleTheme);
  }

  handleTheme() {
    const currentIten = _getIten();
    currentIten.classList.toggle(this.darkClass);
  }
}

const darkTheme = {
  page: "page",
  menuItem: "menu",
  sectionTitleItem: "section-title",
  workItem: "work-experience",
  timelineItem: "timeline__item",
  educationItem: "education",
  skillsItem: "main-skills",
  cardItem: "card",
  coursesItem: "courses",
  slideshowItem: "slideshow",
  themeButton: document.querySelector("#theme"),
};

function generateItens(itensList) {
  itensList.forEach((element) => {});
}
