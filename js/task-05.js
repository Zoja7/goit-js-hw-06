const textInput = document.getElementById("name-input");
const textOutput = document.getElementById("name-output");

// const handleOption = (event) => {
//     textOutput.textContent = event.currentTarget.value;
// }
// textInput.addEventListener("input", handleOption);

textInput.addEventListener("input", (event)=> {
   textOutput.textContent = event.currentTarget.value;
});

textInput.addEventListener("blur", () => {
  const inputValue = textInput.value;
  
  if (inputValue === "") {
    textOutput.textContent = "Anonymous";
  } else {
    textOutput.textContent = inputValue;
  }
});