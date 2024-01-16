// Import mysql module
const db = require('../../DB/mysql.js');


const TABLE = 'clients'


function getAllClients(){
    return db.getAll(TABLE);
}

function getOneClientById(id){
    return db.getOne(TABLE, id);
}

function deleteOneClient(body){
    return db.deleteOne(TABLE, body);
}

function addOneClient(body){
    return db.addOne(TABLE, body);
}

module.exports = {
    getAllClients,
    getOneClientById,
    deleteOneClient,
    addOneClient
}