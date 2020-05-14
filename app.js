const nodejs = require('express');
const path = require('path');
const session = require('express-session');
const bodyParser = require('body-parser');
const bcrypt = require('bcrypt');
const mongoose = require('mongoose');
require('dotenv').config();
const nodejs_backend = nodejs();

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

nodejs_backend.use(session({ secret: 'someSecretKey', saveUninitialized: true, resave: true }));
nodejs_backend.use(bodyParser.json());
nodejs_backend.use(bodyParser.urlencoded({ extended: true }));


nodejs_backend.use(nodejs.static(__dirname + '/static'))

nodejs_backend.use('/login', loginRouter);
nodejs_backend.use('/forgot', forgotPasswordRouter);
nodejs_backend.use('/signup', signupRouter);
nodejs_backend.use('/admin', adminRouter);
nodejs_backend.use('/home', homepageRouter);
nodejs_backend.use('/question', questionRouter)
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