
const express = require('express')
const router = express.Router()

router.get('/', (req, res) => {
    res.render('forgotPassword', { layout: 'layout/beforeSignIn' });
});


router.post('/', (req, res) => {
    console.log(req.body);
    res.send('signed up');
});

module.exports = router;