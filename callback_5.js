const cart = [
  { name: "Caneta", quantity: 10, price: 7.99 },
  { name: "Impressora", quantity: 0, price: 649.5 },
  { name: "Caderno", quantity: 4, price: 27.1 },
  { name: "Lapis", quantity: 3, price: 5.82 },
  { name: "Tesoura", quantity: 1, price: 19.2 },
];

const getTotalPrice = (acc, element) => acc + element.quantity * element.price;
const purchaseTotalPrice = cart.reduce(getTotalPrice, 0);
console.log(purchaseTotalPrice);

Array.prototype.myReduce = function (fn, start) {
  let acc = start;

  for (let i = 0; i < this.length; i++) {
    if (!acc && i === 0) {
      acc = this[i];
    } else {
      acc = fn(acc, this[i], i, this);
    }
  }
  return acc;
};

const getTotal = (element) => element.quantity * element.price;
const sum = (acc, element) => acc + element;
const purchaseTotalPriceMyReduce = cart.map(getTotal).myReduce(sum, 0);
console.log(purchaseTotalPriceMyReduce);
