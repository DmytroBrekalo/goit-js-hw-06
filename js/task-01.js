const listItem = document.querySelectorAll(".item");
console.log(`Number of categories: ${listItem.length}`);

listItem.forEach((item) => {
  const header = item.querySelector("h2");
  console.log(`Category: ${header.textContent}`);

  const listEl = item.querySelectorAll("ul li");
  console.log(`Elements: ${listEl.length}`);
});
