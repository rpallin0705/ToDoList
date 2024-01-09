const mysql = require('mysql');
const config = require('../config.js');

// constante con las variables necesarias para conectarse a mysql
const dbconfig = {
    host: config.mysql.host,
    user: config.mysql.user,
    password: config.mysql.password,
    database: config.mysql.database
}

// Variable para crear la conexion a la base de datos
let mysqlConnection;

/**
 * Esta funcion crea la conexion con la base de datos. Primero le asigna a la variable los valores necesarios pra crear la conexion,
 * Prueba a crear la conexion con connect. Una vez establecida la conexión se crea un manejador de eventos con on por si ocurriera algun error.
 */
function mysqlConnect(){
    mysqlConnection = mysql.createConnection(dbconfig);

    mysqlConnection.connect((err) => {
        if(err){
            console.log('[db err]', err);
            setTimeout(mysqlConnect, 200);
        }else {
            console.log('Connection with mysql stablished!!')
        }

        mysqlConnection.on('error', err => {
            console.log('[ db error]', err);
            if(err.code === 'PROTOCOL_CONNECTION_LOST'){
                mysqlConnection();
            }else {
                throw err;
            }
        })
    })

}

mysqlConnect();

function getAll(table){
    return new Promise((resolve, reject) => {
        mysqlConnection.query(`SELECT * FROM ${table}`, (error, result) => {
            if(error) return reject(error);
            resolve(result);
        })
    });
}

function getOne(tabñe, id){

}

function add(table, data){

}

function deleteOne(table, id){

}


module.exports = {
    getAll,
    getOne,
    add,
    deleteOne
}