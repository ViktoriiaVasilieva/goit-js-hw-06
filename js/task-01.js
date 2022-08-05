const listWithClass = document.querySelector("#categories");
const children = listWithClass.children;
console.log(`Number of categories: ${children.length}`);
[...children].forEach((el) => {
  console.log(`Category:${el.children[0].textContent}`);
  console.log(`Elements:${el.children[1].children.length}`);
});
