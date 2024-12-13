const filter = document.querySelectorAll('.filter-nav__filtre');
const filterContainer = document.querySelector('.filter__active');
const programmeFilms = document.querySelectorAll('.programme__slider__item')


filter.forEach(element => {
    element.addEventListener('click', () => {
        console.log('Je suis : ' + element.dataset.name + ' et je fonctionne');
        toogleFilter(element)
    })
});



function toogleFilter(filterName) {
    const isActive = filterName.ariaExpanded === "true";
    const isNot = !isActive;
    console.log("isActive : ", isActive, "isNot : ", isNot);
    
    filterName.ariaExpanded = isNot;
    
    if (isNot == true) {
        filterContainer.innerHTML += `
        <div class="filtre active-${filterName.dataset.name}">
        <p class="text-s">${filterName.dataset.name}</p>
        </div>
        `

        programmeFilms.forEach(element => {
            element.classList.toggle("not-active");
            if (element.dataset.genre == filterName.dataset.name || element.dataset.horraires == filterName.dataset.name || element.dataset.lieux == filterName.dataset.name) {
                element.classList.remove("not-active");
            }
        });
    }
    const filterDiv = document.querySelector(".active-" + filterName.dataset.name);
    
    if (isActive == true) {
        filterDiv.remove();

        programmeFilms.forEach(element => {
            element.classList.toggle("not-active");
            if (element.dataset.genre != filterName.dataset.name) {
                element.classList.add("not-active");
            }
        });
    }
}