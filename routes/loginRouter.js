
const nodejs = require('express')
const bcrypt = require('bcrypt');
const nodejs_backend = nodejs.Router()
const hashPassword = require('../util/hash')['hashPassword'];
const User = require('../models/User');


nodejs_backend.get('/', (req, res) => {
    if (req.session.email) { res.redirect('/home'); }
    else
        res.render('login', { layout: 'layout/beforeSignIn' });
});


nodejs_backend.post('/', async function (req, res) {

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

module.exports = nodejs_backend;