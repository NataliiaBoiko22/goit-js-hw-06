const counterValue = document.getElementById("value");
const buttonPrev = document.querySelector('button[data-action="decrement"]');
const buttonNext = document.querySelector('button[data-action="increment"]');
let counter = +counterValue.textContent;
buttonPrev.addEventListener("click", () => {
  counter -= 1;
  counterValue.innerText = counter;
});
buttonNext.addEventListener("click", () => {
  counter += 1;
  counterValue.innerText = counter;
});
