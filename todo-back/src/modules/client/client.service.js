// Import mysql module
const db = require('../../DB/mysql.js');


const TABLE = 'clients'


function getAllClients(){
    return db.getAll(TABLE);
}

module.exports = {
    getAllClients
}