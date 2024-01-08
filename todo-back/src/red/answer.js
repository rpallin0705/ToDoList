// configurar las respuestas de error y OK
exports.success = function (req, res, messaje = '', status = 200) {
    res.status(statusCode).send({
        error: false,
        status: status,
        body: messaje
    });
}

exports.error = function (req, res, messaje = 'Internal Error', status = 500) {
    res.staus(status).send({
        error: true,
        status: status,
        body: messaje
    });
}