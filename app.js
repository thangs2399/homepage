
const allSections = document.querySelector(".main-content")
const sections = document.querySelectorAll(".section");
const sectBtns = document.querySelectorAll(".controls");
const sectBtn = document.querySelectorAll(".control");

function PageTransitions() {
    
    // Button click -> active
    for (let i = 0; i < sectBtn.length; i++) {
        sectBtn[i].addEventListener('click', (evnt) => {

            // select current active button and remove deactive it
            let currentBtn = document.querySelectorAll('.active-btn');
            currentBtn[0].classList.remove('active-btn');

            // active the "new" clicked button
            evnt.target.classList.add("active-btn");
        })
    }

    // Sections -> active
    allSections.addEventListener('click', (evnt) => {

        const id = evnt.target.dataset.id;

        if (id) {

            // hide other sections
            sections.forEach((section) => {
                section.classList.remove('active')
            })

            // query element with the "id" and add "active" class to it
            const element = document.getElementById(id);
            element.classList.add('active');
        } 
    })

    // Toggle Theme
    const themeBtn = document.querySelector('.theme-btn');

    themeBtn.addEventListener('click', () => {
        let body = document.body;
        
        body.classList.toggle('light-mode')
    })
}

PageTransitions();