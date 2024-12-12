const menuBtn = document.querySelector('.menu__btn');
const nav = document.querySelector('.nav');

menuBtn.addEventListener("click", () =>{
    toggle(menuBtn, nav)
});

function toggle (btn, menu)  {
    console.log("Je fonctionne !")

    const isOpen = btn.ariaExpanded === "true";
    const isClosed = !isOpen;
    console.log("isOpen : ", isOpen, "isClosed : ", isClosed);
    
    menu.ariaHidden = isOpen;
    btn.ariaExpanded = isClosed;
}