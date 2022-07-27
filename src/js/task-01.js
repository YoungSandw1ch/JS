const categoriesItemsRefs = document.querySelectorAll('#categories .item');

console.log('Number of categories: ', categoriesItemsRefs.length);

categoriesItemsRefs.forEach(item => console.log(
  `Category: ${item.querySelector('h2').textContent}
Elements: ${item.querySelectorAll('li').length}`));

// categoriesItemsRefs.forEach(item => {
//   console.log(`Category: ${item.querySelector('h2').textContent}`);
//   console.log('Elements: ', item.querySelectorAll('li').length);
// });


