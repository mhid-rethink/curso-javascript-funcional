const path = require("path");
const fn = require("./functions");
const subtitlesPath = path.join(__dirname, `../legendas`);
console.log(subtitlesPath);

const symbols = [
  ",",
  ".",
  "?",
  '"',
  "♪",
  "_",
  "-",
  "<i>",
  "</i>",
  "\r",
  "[",
  "]",
  "(",
  ")",
];

fn.findFilesInDir(subtitlesPath)
  .then(fn.elementsEndedWith(".srt"))
  .then(fn.readFilesContent)
  .then(fn.mergeContent)
  .then(fn.splitContentBy("\n"))
  .then(fn.removeItemIfEmpty)
  .then(fn.removeItemIfContains("-->"))
  .then(fn.removeItemIfOnlyNumbers)
  .then(fn.removeSymbols(symbols))
  .then(fn.mergeContent)
  .then(fn.splitContentBy(" "))
  .then(fn.removeItemIfEmpty)
  .then(fn.removeItemIfOnlyNumbers)
  .then(fn.groupElements)
  .then(fn.sortByNumericAttribute("quantity", "desc"))
  .then(console.log);
