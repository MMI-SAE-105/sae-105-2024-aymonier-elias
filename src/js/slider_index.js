const premierItem = document.querySelector(".slider__item");
const scrollAmount = premierItem.clientWidth;

const sliderIndex = document.querySelector('.slider-index');
const leftIndex = document.querySelector('.left-index');
const rightIndex = document.querySelector('.right-index');

leftIndex.addEventListener("click", () => {
    sliderIndex.scrollBy({ left: -premierItem.clientWidth, behavior: "smooth" });
});
rightIndex.addEventListener("click", () => {
    sliderIndex.scrollBy({ left: +premierItem.clientWidth, behavior: "smooth" });
});