const express = require('express');
const morgan = require('morgan');
const config = require('./config.js');

const client = require('./modules/client/client.controller.js');
const error = require('./red/errors.js');
// Iniciamos aplicacion express
const app = express();

// Middleware
app.use(morgan('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: true }))

// Configuracion del puerto
app.set('port', config.app.port);

//Rutas
app.use('/api/client', client)
app.use(error);

module.exports = app;