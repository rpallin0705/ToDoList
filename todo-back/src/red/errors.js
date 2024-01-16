const answers = require('./answer.js');

function errors(err, req, res ,next) {
    console.log('[error', err);

    const messaje = err.messaje || 'Error interno';
    const status = err.statusCode || 500;

    answers.error(req, res, messaje, status);
}

module.exports = errors;
