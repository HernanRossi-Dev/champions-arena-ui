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

const expressOptions = {
  dotfiles: 'ignore',
  etag: false,
  index: false,
  maxAge: '1d',
  setHeaders: (res, path, stat) => {
    res.set('x-timestamp', Date.now());
  }
};

app.use(express.static(path.join(__dirname, '../../dist'), expressOptions));
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
app.delete("/api/users/:name", userApi.deleteUser);

app.put("/api/characters/:id", characterApi.updateCharacter);
app.post("/api/characters", characterApi.createCharacter);
app.delete("/api/characters/:id", characterApi.deleteCharacter);
app.delete("/api/characters", characterApi.deleteCharacters);

module.export = app;
