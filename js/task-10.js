function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}


const inputEl = document.querySelector("input");
const buttonCreate = document.querySelector(`[data-create=""]`);
const buttonDestroy = document.querySelector(`[datd-destoy=""]`);
const boxRend = document.getElementById("boxes");
console.log(buttonCreate);


function createBoxes(param) {

  let size = 30;

  for (let i = 0; i < inputEl.value; i++) {    
      let div = document.createElement(`div`);
      div.style.backgroundColor = getRandomHexColor();
      div.style.height = `${size}px`;
      div.style.width = `${size}px`;
      div.style.margin = `${10}px`;
      boxRend.append(div);
    size += 10;
  }

 
  // boxRend.insertAdjacentElement("afterbegin", arr);
  //boxRend.ap(...arr);
}
 


buttonCreate.addEventListener("click", () => { createBoxes(inputEl.value) });



  
// textInput.addEventListener("blur", () => {
//   const inputValue = textInput.value;
  
//   if (inputValue === "") {
//     textOutput.textContent = "Anonymous";
//   } else {
//     textOutput.textContent = inputValue;
//   }
// });
// Створи функцію createBoxes(amount), яка приймає один параметр - число. 
// Функція створює стільки < div >, скільки вказано в amount і додає їх у div#boxes.

// Розміри найпершого <div> - 30px на 30px.
// Кожен елемент після першого повинен бути ширшим і вищим від попереднього на 10px.
// Всі елементи повинні мати випадковий колір фону у форматі HEX. Використовуй готову функцію getRandomHexColor для отримання кольору.