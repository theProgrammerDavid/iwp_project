
const express = require('express')
const router = express.Router()
const mongoose = require('mongoose');
const Offense = require('../models/Offense');
const Question = require('../models/Question');


router.get('/', (req, res) => {
    Question.find({}).then((questions) => {
        res.send(questions)
    }).catch((e)=>{
        res.status(500)
    })
})


router.post('/make', async function (req, res) {
    xx.forEach(function (d) {
        let q = new Question({
            "Correct Answer": d["Correct Answer"],
            "Option 1": d["Option 1"],
            "Option 2": d["Option 2"],
            "Option 3": d["Option 3"],
            "Option 4": d["Option 4"],
            "Question": d["Question"],
            testid: 1,
        });

        q.save()
            .then(doc => {
                console.log(doc)
            })
            .catch(err => {
                console.error(err)
            })
    });
    res.send('ok');
})

router.post('/', async function (req, res) {
    console.log(req.body.testid);
    mongoose.model('Question').findOne({ testid: req.body.testid }, function (err, doc) {
        if (doc) {
            res.render('testpage', { layout: 'layout/afterSignIn' });
        }
        else {

            res.send('test not found');
        }
    })



});

router.post('/event', async function (req, res) {
    console.log('received cheating reuqest on ' + req.session.email);
    let offense = new Offense({ email: req.session.email });
    offense.save().then().
        catch((err) => { console.log(err) });

    res.send('confirmed');
});

module.exports = router;