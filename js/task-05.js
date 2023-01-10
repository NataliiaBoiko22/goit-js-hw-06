const inputVal = document.getElementById("name-input");
const outputVal = document.getElementById("name-output");
inputVal.value = "";
inputVal.addEventListener("input", () => {
  outputVal.textContent = inputVal.value;
});
