
const express = require('express')
const router = express.Router()
const mongoose = require('mongoose');
const Faculty = require('../models/Faculty');
const hashPassword = require('../util/hash')['hashPassword'];

//res.render('homepage', { layout: 'layout/afterSignIn' });
router.get('/', (req, res) => {
    if (req.session.facultyEmail) { res.send('faculty logged in'); }
    else {
        res.render('facultyLogin', { layout: 'layout/beforeSignIn' });
    }
});


router.post('/', async function (req, res) {

    const _pass = await hashPassword(req.body.password);

    const doc = await Faculty.findOne({
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