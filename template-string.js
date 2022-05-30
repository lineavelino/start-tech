let meuNome = 'JC';
let meuSobrenome = 'Bombardelli';
let minhaProfissao = 'Blockchain Developer';

// Sem template string
console.log('Olá, eu sou ' + meuNome + ' ' + meuSobrenome + ' e minha profissão é ' + minhaProfissao);

// Com template string
console.log(`Olá, eu sou ${meuNome} ${meuSobrenome} e minha profissão é ${minhaProfissao}`);

console.log(`O resultado da soma de 1 + 1 = ${1 + 1}`)

console.log(`O objeto json ${{ chave: 'valor' }}`);

let meuObjeto = {
    chave: 'novo valor'
}
console.log(meuObjeto)