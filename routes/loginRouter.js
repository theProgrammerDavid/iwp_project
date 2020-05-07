
const express = require('express')
const bcrypt = require('bcrypt');
const router = express.Router()
const hashPassword = require('../util/hash')['hashPassword'];
 


router.get('/', (req, res) => {
    res.render('login', { layout: 'layout/beforeSignIn' });
});


router.post('/', async function(req, res){

    // console.log(req.body.password);
    console.log(await hashPassword(req.body.password));
    res.send('ok');

});

module.exports = router;