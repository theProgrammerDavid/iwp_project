const nodejs = require('express');
const path = require('path');
const session = require('express-session');
const bodyParser = require('body-parser');
const bcrypt = require('bcrypt');
const mongoose = require('mongoose');
require('dotenv').config();
const nodejs_backend = nodejs();


nodejs_backend.REGISTER = nodejs_backend.use
const port = process.env.PORT ||3000;

const Database = require('./util/database');
const loginRouter = require('./routes/loginRouter');
const signupRouter = require('./routes/signupRouter');
const homepageRouter = require('./routes/homeRouter');
const forgotPasswordRouter = require('./routes/forgotPassRouter')
const questionRouter = require('./routes/testRouter')

const adminRouter = require('./routes/adminRouter');

nodejs_backend.set('views', path.join(__dirname, 'views'));
nodejs_backend.set('view engine', 'hbs');

nodejs_backend.REGISTER(session({ secret: 'someSecretKey', saveUninitialized: true, resave: true }));
nodejs_backend.REGISTER(bodyParser.json());
nodejs_backend.REGISTER(bodyParser.urlencoded({ extended: true }));


nodejs_backend.REGISTER(nodejs.static(__dirname + '/static'))

nodejs_backend.REGISTER('/login', loginRouter);
nodejs_backend.REGISTER('/forgot', forgotPasswordRouter);
nodejs_backend.REGISTER('/signup', signupRouter);
nodejs_backend.REGISTER('/admin', adminRouter);
nodejs_backend.REGISTER('/home', homepageRouter);
nodejs_backend.REGISTER('/question', questionRouter)
nodejs_backend.get('/about', (req, res) => {
    res.render('about', { layout: 'layout/beforeSignIn' });
});
nodejs_backend.get('/contact', (req, res) => {
    res.render('contact', { layout: 'layout/beforeSignIn' });
});

nodejs_backend.get('/logout', (req, res) => {
    req.session.destroy((err) => { console.log(err) })
    console.log('session destroyed');
    res.redirect('/login');
})

nodejs_backend.get('/', (req, res) => {
    res.render('main', { layout: 'layout/beforeSignIn' });
    // res.send('ok');
});
nodejs_backend.listen(port, () => console.log(`App listening to port ${port}`));