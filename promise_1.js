new Promise((keepPromise) => {
  keepPromise(["Ana", "Bia", "Carlos", "Daniel"]);
})
  .then((resolve) => resolve[0])
  .then((first) => first[0])
  .then((letter) => letter.toLowerCase())
  .then(console.log);
