class Theme {
  constructor(themeObject) {
    this._themeSelectors = themeObject.themeSelectors;
    this._themeButton = themeObject.themeButton;
  }

  setEventListener() {
    document.querySelector(`#${this._themeButton}`).addEventListener("click", () => {
      if (!this._isDark) {
        this._addDarkTheme();
        this._isDark = true;
      } else {
        this._removeDarkTheme();
        this._isDark = false;
      }

    });
  }
 
  _addDarkTheme() {
    
    this._themeSelectors.forEach(function (item) {
      document.querySelector(`.${item}`).classList.add(`${item}_theme-dark`);
    });
    this._setLightIcon();
  }

  _removeDarkTheme() {
    
    this._themeSelectors.forEach(function (item) {
      document.querySelector(`.${item}`).classList.remove(`${item}_theme-dark`);
    });
    this._setDarkIcon();
  }

  _setLightIcon() {
    const sunButton = document.querySelector("#theme");
    sunButton.innerHTML = "";
    sunButton.innerHTML = `<svg class="theme__image" xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 24 24">
    <path d="M 12 0 C 11.4 0 11 0.4 11 1 L 11 2 C 11 2.6 11.4 3 12 3 C 12.6 3 13 2.6 13 2 L 13 1 C 13 0.4 12.6 0 12 0 z M 4.1992188 3.1992188 C 3.9492188 3.1992187 3.7 3.3 3.5 3.5 C 3.1 3.9 3.1 4.5003906 3.5 4.9003906 L 4.1992188 5.5996094 C 4.5992187 5.9996094 5.1996094 5.9996094 5.5996094 5.5996094 C 5.9996094 5.1996094 5.9996094 4.5992188 5.5996094 4.1992188 L 4.9003906 3.5 C 4.7003906 3.3 4.4492188 3.1992188 4.1992188 3.1992188 z M 19.800781 3.1992188 C 19.550781 3.1992188 19.299609 3.3 19.099609 3.5 L 18.400391 4.1992188 C 18.000391 4.5992187 18.000391 5.1996094 18.400391 5.5996094 C 18.800391 5.9996094 19.400781 5.9996094 19.800781 5.5996094 L 20.5 4.9003906 C 20.9 4.5003906 20.9 3.9 20.5 3.5 C 20.3 3.3 20.050781 3.1992188 19.800781 3.1992188 z M 12 5 A 7 7 0 0 0 5 12 A 7 7 0 0 0 12 19 A 7 7 0 0 0 19 12 A 7 7 0 0 0 12 5 z M 1 11 C 0.4 11 0 11.4 0 12 C 0 12.6 0.4 13 1 13 L 2 13 C 2.6 13 3 12.6 3 12 C 3 11.4 2.6 11 2 11 L 1 11 z M 22 11 C 21.4 11 21 11.4 21 12 C 21 12.6 21.4 13 22 13 L 23 13 C 23.6 13 24 12.6 24 12 C 24 11.4 23.6 11 23 11 L 22 11 z M 4.9003906 18.099609 C 4.6503906 18.099609 4.3992188 18.200391 4.1992188 18.400391 L 3.5 19.099609 C 3.1 19.499609 3.1 20.1 3.5 20.5 C 3.9 20.9 4.5003906 20.9 4.9003906 20.5 L 5.5996094 19.800781 C 5.9996094 19.400781 5.9996094 18.800391 5.5996094 18.400391 C 5.3996094 18.200391 5.1503906 18.099609 4.9003906 18.099609 z M 19.099609 18.099609 C 18.849609 18.099609 18.600391 18.200391 18.400391 18.400391 C 18.000391 18.800391 18.000391 19.400781 18.400391 19.800781 L 19.099609 20.5 C 19.499609 20.9 20.1 20.9 20.5 20.5 C 20.9 20.1 20.9 19.499609 20.5 19.099609 L 19.800781 18.400391 C 19.600781 18.200391 19.349609 18.099609 19.099609 18.099609 z M 12 21 C 11.4 21 11 21.4 11 22 L 11 23 C 11 23.6 11.4 24 12 24 C 12.6 24 13 23.6 13 23 L 13 22 C 13 21.4 12.6 21 12 21 z"/>
    </svg>`;
  }

  _setDarkIcon() {
    const moonButton = document.querySelector(`#theme`);
    moonButton.innerHTML = "";
    moonButton.innerHTML = `<svg class="theme__image" version="1.1" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px"
    viewBox="0 0 25 25">
    <path d="M22.39,18.49c-6.08,0-11-4.92-11-11c0-2.21,0.66-4.26,1.78-5.99C7.2,1.62,2.39,6.49,2.39,12.49
    c0,6.08,4.92,11,11,11c2.66,0,5.1-0.94,7-2.51c0.86-0.71,1.61-1.56,2.22-2.5C22.54,18.49,22.46,18.49,22.39,18.49z"/>
    </svg>`;
  }

  reseteTheme() {
    this._isDark ? this._addDarkTheme() : this._removeDarkTheme();
  }

}

const darkTheme = new Theme ({
  themeSelectors: ["page"],
  themeButton: "theme",
});

function definingTheme() {
darkTheme.setEventListener();
}

function reseteThemeLg() {
  darkTheme.reseteTheme();
}

export { definingTheme, reseteThemeLg };

