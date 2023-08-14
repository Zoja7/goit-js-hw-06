
const body = document.querySelector("body");
const button = document.querySelector(".change-color");
const spanValue = document.querySelector(".color");

const bodyChangeColor = () => { 

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
  const randomColor = getRandomHexColor();

  body.style.backgroundColor = randomColor;
  spanValue.textContent = randomColor;

}

button.addEventListener("click", bodyChangeColor);