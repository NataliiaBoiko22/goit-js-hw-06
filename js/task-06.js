const inputVal = document.getElementById("validation-input");
inputVal.value = "";
inputVal.addEventListener("blur", () => {
  if (inputVal.value.length === +inputVal.getAttribute("data-length")) {
    inputVal.className = "valid";
  } else {
    inputVal.className = "invalid";
  }
});
