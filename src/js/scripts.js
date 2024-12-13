const menuBtn = document.querySelector('.menu__btn');
const nav = document.querySelector('.nav');
const filtreBtn = document.querySelector('.btn__filter');
const filtreNav = document.querySelector('.filter__nav');

menuBtn.addEventListener("click", () =>{
    toggle(menuBtn, nav)
});

filtreBtn.addEventListener("click", () =>{
    toggle(filtreBtn, filtreNav)
});


function toggle (btn, menu)  {
    const isOpen = btn.ariaExpanded === "true";
    const isClosed = !isOpen;

    menu.ariaHidden = isOpen;
    btn.ariaExpanded = isClosed;
}