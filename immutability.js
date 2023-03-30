//garante imutabilidade
const pessoa = Object.freeze({
  nome: "Maria",
  altura: 1.76,
  cidade: "São Paulo",
  end: Object.freeze({
    rua: "Feliz",
  }),
});

// Atribuição por referência
const outraPessoa = pessoa;

// Passagem por referência (função impura)
const alteraPessoa = (pessoa) => {
  const novaPessoa = { ...pessoa }; // Shallow Copy
  novaPessoa.nome = "João";
  novaPessoa.cidade = "Fortaleza";
  novaPessoa.end.rua = "ABC";
  return novaPessoa;
};

const novaPessoa = alteraPessoa(pessoa);

console.log(outraPessoa);
console.log(novaPessoa);
