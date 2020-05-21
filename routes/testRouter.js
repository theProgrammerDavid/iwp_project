
const express = require('express')
const router = express.Router()
const mongoose = require('mongoose');
const Offense = require('../models/Offense');
const Question = require('../models/Question');
const User = require('../models/User')
const Score = require('../models/Score');
let x = 0;


function randomNumberGenerator() {
    var x = Math.floor((Math.random() * 100) + 1);
    return x
}

async function positiveScore(eemail, ttestid, posScore) {
    console.log('email is fun is ' + eemail)
    const s = await Score.findOne({ email: eemail, testid: ttestid });
    if (s) {
        let x = s.points;
        console.log('score already exists');
        Score
            .findOneAndUpdate(
                {
                    email: eemail, testid: ttestid  // search query
                },
                {
                   points: x+1   // field:values to update
                },
                {
                                           // return updated doc
                                // validate before update
                })
            .then(doc => {
               
            })
            .catch(err => {
                console.error(err)
            })
    }
    else {
        let ss = new Score({
            email: eemail, testid: ttestid, points: posScore
        })

        ss.save()
            .then(doc => {
                console.log(doc)
            })
            .catch(err => {
                console.error(err)
            })
    }
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
    

    Question.findOne({ "Serial Number": req.body.number }).then(
        (q) => {
            x = x + 1;
            if (q) {
                console.log(x);
                if (req.body.option == q["Correct Answer"]) {
                    positiveScore(req.session.email, 1, 1)
                    console.log("correct Answer")
                    //res.redirect('/home/test');
                }
            }
            else {
                console.log('q is null')
                //res.redirect('/home/test');
            }
            
            if(x>10){
                res.redirect("/results/")
            }
            res.redirect('/home/test');
        })

    // Question.findOne({ testid: 1 }, function (err, doc) {
    //     if (doc) {
    //         rand = randomNumberGenerator()
    //         Question.findOne({ "Serial Number": rand }).then((question) => {
    //             //res.render("testpage", {layout: 'layout/afterSignIn', question: question})
    //             res.redirect('/home/test');
    //         }).catch((e) => {
    //             res.status(500)
    //         })
    //     }
    //     else {
    //         res.send('question not found');
    //     }
    // })
});

router.get('/', async function (req, res) {
    console.log('email is ' + req.session.email);
    const u = await User.findOne({ email: req.session.email });
    if (u) {
        if (u.Timer <= 0) {
            res.send('Timer expired')
        }
        else {
            rand = randomNumberGenerator();
            Question.findOne({ "Serial Number": rand.toString() })
                .then((q) => {
                    //console.log('q is ');
                    // console.log(q);
                    res.render("testpage", {
                        layout: 'layout/afterSignIn',
                        text: q["Question"], op1: q['Option 1'],
                        op2: q["Option 2"], op3: q["Option 3"],
                        op4: q["Option 4"], number: q['Serial Number'],
                        testid: q["testid"]
                    })
                })
                .catch((e) => console.log(e));
        }
    }
    else {
        rand = randomNumberGenerator()
        Question.findOne({ "Serial Number": rand.toString() })
            .then((q) => {
                res.render("testpage", {
                    layout: 'layout/afterSignIn',
                    text: q["Question"], op1: q['Option 1'],
                    op2: q["Option 2"], op3: q["Option 3"],
                    op4: q["Option 4"], number: q['Serial Number'],
                    testid: q["testid"]
                })
            })
            .catch((e) => console.log(e));
    }

})

//  router.post('/event', async function (req, res) {
//     console.log('received cheating reuqest on ' + req.session.email);
//     let offense = new Offense({ email: req.session.email });
//     offense.save().then().
//         catch((err) => { console.log(err) });

//     res.send('confirmed');
// });

module.exports = router;