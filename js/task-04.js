const btnDecr = document.querySelector(`[data-action="decrement"]`);
const btnIncr = document.querySelector(`[data-action="increment"]`);
const innerVal = document.getElementById('value');

let counterValue = 0;

const handleClick = (event) => {
    if (event.target.dataset.action === 'decrement') {
        counterValue--;
    } else if (event.target.dataset.action === 'increment') {
        counterValue++;
    }
    innerVal.textContent = counterValue; 
};

btnDecr.addEventListener("click", handleClick);
btnIncr.addEventListener("click", handleClick);