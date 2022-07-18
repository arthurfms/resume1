class Theme {
  constructor(themeObject) {
    this._themeSelectors = themeObject.themeSelectors;
    this._themeButton = themeObject.themeButton;
    this._themeModifier = themeObject.themeModifier;
  }

  setEventListener() {
    document.querySelector("#theme").addEventListener("click", () => {

      if (!this._isDark) {
        this._addDarkTheme();
      } else {
        this._removeDarkTheme();
      }
      this._isDark = !this._isDark;

    });
  }
 
  _addDarkTheme() {
    
    this._themeSelectors.forEach(function (item) {
      document.querySelector(`.${item}`).classList.add(`${item}_theme-dark`);
    });
  }

  _removeDarkTheme() {
    
    this._themeSelectors.forEach(function (item) {
      document.querySelector(`.${item}`).classList.remove(`${item}_theme-dark`);
    });
  }

  resteTheme() {
    this._removeDarkTheme();

  }

}

const darkTheme = new Theme ({
  themeSelectors: ["page", "menu", "section-title", "work-experience", "timeline__item", "education", "main-skills", "card", "courses", "slideshow"],
  themeButton: "theme",
  themeModifier: "_theme-dark"
});

function definingTheme() {
darkTheme.setEventListener();
}

function reseteThemeLg() {
  darkTheme.reseteTheme();
}

export { definingTheme, reseteThemeLg };

