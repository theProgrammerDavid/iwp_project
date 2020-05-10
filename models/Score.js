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
    }

});


module.exports = mongoose.model('Score', UserSchema);