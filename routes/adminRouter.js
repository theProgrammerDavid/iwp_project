
const express = require('express')
const bcrypt = require('bcrypt');
const router = express.Router()
const Question = require('../models/Question');
const User = require('../models/User');
const hashPassword = require('../util/hash')['hashPassword'];

const adminPass = 'admin';

router.get('/', function (req, res) {
    if (req.session.username === 'admin')
        res.render('adminHome', { layout: 'layout/beforeAdminLogin' });
    // res.render('adminLogin', { layout: 'layout/beforeAdminLogin' });
    else res.redirect('/admin/login');
})

router.post('/add/question', function (req, res) {
    let q = new Question({
        "Question": req.body.question,
        "Option 1": req.body.option1,
        "Option 2": req.body.option2,
        "Option 3": req.body.option3,
        "Option 4": req.body.option4,
        testid: req.body.testid,
        "Correct Answer": req.body.correctAnswer
    });
    q.save()
        .then(doc => {
            console.log('saved new question');
            res.send('saved new question');
        })
        .catch(err => {
            console.error(err);
            res.send(err);
        })
});

router.post('/add/user', async function (req, res) {
    let _pass = await hashPassword(req.body.password);
    let newUser = new User({
        Name: req.body.name,
        Email: req.body.email,
        Phone: req.body.phoneNumber,
        Password: _pass
    });
    newUser.save().then(doc => {
        console.log('Created New User');
        res.send('Created New User');
    }).catch(err => {
        console.log('Error creating new user\n' + err);
        res.send(err);
    })
});

router.get('/login', function (req, res) {
    res.render('adminLogin', { layout: 'layout/beforeAdminLogin' });
})
router.post('/login', function (req, res) {
    console.log(req.body)
    if (req.body.username === 'admin' && req.body.password === adminPass) {
        req.session.username = 'admin';
        res.redirect('/admin');
    }
    else
        res.render('adminLogin', { layout: 'layout/beforeAdminLogin', msg: 'Invalid Credentials' });
})
module.exports = router;