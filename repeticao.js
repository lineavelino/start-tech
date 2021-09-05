var numeroSorteado = 10;

var tabuada = 7;

// for (<declaração de variável>; <condição que vai fazer o for parar>; <incremento>)
for (var i = 0; i <= 10; i++) {
    console.log("Valor de " + tabuada + ' x ' + i + ' = ' + tabuada * i);
}

for (var i = 0; i < 100; i++) {
    if (numeroSorteado === i) {
        console.log("Seu número foi encontrado.");
        break
    }
}