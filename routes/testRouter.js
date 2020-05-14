
const express = require('express')
const router = express.Router()
const mongoose = require('mongoose');
const Offense = require('../models/Offense');
const Question = require('../models/Question');
const User = require('../models/User')
const Score = require('../models/Score');

function randomNumberGenerator() {
    var x = Math.floor((Math.random() * 100) + 1);
    return x
}

async function positiveScore(_email, _testid, posScore) {
    Score.find({
        email: _email,
        testid: _testid,  // search query
    })
        .then(doc => {
            if (doc) {
                //if doc is not null, it means that the user has a previous score


                Score
                    .findOneAndUpdate(
                        {
                            email: _email,
                            testid: _testid,// search query
                        },
                        {
                            score: score + posScore   // field:values to update
                        },
                        {
                            new: true,                       // return updated doc
                            // validate before update
                        })
                    .then(doc => {
                        console.log(doc)
                    })
                    .catch(err => {
                        console.error(err)
                    })

            }
            else {
                //user does not have a previous score. 
                //Thus we need to create a score for the user

                let s = new Score({
                    email: _email,
                })

                s.save()
                    .then(doc => {
                        console.log(doc)
                    })
                    .catch(err => {
                        console.error(err)
                    })
            }
        })
        .catch(err => {
            console.error(err)
        })
}

router.get('/make', async function (req, res) {
    count = 0;
    xx.forEach(function (d) {
        count = count + 1;
        let q = new Question({
            "Correct Answer": d["Correct Answer"],
            "Option 1": d["Option 1"],
            "Option 2": d["Option 2"],
            "Option 3": d["Option 3"],
            "Option 4": d["Option 4"],
            "Question": d["Question"],
            testid: 1,
            "Serial Number": count
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
    console.log(req.body)
    mongoose.model('Question').findOne({ testid: req.body.testid }, function (err, doc) {
        if (doc) {
            rand = randomNumberGenerator()
            Question.find({ "Serial Number": rand }).then((question) => {
                console.log(question['Option 1'])
                //res.render("testpage", {layout: 'layout/afterSignIn', question: question})
                res.redirect('/home/test');
            }).catch((e) => {
                res.status(500)
            })
        }
        else {
            res.send('test not found');
        }
    })
});

router.get('/', (req, res) => {
    rand = randomNumberGenerator()
    Question.findOne({ "Serial Number": rand.toString() })
        .then((q) => {
            console.log(q);
            res.render("testpage", { 
                layout: 'layout/afterSignIn', 
                text: q["Question"], op1: q['Option 1'], 
                op2: q["Option 2"], op3: q["Option 3"], 
                op4: q["Option 4"] })
        })
        .catch((e) => console.log(e));
})

//  router.post('/event', async function (req, res) {
//     console.log('received cheating reuqest on ' + req.session.email);
//     let offense = new Offense({ email: req.session.email });
//     offense.save().then().
//         catch((err) => { console.log(err) });

//     res.send('confirmed');
// });

module.exports = router;