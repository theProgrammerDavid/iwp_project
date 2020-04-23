const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const UserSchema = new Schema({
		Name: {
			type: String,
			required: true,
			select: true,
		},
		email: {
			type: String,
			required: true,
			select: true,
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

