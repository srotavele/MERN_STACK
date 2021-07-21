const mongoose = require("mongoose");

const JokeSchema = new mongoose.Schema({
	setup:{
		type:String,
		required: [true, "No setup, no punchline!!" ],
		minLength: [10, "Setup must be at least 10 characters long!!" ]
	},
	punchline:{
		type: String,
		required: [true, "No punchline, no joke!!"],
		minLength: [3, "THe punchline must be at least 3 characters long!!"]
	}
}); {timestamps: true}

const Joke = mongoose.model("Joke", JokeSchema);

module.exports = Joke;