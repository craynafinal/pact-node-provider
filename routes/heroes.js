// ./routes/heroes.js
const express = require('express');
const router = express.Router();

router.route('/')
    .post(function (req, res) {
        res.status(201);
        res.json({
            id: 42,
            superpower: 'flying',
            name: 'Superman',
            universe: 'DC'
        });
    });

module.exports = router;