
const express = require('express')
const router = express.Router()
const mongoose = require('mongoose');
const Question = require('../models/Question');
const testRouter = require('./testRouter');
const User = require('../models/User');
const Score = require('../models/Score');

router.get('/', (req, res) => {
    if (req.session.email) { res.render('homepage', { layout: 'layout/afterSignIn' }); }
    else { res.redirect('/login'); }
});

router.use('/test', testRouter);

async function startTimer(times, eemail) {
    if (times < 1) {
        return;
    }

    setTimeout(async function () {

        // Do something here
        const u = await User.findOne({ email: eemail });
        if(u){
            const result = await User.findOneAndUpdate({Timer: Timer - 1});
        }

        startTimer(times - 1, eemail);
    }, 1000);
}

router.post('/testid', async function (req, res) {
    console.log(req.body.testid);
    mongoose.model('Question').findOne({ testid: req.body.testid }, function (err, doc) {
        if (doc) {
            Question
                .find({
                    email: req.session.email,
                    // search query
                })
                .then(doc => {
                    console.log(doc)
                })
                .catch(err => {
                    console.error(err)
                })
            startTimer(60 * 60, req.session.email);
            res.redirect('/home/test');
        }
        else {

            res.send('test not found');
        }
    })



});
router.post('/grades', async function (req, res) {
    console.log(req.body.testid);
    Score
        .findOne({
            email: req.session.email,
            testid: req.body.testid  // search query
        })
        .then(doc => {
            console.log(doc);
            if (doc) {
                res.send(doc);
            }
            else { res.send('No marks found for test id of ' + req.body.testid); }
        })
        .catch(err => {
            console.error(err);
            res.send(err);
        })

});
module.exports = router;