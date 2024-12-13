const premierItem = document.querySelector(".slider__item");
const scrollAmount = premierItem.clientWidth;

const sliderInfos = document.querySelector('.slider-infos');
const leftInfos = document.querySelector('.left-infos');
const rightInfos = document.querySelector('.right-infos');

leftInfos.addEventListener("click", () => {
    sliderInfos.scrollBy({ left: -premierItem.clientWidth, behavior: "smooth" });
});
rightInfos.addEventListener("click", () => {
    sliderInfos.scrollBy({ left: +premierItem.clientWidth, behavior: "smooth" });
});