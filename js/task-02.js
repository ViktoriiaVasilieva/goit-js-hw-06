const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];

const list = document.querySelector("#ingredients");

const newArr = (element) => {
  return element.map((el) => {
    const item = document.createElement("li");
    item.textContent = el;
    item.classList.add("item");
    return item;
  });
};
const newingredients = newArr(ingredients);
list.append(...newingredients);
