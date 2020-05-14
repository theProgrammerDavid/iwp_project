{
    var nodejs = require('express')
    var nodejs_backend = nodejs.Router()
}
nodejs_backend.get('/', (req, res) => {
    res.render('forgotPassword', { layout: 'layout/beforeSignIn' });
});


nodejs_backend.post('/', (req, res) => {
    console.log(req.body);
    res.send('signed up');
});

module.exports = nodejs_backend;