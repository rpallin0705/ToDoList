// Se importa dotenv para gestionar .env
require('dotenv').config();

module.exports = {
    app: {
        port: process.env.PORT || 3000,
    }
}