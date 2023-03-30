// const letters = ["O", "l", "a", " ", "m", "u", "n", "d", "o", "!"];

// const result = letters
//   .map((letter) => letter.toUpperCase())
//   .reduce((a, b) => a + b);

// console.log(result);

const nestedLetters = [
  ["O", ["l"], "a"],
  [" "],
  ["m", ["u", ["n"], "d"], "o"],
  ["!", "!", "!"],
];

const letters = nestedLetters.flat(Infinity);
console.log(letters);
