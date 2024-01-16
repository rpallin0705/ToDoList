const express = require('express');
// Import unified answers
const answer = require('../../red/answer.js')
// create router
const router = express.Router();
const userService = require('./client.service.js');


router.get('/', getAll);
router.get('/:id', getOne)
router.put('/', deleteOneC)
router.post('/', addOne)

/**
 * Controlador de la petición GET de clientes. LLama al servicio getAllClients y muestra los datos recibidos
 */
async function getAll(req, res, next) {
    try{
        const items = await userService.getAllClients();
        answer.success(req, res, items, 200);
    }catch(err) {
        next(err);
    }
}

async function getOne(req, res, next) {
    try {
        const items = await userService.getOneClientById(req.params.id);
        answer.success(req, res, items, 200);
    }catch(err) {
        next(err);
    }
    
}

async function deleteOneC(req, res, next) {
    try {
        const items = await userService.deleteOneClient(req.body);
        answer.success(req, res, "Item eliminado correctamente", 200);
    }catch(err) {
        next(err);
    }
    
}

async function addOne(req, res, next) {
    try {
        const items = await userService.deleteOneClient(req.body);
        if(req.body.id == 0)
            mensaje = 'Item guardado con exito';
        else
            mensaje = 'Item actualizado con exito';

        answer.success(req, res, "Item guardado correctamente", 201);
    }catch(err) {
        next(err);
    }
    
}


module.exports = router;