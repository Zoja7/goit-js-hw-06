const categoriesUll = document.querySelector('#categories');

const numOfCategories = categoriesUll.children.length;
console.log(`Number of categories: ${numOfCategories}`);

const categoryItems = categoriesUll.querySelectorAll('.item');

categoryItems.forEach(item => {
    const categoryName = item.querySelector('h2').textContent;
    const numElements = item.querySelectorAll('ul li').length;
    
    console.log(`Category: ${categoryName}`);
    console.log(`Elements: ${numElements}`);
});
