const inputEl = document.getElementById("font-size-control");
const spanEl = document.getElementById("text");

function spanSizeChange() {
  spanEl.style["font-size"] = inputEl["value"] + "px";
}

inputEl.addEventListener("input", spanSizeChange);
