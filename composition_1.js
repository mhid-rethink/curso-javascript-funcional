const composition = (...fns) => {
  return (valor) => {
    return fns.reduce((acc, fn) => fn(acc), valor);
  };
};
yell = (text) => text.toUpperCase();
emphasize = (text) => `${text}!!!!`;
slowDown = (text) => text.split("").join(" ");

const exaggerated = composition(yell, emphasize, slowDown);
const result = exaggerated("PARA");
const otherResult = exaggerated("Cuidado");

console.log(result);
console.log(otherResult);
