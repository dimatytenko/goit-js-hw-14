const listRef = document.querySelector("#categories");
console.log(`Number of categories: ${listRef.children.length}`);

[...listRef.children].forEach((item) => {
  console.log(`Category: ${item.firstElementChild.textContent}`);
  console.log(
    `Elements: ${item.firstElementChild.nextElementSibling.children.length}`
  );
});
