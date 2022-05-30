var express = require('express');
var cielo = require('../lib/cielo');
var router = express.Router();

/* POST criação de compra. */
router.post('/', function (req, res, next) {
  res.send(cielo.compra(req.body));
});

/* GET status de compra. */
router.get('/:compra_id/status', function (req, res, next) {
  res.send('Rodando status...');
});

module.exports = router;
