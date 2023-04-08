const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];

const ingredientsHtml = document.getElementById("ingredients");

const handleIngridient = ingredients.map((ingredient) => {
  const liEl = document.createElement("li");
  liEl.classList.add("item");
  liEl.textContent = ingredient;
  return liEl;
});
ingredientsHtml.append(...handleIngridient);
