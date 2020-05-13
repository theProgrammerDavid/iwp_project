const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const QuestionSchema = new Schema({

	"Question": {
		type: "string",
	},

	"Option 1": {
		type: "string",
	},
	"Option 2": {
		type: "string",
	},
	"Option 3": {
		type: "string",
	},
	"Option 4": {
		type: "string",
	},
	"Correct Answer": {
		type: "string",
	},
	testid:
		{ type: "string" }
});


module.exports = mongoose.model('Question', QuestionSchema);

