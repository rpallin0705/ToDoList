const express = require('express');
const config = require('./config.js');

const clientes = require('./clientes/clientes.controller.js');

// Iniciamos aplicacion express
const app = express();

// Configuracion del puerto
app.set('port', config.app.port);

//Rutas
app.use('/api/clientes', clientes)

module.exports = app;