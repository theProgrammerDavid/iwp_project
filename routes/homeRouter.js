
const express = require('express')
const router = express.Router()

router.get('/', (req, res) => {
    if (req.session.email) { res.render('homepage', { layout: 'layout/afterSignIn' }); }
    else { res.redirect('/login'); }
});


module.exports = router;