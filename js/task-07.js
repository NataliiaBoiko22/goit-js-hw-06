const inputVal = document.getElementById("font-size-control");
const text = document.getElementById("text");
inputVal.addEventListener("input", () => {
  text.style.fontSize = inputVal.value + "px";
});
