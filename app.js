const upBtn = document.querySelector(".up-button");
const downBtn = document.querySelector(".down-button");
const sidebar = document.querySelector(".sidebar");
const mainslide = document.querySelector(".main-slide");
const slidesCount = mainslide.querySelectorAll("div").length;
const container = document.querySelector(".container");

let slideActive = 0;

sidebar.style.top = `-${(slidesCount - 1) * 100}vh`;

upBtn.addEventListener("click", () => {
  changeSlide("up");
});

downBtn.addEventListener("click", () => {
  changeSlide("down");
});

function changeSlide(str) {
  console.log("str", str);
  if (str === "up") {
    slideActive += 1;
    if (slideActive === slidesCount) {
      slideActive = 0;
    }
  } else if (str === "down") {
    slideActive -= 1;
    if (slideActive < 0) {
      slideActive = slidesCount - 1;
    }
  }
  const height = container.clientHeight;

  mainslide.style.transform = `translateY(-${slideActive * height}px)`;

  sidebar.style.transform = `translateY(${slideActive * height}px)`;
}
