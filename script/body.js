const languages = {
  en: `<nav class="menu">
  <div class="menu__button">
    <span class="menu__line"></span>
    <span class="menu__line"></span>
    <span class="menu__line"></span>
  </div>
  <div class="menu__close-button"></div>
  <div class="menu__content">
    <p class="menu__item" id="menu__about"><a href="#about">About Me</a></p>
    <p class="menu__item" id="menu__work">
      <a href="#work-experience">Work Experience</a>
    </p>
    <p class="menu__item" id="menu__education">
      <a href="#education">Education</a>
    </p>
    <p class="menu__item" id="menu__skills">
      <a href="#main-skills">Skills</a>
    </p>
    <p class="menu__item" id="menu__portfolio">
      <a href="#portfolio">Portfolio</a>
    </p>
    <p class="menu__item" id="menu__courses">
      <a href="#courses">Courses</a>
    </p>
    <p class="menu__item" id="menu__contact">
      <a href="#contact-section">Contact</a>
    </p>
  </div>
  <ul class="menu__buttons">
    <li class="button__item" id="en-US">EN</li>
    <li class="button__item" id="pt-BR">PT</li>
    <li class="button__item" id="es-AR">ES</li>
    <li class="button__item" id="theme">
    </li>
  </ul>
  </nav>
  <header class="header">
  <div class="header__container">
    <img
      class="header__image"
      src="./images/profile__image.jpg"
      alt="Profile image"
    />
    <div class="header__content">
      <div class="header__title">
        <h1></h1>
        <div class="typing"></div>
      </div>
      <ul class="list">
        <li class="list__item">
          <p>Nationality:</p>
          <span>Country</span>
        </li>
        <li class="list__item">
          <p>Age:</p>
          <span>29</span>
        </li>
        <li class="list__item">
          <p>Phone:</p>
          <span>
            <a
              href="#"
              target="_blank"
              >+00 9 999 999 999</a
            >
          </span>
        </li>
        <li class="list__item">
          <p>Email:</p>
          <span>
            <a href="mailto:" target="_blank"
              >johndoe@notarealemail.com</a
            >
          </span>
        </li>
        <li class="list__item">
          <div class="social-icons">
            <a
              href="#"
              target="_blank"
            >
              <img src="./images/linkedin_w.svg" alt="LinkedIn icon" />
            </a>
            <a href="#" target="_blank">
              <img src="./images/github_w.svg" alt="GitHub icon" />
            </a>
          </div>
        </li>
      </ul>
    </div>
  </div>
  </header>
  <main class="main-content">
  <section class="about" id="about">
    <div class="section-title">
      <h2>Hi</h2>
      <div class="typing"></div>
    </div>
    <p class="about__paragraph">
      Sed nec iaculis sapien. Sed egestas suscipit maximus. Suspendisse et placerat quam. Praesent in turpis eros. Praesent at lorem nisi. Praesent aliquet, sapien id semper pretium, justo ante vehicula tellus, in aliquam felis nisl eget nunc. Mauris tellus leo, pretium sit amet lectus nec, ultrices ultrices turpis.
    </p>
  </section>
  <section class="work-experience" id="work-experience">
    <div class="timeline">
      <div class="section-title">
        <h2>Work Experience</h2>
        <div class="typing"></div>
      </div>
      <div class="timeline__itens">
        <div class="timeline__item">
          <span class="timeline__item-dot"></span>
          <h3 class="timeline__item-title">
            Job Position<span> - Company</span>
          </h3>
          <h4 class="timeline__item-subtitle">
            Country, city. <span>August, 2022 - Current</span>
          </h4>
          <p class="timeline__item-paragraph">
            Aliquam sit amet tempus urna, ac porta mauris. Nam a lacus est. Praesent sed augue a mi vehicula feugiat. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec suscipit lorem varius enim hendrerit posuere vitae id dui. Mauris eget mauris vitae tellus pretium sollicitudin consectetur nec diam. Nullam egestas lectus nec velit sagittis tempor.
          </p>
        </div>
        <div class="timeline__item">
          <span class="timeline__item-dot"></span>
          <h3 class="timeline__item-title">
            Job Position<span> - Company</span>
          </h3>
          <h4 class="timeline__item-subtitle">
            Country, city. <span>May, 2021 - August, 2022</span>
          </h4>
          <p class="timeline__item-paragraph">
            Maecenas sodales volutpat turpis. Suspendisse lobortis at nunc vel facilisis. Nam sed mattis lacus. Etiam consequat quis mauris a ullamcorper. Proin non magna sed enim porttitor semper. Mauris vitae nisl a sem placerat molestie. Morbi ipsum mi, venenatis nec aliquet non, porta ut lacus. Nulla at elit facilisis, congue erat id, auctor quam. Praesent convallis sem at quam maximus semper. Sed feugiat quam a libero scelerisque ultrices. Etiam luctus ligula sit amet porta fermentum.
          </p>
        </div>
        <div class="timeline__item">
          <span class="timeline__item-dot"></span>
          <h3 class="timeline__item-title">
            Job Position<span> - Company</span>
          </h3>
          <h4 class="timeline__item-subtitle">
            Country, city. <span>March, 2021 - May, 2021</span>
          </h4>
          <p class="timeline__item-paragraph">
            Quisque pellentesque rutrum elit vel vestibulum. Aenean viverra eros at arcu congue, non efficitur nisl consectetur. Curabitur ut eleifend lacus. Nunc ligula felis, suscipit et bibendum at, volutpat eget lectus. Cras non urna quis nisi ultrices varius a vel purus. Nunc in congue est. Donec porttitor dapibus sem non condimentum. In congue fringilla ante eget pellentesque.
          </p>
        </div>
        <div class="timeline__item">
          <span class="timeline__item-dot"></span>
          <h3 class="timeline__item-title">
            Job Position<span> - Company</span>
          </h3>
          <h4 class="timeline__item-subtitle">
            Country, city. <span>September, 2019 - March, 2021</span>
          </h4>
          <p class="timeline__item-paragraph">
            Cras consequat purus eget augue euismod dictum. Ut odio ligula, dignissim vel molestie id, auctor nec felis. Nullam elementum sapien sed rutrum suscipit. Donec congue libero ipsum, eget lacinia diam bibendum sed. Nulla fringilla dapibus dapibus. Aenean tempus, velit a sollicitudin hendrerit, tortor magna cursus metus, eu egestas lectus dolor sit amet augue. Donec euismod euismod molestie. Sed sed massa lacus. Aliquam pulvinar, metus vitae elementum volutpat, magna ex feugiat diam, vitae laoreet diam purus non dolor. In vitae eros dolor.
          </p>
          <p class="timeline__item-paragraph">
            Quisque justo purus, pretium eu mauris sed, pellentesque posuere nisl. Ut eros eros, interdum eget nibh vitae, dictum sollicitudin mi. Donec ac auctor quam.
          </p>
        </div>
        <div class="timeline__item">
          <span class="timeline__item-dot"></span>
          <h3 class="timeline__item-title">
            Job Position<span> - Company</span>
          </h3>
          <h4 class="timeline__item-subtitle">
            Country, city. <span>April, 2019 - September, 2019</span>
          </h4>
          <p class="timeline__item-paragraph">
            Quisque pellentesque rutrum elit vel vestibulum. Aenean viverra eros at arcu congue, non efficitur nisl consectetur. Curabitur ut eleifend lacus. Nunc ligula felis, suscipit et bibendum at, volutpat eget lectus. Cras non urna quis nisi ultrices varius a vel purus. Nunc in congue est. Donec porttitor dapibus sem non condimentum. In congue fringilla ante eget pellentesque. Curabitur condimentum efficitur lorem, in viverra ante facilisis a.
          </p>
        </div>
        <div class="timeline__item">
          <span class="timeline__item-dot"></span>
          <h3 class="timeline__item-title">
            Job Position<span> - Company</span>
          </h3>
          <h4 class="timeline__item-subtitle">
            Country, city. <span>September, 2018 - April, 2019</span>
          </h4>
          <p class="timeline__item-paragraph">
            Donec nec varius massa, et placerat urna. Aliquam aliquet quis nulla a tempor. Curabitur ex ante, accumsan non dolor sed, porta faucibus justo. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae;
          </p>
        </div>
      </div>
    </div>
  </section>
  <section class="education" id="education">
    <div class="timeline">
      <div class="section-title">
        <h2>Education</h2>
        <div class="typing"></div>
      </div>
      <div class="timeline__itens">
        <div class="timeline__item">
          <span class="timeline__item-dot"></span>
          <h3 class="timeline__item-title">
            Course Name
          </h3>
          <h4 class="timeline__item-subtitle">
            University. <span>January, 2021 - August, 2022</span>
          </h4>
          <p class="timeline__item-paragraph">
            Donec pellentesque rhoncus eros. Morbi porta purus odio, quis bibendum ante euismod non. Quisque auctor blandit elementum.
          </p>
        </div>
        <div class="timeline__item">
          <span class="timeline__item-dot"></span>
          <h3 class="timeline__item-title">Course Name</h3>
          <h4 class="timeline__item-subtitle">
            University. <span>January, 2013 - December, 2017</span>
          </h4>
          <p class="timeline__item-paragraph">
            Duis rhoncus ultricies hendrerit. Maecenas fringilla dui nec leo consectetur, a commodo felis gravida. Nulla facilisi. Mauris et odio ut mi pretium hendrerit. Nam id pellentesque nunc.
          </p>
        </div>
      </div>
    </div>
  </section>
  <section class="main-skills" id="main-skills">
    <div class="section-title">
      <h2>Main Skills</h2>
      <div class="typing"></div>
    </div>
    <div class="skills">
      <div class="skill">
        <h3 class="skill__title">Skill 1</h3>
        <p class="skill__percentage">100%</p>
        <div class="skill-bar">
          <span class="skill-bar__progress"></span>
        </div>
      </div>
      <div class="skill">
        <h3 class="skill__title">Skill 2</h3>
        <p class="skill__percentage">100%</p>
        <div class="skill-bar">
          <span class="skill-bar__progress"></span>
        </div>
      </div>
      <div class="skill">
        <h3 class="skill__title">Skill 3</h3>
        <p class="skill__percentage">100%</p>
        <div class="skill-bar">
          <span class="skill-bar__progress"></span>
        </div>
      </div>
      <div class="skill">
        <h3 class="skill__title">Skill 4</h3>
        <p class="skill__percentage">50%</p>
        <div class="skill-bar">
          <span class="skill-bar__progress"></span>
        </div>
      </div>
      <div class="skill">
        <h3 class="skill__title">Skill 5</h3>
        <p class="skill__percentage">75%</p>
        <div class="skill-bar">
          <span class="skill-bar__progress"></span>
        </div>
      </div>
      <div class="skill">
        <h3 class="skill__title">Skill 6</h3>
        <p class="skill__percentage">50%</p>
        <div class="skill-bar">
          <span class="skill-bar__progress"></span>
        </div>
      </div>
      <div class="skill">
        <h3 class="skill__title">Skill 7</h3>
        <p class="skill__percentage">100%</p>
        <div class="skill-bar">
          <span class="skill-bar__progress"></span>
        </div>
      </div>
      <div class="skill">
        <h3 class="skill__title">Skill 8</h3>
        <p class="skill__percentage">75%</p>
        <div class="skill-bar">
          <span class="skill-bar__progress"></span>
        </div>
      </div>
      <div class="skill">
        <h3 class="skill__title">Skill 9</h3>
        <p class="skill__percentage">90%</p>
        <div class="skill-bar">
          <span class="skill-bar__progress"></span>
        </div>
      </div>
      <div class="skill">
        <h3 class="skill__title">Skill 10</h3>
        <p class="skill__percentage">100%</p>
        <div class="skill-bar">
          <span class="skill-bar__progress"></span>
        </div>
      </div>
      <div class="skill">
        <h3 class="skill__title">Skill 11</h3>
        <p class="skill__percentage">100%</p>
        <div class="skill-bar">
          <span class="skill-bar__progress"></span>
        </div>
      </div>
      <div class="skill">
        <h3 class="skill__title">Skill 12</h3>
        <p class="skill__percentage">100%</p>
        <div class="skill-bar">
          <span class="skill-bar__progress"></span>
        </div>
      </div>
    </div>
  </section>
  <section class="portfolio" id="portfolio">
    <div class="section-title">
      <h2>Portfolio</h2>
      <div class="typing"></div>
    </div>
    <div class="cards">
      <div class="card">
        <img class="card__image" src="./images/Around-the-U.S.jpg" />
        <div class="card__content">
          <a href="#" target="_blank"
            ><h3 class="card__title">Project 1</h3></a
          >
          <p class="card__description">
            Pellentesque vel consectetur felis, ac faucibus velit. Nullam facilisis lorem vitae elit euismod euismod. Donec in arcu orci. Nulla dictum, tellus sodales hendrerit mattis
          </p>
          <p class="card__skills-title">Used Stack:</p>
          <div class="card__skills">
            <div class="card__skill">
              <p>Stack 1</p>
            </div>
            <div class="card__skill">
              <p>Stack 2</p>
            </div>
            <div class="card__skill">
              <p>Stack 3</p>
            </div>
            <div class="card__skill">
              <p>Stack 4</p>
            </div>
          </div>
        </div>
      </div>
      <div class="card">
        <img class="card__image" src="./images/De Pátria para Pátria.jpg" />
        <div class="card__content">
          <a href="#" target="_blank"
            ><h3 class="card__title">Project 2</h3></a
          >
          <p class="card__description">
            Vestibulum vehicula tincidunt velit nec accumsan. Donec massa ante, dignissim at accumsan vitae, placerat sed purus.
          </p>
          <p class="card__skills-title">Used Stack:</p>
          <div class="card__skills">
            <div class="card__skill">
              <p>Stack 1</p>
            </div>
            <div class="card__skill">
              <p>Stack 2</p>
            </div>
            <div class="card__skill">
              <p>Stack 3</p>
            </div>
          </div>
        </div>
      </div>
      <div class="card">
        <img
          class="card__image"
          src="./images/Aprendendo a Aprender2.jpg"
        />
        <div class="card__content">
          <a href="#" target="_blank"
            ><h3 class="card__title">Project 3</h3></a
          >
          <p class="card__description">
            Quisque sem eros, pretium vitae ullamcorper ut, vestibulum sed mauris. Etiam tempus auctor elementum. Fusce dui tellus, egestas sed libero et, porttitor pharetra arcu.
          </p>
          <p class="card__skills-title">Used Stack:</p>
          <div class="card__skills">
            <div class="card__skill">
              <p>Stack 1</p>
            </div>
            <div class="card__skill">
              <p>Stack 2</p>
            </div>
            <div class="card__skill">
              <p>Stack 3</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  <section class="courses" id="courses">
    <h2 class="courses__title">Courses</h2>
    <div class="slideshow">
      <div class="slideshow__button slideshow__button_backwards"></div>
      <div class="slideshow__button slideshow__button_forwards"></div>
      <div class="slide">
        <h3 class="slide__title">Course Name</h3>
        <h4 class="slide__subtitle">
          School Name. FEBRUARY, 2022 - JANUARY, 2023
        </h4>
        <span class="slide__line"></span>
        <p class="slide__description">
          Nam dignissim lacus lectus, a consectetur orci auctor quis. Donec tristique felis vitae urna dignissim, a interdum justo dignissim. Morbi lacinia condimentum neque, vitae suscipit felis gravida accumsan.
        </p>
        <div class="slide__skills">
          <div class="slide__skill">
            <p>Skill 1</p>
          </div>
          <div class="slide__skill">
            <p>Skill 2</p>
          </div>
          <div class="slide__skill">
            <p>Skill 3</p>
          </div>
          <div class="slide__skill">
            <p>Skill 4</p>
          </div>
        </div>
      </div>
    </div>
  </section>
  <section class="contact-section" id="contact-section">
    <div class="contact">
      <div class="section-title">
        <h2>Contact</h2>
        <div class="typing"></div>
      </div>
      <div class="contact-information">
        <ul class="list">
          <li class="list__item">
            <p>Phone:</p>
            <span>
              <a
                href="#"
                target="_blank"
                >+00 9 999 999 999</a
              >
            </span>
          </li>
          <li class="list__item">
            <p>Email:</p>
            <span>
              <a href="mailto:" target="_blank"
                >johndoe@notarealemail.com</a
              >
            </span>
          </li>
          <li class="list__item">
            <div class="social-icons">
              <a
                href="https://www.linkedin.com"
                target="_blank"
              >
                <img src="./images/linkedin_w.svg" alt="LinkedIn icon" />
              </a>
              <a href="https://github.com" target="_blank">
                <img src="./images/github_w.svg" alt="GitHub icon" />
              </a>
            </div>
          </li>
        </ul>
        <form class="form">
          <h3 class="form__title">Send me a message</h3>
          <div class="form__field">
            <input
              class="form__input"
              id="name-input"
              type="text"
              required
              minlength="2"
              maxlength="100"
              placeholder="Name"
            />
            <p class="form__input-error name-input-error"></p>
          </div>
          <div class="form__field">
            <input
              class="form__input"
              id="email-input"
              type="email"
              required
              maxlength="200"
              placeholder="Email"
            />
            <p class="form__input-error email-input-error"></p>
          </div>
          <div class="form__field">
            <input
              class="form__input"
              id="subject-input"
              type="text"
              required
              minlength="4"
              maxlength="150"
              placeholder="Subject"
            />
            <p class="form__input-error subject-input-error"></p>
          </div>
          <div class="form__field">
            <textarea
              class="form__input"
              id="message-input"
              type="text"
              required
              maxlength="500"
              placeholder="Message"
            ></textarea>
            <p class="form__input-error message-input-error"></p>
          </div>
          <button class="form__submit" type="submit">Send Message</button>
        </form>
      </div>
    </div>
  </section>
  <section class="footer">
      <p class="footer__copyright">&copy; Arthur Fernandes Menezes Santos - 2025</p>
  </section>
  <div class="share">
    <div class="share__icon">
      <img src="./images/download.svg" class="share__icon-image" />
    </div>
    <p class="share__text">Get a PDF</p>
  </div>
  <template id="slide">
    <div class="slide">
      <h3 class="slide__title"></h3>
      <h4 class="slide__subtitle"></h4>
      <span class="slide__line"></span>
      <p class="slide__description"></p>
      <div class="slide__skills"></div>
    </div>
  </template>
  <template id="skill">
    <div class="slide__skill">
      <p></p>
    </div>
  </template>
  </main>`,
  pt: `<nav class="menu">
  <div class="menu__button">
    <span class="menu__line"></span>
    <span class="menu__line"></span>
    <span class="menu__line"></span>
  </div>
  <div class="menu__close-button"></div>
  <div class="menu__content">
    <p class="menu__item" id="menu__about"><a href="#about">Sobre Mim</a></p>
    <p class="menu__item" id="menu__work">
      <a href="#work-experience">Experiência</a>
    </p>
    <p class="menu__item" id="menu__education">
      <a href="#education">Educação</a>
    </p>
    <p class="menu__item" id="menu__skills">
      <a href="#main-skills">Habilidades</a>
    </p>
    <p class="menu__item" id="menu__portfolio">
      <a href="#portfolio">Portifólio</a>
    </p>
    <p class="menu__item" id="menu__courses">
      <a href="#courses">Cursos</a>
    </p>
    <p class="menu__item" id="menu__contact">
      <a href="#contact-section">Contato</a>
    </p>
  </div>
  <ul class="menu__buttons">
    <li class="button__item" id="en-US">EN</li>
    <li class="button__item" id="pt-BR">PT</li>
    <li class="button__item" id="es-AR">ES</li>
    <li class="button__item" id="theme">
    </li>
  </ul>
  </nav>
  <header class="header">
  <div class="header__container">
    <img
      class="header__image"
      src="./images/profile__image.jpg"
      alt="Foto de perfil"
    />
    <div class="header__content">
      <div class="header__title">
        <h1></h1>
        <div class="typing"></div>
      </div>
      <ul class="list">
        <li class="list__item">
          <p>Nacionalidade:</p>
          <span>País</span>
        </li>
        <li class="list__item">
          <p>Idade:</p>
          <span>29</span>
        </li>
        <li class="list__item">
          <p>Telefone:</p>
          <span>
            <a
              href="#"
              target="_blank"
              >+00 9 999 999 999</a
            >
          </span>
        </li>
        <li class="list__item">
          <p>E-mail:</p>
          <span>
            <a href="mailto:" target="_blank"
              >johndoe@notarealemail.com</a
            >
          </span>
        </li>
        <li class="list__item">
          <div class="social-icons">
            <a
              href="https://www.linkedin.com"
              target="_blank"
            >
              <img src="./images/linkedin_w.svg" alt="Icone do LinkedIn" />
            </a>
            <a href="https://github.com" target="_blank">
              <img src="./images/github_w.svg" alt="Icone do GitHub" />
            </a>
          </div>
        </li>
      </ul>
    </div>
  </div>
  </header>
  <main class="main-content">
  <section class="about" id="about">
    <div class="section-title">
      <h2>Olá</h2>
      <div class="typing"></div>
    </div>
    <p class="about__paragraph">
      Vivamus eu neque in nunc vestibulum dapibus in ullamcorper massa. Ut vestibulum posuere congue. Praesent non mi vitae nisl convallis cursus sagittis sit amet mauris. Vivamus commodo augue et purus posuere, a ullamcorper risus efficitur.
    </p>
  </section>
  <section class="work-experience" id="work-experience">
    <div class="timeline">
      <div class="section-title">
        <h2>Experiência</h2>
        <div class="typing"></div>
      </div>
      <div class="timeline__itens">
        <div class="timeline__item">
          <span class="timeline__item-dot"></span>
          <h3 class="timeline__item-title">
            Posição<span> - Empresa</span>
          </h3>
          <h4 class="timeline__item-subtitle">
            País, cidade. <span>Agosto, 2022 - Atualmente</span>
          </h4>
          <p class="timeline__item-paragraph">
            Aliquam sit amet tempus urna, ac porta mauris. Nam a lacus est. Praesent sed augue a mi vehicula feugiat. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec suscipit lorem varius enim hendrerit posuere vitae id dui. Mauris eget mauris vitae tellus pretium sollicitudin consectetur nec diam. Nullam egestas lectus nec velit sagittis tempor.
          </p>
        </div>
        <div class="timeline__item">
          <span class="timeline__item-dot"></span>
          <h3 class="timeline__item-title">
            Posição<span> - Empresa</span>
          </h3>
          <h4 class="timeline__item-subtitle">
            País, cidade. <span>Maio, 2021 - Agosto, 2022</span>
          </h4>
          <p class="timeline__item-paragraph">
            Maecenas sodales volutpat turpis. Suspendisse lobortis at nunc vel facilisis. Nam sed mattis lacus. Etiam consequat quis mauris a ullamcorper. Proin non magna sed enim porttitor semper. Mauris vitae nisl a sem placerat molestie. Morbi ipsum mi, venenatis nec aliquet non, porta ut lacus. Nulla at elit facilisis, congue erat id, auctor quam. Praesent convallis sem at quam maximus semper. Sed feugiat quam a libero scelerisque ultrices. Etiam luctus ligula sit amet porta fermentum.
          </p>
        </div>
        <div class="timeline__item">
          <span class="timeline__item-dot"></span>
          <h3 class="timeline__item-title">
            Posição<span> - Empresa</span>
          </h3>
          <h4 class="timeline__item-subtitle">
            País, cidade. <span>Março, 2021 - Maio, 2021</span>
          </h4>
          <p class="timeline__item-paragraph">
            Quisque pellentesque rutrum elit vel vestibulum. Aenean viverra eros at arcu congue, non efficitur nisl consectetur. Curabitur ut eleifend lacus. Nunc ligula felis, suscipit et bibendum at, volutpat eget lectus. Cras non urna quis nisi ultrices varius a vel purus. Nunc in congue est. Donec porttitor dapibus sem non condimentum. In congue fringilla ante eget pellentesque.
          </p>
        </div>
        <div class="timeline__item">
          <span class="timeline__item-dot"></span>
          <h3 class="timeline__item-title">
            Posição<span> - Empresa</span>
          </h3>
          <h4 class="timeline__item-subtitle">
            País, cidade. <span>Setembro, 2019 - Março, 2021</span>
          </h4>
          <p class="timeline__item-paragraph">
            Cras consequat purus eget augue euismod dictum. Ut odio ligula, dignissim vel molestie id, auctor nec felis. Nullam elementum sapien sed rutrum suscipit. Donec congue libero ipsum, eget lacinia diam bibendum sed. Nulla fringilla dapibus dapibus. Aenean tempus, velit a sollicitudin hendrerit, tortor magna cursus metus, eu egestas lectus dolor sit amet augue. Donec euismod euismod molestie. Sed sed massa lacus. Aliquam pulvinar, metus vitae elementum volutpat, magna ex feugiat diam, vitae laoreet diam purus non dolor. In vitae eros dolor.
          </p>
          <p class="timeline__item-paragraph">
            Quisque justo purus, pretium eu mauris sed, pellentesque posuere nisl. Ut eros eros, interdum eget nibh vitae, dictum sollicitudin mi. Donec ac auctor quam.
          </p>
        </div>
        <div class="timeline__item">
          <span class="timeline__item-dot"></span>
          <h3 class="timeline__item-title">
            Posição<span> - Empresa</span>
          </h3>
          <h4 class="timeline__item-subtitle">
            País, cidade. <span>Abril, 2019 - Setembro, 2019</span>
          </h4>
          <p class="timeline__item-paragraph">
            Quisque pellentesque rutrum elit vel vestibulum. Aenean viverra eros at arcu congue, non efficitur nisl consectetur. Curabitur ut eleifend lacus. Nunc ligula felis, suscipit et bibendum at, volutpat eget lectus. Cras non urna quis nisi ultrices varius a vel purus. Nunc in congue est. Donec porttitor dapibus sem non condimentum. In congue fringilla ante eget pellentesque. Curabitur condimentum efficitur lorem, in viverra ante facilisis a.
          </p>
        </div>
        <div class="timeline__item">
          <span class="timeline__item-dot"></span>
          <h3 class="timeline__item-title">
            Posição<span> - Empresa</span>
          </h3>
          <h4 class="timeline__item-subtitle">
            País, cidade. <span>Setembro, 2018 - Abril, 2019</span>
          </h4>
          <p class="timeline__item-paragraph">
            Donec nec varius massa, et placerat urna. Aliquam aliquet quis nulla a tempor. Curabitur ex ante, accumsan non dolor sed, porta faucibus justo. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae;
          </p>
        </div>
      </div>
    </div>
  </section>
  <section class="education" id="education">
    <div class="timeline">
      <div class="section-title">
        <h2>Educação</h2>
        <div class="typing"></div>
      </div>
      <div class="timeline__itens">
        <div class="timeline__item">
          <span class="timeline__item-dot"></span>
          <h3 class="timeline__item-title">
            Nome do Curso
          </h3>
          <h4 class="timeline__item-subtitle">
            Universidade. <span>Janeiro, 2021 - Agosto, 2022</span>
          </h4>
          <p class="timeline__item-paragraph">
            Donec pellentesque rhoncus eros. Morbi porta purus odio, quis bibendum ante euismod non. Quisque auctor blandit elementum.
          </p>
        </div>
        <div class="timeline__item">
          <span class="timeline__item-dot"></span>
          <h3 class="timeline__item-title">Nome do Curso</h3>
          <h4 class="timeline__item-subtitle">
            Universidade. <span>Janeiro, 2013 - Dezembro, 2017</span>
          </h4>
          <p class="timeline__item-paragraph">
            Duis rhoncus ultricies hendrerit. Maecenas fringilla dui nec leo consectetur, a commodo felis gravida. Nulla facilisi. Mauris et odio ut mi pretium hendrerit. Nam id pellentesque nunc.
          </p>
        </div>
      </div>
    </div>
  </section>
  <section class="main-skills" id="main-skills">
    <div class="section-title">
      <h2>Habilidades</h2>
      <div class="typing"></div>
    </div>
    <div class="skills">
      <div class="skill">
        <h3 class="skill__title">Habilidade 1</h3>
        <p class="skill__percentage">100%</p>
        <div class="skill-bar">
          <span class="skill-bar__progress"></span>
        </div>
      </div>
      <div class="skill">
        <h3 class="skill__title">Habilidade 2</h3>
        <p class="skill__percentage">100%</p>
        <div class="skill-bar">
          <span class="skill-bar__progress"></span>
        </div>
      </div>
      <div class="skill">
        <h3 class="skill__title">Habilidade 3</h3>
        <p class="skill__percentage">100%</p>
        <div class="skill-bar">
          <span class="skill-bar__progress"></span>
        </div>
      </div>
      <div class="skill">
        <h3 class="skill__title">Habilidade 4</h3>
        <p class="skill__percentage">50%</p>
        <div class="skill-bar">
          <span class="skill-bar__progress"></span>
        </div>
      </div>
      <div class="skill">
        <h3 class="skill__title">Habilidade 5</h3>
        <p class="skill__percentage">75%</p>
        <div class="skill-bar">
          <span class="skill-bar__progress"></span>
        </div>
      </div>
      <div class="skill">
        <h3 class="skill__title">Habilidade 6</h3>
        <p class="skill__percentage">50%</p>
        <div class="skill-bar">
          <span class="skill-bar__progress"></span>
        </div>
      </div>
      <div class="skill">
        <h3 class="skill__title">Habilidade 7</h3>
        <p class="skill__percentage">100%</p>
        <div class="skill-bar">
          <span class="skill-bar__progress"></span>
        </div>
      </div>
      <div class="skill">
        <h3 class="skill__title">Habilidade 8</h3>
        <p class="skill__percentage">75%</p>
        <div class="skill-bar">
          <span class="skill-bar__progress"></span>
        </div>
      </div>
      <div class="skill">
        <h3 class="skill__title">Habilidade 9</h3>
        <p class="skill__percentage">90%</p>
        <div class="skill-bar">
          <span class="skill-bar__progress"></span>
        </div>
      </div>
      <div class="skill">
        <h3 class="skill__title">Habilidade 10</h3>
        <p class="skill__percentage">100%</p>
        <div class="skill-bar">
          <span class="skill-bar__progress"></span>
        </div>
      </div>
      <div class="skill">
        <h3 class="skill__title">Habilidade 11</h3>
        <p class="skill__percentage">100%</p>
        <div class="skill-bar">
          <span class="skill-bar__progress"></span>
        </div>
      </div>
      <div class="skill">
        <h3 class="skill__title">Habilidade 12</h3>
        <p class="skill__percentage">100%</p>
        <div class="skill-bar">
          <span class="skill-bar__progress"></span>
        </div>
      </div>
    </div>
  </section>
  <section class="portfolio" id="portfolio">
    <div class="section-title">
      <h2>Portifólio</h2>
      <div class="typing"></div>
    </div>
    <div class="cards">
      <div class="card">
        <img class="card__image" src="./images/Around-the-U.S.jpg" />
        <div class="card__content">
          <a href="#" target="_blank"
            ><h3 class="card__title">Projeto 1</h3></a
          >
          <p class="card__description">
            Pellentesque vel consectetur felis, ac faucibus velit. Nullam facilisis lorem vitae elit euismod euismod. Donec in arcu orci. Nulla dictum, tellus sodales hendrerit mattis
          </p>
          <p class="card__skills-title">Habilidades utilizadas:</p>
          <div class="card__skills">
            <div class="card__skill">
              <p>Stack 1</p>
            </div>
            <div class="card__skill">
              <p>Stack 2</p>
            </div>
            <div class="card__skill">
              <p>Stack 3</p>
            </div>
            <div class="card__skill">
              <p>Stack 4</p>
            </div>
          </div>
        </div>
      </div>
      <div class="card">
        <img class="card__image" src="./images/De Pátria para Pátria.jpg" />
        <div class="card__content">
          <a href="#" target="_blank"
            ><h3 class="card__title">Projeto 2</h3></a
          >
          <p class="card__description">
            Vestibulum vehicula tincidunt velit nec accumsan. Donec massa ante, dignissim at accumsan vitae, placerat sed purus.
          </p>
          <p class="card__skills-title">Habilidades utilizadas:</p>
          <div class="card__skills">
            <div class="card__skill">
              <p>Stack 1</p>
            </div>
            <div class="card__skill">
              <p>Stack 2</p>
            </div>
            <div class="card__skill">
              <p>Stack 3</p>
            </div>
          </div>
        </div>
      </div>
      <div class="card">
        <img
          class="card__image"
          src="./images/Aprendendo a Aprender2.jpg"
        />
        <div class="card__content">
          <a href="#" target="_blank"
            ><h3 class="card__title">Projeto 3</h3></a
          >
          <p class="card__description">
            Quisque sem eros, pretium vitae ullamcorper ut, vestibulum sed mauris. Etiam tempus auctor elementum. Fusce dui tellus, egestas sed libero et, porttitor pharetra arcu.
          </p>
          <p class="card__skills-title">Habilidades utilizadas:</p>
          <div class="card__skills">
            <div class="card__skill">
              <p>Stack 1</p>
            </div>
            <div class="card__skill">
              <p>Stack 2</p>
            </div>
            <div class="card__skill">
              <p>Stack 3</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  <section class="courses" id="courses">
    <h2 class="courses__title">Cursos</h2>
    <div class="slideshow">
      <div class="slideshow__button slideshow__button_backwards"></div>
      <div class="slideshow__button slideshow__button_forwards"></div>
      <div class="slide">
        <h3 class="slide__title">Nome do Curso</h3>
        <h4 class="slide__subtitle">
          Instituição. FEVEREIRO, 2022 - JANEIRO, 2023
        </h4>
        <span class="slide__line"></span>
        <p class="slide__description">
          Quisque sem eros, pretium vitae ullamcorper ut, vestibulum sed mauris. Etiam tempus auctor elementum. Fusce dui tellus, egestas sed libero et, porttitor pharetra arcu.
        </p>
        <div class="slide__skills">
          <div class="slide__skill">
            <p>Habilidade 1</p>
          </div>
          <div class="slide__skill">
            <p>Habilidade 2</p>
          </div>
          <div class="slide__skill">
            <p>Habilidade 3</p>
          </div>
          <div class="slide__skill">
            <p>Habilidade 4</p>
          </div>
        </div>
      </div>
    </div>
  </section>
  <section class="contact-section" id="contact-section">
    <div class="contact">
      <div class="section-title">
        <h2>Contato</h2>
        <div class="typing"></div>
      </div>
      <div class="contact-information">
        <ul class="list">
          <li class="list__item">
            <p>Phone:</p>
            <span>
              <a
                href="#"
                target="_blank"
                >+00 9 999 999 999</a
              >
            </span>
          </li>
          <li class="list__item">
            <p>E-mail:</p>
            <span>
              <a href="mailto:" target="_blank"
                >johndoe@notarealemail.com</a
              >
            </span>
          </li>
          <li class="list__item">
            <div class="social-icons">
              <a
                href="https://www.linkedin.com"
                target="_blank"
              >
                <img src="./images/linkedin_w.svg" alt="LinkedIn icon" />
              </a>
              <a href="https://github.com" target="_blank">
                <img src="./images/github_w.svg" alt="GitHub icon" />
              </a>
            </div>
          </li>
        </ul>
        <form class="form">
          <h3 class="form__title">Envie uma mensagem</h3>
          <div class="form__field">
            <input
              class="form__input"
              id="name-input"
              type="text"
              required
              minlength="2"
              maxlength="100"
              placeholder="Nome"
            />
            <p class="form__input-error name-input-error"></p>
          </div>
          <div class="form__field">
            <input
              class="form__input"
              id="email-input"
              type="email"
              required
              maxlength="200"
              placeholder="E-mail"
            />
            <p class="form__input-error email-input-error"></p>
          </div>
          <div class="form__field">
            <input
              class="form__input"
              id="subject-input"
              type="text"
              required
              minlength="4"
              maxlength="150"
              placeholder="Assunto"
            />
            <p class="form__input-error subject-input-error"></p>
          </div>
          <div class="form__field">
            <textarea
              class="form__input"
              id="message-input"
              type="text"
              required
              maxlength="500"
              placeholder="Mensagem"
            ></textarea>
            <p class="form__input-error message-input-error"></p>
          </div>
          <button class="form__submit" type="submit">Enviar Mensagem</button>
        </form>
      </div>
    </div>
  </section>
  <section class="footer">
    <p class="footer__copyright">&copy; Arthur Fernandes Menezes Santos - 2025</p>
  </section>
  <div class="share">
    <div class="share__icon">
      <img src="./images/download.svg" class="share__icon-image" />
    </div>
    <p class="share__text">Baixar PDF</p>
  </div>
  <template id="slide">
    <div class="slide">
      <h3 class="slide__title"></h3>
      <h4 class="slide__subtitle"></h4>
      <span class="slide__line"></span>
      <p class="slide__description"></p>
      <div class="slide__skills"></div>
    </div>
  </template>
  <template id="skill">
    <div class="slide__skill">
      <p></p>
    </div>
  </template>
  </main>`,
  es: `<nav class="menu">
  <div class="menu__button">
    <span class="menu__line"></span>
    <span class="menu__line"></span>
    <span class="menu__line"></span>
  </div>
  <div class="menu__close-button"></div>
  <div class="menu__content">
    <p class="menu__item" id="menu__about"><a href="#about">Sobre Mi</a></p>
    <p class="menu__item" id="menu__work">
      <a href="#work-experience">Experiencia Laboral</a>
    </p>
    <p class="menu__item" id="menu__education">
      <a href="#education">Estudios</a>
    </p>
    <p class="menu__item" id="menu__skills">
      <a href="#main-skills">Habilidades</a>
    </p>
    <p class="menu__item" id="menu__portfolio">
      <a href="#portfolio">Porfolio</a>
    </p>
    <p class="menu__item" id="menu__courses">
      <a href="#courses">Cursos</a>
    </p>
    <p class="menu__item" id="menu__contact">
      <a href="#contact-section">Contacto</a>
    </p>
  </div>
  <ul class="menu__buttons">
    <li class="button__item" id="en-US">EN</li>
    <li class="button__item" id="pt-BR">PT</li>
    <li class="button__item" id="es-AR">ES</li>
    <li class="button__item" id="theme">
    </li>
  </ul>
  </nav>
  <header class="header">
  <div class="header__container">
    <img
      class="header__image"
      src="./images/profile__image.jpg"
      alt="foto de perfil "
    />
    <div class="header__content">
      <div class="header__title">
        <h1></h1>
        <div class="typing"></div>
      </div>
      <ul class="list">
        <li class="list__item">
          <p>Nacionalidad:</p>
          <span>País</span>
        </li>
        <li class="list__item">
          <p>Edad:</p>
          <span>29</span>
        </li>
        <li class="list__item">
          <p>Teléfono:</p>
          <span>
            <a
              href="#"
              target="_blank"
              >+00 9 999 999 999</a
            >
          </span>
        </li>
        <li class="list__item">
          <p>Correo:</p>
          <span>
            <a href="mailto:" target="_blank"
              >johndoe@notarealemail.com</a
            >
          </span>
        </li>
        <li class="list__item">
          <div class="social-icons">
            <a
              href="https://www.linkedin.com"
              target="_blank"
            >
              <img src="./images/linkedin_w.svg" alt="Icono de LinkedIn" />
            </a>
            <a href="https://github.com" target="_blank">
              <img src="./images/github_w.svg" alt="Icono de GitHub" />
            </a>
          </div>
        </li>
      </ul>
    </div>
  </div>
  </header>
  <main class="main-content">
  <section class="about" id="about">
    <div class="section-title">
      <h2>Hola</h2>
      <div class="typing"></div>
    </div>
    <p class="about__paragraph">
      Vestibulum tristique finibus consequat. Duis dictum justo id sem interdum, id fringilla diam semper. Aenean magna ligula, fermentum ut maximus non, porta tincidunt nulla. Etiam tortor neque, ultrices quis scelerisque sit amet, mollis commodo turpis. Maecenas eu nisl tristique, molestie nibh euismod, auctor urna.
    </p>
  </section>
  <section class="work-experience" id="work-experience">
    <div class="timeline">
      <div class="section-title">
        <h2>Experciencia Laboral</h2>
        <div class="typing"></div>
      </div>
      <div class="timeline__itens">
        <div class="timeline__item">
          <span class="timeline__item-dot"></span>
          <h3 class="timeline__item-title">
            Posición<span> - Empresa</span>
          </h3>
          <h4 class="timeline__item-subtitle">
            País, cuidad. <span>Agosto, 2022 - Actualmente</span>
          </h4>
          <p class="timeline__item-paragraph">
            Aliquam sit amet tempus urna, ac porta mauris. Nam a lacus est. Praesent sed augue a mi vehicula feugiat. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec suscipit lorem varius enim hendrerit posuere vitae id dui. Mauris eget mauris vitae tellus pretium sollicitudin consectetur nec diam. Nullam egestas lectus nec velit sagittis tempor.
          </p>
        </div>
        <div class="timeline__item">
          <span class="timeline__item-dot"></span>
          <h3 class="timeline__item-title">
            Posición<span> - Empresa</span>
          </h3>
          <h4 class="timeline__item-subtitle">
            País, cuidad. <span>Mayo, 2021 - Agosto, 2022</span>
          </h4>
          <p class="timeline__item-paragraph">
            Maecenas sodales volutpat turpis. Suspendisse lobortis at nunc vel facilisis. Nam sed mattis lacus. Etiam consequat quis mauris a ullamcorper. Proin non magna sed enim porttitor semper. Mauris vitae nisl a sem placerat molestie. Morbi ipsum mi, venenatis nec aliquet non, porta ut lacus. Nulla at elit facilisis, congue erat id, auctor quam. Praesent convallis sem at quam maximus semper. Sed feugiat quam a libero scelerisque ultrices. Etiam luctus ligula sit amet porta fermentum.
          </p>
        </div>
        <div class="timeline__item">
          <span class="timeline__item-dot"></span>
          <h3 class="timeline__item-title">
            Posición<span> - Empresa</span>
          </h3>
          <h4 class="timeline__item-subtitle">
            País, cuidad. <span>Marzo, 2021 - Mayo, 2021</span>
          </h4>
          <p class="timeline__item-paragraph">
            Quisque pellentesque rutrum elit vel vestibulum. Aenean viverra eros at arcu congue, non efficitur nisl consectetur. Curabitur ut eleifend lacus. Nunc ligula felis, suscipit et bibendum at, volutpat eget lectus. Cras non urna quis nisi ultrices varius a vel purus. Nunc in congue est. Donec porttitor dapibus sem non condimentum. In congue fringilla ante eget pellentesque.
          </p>
        </div>
        <div class="timeline__item">
          <span class="timeline__item-dot"></span>
          <h3 class="timeline__item-title">
            Posición<span> - Empresa</span>
          </h3>
          <h4 class="timeline__item-subtitle">
            País, cuidad. <span>Septiembre, 2019 - Marzo, 2021</span>
          </h4>
          <p class="timeline__item-paragraph">
            Cras consequat purus eget augue euismod dictum. Ut odio ligula, dignissim vel molestie id, auctor nec felis. Nullam elementum sapien sed rutrum suscipit. Donec congue libero ipsum, eget lacinia diam bibendum sed. Nulla fringilla dapibus dapibus. Aenean tempus, velit a sollicitudin hendrerit, tortor magna cursus metus, eu egestas lectus dolor sit amet augue. Donec euismod euismod molestie. Sed sed massa lacus. Aliquam pulvinar, metus vitae elementum volutpat, magna ex feugiat diam, vitae laoreet diam purus non dolor. In vitae eros dolor.
          </p>
          <p class="timeline__item-paragraph">
            Quisque justo purus, pretium eu mauris sed, pellentesque posuere nisl. Ut eros eros, interdum eget nibh vitae, dictum sollicitudin mi. Donec ac auctor quam.
          </p>
        </div>
        <div class="timeline__item">
          <span class="timeline__item-dot"></span>
          <h3 class="timeline__item-title">
            Posición<span> - Empresa</span>
          </h3>
          <h4 class="timeline__item-subtitle">
            País, cuidad. <span>Abril, 2019 - Septiembre, 2019</span>
          </h4>
          <p class="timeline__item-paragraph">
            Quisque pellentesque rutrum elit vel vestibulum. Aenean viverra eros at arcu congue, non efficitur nisl consectetur. Curabitur ut eleifend lacus. Nunc ligula felis, suscipit et bibendum at, volutpat eget lectus. Cras non urna quis nisi ultrices varius a vel purus. Nunc in congue est. Donec porttitor dapibus sem non condimentum. In congue fringilla ante eget pellentesque. Curabitur condimentum efficitur lorem, in viverra ante facilisis a.
          </p>
        </div>
        <div class="timeline__item">
          <span class="timeline__item-dot"></span>
          <h3 class="timeline__item-title">
            Posición<span> - Empresa</span>
          </h3>
          <h4 class="timeline__item-subtitle">
            País, cuidad. <span>Septiembre, 2018 - Abril, 2019</span>
          </h4>
          <p class="timeline__item-paragraph">
            Donec nec varius massa, et placerat urna. Aliquam aliquet quis nulla a tempor. Curabitur ex ante, accumsan non dolor sed, porta faucibus justo. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae;
          </p>
        </div>
      </div>
    </div>
  </section>
  <section class="education" id="education">
    <div class="timeline">
      <div class="section-title">
        <h2>Estudios</h2>
        <div class="typing"></div>
      </div>
      <div class="timeline__itens">
        <div class="timeline__item">
          <span class="timeline__item-dot"></span>
          <h3 class="timeline__item-title">
            Nombre del Curso
          </h3>
          <h4 class="timeline__item-subtitle">
            Universidad. <span>Enero, 2021 - Agosto, 2022</span>
          </h4>
          <p class="timeline__item-paragraph">
            Donec pellentesque rhoncus eros. Morbi porta purus odio, quis bibendum ante euismod non. Quisque auctor blandit elementum.
          </p>
        </div>
        <div class="timeline__item">
          <span class="timeline__item-dot"></span>
          <h3 class="timeline__item-title">
            Nombre del Curso
          </h3>
          <h4 class="timeline__item-subtitle">
            Universidad. <span>Enero, 2013 - Diciembre, 2017</span>
          </h4>
          <p class="timeline__item-paragraph">
            Duis rhoncus ultricies hendrerit. Maecenas fringilla dui nec leo consectetur, a commodo felis gravida. Nulla facilisi. Mauris et odio ut mi pretium hendrerit. Nam id pellentesque nunc.
          </p>
        </div>
      </div>
    </div>
  </section>
  <section class="main-skills" id="main-skills">
    <div class="section-title">
      <h2>Habilidades</h2>
      <div class="typing"></div>
    </div>
    <div class="skills">
      <div class="skill">
        <h3 class="skill__title">Habilidad 1</h3>
        <p class="skill__percentage">100%</p>
        <div class="skill-bar">
          <span class="skill-bar__progress"></span>
        </div>
      </div>
      <div class="skill">
        <h3 class="skill__title">Habilidad 2</h3>
        <p class="skill__percentage">100%</p>
        <div class="skill-bar">
          <span class="skill-bar__progress"></span>
        </div>
      </div>
      <div class="skill">
        <h3 class="skill__title">Habilidad 3</h3>
        <p class="skill__percentage">100%</p>
        <div class="skill-bar">
          <span class="skill-bar__progress"></span>
        </div>
      </div>
      <div class="skill">
        <h3 class="skill__title">Habilidad 4</h3>
        <p class="skill__percentage">50%</p>
        <div class="skill-bar">
          <span class="skill-bar__progress"></span>
        </div>
      </div>
      <div class="skill">
        <h3 class="skill__title">Habilidad 5</h3>
        <p class="skill__percentage">75%</p>
        <div class="skill-bar">
          <span class="skill-bar__progress"></span>
        </div>
      </div>
      <div class="skill">
        <h3 class="skill__title">Habilidad 6</h3>
        <p class="skill__percentage">50%</p>
        <div class="skill-bar">
          <span class="skill-bar__progress"></span>
        </div>
      </div>
      <div class="skill">
        <h3 class="skill__title">Habilidad 7</h3>
        <p class="skill__percentage">100%</p>
        <div class="skill-bar">
          <span class="skill-bar__progress"></span>
        </div>
      </div>
      <div class="skill">
        <h3 class="skill__title">Habilidad 8</h3>
        <p class="skill__percentage">75%</p>
        <div class="skill-bar">
          <span class="skill-bar__progress"></span>
        </div>
      </div>
      <div class="skill">
        <h3 class="skill__title">Habilidad 9</h3>
        <p class="skill__percentage">90%</p>
        <div class="skill-bar">
          <span class="skill-bar__progress"></span>
        </div>
      </div>
      <div class="skill">
        <h3 class="skill__title">Habilidad 10</h3>
        <p class="skill__percentage">100%</p>
        <div class="skill-bar">
          <span class="skill-bar__progress"></span>
        </div>
      </div>
      <div class="skill">
        <h3 class="skill__title">Habilidad 11</h3>
        <p class="skill__percentage">100%</p>
        <div class="skill-bar">
          <span class="skill-bar__progress"></span>
        </div>
      </div>
      <div class="skill">
        <h3 class="skill__title">Habilidad 12</h3>
        <p class="skill__percentage">100%</p>
        <div class="skill-bar">
          <span class="skill-bar__progress"></span>
        </div>
      </div>
    </div>
  </section>
  <section class="portfolio" id="portfolio">
    <div class="section-title">
      <h2>Porfolio</h2>
      <div class="typing"></div>
    </div>
    <div class="cards">
      <div class="card">
        <img class="card__image" src="./images/Around-the-U.S.jpg" />
        <div class="card__content">
          <a href="#" target="_blank"
            ><h3 class="card__title">Proyecto 1</h3></a
          >
          <p class="card__description">
            Pellentesque vel consectetur felis, ac faucibus velit. Nullam facilisis lorem vitae elit euismod euismod. Donec in arcu orci. Nulla dictum, tellus sodales hendrerit mattis
          </p>
          <p class="card__skills-title">Habilidades usadas:</p>
          <div class="card__skills">
            <div class="card__skill">
              <p>Stack 1</p>
            </div>
            <div class="card__skill">
              <p>Stack 2</p>
            </div>
            <div class="card__skill">
              <p>Stack 3</p>
            </div>
            <div class="card__skill">
              <p>Stack 4</p>
            </div>
          </div>
        </div>
      </div>
      <div class="card">
        <img class="card__image" src="./images/De Pátria para Pátria.jpg" />
        <div class="card__content">
          <a href="#" target="_blank"
            ><h3 class="card__title">Proyecto 2</h3></a
          >
          <p class="card__description">
            Vestibulum vehicula tincidunt velit nec accumsan. Donec massa ante, dignissim at accumsan vitae, placerat sed purus.
          </p>
          <p class="card__skills-title">Habilidades usadas:</p>
          <div class="card__skills">
            <div class="card__skill">
              <p>Stack 1</p>
            </div>
            <div class="card__skill">
              <p>Stack 2</p>
            </div>
            <div class="card__skill">
              <p>Stack 3</p>
            </div>
          </div>
        </div>
      </div>
      <div class="card">
        <img
          class="card__image"
          src="./images/Aprendendo a Aprender2.jpg"
        />
        <div class="card__content">
          <a href="#" target="_blank"
            ><h3 class="card__title">Proyecto 3</h3></a
          >
          <p class="card__description">
            Quisque sem eros, pretium vitae ullamcorper ut, vestibulum sed mauris. Etiam tempus auctor elementum. Fusce dui tellus, egestas sed libero et, porttitor pharetra arcu.
          </p>
          <p class="card__skills-title">Habilidades usadas:</p>
          <div class="card__skills">
            <div class="card__skill">
              <p>Stack 1</p>
            </div>
            <div class="card__skill">
              <p>Stack 2</p>
            </div>
            <div class="card__skill">
              <p>Stack 3</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  <section class="courses" id="courses">
    <h2 class="courses__title">Cursos</h2>
    <div class="slideshow">
      <div class="slideshow__button slideshow__button_backwards"></div>
      <div class="slideshow__button slideshow__button_forwards"></div>
      <div class="slide">
        <h3 class="slide__title">Nombre del Curso</h3>
        <h4 class="slide__subtitle">
          Institución. FEBRERO, 2022 - ENERO, 2023
        </h4>
        <span class="slide__line"></span>
        <p class="slide__description">
          Maecenas fringilla dui nec leo consectetur, a commodo felis gravida. Nulla facilisi. Mauris et odio ut mi pretium hendrerit. Nam id pellentesque nunc.
        </p>
        <div class="slide__skills">
          <div class="slide__skill">
            <p>Habilidad 1</p>
          </div>
          <div class="slide__skill">
            <p>Habilidad 2</p>
          </div>
          <div class="slide__skill">
            <p>Habilidad 3</p>
          </div>
          <div class="slide__skill">
            <p>Habilidad 4</p>
          </div>
        </div>
      </div>
    </div>
  </section>
  <section class="contact-section" id="contact-section">
    <div class="contact">
      <div class="section-title">
        <h2>Contacto</h2>
        <div class="typing"></div>
      </div>
      <div class="contact-information">
        <ul class="list">
          <li class="list__item">
            <p>Teléfono:</p>
            <span>
              <a
                href="#"
                target="_blank"
                >+00 9 999 999 999</a
              >
            </span>
          </li>
          <li class="list__item">
            <p>Correo:</p>
            <span>
              <a href="mailto:" target="_blank"
                >johndoe@notarealemail.com</a
              >
            </span>
          </li>
          <li class="list__item">
            <div class="social-icons">
              <a
                href="https://www.linkedin.com"
                target="_blank"
              >
                <img src="./images/linkedin_w.svg" alt="LinkedIn icon" />
              </a>
              <a href="https://github.com" target="_blank">
                <img src="./images/github_w.svg" alt="GitHub icon" />
              </a>
            </div>
          </li>
        </ul>
        <form class="form">
          <h3 class="form__title">Envíame un Mensaje</h3>
          <div class="form__field">
            <input
              class="form__input"
              id="name-input"
              type="text"
              required
              minlength="2"
              maxlength="100"
              placeholder="Nombre"
            />
            <p class="form__input-error name-input-error"></p>
          </div>
          <div class="form__field">
            <input
              class="form__input"
              id="email-input"
              type="email"
              required
              maxlength="200"
              placeholder="Correo"
            />
            <p class="form__input-error email-input-error"></p>
          </div>
          <div class="form__field">
            <input
              class="form__input"
              id="subject-input"
              type="text"
              required
              minlength="4"
              maxlength="150"
              placeholder="Asunto"
            />
            <p class="form__input-error subject-input-error"></p>
          </div>
          <div class="form__field">
            <textarea
              class="form__input"
              id="message-input"
              type="text"
              required
              maxlength="500"
              placeholder="Mensaje"
            ></textarea>
            <p class="form__input-error message-input-error"></p>
          </div>
          <button class="form__submit" type="submit">Enviar Mensaje</button>
        </form>
      </div>
    </div>
  </section>
  <section class="footer">
    <p class="footer__copyright">&copy; Arthur Fernandes Menezes Santos - 2025</p>
  </section>
  <div class="share">
    <div class="share__icon">
      <img src="./images/download.svg" class="share__icon-image" />
    </div>
    <p class="share__text">Descargar</p>
  </div>
  <template id="slide">
    <div class="slide">
      <h3 class="slide__title"></h3>
      <h4 class="slide__subtitle"></h4>
      <span class="slide__line"></span>
      <p class="slide__description"></p>
      <div class="slide__skills"></div>
    </div>
  </template>
  <template id="skill">
    <div class="slide__skill">
      <p></p>
    </div>
  </template>
  </main>`,
};

