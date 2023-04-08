function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const buttonChanger = document.querySelector(".change-color");
const bodyEl = document.querySelector("body");
const spanTextColor = document.querySelector(".color");

function handleChangeColor() {
  const color = getRandomHexColor();
  bodyEl.style.backgroundColor = color;
  spanTextColor.textContent = color;
  console.log(color);
}

buttonChanger.addEventListener("click", handleChangeColor);
