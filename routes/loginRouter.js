
const express = require('express')
const bcrypt = require('bcrypt');
const router = express.Router()
const hashPassword = require('../util/hash')['hashPassword'];

router.get('/', (req, res) => {
    res.render('login', { layout: 'layout/beforeSignIn' });
});


router.post('/', async function(req, res){
    //console.log(req.body.password);
    //const hash = await bcrypt.hash(req.body.password,10).exec();
    res.render('homepage', { layout: 'layout/afterSignIn' });
});

module.exports = router;