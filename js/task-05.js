const inputVal = document.getElementById("name-input");
const outputVal = document.getElementById("name-output");
inputVal.value = "";
inputVal.addEventListener("input", () => {
  if (inputVal.value.length === 0) {
    outputVal.textContent = "Anonymous";
  } else {
    outputVal.textContent = inputVal.value;
  }
});
