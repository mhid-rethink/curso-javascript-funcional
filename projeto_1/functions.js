const fs = require("fs");
const path = require("path");

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

function findFilesInDir(dir) {
  return new Promise((resolve, reject) => {
    try {
      const files = fs.readdirSync(dir).map((file) => path.join(dir, file));
      resolve(files);
    } catch (error) {
      reject(error, "Arquivos não encontrados");
    }
  });
}

function elementsEndedWith(end) {
  return function (array) {
    return array.filter((el) => el.endsWith(end));
  };
}
function readFileContent(contentPath) {
  return new Promise((resolve, reject) => {
    try {
      const content = fs.readFileSync(contentPath, { encoding: "utf-8" });
      resolve(content.toString());
    } catch (err) {
      reject(err);
    }
  });
}
function readFilesContent(contentPath) {
  return Promise.all(contentPath.map((content) => readFileContent(content)));
}

function removeItemIfEmpty(content) {
  return content.filter((el) => el.trim());
}

function removeItemIfContains(text) {
  return function (array) {
    return array.filter((el) => !el.includes(text));
  };
}
function removeItemIfOnlyNumbers(array) {
  return array.filter((el) => {
    const num = parseInt(el.trim());
    return num !== num;
  });
}

function removeSymbols(symbols) {
  return function (array) {
    return array.map((el) => {
      return symbols.reduce((acc, symbol) => {
        return acc.split(symbol).join("");
      }, el);
    });
  };
}

const mergeContent = (contents) => contents.join(" ");

const splitContentBy = (symbol) => {
  return function (content) {
    return content.split(symbol);
  };
};

const groupElements = (elements) => {
  return Object.values(
    elements.reduce((acc, element) => {
      const w = element.toLowerCase();
      const quantity = acc[w] ? acc[w].quantity + 1 : 1;
      acc[w] = { element: w, quantity };
      return acc;
    }, {})
  );
};

const sortByNumericAttribute = (attribute, order = "asc") => {
  return function (array) {
    const asc = (o1, o2) => o1[attribute] - o2[attribute];
    const desc = (o1, o2) => o2[attribute] - o1[attribute];
    return [...array].sort(order === "asc" ? asc : desc);
  };
};
module.exports = {
  composition,
  findFilesInDir,
  elementsEndedWith,
  readFileContent,
  readFilesContent,
  removeItemIfEmpty,
  removeItemIfContains,
  removeItemIfOnlyNumbers,
  removeSymbols,
  mergeContent,
  splitContentBy,
  groupElements,
  sortByNumericAttribute,
};
