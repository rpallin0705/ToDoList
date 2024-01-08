const express = require('express');
const answer = require('../../red/answer.js')

const router = express.Router();

router.get('/', (req, res) => {
    answer.success(req, res, 'Everything OK from clients', 200);
});

module.exports = router;