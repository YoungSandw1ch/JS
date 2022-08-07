function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const refs = {
  color: document.querySelector('.color'),
  btn: document.querySelector('.change-color'),
}

refs.btn.addEventListener('click', onBodyChangeColor);

function onBodyChangeColor() {
  const paint = getRandomHexColor();
  refs.color.textContent = paint;
  document.body.style.backgroundColor = paint;
}