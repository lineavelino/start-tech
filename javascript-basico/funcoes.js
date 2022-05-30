function soma(operadorA, operadorB) {
    var resultadoC = operadorA + operadorB;
    return resultadoC;
}

function olaGama(nome) {
    console.log('Olá Gama! Você é o ' + nome);
}

var resultadoSoma = soma(1, 2);
var resultadoNovo = soma(10, 66);

console.log(resultadoSoma);
console.log(resultadoNovo);

olaGama('JC');