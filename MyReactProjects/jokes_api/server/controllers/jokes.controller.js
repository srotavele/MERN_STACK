const Joke = require("../models/jokes.model");

module.exports.getAllJokes = (req, res) => {
  Joke.find()
    .then(allJokes => res.json({ jokes: allJokes }))
    .catch(err => res.json({ message: "Something went wrong", error: err }));
};
module.exports.getOneJoke = (req, res) => {
	Joke.findOne({ _id: req.params.id })
		.then(getAJoke => res.json({ joke: getAJoke }))
		.catch(err => res.json({ message: "Something went wrong", error: err }));
};

module.exports.createNewJoke = (req, res) => {
  Joke.create(req.body)
    .then(newJoke => res.json({ joke: newJoke }))
    .catch(err => res.json({ message: "Something went wrong", error: err }));
};

module.exports.updateJoke = (req, res) => {
  Joke.updateOne({ _id: req.params.id }, req.body, { new: true })
    .then(updateJoke => res.json({ joke: updateJoke }))
    .catch(err => res.json({ message: "Something went wrong", error: err }));
};

module.exports.deleteOneJoke = (req, res) => {
  Joke.deleteOne({ _id: req.params.id })
    .then(deleteOneJoke => res.json({ deleteOneJoke: deleteOneJoke }))
    .catch(err => res.json({ message: "Something went wrong", error: err }));
};
