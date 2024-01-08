const express = require('express');
const config = require('./config.js');

const client = require('./modules/client/client.controller.js');

// Iniciamos aplicacion express
const app = express();

// Configuracion del puerto
app.set('port', config.app.port);

//Rutas
app.use('/api/client', client)

module.exports = app;