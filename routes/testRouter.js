
const express = require('express')
const router = express.Router()

const Test = require('../models/Test')
const Question = require('../models/Question')


router.post('/', async function (req, res) {

    
    res.send('test page');

});

module.exports = router;