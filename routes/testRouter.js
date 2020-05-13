
const express = require('express')
const router = express.Router()
const mongoose = require('mongoose');
const Offense = require('../models/Offense');
const Question = require('../models/Question');
const User = require('../models/User')

function randomNumberGenerator(){
    var x = Math.floor((Math.random() * 20) + 1);
    return x
}
router.get('/', (req, res) => {
    rand = randomNumberGenerator()
    Question.find({"Serial Number": rand}).then((question) => {
        console.log(question["Option"])
        res.render("testpage", {layout: 'layout/afterSignIn', question: question})
    }).catch((e)=>{
        res.status(500)
    })
})


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
    mongoose.model('Question').findOne({ testid: req.body.testid }, function (err, doc) {
        if (doc) {
            res.render('testpage', { layout: 'layout/afterSignIn' });
        }
        else {

            res.send('test not found');
        }
    })



});

/* router.post('/event', async function (req, res) {
    console.log('received cheating reuqest on ' + req.session.email);
    let offense = new Offense({ email: req.session.email });
    offense.save().then().
        catch((err) => { console.log(err) });

    res.send('confirmed');
});
 */
module.exports = router;