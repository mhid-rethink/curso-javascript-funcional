// Função como parametro de outra
function goodMorning() {
  console.log("Good Morning!");
}

const goodEvening = () => console.log("Good Evening");

executeSomething = (fn) => {
  if (typeof fn === "function") {
    fn();
  }
};

executeSomething(goodMorning);
executeSomething(goodEvening);

// Retornar função a partir de outra função

const power = (basis) => {
  return (exp) => {
    return Math.pow(basis, exp);
  };
};
const powerOf2 = power(2);
console.log(powerOf2(8));
const power34 = power(3)(4);
console.log(power34);
