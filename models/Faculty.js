const mongoose = require('mongoose');
let validator = require('validator')

const Schema = mongoose.Schema;

const FacultySchema = new Schema({
    Name: {
        type: String,

    },
    Email: {
        type: String,

    },
    Phone: {
        type: String,
        required: true,
        select: true,
    },
    Password: {
        type: String,

    }

});


module.exports = mongoose.model('User', UserSchema);