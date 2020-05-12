const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const ScoreSchema = new Schema({
    Email: {
        type: String,
        required: true
    },
    Score: {
        type: Number,
        required: true
    },
    testid:String

});


module.exports = mongoose.model('Score', UserSchema);