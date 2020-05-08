
const express = require('express')
const router = express.Router()
const testRouter = require('./testRouter');

router.get('/', (req, res) => {
    if (req.session.email) { res.render('homepage', { layout: 'layout/afterSignIn' }); }
    else { res.redirect('/login'); }
});

router.use('/test', testRouter);

module.exports = router;