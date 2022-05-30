var elementos = [];
var topo = -1;
const max = 10;

function push(num) {
    if (topo < max) {
        topo = topo + 1;
        elementos[topo] = num;
    } else {
        console.log('Pilha está cheia.')
    }
}

function estaVazia() {
    return topo === -1;
}

function pop() {
    if (topo != -1) {
        let num = elementos[topo];
        topo = topo - 1;
        return num;
    } else {
        console.log('Pilha está vazia.');
    }
}

// Usando a pilha
push(10);
push(20);
push(30);

console.log(elementos);
while (topo != -1) {
    console.log('desempilhando: ', pop())
}

//Convertendo numero decimal para binário
var numDecimal = 10;
var resto;

while (numDecimal != 0) {
    resto = parseInt(numDecimal % 2);
    push(resto);
    numDecimal = parseInt(numDecimal / 2);
}

while (!estaVazia()) {
    console.log(pop());
}