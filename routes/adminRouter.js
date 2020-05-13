
const express = require('express')
const bcrypt = require('bcrypt');
const router = express.Router()
const hashPassword = require('../util/hash')['hashPassword'];

const adminPass = "test123";

router.get('/', function (req, res) {
    if (req.session.username === 'admin')
        res.send('admin panel login')
    // res.render('adminLogin', { layout: 'layout/beforeAdminLogin' });
    else res.redirect('/admin/login');
})



router.get('/login', function (req, res) {
    res.render('adminLogin', { layout: 'layout/beforeAdminLogin' });
})
router.post('/login', function (req, res) {
    if (req.body.username === 'admin' && req.body.password === 'password') {
        res.render('adminHome', { layout: 'layout/beforeAdminLogin' });
    }
    else
        res.render('adminLogin', { layout: 'layout/beforeAdminLogin', msg: 'Invalid Credentials' });
})
module.exports = router;