// sem arrow function
function soma(x, y) {
    return x + y;
};
console.log(soma(3, 4));

const multiplicacao = function (x, y) {
    return x * y;
};
console.log(multiplicacao(5, 5));

// com arrow function
const divisao = (x, y) => {
    return x / y;
};
console.log(divisao(20, 2));

const objeto = () => ({ nome: 'JC', sobrenome: 'Bombardelli' });