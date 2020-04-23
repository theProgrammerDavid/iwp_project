const express = require('express');
const app = express();
const path = require('path');
const session = require('express-session');
const bodyParser = require('body-parser');
const bcrypt = require('bcryptjs');

const port = 3000;


app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'hbs');

app.use(session({ secret: 'someSecretKey', saveUninitialized: true, resave: true }));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(express.static('static'))

app.get('/', (req, res) => {
    
    res.render('login', { layout: 'layout/beforeSignIn' });
});
app.listen(port, () => console.log(`App listening to port ${port}`));