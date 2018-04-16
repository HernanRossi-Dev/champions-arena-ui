import express from "express";
import bodyParser from "body-parser";
import { MongoClient } from "mongodb";
import SourceMapSupport from "source-map-support";
import path from 'path';
import "babel-polyfill";
var ObjectID = require('mongodb').ObjectID;

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

app.get("/api/heros", (req, res) => {
  const filter = {};

  if (req.query.class) {
    filter.class = req.query.class;
  }
  db
    .collection("heros")
    .find(filter)
    .toArray()
    .then(heros => {
      //console.log(heros);
      console.log("Fetching database entries");
	    console.log(`Testing fetch filter ${req.query.class}`);
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

app.delete('/api/heros/:id', (req, res) => {
  let heroID;
  try {
    heroID = new ObjectID(req.params.id);
	  console.log(heroID);
	  console.log("hero id");
  } catch (error) {
    res.status(422).json({ message: `Invalid hero ID format: ${error}`});
    return;
  }

	db.collection('heros').deleteOne({ _id: heroID }).then((deleteResult) => {
		console.log(deleteResult.result);
			if (deleteResult.result.n === 1) res.json({ status: 'OK' });
			else {res.json({ status: 'Warning: object not found' });  console.log("ERROR4"); }
		}).catch(error => {
			res.status(500).json({ message: `Internal Server Error: ${error}` });
		});
});

app.get('*', (req, res) => {
  res.sendFile(path.resolve('static/index.html'));
});
