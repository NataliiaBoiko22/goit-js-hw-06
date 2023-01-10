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
function createBoxes(amount) {
  amount = inputVal.value;
  let wh = 30;
  for (let i = 1; i <= amount; i++) {
    const createDiv = document.createElement("div");
    wh += 10;
    createDiv.style.width = `${wh}px`;
    createDiv.style.height = `${wh}px`;
    createDiv.style.backgroundColor = getRandomHexColor();
    boxes.append(createDiv);
  }
}
btnDestroy.addEventListener("click", destroyBoxes);
function destroyBoxes() {
  const createDiv1 = [...boxes.children];
  createDiv1.forEach((el) => {
    el.remove();
  });
}
