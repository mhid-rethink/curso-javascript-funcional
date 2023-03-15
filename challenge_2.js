const cart = [
  { name: "Caneta", quantity: 10, price: 7.99, fragile: true },
  { name: "Impressora", quantity: 1, price: 649.5, fragile: true },
  { name: "Caderno", quantity: 4, price: 27.1, fragile: false },
  { name: "Lapis", quantity: 3, price: 5.82, fragile: false },
  { name: "Tesoura", quantity: 1, price: 19.2, fragile: true },
];

//filter, map e reduce
// 1. fragil: true
// 2. quantity * price -> preco total
// 3. media dos valores totais
const isFragile = (element) => element.fragile;

const getAverage = (acc, element) => {
  const newQuantity = acc.quantity + 1;
  const newTotal = acc.total + element.quantity * element.price;
  return {
    quantity: newQuantity,
    total: newTotal,
    media: newTotal / newQuantity,
  };
};
startAverage = { quantity: 0, total: 0, media: 0 };

const mediaFragile = cart.filter(isFragile).reduce(getAverage, startAverage);
console.log(mediaFragile);
