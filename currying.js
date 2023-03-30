// Sem currying

const textWithLengthBetween = (min, max, err, text) => {
  const textLength = (text || "").trim().length;

  if (textLength < min || textLength > max) {
    throw err;
  }
};

const p1 = { name: "A", price: 14.99, discount: 0.25 };
textWithLengthBetween(4, 255, "Nome inválido!", p1.name);

// Com currying
const textWithLengthBetweenUsingCurrying = (min) => {
  return (max) => {
    return (err) => {
      return (text) => {
        // Lazy Evaluation
        const textLength = (text || "").trim().length;

        if (textLength < min || textLength > max) {
          throw err;
        }
      };
    };
  };
};

defaultLength = textWithLengthBetweenUsingCurrying(4)(255);
defaultLength("Nome inválido!")(p1.name);
