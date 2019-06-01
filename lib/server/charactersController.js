const { ObjectID } = require("mongodb");
const server = require('./server');
const { NestedFilters } = require('./utils/CharacterFilters');

exports.getCharacter = async (req, res) => {
  let characterID;
  try {
    characterID = new ObjectID(req.params.id);
  } catch (err) {
    res.status(422).json({ message: `Invalid ID format: ${err}` });
    return;
  }
  let character;
  try {
    character = await server.db.collection('characters')
      .find({ _id: characterID })
      .limit(1)
      .next();
  } catch (err) {
    res.status(500).json({ message: `Internal Server Error: ${err}` });
    return;
  }
  if (!character) {
    res.status(404).json({ message: `No character found: ${characterID}` });
    return;
  }
  res.json(character);
};

exports.getCharacters = async (req, res) => {
  const filter = {};
  Object.keys(req.query).forEach((key) => {
    const value = req.query[key];
    const addFilter = NestedFilters[key](value, filter);
    Object.assign(filter, addFilter);
  });
  try {
    const characters = await server.db.collection('characters')
      .find(filter)
      .toArray();
    const metadata = { total_count: characters.length };
    res.json({ metadata, characters });
  } catch (err) {
    res.status(500).json({ message: `Internal Server Error: ${err}` });
  }
};

exports.updateCharacter = async (req, res) => {
  let characterId;
  try {
    characterId = new ObjectID(req.params.id);
  } catch (err) {
    res.status(422).json({ message: `Invalid characters id format: ${err}` }).send();
    return;
  }
  const character = req.body;
  delete character._id;
  try {
    await server.db
      .collection("characters")
      .updateOne({ _id: characterId }, { $set: character });
  } catch (err) {
    res.status(500).json({ message: `Failed to save character: ${err}` }).send();
    return;
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
  newCharacter.created = new Date();
  let insertResult;
  try {
    insertResult = await server.db
      .collection("characters")
      .insertOne(newCharacter);
    res.status(200).json(insertResult);
  } catch (err) {
    res.status(500).json({ message: `Error creating new character: ${err}` });
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
    if (deleteResult.result.n === 1) {
      res.status(200).json({ message: `Delete character success.`, status: `OK`, result: deleteResult });
      return;
    }
  } catch (err) {
    res.status(500).json({ message: `Internal Server Error, failed to delete character: ${err}` });
  }
};

exports.deleteCharacters = async (req, res) => {
  const filter = {};
  if (req.query.user) {
    filter.user = req.query.user;
  }
  if (req.query.class) {
    filter.class = req.query.class;
  }
  if (req.query.ancestry) {
    filter.ancestry = req.query.ancestry;
  }
  if (req.query.level_lte || req.query.level_gte) {
    filter.level = {};
  }
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
