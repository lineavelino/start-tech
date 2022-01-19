const fetch = require('node-fetch');

class Cielo {
    static compra(params) {
        fetch('https://apisandbox.cieloecommerce.cielo.com.br/1/sales/', {
            method: 'post',
            body: JSON.stringify(params),
            headers: { 'Content-Type': 'application/json' }
        })
            .then(res => res.json())
            .then(json => console.log(json));
    };
};

module.exports = Cielo;