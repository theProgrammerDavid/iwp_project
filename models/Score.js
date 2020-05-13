const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const ScoreSchema = new Schema({
    email: {
        type: String,
        required: true
    },
    score: {
        type: Number,
        required: true
    },
    testid:String

});


module.exports = mongoose.model('Score', ScoreSchema);