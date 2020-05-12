
const express = require('express')
const bcrypt = require('bcrypt');
const router = express.Router()
const hashPassword = require('../util/hash')['hashPassword'];
const User = require('../models/User');


router.get('/', (req, res) => {
    if (req.session.email) { res.redirect('/home'); }
    else
        res.render('login', { layout: 'layout/beforeSignIn' });
});


router.post('/', async function (req, res) {

    const _pass = await hashPassword(req.body.password);

    const doc = await User.findOne({
        Email: req.body.email,
    })

    if (doc) {
        if (doc.Password === _pass) {
            req.session.email = req.body.email;
            res.redirect('home');
        }
        else { res.render('login', { layout: 'layout/beforeSignIn', msg: 'Invalid Credentials' }); }

    }
    else { res.render('login', { layout: 'layout/beforeSignIn', msg: 'Invalid Credentials' }); }


});

module.exports = router;