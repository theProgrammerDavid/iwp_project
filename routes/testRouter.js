
const express = require('express')
const router = express.Router()
const Offense = require('../models/Offense');

router.post('/', async function (req, res) {

    res.render('testpage', { layout: 'layout/afterSignIn' });
    //res.send('test page: '+req.body.testid);

});

router.post('/event', async function (req, res) {
    console.log('received cheating reuqest on ' + req.session.email);
    let offense = new Offense({ email: req.session.email });
    offense.save().then().
        catch((err) => { console.err(err) });

    res.send('confirmed');
});

module.exports = router;