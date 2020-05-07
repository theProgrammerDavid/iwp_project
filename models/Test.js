const mongoose = require('mongoose');
const Question = require('Question');
const Schema = mongoose.Schema;

const TestSchema = new Schema({
		TimeLimit: {
			type: [Number],
			required: true,
			select: true,
		},
		Description: {
			type: String,
			required: false,
			select: true,
		},
		Testid: {
			type: String,
			required: true,
			select: true,
		},
		CorrectAns: {
			type: Number,
			required: true,
			select: true,
		},
		WrongAns: {
			type: Number,
			required: true,
			select: true,
        },
       


});


module.exports = mongoose.model('Tests', TestSchema);

