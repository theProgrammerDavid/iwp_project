const express = require('express');
const app = express();
const path = require('path');
const session = require('express-session');
const bodyParser = require('body-parser');
const bcrypt = require('bcrypt');

const port = 3000;

const loginRouter = require('./routes/loginRouter');

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'hbs');

app.use(session({ secret: 'someSecretKey', saveUninitialized: true, resave: true }));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use(express.static(__dirname + '/static'))
console.log(__dirname);
app.use('/login', loginRouter);

app.use('/signup', (req, res) => {

});

app.get('/', (req, res) => {
    res.render('main');
    // res.send('ok');
});
app.listen(port, () => console.log(`App listening to port ${port}`));