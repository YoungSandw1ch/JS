const form = document.querySelector('.login-form');

form.addEventListener('submit', onFormSubmit);

// function onFormSubmit(e) {
//   e.preventDefault();
//   const { elements: { email, password } } = e.currentTarget;

//   if (!password.value || !email.value) return alert("Вы должны заполнить все поля");
//   const values = {
//     email: email.value,
//     password: password.value,
//   }

//   console.log(values);
//   e.currentTarget.reset();
// }

/*
*==========решение через formData====================
*/

function onFormSubmit(e) {
  e.preventDefault();

  if (!password.value || !email.value) return alert("Вы должны заполнить все поля");

  const formData = new FormData(e.currentTarget);
  const result = {};
  formData.forEach((value, name) => {
    result[name] = value;
  })

  console.log(result);
  e.currentTarget.reset();
}