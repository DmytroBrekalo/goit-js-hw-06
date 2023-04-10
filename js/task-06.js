const inputEl = document.getElementById("validation-input");
const enumerateEl = inputEl.getAttribute("data-length");

inputEl.addEventListener("blur", function () {
  if (this.value.length !== enumerateEl) {
    this.classList.add("invalid");
    this.classList.remove("valid");
  } else {
    this.classList.add("valid");
    this.classList.remove("invalid");
  }
});
