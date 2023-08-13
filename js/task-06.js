const textInput = document.getElementById("validation-input");

const checkHandler = (event) => { 

    textInput.value = event.currentTarget.value;

    if (textInput.value.length === parseInt(event.currentTarget.dataset.length)) {
        textInput.classList.add("valid"); 
        textInput.classList.remove("invalid");
    } else { 
        textInput.classList.add("invalid");
        textInput.classList.remove("valid");
    }

}

textInput.addEventListener("blur", checkHandler);