const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];

const ingredientsRef = document.querySelector("#ingredients");

const createIngredientsList = (arr, listRef) => {
  const markup = arr.map((ingredient) => {
    const itemRef = document.createElement("li");
    itemRef.textContent = ingredient;
    return itemRef;
  });

  listRef.append(...markup);
};

createIngredientsList(ingredients, ingredientsRef);
