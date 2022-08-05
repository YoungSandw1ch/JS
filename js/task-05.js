const refs = {
  input: document.querySelector('#name-input'),
  span: document.querySelector('#name-output'),
};

refs.input.addEventListener('input', onInputValueChange);

function onInputValueChange(event) {
  refs.span.textContent = event.currentTarget.value || 'Anonymous';
}