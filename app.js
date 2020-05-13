const express = require('express');
const path = require('path');
const session = require('express-session');
const bodyParser = require('body-parser');
const bcrypt = require('bcrypt');
const mongoose = require('mongoose');
require('dotenv').config();
const app = express();

const port = process.env.PORT ||3000;

const Database = require('./util/database');
const loginRouter = require('./routes/loginRouter');
const signupRouter = require('./routes/signupRouter');
const homepageRouter = require('./routes/homeRouter');
const forgotPasswordRouter = require('./routes/forgotPassRouter')
const questionRouter = require('./routes/testRouter')

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'hbs');

app.use(session({ secret: 'someSecretKey', saveUninitialized: true, resave: true }));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));


app.use(express.static(__dirname + '/static'))

app.use('/login', loginRouter);
app.use('/forgot', forgotPasswordRouter);
app.use('/signup', signupRouter);
app.use('/home', homepageRouter);
app.use('/question', questionRouter)
app.get('/about', (req, res) => {
    res.render('about', { layout: 'layout/beforeSignIn' });
});
app.get('/contact', (req, res) => {
    res.render('contact', { layout: 'layout/beforeSignIn' });
});

app.get('/logout', (req, res) => {
    req.session.destroy((err) => { console.log(err) })
    console.log('session destroyed');
    res.redirect('/login');
})

app.get('/', (req, res) => {
    res.render('main', { layout: 'layout/beforeSignIn' });
    // res.send('ok');
});
app.listen(port, () => console.log(`App listening to port ${port}`));