// Sem spread
let lista = [1, 2, 5];
let listaIncluir = [3, 4];

console.log("Lista: " + lista);
console.log("Lista incluir: " + listaIncluir);

for (let i = 0; i < listaIncluir.length; i++) {
    for (let j = 0; j < lista.length; j++) {
        if (lista[j] >= listaIncluir[i]) {
            lista.splice(j, 0, listaIncluir[i]);
            j++;
        }
    }
}
console.log("Lista depois da inclusão: " + lista);

// Com spread
const listResult = [1, 2, ...listaIncluir, 5];
console.log("List Result: " + listResult);

// Novo exemplo
let arr = ['a', 'b', 'c'];
let arr2 = [...arr];

arr2.push('d');

console.log(`Arr = ${arr}`);
console.log(`Arr 2 = ${arr2}`);