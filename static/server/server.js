/* eslint-disable no-trailing-spaces */
// import express from "express";
// import bodyParser from "body-parser";
// import SourceMapSupport from "source-map-support";
// import path from "path";
// import "babel-polyfill";
// import { defaultCharacters } from "./defaultCharacters";

let express = require( "express");
let bodyParser = require("body-parser");
let SourceMapSupport = require("source-map-support");
let path = require("path");
require("babel-polyfill");
let defaultCharacters = require("./defaultCharacters");
defaultCharacters = defaultCharacters.defaultCharacters;
const mongoose = require("mongoose");
const mongoDB =
  "mongodb+srv://HernanRossi:!Horseshit1!@pathfinderarena-gmjjh.mongodb.net/test";
const ObjectID = require("mongodb").ObjectID;
const jwt = require('express-jwt');
const jwks = require('jwks-rsa');


SourceMapSupport.install();
const app = express();

// let compression= require('compression');
// app.use(compression())

let helmet = require('helmet');
app.use(helmet());

app.use(express.static("static"));
app.use(bodyParser.json());

let jwtCheck = jwt({
	secret: jwks.expressJwtSecret({
		cache: true,
		rateLimit: true,
		jwksRequestsPerMinute: 5,
		jwksUri: "https://thearena.auth0.com/.well-known/jwks.json"
	}),
	audience: 'https://thecampaignArena.com',
	issuer: "https://thearena.auth0.com/",
	algorithms: ['RS256']
});



let characters = require("./models/characters");
let users = require("./models/users");

mongoose.Promise = require("bluebird");
mongoose
  .connect(mongoDB)
  .then(() => {
    app.listen(process.env.PORT || 8080, () => {
      console.log("App started on port 8080.");
    });
  })
  .catch(error => {
    console.log("Error: ", error);
  });
let db = mongoose.connection;
db.on("error", console.error.bind(console, "MongoDB connection error:"));

let devUser = {
  name: "hernan",
  password: "Horseshit1",
  email: "hernan_rossi@msn.com"
};

const request = require("request");

app.get('/api/authenticate', (req, res) =>{
	let options = { method: 'POST',
		url: 'https://thearena.auth0.com/oauth/token',
		headers: { 'content-type': 'application/json' },
		body: '{"client_id":"KuhIFt8Blg4CChqebw13Snf6XSwXz5Cf","client_secret":"QBIZeiYeH_tIMp2GXcGTuVdmMRXfQd_YLmkd947zsFMsEQxlQGw4SGsVQZyBXDIy","audience":"https://thecampaignArena.com","grant_type":"client_credentials"}' };

	request(options, function (error, response, body) {
		res.json(response);
	});
})

app.use(jwtCheck);
app.use(function (err, req, res, next) {
	if (err.name === 'UnauthorizedError') {
		res.status(401).json({message:'Missing or invalid token. Please logout And log back in.'});
	}
});

