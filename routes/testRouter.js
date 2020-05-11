
const express = require('express')
const router = express.Router()


router.post('/', async function (req, res) {

    res.render('testpage', { layout: 'layout/afterSignIn' });
    //res.send('test page: '+req.body.testid);

});

router.get('/event', async function (req, res) {
    res.redirect('/home');
});

module.exports = router;