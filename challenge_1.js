const sum1 = (num1) => {
  return (num2) => {
    return (num3) => {
      return num1 + num2 + num3;
    };
  };
};

const multiply = (num1) => (num2) => num1 * num2;
const sum2 = (num1) => (num2) => num1 + num2;
const subtract = (num1) => (num2) => num1 - num2;

const calculate = (num1) => {
  return (num2) => {
    return (fn) => {
      return fn(num1)(num2);
    };
  };
};

console.log(calculate(3)(7)(multiply));
console.log(calculate(3)(7)(sum2));
console.log(calculate(3)(7)(subtract));
