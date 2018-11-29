const express = require("express");
const bodyParser = require("body-parser");
const SourceMapSupport = require("source-map-support");
const path = require("path");
require("babel-polyfill");
const authApi = require('./auth-controller');
const characterApi = require('./characters-controller');
const userApi = require('./user-controller');

const mongoose = require("mongoose");

const mongoDBUrl =
  "mongodb+srv://HernanRossi:UMlYnuMQWVomlFYW@pathfinderarena-gmjjh.mongodb.net/test";
const { ObjectID } = require("mongodb");

SourceMapSupport.install();
const app = express();
const helmet = require('helmet');

app.use(helmet());
app.use(express.static(path.join(__dirname, '../../dist')));
app.use(bodyParser.json());

mongoose.Promise = require("bluebird");

let db;
(async () => {
  try {
    await mongoose.connect(mongoDBUrl);
    app.listen(process.env.PORT || 8080, () => {
      console.log("App started on port 8080.");
    });
    db = mongoose.connection;
    db.on("error", console.error.bind(console, "MongoDB connection error:"));
    exports.db = db;
  } catch (err) {
    console.error('DB connection error: ', err);
  }
})();


app.get('/api/authenticate', authApi.authenticate);
app.use(authApi.authError);
app.get("/api/characters/:id", characterApi.getCharacter);
app.get("/api/characters", characterApi.getCharacters);
app.get("/api/users", userApi.getUsers);
app.get("*", (req, res) => {
  res.sendFile(path.resolve("static/index.html"));
});

const jwtCheck = authApi.jwtCheck();
app.use(jwtCheck);

app.post("/api/users", userApi.createUser);
app.delete("/api/users", userApi.deleteUsers);

app.put("/api/characters/:id", characterApi.updateCharacter);
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
        .next())
    .then((result) => {
      res.json(result);
    })
    .catch((error) => {
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
    .then((deleteResult) => {
      if (deleteResult.result.n === 1) res.json({ status: "OK" });
      else {
        res.json({ status: "Warning: object not found" });
        console.log("ERROR");
      }
    })
    .catch((error) => {
      res.status(500).json({ message: `Internal Server Error: ${error}` });
    });
});

app.delete("/api/characters", (req, res) => {
  const filter = {};
  if (req.query.user) filter.user = req.query.user;
  if (req.query.class) filter.class = req.query.class;
  if (req.query.race) filter.race = req.query.race;
  if (req.query.level_lte || req.query.level_gte) filter.level = {};
  if (req.query.level_lte) {
    filter.level.$lte = parseInt(req.query.level_lte, 10);
  }
  if (req.query.level_gte) {
    filter.level.$gte = parseInt(req.query.level_gte, 10);
  }
  db
    .collection("characters")
    .deleteMany(filter)
    .then((deleteResult) => {
      console.log(deleteResult.result);
      res.json({ status: "OK" });
    })
    .catch((error) => {
      res.status(500).json({ message: `Internal Server Error: ${error}` });
    });
});

app.delete("/api/users/:name", (req, res) => {
  const deleteUser = req.params.name;

  db
    .collection("users")
    .deleteOne({ name: deleteUser })
    .then((deleteResult) => {
      if (deleteResult.result.n === 1) {
        db
          .collection("characters")
          .deleteMany({ user: deleteUser })
          .then((result) => {
            res.json({ status: "OK" });
          })
          .catch((error) => {
            res.status(500).json({ message: `Internal Server Error: ${error}` });
          });
      } else {
        res.json({ status: "Warning: object not found" });
        console.log("ERROR");
      }
    })
    .catch((error) => {
      res.status(500).json({ message: `Internal Server Error: ${error}` });
    });
});



module.export = app;
