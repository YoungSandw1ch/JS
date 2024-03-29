const refs = {
  decrementBtn: document.querySelector('[data-action="decrement"]'),
  incrementBtn: document.querySelector('[data-action="increment"]'),
  span: document.querySelector('#value')
}
let counterValue = 0;

refs.decrementBtn.addEventListener('click', onDecrementBtn);
refs.incrementBtn.addEventListener('click', onIncrementBtn);

function onDecrementBtn() {
  counterValue -= 1;
  refs.span.textContent = counterValue;
}

function onIncrementBtn() {
  counterValue += 1;
  refs.span.textContent = counterValue;
}