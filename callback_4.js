const cart = [
  { name: "Caneta", quantity: 10, price: 7.99 },
  { name: "Impressora", quantity: 0, price: 649.5 },
  { name: "Caderno", quantity: 4, price: 27.1 },
  { name: "Lapis", quantity: 3, price: 5.82 },
  { name: "Tesoura", quantity: 1, price: 19.2 },
];

const higherThanZero = (item) => item.quantity > 0;
const getName = (item) => item.name;
const validItens = cart.filter(higherThanZero).map(getName);

console.log(validItens);

Array.prototype.myFilter = function (fn) {
  const newObject = [];
  for (let i = 0; i < newObject.length; i++) {
    if (fn(this[i], i, this)) {
      newObject.push(this[i]);
    }
  }
  return newObject;
};

const validItensWithMyFilter = cart.myFilter(higherThanZero).map(getName);
console.log(validItensWithMyFilter);
