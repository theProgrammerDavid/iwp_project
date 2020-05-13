
const express = require('express')
const bcrypt = require('bcrypt');
const router = express.Router()
const hashPassword = require('../util/hash')['hashPassword'];

const adminPass = "test123";

router.get('/', function (req,res){
    res.render('adminLogin', { layout: 'layout/beforeAdminLogin' });
})


module.exports = router;