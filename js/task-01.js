const categories = document.querySelectorAll("li.item");
console.log(`Number of categories:${categories.length}`);
const categoriesT = [...Array.from(categories)];
categoriesT.forEach((el) => {
  console.log(`Category:${el.firstElementChild.outerText}`);
  console.log(`Elements: ${el.lastElementChild.children.length}`);
});
