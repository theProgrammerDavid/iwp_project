const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const Score = require('../models/Score')

router.get('/', function (req, res)  {
    Score.findOne({"email":req.session.email}).then(
        (s) => {
            res.render("results", {
                layout: 'layout/afterSignIn',
                email: s["email"],
                score: s["points"]
            })
            }
    ).catch((e) => {
        console.log(e);
    })    
}) 

module.exports = router;