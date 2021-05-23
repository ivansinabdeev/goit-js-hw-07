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
const elements = ingredients.map((item) => {
  const ingredientsEl = document.createElement('li');
  ingredientsEl.classList.add('.ingredients__item');
  ingredientsEl.textContent = item;
  return ingredientsEl
console.log(ingredientsEl)
});
console.log(elements);
ingredientsList.append(...elements);

