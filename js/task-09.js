function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
const inputCangeColor = document.querySelector(".change-color");
const toBody = document.querySelector("body");
const changeSpanName = document.querySelector("span.color");
inputCangeColor.addEventListener("click", () => {
  toBody.style.background = getRandomHexColor();
  changeSpanName.textContent = getRandomHexColor();
});
