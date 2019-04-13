const express = require("express");
const bodyParser = require("body-parser");
const SourceMapSupport = require("source-map-support");
const path = require("path");
require("@babel/polyfill");
const authApi = require('./authController');
const characterApi = require('./charactersController');
const userApi = require('./userController');
const mongoose = require("mongoose");

let mongoDBUrl = "mongodb://HernanRossi:UMlYnuMQWVomlFYW@pathfinderarena-shard-00-00-gmjjh.mongodb.net:27017,pathfinderarena-shard-00-01-gmjjh.mongodb.net:27017,pathfinderarena-shard-00-02-gmjjh.mongodb.net:27017/test?ssl=true&replicaSet=PathfinderArena-shard-0&authSource=admin&retryWrites=true";

SourceMapSupport.install();
const server = express();
const helmet = require('helmet');
console.log('ENV: ', process.env.NODE_ENV);
if(process.env.NODE_ENV !== 'development') {
  server.get('*.js', function (req, res, next) {
    req.url = req.url + '.gz';
    res.set('Content-Encoding', 'gzip');
    res.set('Content-Type', 'text/javascript');
    next();
  });
  server.get('*.css', function(req, res, next) {
    req.url = req.url + '.gz';
    res.set('Content-Encoding', 'gzip');
    res.set('Content-Type', 'text/css');
    next();
   });
} 

server.use(helmet());

const expressOptions = {
  dotfiles: 'ignore',
  etag: false,
  index: false,
  maxAge: '1d',
  setHeaders: (res, path, stat) => {
    res.set('x-timestamp', Date.now());
  }
};

server.use(express.static(path.join(__dirname, '../../dist'), expressOptions));
server.use(bodyParser.json());

mongoose.Promise = require("bluebird");

let db;
(async () => {
  try {
    await mongoose.connect(mongoDBUrl, { useNewUrlParser: false });
    server.listen(process.env.PORT || 8080, () => {
      console.log("App started on port 8080.");
    });
    db = mongoose.connection;
    db.on("error", console.error.bind(console, "MongoDB connection error:"));
    exports.db = db;
  } catch (err) {
    console.error('DB connection error: ', err);
  }
})();


server.get('/api/authenticate', authApi.authenticate);
server.use(authApi.authError);
server.get("/api/characters/:id", characterApi.getCharacter);
server.get("/api/characters", characterApi.getCharacters);
server.get("/api/users", userApi.getUsers);
server.get("/api/user", userApi.getUser);
server.get("*", (req, res) => {
  res.sendFile(path.resolve("./index.html"));
});

const jwtCheck = authApi.jwtCheck();
server.use(jwtCheck);

server.post("/api/users", userApi.createUser);
server.post("/api/user/basic", userApi.createUserBasic);
server.delete("/api/users", userApi.deleteUsers);
server.delete("/api/users/:name", userApi.deleteUser);

server.put("/api/characters/:id", characterApi.updateCharacter);
server.post("/api/characters", characterApi.createCharacter);
server.delete("/api/characters/:id", characterApi.deleteCharacter);
server.delete("/api/characters", characterApi.deleteCharacters);

module.exports = server;
