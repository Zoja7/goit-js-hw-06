const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

function renderMarkup(ingredients) {
  const ul = document.querySelector("#ingredients");

   ingredients.map( ingredient => {
     const liEl = document.createElement("li");
     liEl.classList.add("item")
     liEl.textContent = ingredient;
     ul.appendChild(liEl); 
   });
}
    
renderMarkup(ingredients);