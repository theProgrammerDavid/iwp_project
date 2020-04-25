
const express = require('express')
const router = express.Router()

router.get('/', (req, res) => {
    res.render('login', { layout: 'layout/beforeSignIn' });
});


router.post('/', (req, res) => {
    console.log(req.body);
    res.send('ok');
});

module.exports = router;