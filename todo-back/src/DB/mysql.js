const mysql = require('mysql');
const config = require('../config.js');

// ToDo: Borrar, esto es una prueba
const prueba = {
    id: 1, 
    "nombre": "juan",
    "edad": 43
}

function getAll(table){
    return prueba;
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