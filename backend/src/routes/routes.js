const express = require('express');
route = express.Router();
controllerContas = require('../controller/controllerContas');

route.get('/', controllerContas.get);
route.get('/:id', controllerContas.getById);
route.post('/', controllerContas.post);
route.put('/:id', controllerContas.put);
route.delete('/:id', controllerContas.delete);

module.exports = route;