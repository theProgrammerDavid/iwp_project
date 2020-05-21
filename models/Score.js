const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const ScoreSchema = new Schema({
    email: {
        type: String,
        
    },
    points: {
        type: Number,
    },
    testid:String

});


module.exports = mongoose.model('Score', ScoreSchema);