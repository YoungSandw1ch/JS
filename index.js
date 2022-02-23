import { save, load, remove } from "./js/storage.js";

const saveMethod = save;
console.log(saveMethod);


localStorage.setItem("ui-theme", "light");
localStorage.setItem("name", "Mango");

save("leg", 4);
console.log(load("leg"));
remove("leg");


console.log(localStorage.getItem("leg"));
console.log(localStorage.getItem("ui-theme"));
console.log(localStorage.getItem("name"));
console.log(localStorage.length);
