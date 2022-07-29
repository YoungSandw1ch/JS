const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const ingredientsRef = document.querySelector('#ingredients');

const createIngredients = ingredients => {
  return ingredients.map(el => {
    const ingredientRef = document.createElement('li');
    ingredientRef.classList.add('item');
    ingredientRef.textContent = el;
    return ingredientRef;
  })
}

ingredientsRef.append(...createIngredients(ingredients));

