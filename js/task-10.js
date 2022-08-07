const refs = {
  boxes: document.querySelector('#boxes'),
  createBtn: document.querySelector('[data-create]'),
  destroyBtn: document.querySelector('[data-destroy]'),
  input: document.querySelector('#controls input'),
}

refs.input.addEventListener('blur', onInputChangeAmount);
refs.createBtn.addEventListener('click', createBoxes);
refs.destroyBtn.addEventListener('click', destroyBoxes);

function onInputChangeAmount() {
  return refs.input.value;
}

function createBoxes() {
  let divsMarkup = '';

  for (let i = 0, j = 30; i < onInputChangeAmount(); i += 1, j += 10) {
    divsMarkup += `<div class="center" style="background-color:${getRandomHexColor()};width:${j}px;height:${j}px;"></div>`
  }

  refs.boxes.insertAdjacentHTML('afterbegin', divsMarkup);
}

function destroyBoxes() {
  refs.boxes.innerHTML = '';
  refs.input.value = ''; //очистка инпута посл удаления боксов
}

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}