
const express = require('express')
const bcrypt = require('bcrypt');
const router = express.Router()
const hashPassword = require('../util/hash')['hashPassword'];

router.get('/', (req, res) => {
    res.render('signup', { layout: 'layout/beforeSignIn' });
});


router.post('/', async function (req, res) {
    //console.log(req.body);
    //const hash = await getHash(req);
    console.log(await hashPassword(req));
    res.send('signed up');
});

module.exports = router;