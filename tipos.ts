// Boolean
const contaPaga: boolean = false;

// Number
const idade: number = 23;
const avaliacao: number = 4.5;

// String
const nome: string = "Aline Avelino";

// Array
const idades: number[] = [23, 28, 45, 32, 45];
const idades2: Array<number> = [23, 345, 456, 46];

// Tuple
let jogadores: [string, number, boolean];
jogadores = ["Aline", 28, true];

// Enum
enum StatusAprovacao {
    Aprovado = '001',
    Pendente = '002',
    Rejeitado = '003'
}
const statusDaAprovacao: StatusAprovacao = StatusAprovacao.Aprovado;

// Any
const retornoDaAPI: any[] = [123, "Aline", false];
const retornoDaAPI2: any = {
    //....
};

// Void - esse é inferido pelo TS, só colocar se quiser deixar claro
function printarNaTela(msg: string): void {
    console.log(msg);
}

// Null e Undefined
const u: undefined = undefined;
const n: null = null;

// Object
function criar(objeto: object) {
    //...
}
criar({
    propriedade: 1,
})
//criar("Aline") // dá erro