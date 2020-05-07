
const express = require('express')
const bcrypt = require('bcrypt');
const router = express.Router()
const hashPassword = require('../util/hash')['hashPassword'];

const User = require('../models/User');

router.get('/', (req, res) => {
    res.render('signup', { layout: 'layout/beforeSignIn' });
});


router.post('/', async function (req, res) {
    //console.log(req.body);
    //const hash = await getHash(req);
    console.log(req.body)
    let newUser = new User({
        Name: req.body.name,
        Email: req.body.email,
        Phone: req.body.phoneNumber,
        Password: await hashPassword(req.body.password)
    });
    newUser.save().then(doc => {
        console.log('Created New User');
    }).catch(err => {
        console.log('Error creating new user\n' + err);
    })
    //console.log(await hashPassword(req.body.password));
    res.render('login', { layout: 'layout/beforeSignIn' });
});

module.exports = router;