const resumes = {
  en: "https://www.arthurfernandes.me/documents/johndoe_resume.pdf",
  pt: "https://www.arthurfernandes.me/documents/johndoe_resume.pdf",
  es: "https://www.arthurfernandes.me/documents/johndoe_resume.pdf",
};

const slidesContent = {
  en: [
    {
      title: "Course Name",
      subtitle: "School. FEBRUARY, 2022 - JANUARY, 2023",
      description:
        "Quisque sem eros, pretium vitae ullamcorper ut, vestibulum sed mauris. Etiam tempus auctor elementum. Fusce dui tellus, egestas sed libero et, porttitor pharetra arcu.",
      skills: ["Skill 1", "Skill 2", "Skill 3", "Skill 4", "Skill 5"],
    },
    {
      title: "Course Name",
      subtitle: "School. JANUARY, 2022 - JANUARY, 2023",
      description:
        "Vestibulum vehicula tincidunt velit nec accumsan. Donec massa ante, dignissim at accumsan vitae, placerat sed purus.",
      skills: [
        "Skill 1",
        "Skill 2",
        "Skill 3",
        "Skill 4",
        "Skill 5",
        "Skill 6",
        "Skill 7",
        "Skill 8",
      ],
    },
    {
      title: "Course Name",
      subtitle: "School. MAY, 2020 - SEPTEMBER, 2020",
      description:
        "Donec eget fringilla lorem. Mauris scelerisque nibh eu ipsum porttitor, a tincidunt nibh ultricies. Sed at ligula et augue varius scelerisque.",
      skills: ["Skill 1"],
    },
  ],
  pt: [
    {
      title: "Nome do Curso",
      subtitle: "Instituição. FEVEREIRO, 2022 - JANEIRO, 2023",
      description:
        "Quisque sem eros, pretium vitae ullamcorper ut, vestibulum sed mauris. Etiam tempus auctor elementum. Fusce dui tellus, egestas sed libero et, porttitor pharetra arcu.",
      skills: [
        "Habilidade 1",
        "Habilidade 2",
        "Habilidade 3",
        "Habilidade 4",
        "Habilidade 5",
      ],
    },
    {
      title: "Nome do Curso",
      subtitle: "Instituição. JANEIRO, 2022 - JANEIRO, 2023",
      description:
        "Vestibulum vehicula tincidunt velit nec accumsan. Donec massa ante, dignissim at accumsan vitae, placerat sed purus.",
      skills: [
        "Habilidade 1",
        "Habilidade 2",
        "Habilidade 3",
        "Habilidade 4",
        "Habilidade 5",
        "Habilidade 6",
        "Habilidade 7",
        "Habilidade 8",
      ],
    },
    {
      title: "Nome do Curso",
      subtitle: "Instituição. MAIO, 2020 - SETEMBRO, 2020",
      description:
        "Donec eget fringilla lorem. Mauris scelerisque nibh eu ipsum porttitor, a tincidunt nibh ultricies. Sed at ligula et augue varius scelerisque.",
      skills: ["Habilidade 1"],
    },
  ],
  es: [
    {
      title: "Nombre del Curso",
      subtitle: "Institución. FEBRERO, 2022 - ENERO, 2023",
      description:
        "Quisque sem eros, pretium vitae ullamcorper ut, vestibulum sed mauris. Etiam tempus auctor elementum. Fusce dui tellus, egestas sed libero et, porttitor pharetra arcu.",
      skills: [
        "Habilidad 1",
        "Habilidad 2",
        "Habilidad 3",
        "Habilidad 4",
        "Habilidad 5",
      ],
    },
    {
      title: "Nombre del Curso",
      subtitle: "Institución. ENERO, 2022 - ENERO, 2023",
      description:
        "Vestibulum vehicula tincidunt velit nec accumsan. Donec massa ante, dignissim at accumsan vitae, placerat sed purus.",
      skills: [
        "Habilidad 1",
        "Habilidad 2",
        "Habilidad 3",
        "Habilidad 4",
        "Habilidad 5",
        "Habilidad 6",
        "Habilidad 7",
        "Habilidad 8",
      ],
    },
    {
      title: "Nombre del Curso",
      subtitle: "Institución. MAYO, 2020 - SEPTIEMBRE, 2020",
      description:
        "Donec eget fringilla lorem. Mauris scelerisque nibh eu ipsum porttitor, a tincidunt nibh ultricies. Sed at ligula et augue varius scelerisque.",
      skills: ["Habilidad 1"],
    },
  ],
};

export {
  languages as languages,
  resumes as resumes,
  slidesContent as slidesContent,
};
