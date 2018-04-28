/* eslint-disable no-trailing-spaces */
import express from "express";
import bodyParser from "body-parser";
import SourceMapSupport from "source-map-support";
import path from "path";
import "babel-polyfill";
import { defaultCharacters } from "./defaultCharacters";

var mongoose = require("mongoose");
var mongoDB =
  "mongodb+srv://HernanRossi:!Horseshit1!@pathfinderarena-gmjjh.mongodb.net/test";
var ObjectID = require("mongodb").ObjectID;

SourceMapSupport.install();
const app = express();
app.use(express.static("static"));
app.use(bodyParser.json());

let characters = require("./models/characters");
let users = require("./models/users");

mongoose.Promise = require("bluebird");
mongoose
  .connect(mongoDB)
  .then(() => {
    app.listen(3000, () => {
      console.log("App started on port 3000.");
    });
  })
  .catch(error => {
    console.log("Error: ", error);
  });
let db = mongoose.connection;
db.on("error", console.error.bind(console, "MongoDB connection error:"));

let devUser = {
  userName: "hernan",
  password: "h",
  email: "hernan_rossi@msn.com"
};

let testUser = {
  userName: "bruce",
  password: "b",
  email: "bruce_rossi@msn.com"
};

users.findOne({ email: devUser.email })
  .limit(1)
  .exec(function(err, user) {
    if (user) {
	    console.log("found user");
      console.log(user);
    } else {
      console.log("did not find user");
	    console.log(user);

	    db.collection("users").insert(devUser);
      let i = 0;
      for (i; i < defaultCharacters.length; i += 1) {
        defaultCharacters[i].user = devUser.name;
      }
      db.collection("characters").insert(defaultCharacters);
    }
  });

app.get("/api/characters/:id", (req, res) => {
  let characterID;
  console.log("fetch characters");
  console.log(req.params.id);

  try {
    characterID = new ObjectID(req.params.id);
  } catch (e) {
    res.status(422).json({ message: `Invalid issue ID format: ${e}` });
    return;
  }

  db.collections('characters')
    .find({ _id: characterID })
    .limit(1)
    .next()
    .then(character => {
      if (!character) {
        res.status(404).json({ message: `No character found: ${characterID}` });
      } else {
        console.log("fetching character success");
        console.log(character);
        res.json(character);
      }
    })
    .catch(error => {
      console.log(error);
      res.status(500).json({ message: `Internal Server Error: ${error}` });
    });
});

app.get("/api/characters", (req, res) => {
  const filter = {};
  if (req.query.class) filter.class = req.query.class;
  if (req.query.race) filter.race = req.query.race;
  if (req.query.level_lte || req.query.level_gte) filter.level = {};
  if (req.query.level_lte)
    filter.level.$lte = parseInt(req.query.level_lte, 10);
  if (req.query.level_gte)
    filter.level.$gte = parseInt(req.query.level_gte, 10);
	db.collection('characters')
    .find(filter)
    .toArray()
    .then(character => {
      const metadata = { total_count: character.length };
      res.json({ _metadata: metadata, characters: character });
    })
    .catch(error => {
      console.log("Error: ", error);
      res.status(500).json({ message: `Internal Server Error: ${error}` });
    });
});
app.get("/api/users", (req, res) => {
	db.collection('users')
		.find()
		.toArray()
		.then(users => {
			const metadata = { total_count: users.length };
			res.json({ _metadata: metadata, users: users });
		})
		.catch(error => {
			console.log("Error: ", error);
			res.status(500).json({ message: `Internal Server Error: ${error}` });
		});
});

app.post("/api/characters", (req, res) => {
  const newCharacter = req.body;
  if (!newCharacter.age) {
    newCharacter.age = 34;
  }
  if (!newCharacter.name) {
    res.status(422).json({ message: "New Character must have a name." });
    return;
  }

  newCharacter.created = new Date();
  db
    .collection("characters")
    .insertOne(newCharacter)
    .then(result =>
      db
        .collection("characters")
        .find({ _id: result.insertedId })
        .limit(1)
        .next()
    )
    .then(newCharacter => {
      res.json(newCharacter);
    })
    .catch(error => {
      console.log(error);
      res.status(500).json({ message: `Internal Server Error: ${error}` });
    });
});

app.delete("/api/characters/:id", (req, res) => {
  let characterID;
  try {
    characterID = new ObjectID(req.params.id);
    console.log(characterID);
    console.log("characters id");
  } catch (error) {
    res.status(422).json({ message: `Invalid characters ID format: ${error}` });
    return;
  }

  db
    .collection("characters")
    .deleteOne({ _id: characterID })
    .then(deleteResult => {
      console.log(deleteResult.result);
      if (deleteResult.result.n === 1) res.json({ status: "OK" });
      else {
        res.json({ status: "Warning: object not found" });
        console.log("ERROR");
      }
    })
    .catch(error => {
      res.status(500).json({ message: `Internal Server Error: ${error}` });
    });
});



app.put("/api/characters/:id", (req, res) => {
  let characterId;
  try {
    characterId = new ObjectID(req.params.id);
  } catch (e) {
    res.status(422).json({ message: `Invalid characters id format: ${e}` });
    return;
  }

  const character = req.body;
  delete character._id;

  if (character.created) {
    character.created = new Date(character.created);
  }
  db
    .collection("characters")
    .update({ _id: characterId }, character)
    .then(() =>
      db
        .collection("characters")
        .find({ _id: characterId })
        .limit(1)
        .next()
    )
    .then(savedCharacter => {
      res.json(savedCharacter);
    })
    .catch(error => {
      console.log(error);
      res.status(500).json({ message: `Internal Server Error: ${error}` });
    });
});

app.post("/api/users", (req, res) => {
	const newUser = req.body;
	console.log(newUser);console.log('newUser in server');
	console.log(newUser.isGuest);console.log('newUser guest in server');
	// let bcrypt = require('bcrypt');
	// const saltRounds = 10;
	// const input = Math.random().toString().slice(2,12);
	// bcrypt.hash(input, saltRounds, function(err, hash) {
	// 	console.log('hash');
	// 	console.log(hash);
	// });
	// // const guestUserName = 'guest@' +
	// bcrypt.compare(input, hash, function(err, res) {
	// 	if(res === true) {
	// 		console.log('matching hash');
	// 	}	 else {
	// 		console.log('Non matching hash');
	// 	}
	// });

	if(newUser.isGuest) {
		let guestUserName ='guest#';
		guestUserName += Math.random().toString().slice(2,12);
	  newUser.name = guestUserName;
  }
	newUser.created = new Date();
	db
		.collection("users")
		.insertOne(newUser)
		.then(result =>
			db
				.collection("users")
				.find({ _id: result.insertedId })
				.limit(1)
				.next()
		)
		.then(newUser => {
			res.json(newUser);
		})
		.catch(error => {
			console.log(error);
			res.status(500).json({ message: `Internal Server Error: ${error}` });
		});
});

app.get("*", (req, res) => {
	res.sendFile(path.resolve("static/index.html"));
});
module.export = app;
