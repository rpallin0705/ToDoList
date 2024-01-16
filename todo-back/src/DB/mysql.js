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
function mysqlConnect() {
    mysqlConnection = mysql.createConnection(dbconfig);

    mysqlConnection.connect((err) => {
        if (err) {
            console.log('[db err]', err);
            setTimeout(mysqlConnect, 200);
        } else {
            console.log('Connection with mysql stablished!!')
        }

        mysqlConnection.on('error', err => {
            console.log('[ db error]', err);
            if (err.code === 'PROTOCOL_CONNECTION_LOST') {
                mysqlConnection();
            } else {
                throw err;
            }
        })
    })

}

mysqlConnect();

/**
 * Realiza un consulta a la base de datos, de la cual espera una promesa con la información solicitada
 * @param {MySql table} table nombre de la tabla a la que se va a realizar la consulta
 * @returns 
 */
function getAll(table) {
    return new Promise((resolve, reject) => {
        mysqlConnection.query(`SELECT * FROM ${table}`, (error, result) => {
            return error ? reject(error) : resolve(result);
        })
    });
}

function getOne(table, id) {
    return new Promise((resolve, reject) => {
        mysqlConnection.query(`SELECT * FROM ${table} WHERE id=${id}`, (error, result) => {
            return error ? reject(error) : resolve(result);
        })
    });
}

function add(table, data) {

}

function deleteOne(table, data) {
    return new Promise((resolve, reject) => {
        mysqlConnection.query(`DELETE FROM ${table} WHERE id = ?`, data.id, (error, result) => {
            return error ? reject(error) : resolve(result);
        })
    });
}

function insertOne(table, data) {
    return new Promise((resolve, reject) => {
        mysqlConnection.query(`INSERT INTO ${table} SET ?`, data, (error, result) => {
            return error ? reject(error) : resolve(result);
        })
    });
}

function updateOne(table, data) {
    return new Promise((resolve, reject) => {
        mysqlConnection.query(`UPDATE ${table} SET ? where id = ?`,[data, data.id], (error, result) => {
            return error ? reject(error) : resolve(result);
        })
    });
}


function addOne (table, data){
    if(data && data.id == 0){
        return insertOne(table, data);
    }else{
        return updateOne(table, data);
    }
}

module.exports = {
    getAll,
    getOne,
    addOne,
    deleteOne
}