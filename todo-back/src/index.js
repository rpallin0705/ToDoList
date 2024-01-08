// Importamos la aplicacion express de app.js
const app = require('./app.js');

// Iniciamos el servidor
app.listen(app.get('port'), () => {
    console.log("Servidor escuchando en puerto ", app.get("port"))
    console.log(`http://localhost:${app.get("port")}`);
})