const filter = document.querySelectorAll('.filter-nav__filtre');
const filterContainer = document.querySelector('.filter__active');


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
    }
    const filterDiv = document.querySelector(".active-" + filterName.dataset.name);
    
    if (isActive == true) {
        filterDiv.remove();
    }
}