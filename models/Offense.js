const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const OffenseSchema = new Schema({
		email:{
            type: String,
            required: true,
        },
        timestamp:{
            type:Date,
            default: new Date(),
        }

});


module.exports = mongoose.model('Offenses', OffenseSchema);

