function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
const btnCreate = document.querySelector("button[data-create]");
const btnDestroy = document.querySelector("button[data-destroy]");
const inputVal = document.querySelector('input[type="number"]');
const boxes = document.getElementById("boxes");
btnCreate.addEventListener("click", createBoxes);
let wh = 30;
function createBoxes(amount) {
  amount = inputVal.value;

  for (let i = 1; i <= amount; i++) {
    const createDiv = document.createElement("div");
    wh = wh + 10;
    createDiv.style.width = `${wh}px`;
    createDiv.style.height = `${wh}px`;
    createDiv.style.backgroundColor = getRandomHexColor();
    boxes.append(createDiv);
  }
}
btnDestroy.addEventListener("click", destroyBoxes);
function destroyBoxes() {
  const createDivChildren = [...boxes.children];
  createDivChildren.forEach((el) => {
    el.remove();
    wh = 30;
  });
}
