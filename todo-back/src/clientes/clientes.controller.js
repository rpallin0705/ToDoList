const express = require('express');

const router = express.Router();

router.get('/', (req, res) => {
    res.send('Clientes OK')
});

module.exports = router;