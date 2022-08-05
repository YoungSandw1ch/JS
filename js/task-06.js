const inputRef = document.querySelector('#validation-input');
const textMarcup = `
  <p class="text">You enter: <span>0</span> symbols</p>
`
inputRef.insertAdjacentHTML('afterend', textMarcup);

inputRef.addEventListener('blur', onInputBlur);
inputRef.addEventListener('input', onInputLength);

function onInputBlur(event) {
  if (event.currentTarget.value.length === +inputRef.dataset.length) {
    inputRef.classList.add('valid');
    inputRef.classList.remove('invalid');

  } else {
    inputRef.classList.add('invalid');
    inputRef.classList.remove('valid');
  }
}

function onInputLength(event) {
  const textRef = document.querySelector('.text span');
  const length = event.currentTarget.value.length;
  
  textRef.textContent = length;

  if (length === 6) {
    textRef.classList.add('green');
    textRef.classList.remove('red');
  } else {
    textRef.classList.add('red');
    textRef.classList.remove('green');
  }
}