class Data {
    // dia: number;
    // mes: number;
    // ano: number;

    constructor(public dia: number, public mes: number, public ano: number = 1970) { // 1970 default
        // this.dia = dia;
        // this.mes = mes;
        // this.ano = ano;
    }
}

const data = new Data(1, 1, 2020);
console.log(data.dia);

const data2 = new Data(1, 1);