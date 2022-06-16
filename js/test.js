window.onload = function() {
    const slides = [{
        title: "Data Implementation Specialist",
        subtitle: "Doctoralia España (Barcelona - Spain). May, 2021 / Current",
        description: [`Management and manipulation of big databases to generate
        specific formats, necessaries to new clients implementations.
        Process organization and maintenance to guarantee data
        protection and information quality in company system.`, `Contacting with all involved teams, keeping the process
        flowing to ensure that every step works as the company
        standards, and training new import members.`]
    },
    {
        title: "Data Analyst",
        subtitle: "Doctoralia Brasil (Curitiba - Brazil). March, 2021 / May, 2021",
        description: [`Improve data analysis for Marketing, lead generation and DP
        phone operations, update and maintenance workflows to optimize
        data collection. Generate dashboards and data insights for all
        related teams, focusing on new leads, keep and improve operation
        control, goals update and team commission standard.`,``]
    },
    {
        title: "Support Analyst",
        subtitle: "Doctoralia Brasil (Curitiba - Brazil). September, 2019 / March, 2021",
        description: [`Provide support for employees and users with doubts, bugs
        corrections with scripts on SaaS, Marketplace and financial
        system. Report weakness, find solutions to prevent bugs, and
        notify developers about necessary corrections by Jiras. Data
        report creation and analysis based on Support and Customer
        Success actions and needs.`,`Helped client migration service improvement on support side
        actions, changing the avarege time from +20 working hours to a
        4 working hours.`]
    },
    {
        title: "Customer Success Analyst - Latam",
        subtitle: "Doctoralia Brasil (Curitiba - Brazil). April, 2019 / September, 2019",
        description: [`Assist health professionals from Chile by phone and email. Made
        usability training and helping them with platform issues,
        setting the environment for new clients and keeping track of
        their needs. Follow client's engagement and guarantee the best
        usage from the system, generating best results and helping them
        to achieve their goals.`,``]
    },
    {
        title: "Trilingual Call Center agent",
        subtitle: "SYKES Brasil (Curitiba - Brazil). September, 2018 / April, 2019",
        description: [`Manage corporate cards request in English, Portuguese and
        Spanish. Credit card limit raises requests, account information
        and client needs. Receive and follow client's request, managing
        their information following all companies process.`,``]
    }];

    const slideTemplate = document.querySelector(".slide__template").content;
    const nextButton = document.querySelector(".slides__next");
    const previousButton = document.querySelector(".slides__prev");
    const slideSection = document.querySelector(".slides");
    let currentSlide;
    if (!currentSlide) {
        currentSlide = 0;
        let startSlide =  slideTemplate.cloneNode(true);

        startSlide.querySelector(".slide__title").textContent = slides[0]["title"];
        startSlide.querySelector(".slide__subtitle").textContent = slides[0]["subtitle"];
        startSlide.querySelector(".slide__description").querySelectorAll("p")[0].textContent = slides[0]["description"][0];
        startSlide.querySelector(".slide__description").querySelectorAll("p")[1].textContent = slides[0]["description"][1];
        slideSection.prepend(startSlide);
    }

    function nextSlide () {
        let oldSlide = document.querySelector(".slide");
        let newSlide;
        let addSlide = slideTemplate.cloneNode(true);
        if (currentSlide != (slides.length - 1)) {
            newSlide = currentSlide + 1;
            currentSlide++;
        } else {
            newSlide = 0;
            currentSlide = 0;
        }
        
        addSlide.querySelector(".slide__title").textContent = slides[newSlide]["title"];
        addSlide.querySelector(".slide__subtitle").textContent = slides[newSlide]["subtitle"];
        addSlide.querySelector(".slide__description").querySelectorAll("p")[0].textContent = slides[newSlide]["description"][0];
        addSlide.querySelector(".slide__description").querySelectorAll("p")[1].textContent = slides[newSlide]["description"][1];
        oldSlide.remove();
        slideSection.prepend(addSlide);
    }

    function returnSlide () {
        let oldSlide = document.querySelector(".slide");
        let newSlide;
        let addSlide = slideTemplate.cloneNode(true);
        if (currentSlide != 0) {
            newSlide = currentSlide - 1;
            currentSlide--;
        } else {
            newSlide = slides.length - 1;
            currentSlide = slides.length - 1;
        }
        
        addSlide.querySelector(".slide__title").textContent = slides[newSlide]["title"];
        addSlide.querySelector(".slide__subtitle").textContent = slides[newSlide]["subtitle"];
        addSlide.querySelector(".slide__description").querySelectorAll("p")[0].textContent = slides[newSlide]["description"][0];
        addSlide.querySelector(".slide__description").querySelectorAll("p")[1].textContent = slides[newSlide]["description"][1];
        oldSlide.remove();
        slideSection.prepend(addSlide);
    }

    nextButton.addEventListener("click", nextSlide);
    previousButton.addEventListener("click", returnSlide);
}