users.findOne({ email: devUser.email })
  .limit(1)
  .exec(function(err, user) {
    if (user) {
    } else {
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

  try {
    characterID = new ObjectID(req.params.id);
  } catch (e) {
    res.status(422).json({ message: `Invalid issue ID format: ${e}` });
    return;
  }

  db.collection('characters')
    .find({ _id: characterID })
    .limit(1)
    .next()
    .then(character => {
      if (!character) {
        res.status(404).json({ message: `No character found: ${characterID}` });
      } else {
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
	if (req.query.user) filter.user = req.query.user;
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
    	console.log('Character added to list');
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

app.delete("/api/characters", (req, res) => {
	const filter = {};
	if (req.query.user) filter.user = req.query.user;
	if (req.query.class) filter.class = req.query.class;
	if (req.query.race) filter.race = req.query.race;
	if (req.query.level_lte || req.query.level_gte) filter.level = {};
	if (req.query.level_lte)
		filter.level.$lte = parseInt(req.query.level_lte, 10);
	if (req.query.level_gte)
		filter.level.$gte = parseInt(req.query.level_gte, 10);
	db
		.collection("characters")
		.deleteMany(filter)
		.then(deleteResult => {
			console.log(deleteResult.result);
			res.json({ status: "OK" });
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

	if(newUser.isGuest) {
		let guestUserName ='guest';
		guestUserName += Math.random().toString().slice(2,7);
	  newUser.name = guestUserName;
  }
	let i = 0;
	for (i; i < defaultCharacters.length; i += 1) {
		defaultCharacters[i].user = newUser.name;
	}
	db.collection("characters").insert(defaultCharacters);
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

app.get("/api/users", (req, res) => {
	const filter = {};
	if (req.query.name) filter.name = req.query.name;
	if (req.query.email) filter.email = req.query.email;

	db.collection('users')
		.find(filter)
		.toArray()
		.then(users => {
			if(req.query.sendEmail) {
				if(users.length > 0) {
					users = users[0];
				}
				let nodemailer = require('nodemailer');
				let generator = require('generate-password');

				let password = generator.generate({
					length: 8,
					numbers: true
				});
				let passwordHash = require('password-hash');
				let hashedTempPassword = passwordHash.generate('password');
				let text = `Hello your Arena user name is: ${users.name}\n\n your temporary password is: ${password}`;
				db.collection('users').update({name: users.name},{password:hashedTempPassword, name: users.name, email: users.email}, {upsert: false});
				let transporter = nodemailer.createTransport({
					service: 'Gmail',
					auth: {
						user: 'hrossi.work@gmail.com', // Your email id
						pass: 'Horseshit1' // Your password
					}
				});
				let mailOptions = {
					from: 'hrossi.work@gmail.com', // sender address
					to: users.email, // list of receivers
					subject: 'The Arena Temporary Password', // Subject line
					text: text //, // plaintext body
					// html: '<b>Hello world ✔</b>' // You can choose to send an HTML body instead
				};

				transporter.sendMail(mailOptions, function(error, info){
					if(error){
						console.log(error);
						res.json({yo: 'error'});
					}else{
						console.log('Message sent: ' + info.response);
						res.json({yo: info.response});
					}
				});
			}
			res.json({ users });
		})
		.catch(error => {
			console.log("Error: ", error);
			res.status(500).json({ message: `Internal Server Error: ${error}` });
		});
});




app.delete("/api/users/:name", (req, res) => {
	const deleteUser = req.params.name;

	db
		.collection("users")
		.deleteOne({ name: deleteUser })
		.then(deleteResult => {
			if (deleteResult.result.n === 1) {
				db
					.collection("characters")
					.deleteMany({ user: deleteUser })
					.then(deleteResult => {
						res.json({ status: "OK" });
					})
					.catch(error => {
						res.status(500).json({ message: `Internal Server Error: ${error}` });
					});
			}
			else {
				res.json({ status: "Warning: object not found" });
				console.log("ERROR");
			}
		})
		.catch(error => {
			res.status(500).json({ message: `Internal Server Error: ${error}` });
		});

});

app.delete("/api/users", (req, res) => {
	const deleteUser = req.query;
	const filter = {};
	if(deleteUser.name) filter.name = req.query.name;
	if(deleteUser.email) filter.email = req.query.email;

	console.log(deleteUser);console.log(filter);
	db
		.collection("users")
		.deleteMany( filter )
		.then(deleteResult => {
			console.log(deleteResult.result.n);
			if (deleteResult.result.n === 1) {
				db
					.collection("characters")
					.deleteMany({ user: deleteUser.name })
					.then(deleteResult => {
						console.log(deleteResult.result);
						res.json({ status: "OK" });
					})
					.catch(error => {
						res.status(500).json({ message: `Internal Server Error: ${error}` });
					});
			}
			else {
				res.json({ status: "Warning: object not found" });
				console.log("ERROR");
			}
		})
		.catch(error => {
			res.status(500).json({ message: `Internal Server Error: ${error}` });
		});

});

app.get("*", (req, res) => {
	res.sendFile(path.resolve("static/index.html"));
});




module.export = app;


