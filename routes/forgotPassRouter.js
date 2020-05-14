{
    var nodejs = require('express')
    var nodejs_backend_router = nodejs.Router()
}
nodejs_backend_router.get('/', (req, res) => {
    res.render('forgotPassword', { layout: 'layout/beforeSignIn' });
});


nodejs_backend_router.post('/', (req, res) => {
    console.log(req.body);
    res.send('signed up');
});

module.exports = nodejs_backend_router;