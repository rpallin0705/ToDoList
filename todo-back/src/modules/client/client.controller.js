const express = require('express');
// Import unified answers
const answer = require('../../red/answer.js')
// create router
const router = express.Router();
const userService = require('./client.service.js');

router.get('/', (req, res) => {
    const clients = userService.getAllClients().then((items) => {
        answer.success(req, res, items, 200);
    });
    
});

module.exports = router;