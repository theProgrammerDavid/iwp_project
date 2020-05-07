
const express = require('express')
const bcrypt = require('bcrypt');
const router = express.Router()
const hashPassword = require('../util/hash')['hashPassword'];
const User = require('../models/User');


router.get('/', (req, res) => {
    res.render('login', { layout: 'layout/beforeSignIn' });
});


router.post('/', async function (req, res) {
    console.log(req.body.password)
    const _pass = await hashPassword(req.body.password);
    // console.log(req.body)
    const doc = await User.findOne({
        Email: req.body.email,
    })

    if (doc) {
        if (doc.password === _pass) {
            console.log('correct')
            // req.session.email = req.body.email;
            res.redirect('home');

        }

    }
    else { res.send('invalid credentials'); }
    // res.send('ok');

});

module.exports = router;