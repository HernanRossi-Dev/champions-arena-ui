const server = require('./server');
const { ObjectID } = require("mongodb");

exports.getCharacter = async (req, res) => {
  let characterID;
  try {
    characterID = new ObjectID(req.params.id);
  } catch (err) {
    res.status(422).json({ message: `Invalid issue ID format: ${err}` });
  }
  try {
    const character = await server.db.collection('characters')
      .find({ _id: characterID })
      .limit(1)
      .next();
    if (!character) {
      res.status(404).json({ message: `No character found: ${characterID}` });
    } else {
      res.json(character);
    }
  } catch (err) {
    res.status(500).json({ message: `Internal Server Error: ${err}` });
  }
};

exports.getCharacters = async (req, res) => {
  const filter = {};
  const levelFilter = { level_lte: '$lte', level_gte: '$gte' };
  Object.keys(req.query).forEach((key) => {
    if (levelFilter[key]) {
      if (!filter.level) {
        filter.level = {};
      }
      filter.level[levelFilter[key]] = parseInt(req.query[key], 10);
    } else {
      filter[key] = req.query[key];
    }
  });

  try {
    const characters = await server.db.collection('characters')
      .find(filter)
      .toArray();
    const metadata = { total_count: characters.length };
    res.json({ metadata: metadata, characters });
  } catch (err) {
    console.log("Error: ", err);
    res.status(500).json({ message: `Internal Server Error: ${err}` });
    throw err;
  }
};

exports.updateCharacter = async (req, res) => {
  let characterId;
  try {
    characterId = new ObjectID(req.params.id);
  } catch (err) {
    console.log("Error: ", err);
    res.status(422).json({ message: `Invalid characters id format: ${err}` });
    throw err;
  }
  const character = req.body;
  delete character._id;
  if (character.created) {
    character.created = new Date(character.created);
  }

  try {
    await server.db
      .collection("characters")
      .update({ _id: characterId }, character);
  } catch (err) {
    console.log("Error: ", err);
    res.status(500).json({ message: `Failed to save character: ${err}` });
    throw err;
  }

  const saveResult = await server.db
    .collection("characters")
    .find({ _id: characterId })
    .limit(1)
    .next();
  res.json(saveResult);
};

exports.createCharacter = async (req, res) => {
  const newCharacter = req.body;
  if (!newCharacter.age) {
    newCharacter.age = 34;
  }
  if (!newCharacter.name) {
    res.status(422).json({ message: "New Character must have a name." });
    return;
  }
  newCharacter.created = new Date();
  let insertResult;
  try {
    insertResult = await server.db
      .collection("characters")
      .insertOne(newCharacter);
  } catch (err) {
    console.log(err);
    res.status(500).json({ message: `Error creating new character: ${err}` });
  }

  try {
    const findInsert = await server.db
      .collection("characters")
      .find({ _id: insertResult.insertedId })
      .limit(1)
      .next();
    res.status(200).json(findInsert);
  } catch (err) {
    res.status(404).json({ message: `Could not find new character: ${err}` });
  }
};

exports.deleteCharacter = async (req, res) => {
  let characterID;
  try {
    characterID = new ObjectID(req.params.id);
  } catch (error) {
    res.status(422).json({ message: `Invalid characters ID format: ${error}` });
    return;
  }
  let deleteResult;
  try {
    deleteResult = await server.db
      .collection("characters")
      .deleteOne({ _id: characterID });
  } catch (err) {
    res.status(500).json({ message: `Internal Server Error, failed to delete character: ${err}` });
  }
  if (deleteResult.result.n === 1) {
    res.status(200)({ message: `Delete character success.`, status: `OK` });
  }
};

exports.deleteCharacters = async (req, res) => {
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
  let deleteResult;
  try {
    deleteResult = await server.db
      .collection("characters")
      .deleteMany(filter);
    res.status(200).json({ message: `Deleting characters success.`, status: `OK`, payload: deleteResult });
  } catch (err) {
    res.status(500).json({ message: `Internal Server Error, failed to delete characters: ${err}` });
  }
};
