const refs = {
  form: document.querySelector('.login-form'),
  email: document.querySelector('[name="email"]'),
  password: document.querySelector('[name="password"]'),
  btn: document.querySelector('[type="submit"]'),
}

refs.form.addEventListener('submit', onFormSubmit);

function onFormSubmit(e) {
  e.preventDefault();
  const { elements: { email, password } } = e.currentTarget;

  if (!password.value || !email.value) return alert("Вы должны заполнить все поля");
  const values = {
    email: email.value,
    password: password.value,
  }

  console.log(values);
  e.currentTarget.reset();
}