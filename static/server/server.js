/* eslint-disable no-trailing-spaces */
import express from "express";
import bodyParser from "body-parser";
import { MongoClient } from "mongodb";
import SourceMapSupport from "source-map-support";
import path from "path";
import "babel-polyfill";
var ObjectID = require("mongodb").ObjectID;

SourceMapSupport.install();
const app = express();
app.use(express.static("static"));
app.use(bodyParser.json());

let db;
MongoClient.connect("mongodb://localhost/")
  .then(client => {
    db = client.db("Pathfinder");
    app.listen(3000, () => {
      console.log("App started on port 3000.");
    });
  })
  .catch(error => {
    console.log("Error: ", error);
  });

app.get("/api/heros/:id", (req, res) => {
  let heroID;
  console.log("fetch hero");
  console.log(req.params.id);

  try {
    heroID = new ObjectID(req.params.id);
  } catch (e) {
    res.status(422).json({ message: `Invalid issue ID format: ${e}` });
    return;
  }

  db
    .collection("heros")
    .find({ _id: heroID })
    .limit(1)
    .next()
    .then(hero => {
      if (!hero) {
        res.status(404).json({ message: `No hero found: ${heroID}` });
      } else {
        console.log("fetching hero success");
        console.log(hero);
        res.json(hero);
      }
    })
    .catch(error => {
      console.log(error);
      res.status(500).json({ message: `Internal Server Error: ${error}` });
    });
});

app.get("/api/heros", (req, res) => {
  const filter = {};
  if (req.query.class) filter.class = req.query.class;
  if (req.query.race) filter.race = req.query.race;
  if (req.query.level_lte || req.query.level_gte) filter.level = {};
  if (req.query.level_lte)
    filter.level.$lte = parseInt(req.query.level_lte, 10);
  if (req.query.level_gte)
    filter.level.$gte = parseInt(req.query.level_gte, 10);
  db
    .collection("heros")
    .find(filter)
    .toArray()
    .then(heros => {
      const metadata = { total_count: heros.length };
      res.json({ _metadata: metadata, heros: heros });
    })
    .catch(error => {
      console.log("Error: ", error);
      res.status(500).json({ message: `Internal Server Error: ${error}` });
    });
});

app.post("/api/heros", (req, res) => {
  const newHero = req.body;
  if (!newHero.age) {
    newHero.age = 34;
  }
  if (!newHero.name) {
    res.status(422).json({ message: "New hero must have a name." });
    return;
  }




  newHero.created = new Date();
  db
    .collection("heros")
    .insertOne(newHero)
    .then(result =>
      db
        .collection("heros")
        .find({ _id: result.insertedId })
        .limit(1)
        .next()
    )
    .then(newHero => {
      res.json(newHero);
    })
    .catch(error => {
      console.log(error);
      res.status(500).json({ message: `Internal Server Error: ${error}` });
    });
});

app.delete("/api/heros/:id", (req, res) => {
  let heroID;
  try {
    heroID = new ObjectID(req.params.id);
    console.log(heroID);
    console.log("hero id");
  } catch (error) {
    res.status(422).json({ message: `Invalid hero ID format: ${error}` });
    return;
  }

  db
    .collection("heros")
    .deleteOne({ _id: heroID })
    .then(deleteResult => {
      console.log(deleteResult.result);
      if (deleteResult.result.n === 1) res.json({ status: "OK" });
      else {
        res.json({ status: "Warning: object not found" });
        console.log("ERROR4");
      }
    })
    .catch(error => {
      res.status(500).json({ message: `Internal Server Error: ${error}` });
    });
});

app.get("*", (req, res) => {
  res.sendFile(path.resolve("static/index.html"));
});

app.put("/api/heros/:id", (req, res) => {
  let heroId;
  console.log(req.params);
  console.log('req.params');
  try {
    heroId = new ObjectID(req.params.id);
  } catch (e) {
    res.status(422).json({ message: `Invalid hero id format: ${e}` });
    return;
  }

  const hero = req.body;
  delete hero._id;
  console.log(hero);
  console.log('hero');
  if (hero.created) {
    hero.created = new Date(hero.created);
  }
  db
    .collection("heros")
    .update({ _id: heroId }, hero)
    .then(() =>
      db
        .collection("heros")
        .find({ _id: heroId })
        .limit(1)
        .next()
    )
    .then(savedHero => {
      res.json(savedHero);
    })
    .catch(error => {
      console.log(error);
      res.status(500).json({ message: `Internal Server Error: ${error}` });
    });
});
