const categoriesItemsRefs = document.querySelectorAll('#categories .item');

//-----------обычное логирование-----------------------
// console.log('Number of categories: ', categoriesItemsRefs.length);

// categoriesItemsRefs.forEach(item => console.log(
//   `Category: ${item.querySelector('h2').textContent}
// Elements: ${item.querySelectorAll('li').length}`));

//------------количество в цифрах а не строках----------------------
console.log('Number of categories: ', categoriesItemsRefs.length);

categoriesItemsRefs.forEach(item => {
  console.log(`Category: ${item.querySelector('h2').textContent}`);
  console.log('Elements: ', item.querySelectorAll('li').length);
});

//------------функция----------------------------------
// const categoriesLogger = categories => {
//   console.log('Number of categories: ', categoriesItemsRefs.length);

//   categories.forEach(categorie => console.log(
//     `Category: ${categorie.querySelector('h2').textContent} 
// Elements: ${categorie.querySelectorAll('li').length}`))
// };

// categoriesLogger(categoriesItemsRefs);