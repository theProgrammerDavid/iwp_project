const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const QuestionSchema = new Schema({
	Testid: {
		type: String,
		required: true
	},
	qtext: {
		type: String,
		required: true,
		select: true,
	},
	OpAText: {
		type: String,
		required: true,
		select: true,
	},
	OpBText: {
		type: String,
		required: true,
		select: true,
	},
	OpCText: {
		type: String,
		required: true,
		select: true,
	},
	OpDText: {
		type: String,
		required: false,
		select: true,
	},
	Ans: {
		type: String,
		required: true,
		select: true,
	},
	PicUniqueID: {
		type: String,
		required: false,
		select: true,
	},


});


module.exports = mongoose.model('Questions', QuestionSchema);

