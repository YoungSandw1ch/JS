function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

// Создай функцию createBoxes(amount), которая принимает один параметр - число. Функция создает столько <div>, сколько указано в amount и добавляет их в div#boxes.

// Размеры самого первого <div> - 30px на 30px.
// Каждый элемент после первого, должен быть шире и выше предыдущего на 10px.
// Все элементы должены иметь случайный цвет фона в формате HEX. Используй готовую функцию getRandomHexColor для получения цвета.

// Создай функцию destroyBoxes(), которая очищает содержимое div#boxes, тем самым удаляя все созданные элементы.

const refs = {
  boxes: document.querySelector('#boxes'),
  createBtn: document.querySelector('[data-create]'),
  destroyBtn: document.querySelector('[data-destroy]'),
  input: document.querySelector('#controls input'),
}

refs.input.addEventListener('blur', onInputChangeAmount);
refs.createBtn.addEventListener('click', createBoxes);
refs.destroyBtn.addEventListener('click', destroyBoxes);

let number;

function onInputChangeAmount(e) {
  number =  e.currentTarget.value;
}

function createBoxes(amount) {
  amount = number;
  let divsMarkup = '';

  for (let i = 0, j = 30; i < amount; i += 1, j += 10) {
    divsMarkup += `<div class="center" style="background-color:${getRandomHexColor()};width:${j}px;height:${j}px;"></div>`
  }

  refs.boxes.insertAdjacentHTML('afterbegin', divsMarkup);
}

function destroyBoxes() {
  refs.boxes.innerHTML = '';
}