const fs = require("fs");
const path = require("path");

const pathway = path.join(__dirname, "data.txt");

// function displayContent(err, content) {
//   console.log(content.toString());
// }
// fs.readFile(pathway, {}, displayContent); //trazendo tds os parametros
fs.readFile(pathway, displayContent); //suprimindo o segundo parametro - o 1 parametro é obrigatorio

// _ é usado para mostrar que esse parametro não precisa ser passado
function displayContent(_, content) {
  console.log(content.toString());
}
// usando arrow function diretamente no parametro,
// Exemplo de impressao de forma assincrona (imprime inicio e fim, dps imprime o conteudo)
console.log("Inicio");
fs.readFile(pathway, (_, content) => console.log(content.toString()));
console.log("Fim");

// Exemplo de impressao de forma sincrona (imprime inicio, conteudo e depois fim)

console.log("Inicio sync");
const content = fs.readFileSync(pathway);
console.log(content.toString());
console.log("Fim sync");
