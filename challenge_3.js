const fs = require("fs");
const path = require("path");

const pathway = path.join(__dirname, "data.txt");

console.log("Inicio");
displayContent(pathway)
  .then((content) => content.split("\n"))
  .then((lines) => console.log(lines[1]));
console.log("Fim");

function displayContent(contentPath) {
  return new Promise((resolve) => {
    const myContent = (_, content) => {
      resolve(content.toString());
    };
    fs.readFile(contentPath, myContent);
  });
}
