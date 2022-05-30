module.exports = class Cliente {
    constructor(_id = 0, _nome = "", _telefone = "") {
        this.id = _id;
        this.nome = _nome;
        this.telefone = _telefone;
    }

    nomeUpercase() {
        return this.nome.toUpperCase()
    }

    static primeiro() {
        return new Cliente()
    }

    static todos() {
        return [
            new Cliente(1, "Coquinha", "123456789"),
            new Cliente(2, "Drelow", "123456789"),
            new Cliente(3, "Bobinha", "123456789"),
            new Cliente(4, "Pixuca", "123456789"),
            new Cliente(5, "Bobinho", "123456789"),
            new Cliente(6, "Bubu", "123456789"),
            new Cliente(7, "Tchutchu", "123456789"),
            new Cliente(8, "Farinha", "123456789"),
            new Cliente(9, "Raimundinha", "123456789"),
            new Cliente(10, "Sogrito", "123456789"),
        ]
    }
}