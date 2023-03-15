// Arrow function
const merryChristmas = () => console.log("Feliz Natal!");
merryChristmas();

const greetings = (name) => `Fala ${name}!`;
console.log(greetings("Matheus"));

// se função tiver corpo é necessário usar o return
const sum = (...numbers) => {
  //   let total = numbers.reduce((total, actualNumber) => total + actualNumber);
  let total = 0;
  for (let n of numbers) {
    total += n;
  }
  return total;
};
console.log(sum(1, 2, 3));
console.log(sum(1, 2, 3, 4, 5, 6));
console.log(sum(1, 2, 3, 4, 5, 6, 7, 8, 9));

const power = (basis) => (exp) => Math.pow(basis, exp);
console.log(power(2)(10));

//this - nao funciona em arrow function da mesma forma que em funções padrao
Array.prototype.last = function () {
  console.log(this[this.length - 1]);
};

Array.prototype.first = () => {
  console.log(this[0]);
};

const ArrayOfNumbers = [-333, 1, 2, 3, 500];
ArrayOfNumbers.last();
ArrayOfNumbers.first(); //experado retornar undefined
