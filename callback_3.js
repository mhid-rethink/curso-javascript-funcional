const nums = [1, 2, 3, 4, 5];
const changedNums = (element, index, originalArray) =>
  element * 2 + index + originalArray.length;
console.log(nums.map(changedNums));

const names = ["Ana", "Bia", "Gui", "Lia", "Rafa"];
const firstLetter = (text) => text[0];
const letters = names.map(firstLetter);
console.log(names, letters);

const cart = [
  { name: "Caneta", quantity: 10, price: 7.99 },
  { name: "Impressora", quantity: 0, price: 649.5 },
  { name: "Caderno", quantity: 4, price: 27.1 },
  { name: "Lapis", quantity: 3, price: 5.82 },
  { name: "Tesoura", quantity: 1, price: 19.2 },
];

const getName = (item) => item.name;
const productList = cart.map(getName);
console.log(productList);

const getPurchasePrice = (element) => element.quantity * element.price;
const purchasePrice = cart.map(getPurchasePrice);
console.log(purchasePrice);

// Implementar map manualmente
Array.prototype.myMap = function (fn) {
  const newMap = [];
  for (let i = 0; i < this.length; i++) {
    newMap.push(fn(this[i], i, this));
  }
  return newMap;
};

const productListMyMap = cart.myMap(getName);
console.log(productListMyMap);

const purchasePriceMyMap = cart.myMap(getPurchasePrice);
console.log(purchasePrice);
