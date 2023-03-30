const composition = (...fns) => {
  return (valor) => {
    return fns.reduce(async (acc, fn) => {
      if (Promise.resolve(acc) === acc) {
        return fn(await acc);
      } else {
        return fn(acc);
      }
    }, valor);
  };
};
yell = (text) => text.toUpperCase();
emphasize = (text) => `${text}!!!!`;
slowDown = (text) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(text.split("").join(" "));
    }, 3000);
  });
};

const exaggerated = composition(yell, emphasize, slowDown);
const aLittleLessExaggerated = composition(yell, emphasize);
exaggerated("PARA").then(console.log);
exaggerated("Cuidado").then(console.log);
