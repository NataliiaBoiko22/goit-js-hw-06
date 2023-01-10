const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];

let arr = [];
let createList = ingredients.forEach((el) => {
  const ingredientsList = document.createElement("li");
  ingredientsList.className = "item";
  ingredientsList.innerHTML = el;
  arr.push(ingredientsList);
});
const parent = document.getElementById("ingredients");

parent.append(...arr);
