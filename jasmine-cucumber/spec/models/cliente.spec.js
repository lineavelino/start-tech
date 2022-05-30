const Cliente = require('../../models/cliente')

describe('Clientes', () => {
    // Ação antes do teste
    beforeEach(() => {
    })

    // id, nome e telefone não podem ser undefined
    it('Valida propriedades de um cliente', () => {
        let cliente = Cliente.primeiro();
        expect(cliente.id).not.toBeUndefined();
        expect(cliente.nome).not.toBeUndefined();
        expect(cliente.telefone).not.toBeUndefined();
    });

    // teste para retornar lista com 10 itens
    it('Retorna todos', () => {
        let clientes = Cliente.todos();
        expect(clientes.length).toEqual(10)
    });

    // valida se o nome está em caixa alta
    it('Nome do cliente Upercase', () => {
        let cliente = Cliente.primeiro();
        cliente.nome = "danilo"
        expect(cliente.nomeUpercase()).toEqual("DANILO")
    });
})