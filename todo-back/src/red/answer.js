// configurar las respuestas de error y OK
exports.success = function (req, res, messaje, status) {
    const statusCode = status || 200;
    const messajeOK = messaje || '';
    res.status(statusCode).send({
        error: false,
        status: statusCode,
        body: messajeOK
    });
}

exports.error = function (req, res, messaje, status) {
    const statusCode = status || 500;
    const messajeError = messaje || 'Internal Error';
    res.staus(status).send({
        error: true,
        status: statusCode,
        body: messajeError
    });
}