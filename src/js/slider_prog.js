const premierItem = document.querySelector(".slider__item");
const scrollAmount = premierItem.clientWidth;

const sliderProg1 = document.querySelector('.slider-prog-1');
const leftProg1 = document.querySelector('.left-prog-1');
const rightProg1 = document.querySelector('.right-prog-1');

leftProg1.addEventListener("click", () => {
    sliderProg1.scrollBy({ left: -premierItem.clientWidth, behavior: "smooth" });
});
rightProg1.addEventListener("click", () => {
    sliderProg1.scrollBy({ left: +premierItem.clientWidth, behavior: "smooth" });
});


const sliderProg2 = document.querySelector('.slider-prog-2');
const leftProg2 = document.querySelector('.left-prog-2');
const rightProg2 = document.querySelector('.right-prog-2');

leftProg2.addEventListener("click", () => {
    sliderProg2.scrollBy({ left: -premierItem.clientWidth, behavior: "smooth" });
});
rightProg2.addEventListener("click", () => {
    sliderProg2.scrollBy({ left: +premierItem.clientWidth, behavior: "smooth" });
});


const sliderProg3 = document.querySelector('.slider-prog-3');
const leftProg3 = document.querySelector('.left-prog-3');
const rightProg3 = document.querySelector('.right-prog-3');

leftProg3.addEventListener("click", () => {
    sliderProg3.scrollBy({ left: -premierItem.clientWidth, behavior: "smooth" });
});
rightProg3.addEventListener("click", () => {
    sliderProg3.scrollBy({ left: +premierItem.clientWidth, behavior: "smooth" });
});


const sliderProg4 = document.querySelector('.slider-prog-4');
const leftProg4 = document.querySelector('.left-prog-4');
const rightProg4 = document.querySelector('.right-prog-4');

leftProg4.addEventListener("click", () => {
    sliderProg4.scrollBy({ left: -premierItem.clientWidth, behavior: "smooth" });
});
rightProg4.addEventListener("click", () => {
    sliderProg4.scrollBy({ left: +premierItem.clientWidth, behavior: "smooth" });
});


const sliderProg5 = document.querySelector('.slider-prog-5');
const leftProg5 = document.querySelector('.left-prog-5');
const rightProg5 = document.querySelector('.right-prog-5');

leftProg5.addEventListener("click", () => {
    sliderProg5.scrollBy({ left: -premierItem.clientWidth, behavior: "smooth" });
});
rightProg5.addEventListener("click", () => {
    sliderProg5.scrollBy({ left: +premierItem.clientWidth, behavior: "smooth" });
});