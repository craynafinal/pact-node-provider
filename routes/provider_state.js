const express = require('express');
const router = express.Router();

router.route('/')
  .post(function (req, res) {
    const consumer = req.body.consumer;
    const providerState = req.body.state;
    // imagine we're setting the server into a certain state
    console.log(`changed to provider state "${providerState}" for consumer "${consumer}"`);
    res.send(`changed to provider state "${providerState}" for consumer "${consumer}"`);
    res.status(200);
  });

module.exports = router;