const mongoose = require('mongoose');
let validator = require('validator')

const Schema = mongoose.Schema;

const UserSchema = new Schema({
		name: {
			type: String,
			required: true,
			select: true,
		},
		email: {
			type: String,
			required: true,
			select: true,
			lowercase: true,
			validate : (value)=>{
				return validator.isEmail(value);
			}
		},
		phone: {
			type: String,
			required: true,
			select: true,
		},
		password: {
			type: String,
			required: true,
			select: true,
		},


});


module.exports = mongoose.model('User', UserSchema);