const mongoose = require('mongoose');
let validator = require('validator')

const Schema = mongoose.Schema;

const UserSchema = new Schema({
		Name: {
			type: String,
			required: true,
			select: true,
		},
		Email: {
			type: String,
			required: true,
			select: true,
			unique:true,
			lowercase: true,
			validate : (value)=>{
				return validator.isEmail(value);
			}
		},
		Phone: {
			type: String,
			required: true,
			select: true,
		},
		Password: {
			type: String,
			required: true,
			select: true,
		},


});


module.exports = mongoose.model('User', UserSchema);