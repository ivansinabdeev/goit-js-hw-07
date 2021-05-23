const ingredients = [
  'Картошка',
  'Грибы',
  'Чеснок',
  'Помидоры',
  'Зелень',
  'Приправы',
];

const ingredientsList = document.querySelector('#ingredients')
console.log(ingredientsList)

const ingredientsEl = document.createElement('li')
ingredientsEl.classList.add('.ingredients__item');
ingredientsEl.textContent = ingredients
console.log(ingredientsEl)

//ingredients.appendChild(ingredientsEl);
console.log(ingredients)