execute = (fn, number1, number2) => fn(number1, number2);

const sumInTerminal = (number1, number2) => console.log(number1 + number2);
const subtractInTerminal = (number1, number2) => console.log(number1 - number2);

execute(sumInTerminal, 50, 30);
execute(subtractInTerminal, 50, 30);

const cb = () => console.log("Executando...");
setInterval(cb, 1000);
