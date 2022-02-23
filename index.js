import patern from "./js/storage.js";

localStorage.setItem("ui-theme", "light");
localStorage.setItem("name", "Mango");

patern.save("leg", 4);
console.log(patern.load("leg"));
patern.remove("leg");
patern.remove("age");


console.log(localStorage.getItem("leg"));
console.log(localStorage.getItem("ui-theme"));
console.log(localStorage.getItem("name"));
console.log(localStorage.length);
