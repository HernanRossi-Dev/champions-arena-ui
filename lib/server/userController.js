const { ObjectID } = require("mongodb");
const uuid = require('uuid');
const { cloneDeep } = require('lodash');
const { SendTempPassword } = require('./utils/tempPasswordHelper');
const server = require('./server');
const { defaultCharactersV2 } = require("./defaultCharactersV2");

exports.createUser = async (req, res) => {
  const newUser = req.body;
  const insertChars = cloneDeep(defaultCharactersV2);
  insertChars.forEach((character) => {
    character.user = newUser.name;
    character._id = ObjectID();
  });

  await server.db.collection("characters").insertMany(insertChars);
  newUser.created = new Date();
  let createUser;
  try {
    createUser = await server.db
      .collection("users")
      .insertOne(newUser);
  } catch (err) {
    res.status(500).json({ message: `Failed to create new user: ${err}` });
  }

  const returnNewUser = await server.db
    .collection("users")
    .find({ _id: createUser.insertedId })
    .limit(1)
    .next();
  res.json(returnNewUser);
};

exports.createUserBasic = async (req, res) => {
  const newUser = req.body;
  newUser.created = new Date();
  newUser._id = uuid.v4();
  try {
    await server.db
      .collection("users")
      .insertOne(newUser);
  } catch (err) {
    res.status(500).json({ message: `Failed to create new user: ${err}` });
    return;
  }
  res.status(200).json(newUser._id);
};

exports.getUsers = async (req, res) => {
  const filter = {};
  if (req.query.name) {
    filter.name = req.query.name;
  }
  if (req.query.email) {
    filter.email = req.query.email;
  }
  let users;
  try {
    users = await server.db.collection('users')
      .find(filter)
      .toArray();
    if (users.length < 1) {
      res.status(404).send();
      return;
    }
  } catch (err) {
    res.status(500).json({ message: `Internal Server Error: ${err}` });
    return;
  }
  if (req.query.sendEmail) {
    try {
      await SendTempPassword(server, users);
    } catch (err) {
      res.status(500).json({ message: `Internal Server Error: ${err}` });
      return;
    }
  }
  res.status(200).json({ users });
};

exports.getUser = async (req, res) => {
  const filter = {};
  if (req.query.name) {
    filter.name = req.query.name;
  }
  if (req.query.email) {
    filter.email = req.query.email;
  }
  if (req.query._id) {
    filter._id = req.query._id;
  }
  let user;
  try {
    user = await server.db.collection('users')
      .findOne(filter);
  } catch (err) {
    res.status(500).json({ message: `Internal Server Error: ${err}` });
    return;
  }
  res.status(200).json({ user });
};

exports.deleteUsers = async (req, res) => {
  const deleteUser = req.query;
  const filter = {};
  if (deleteUser.name) {
    filter.name = req.query.name;
  }
  if (deleteUser.email) {
    filter.email = req.query.email;
  }
  let deleteUserResult;
  try {
    deleteUserResult = await server.db
      .collection("users")
      .deleteMany(filter);
  } catch (err) {
    res.status(500).json({ message: `Failed to delete user: ${err}` });
  }

  if (!(deleteUserResult.result.n === 1)) {
    res.status(404).json({ status: "Warning: object not found" });
    return;
  }
  try {
    await server.db
      .collection("characters")
      .deleteMany({ user: deleteUser.name });
    res.status(200).json({ message: 'Delete characters success' });
  } catch (err) {
    res.status(500).json({ message: `Failed to delete characters: ${err}` });
  }
};

exports.deleteUser = async (req, res) => {
  const deleteUser = req.params.name;
  let deleteResult;
  try {
    deleteResult = await server.db
      .collection("users")
      .deleteOne({ name: deleteUser });
  } catch (err) {
    res.status(500).json({ message: `Internal Server Error: ${err}` });
  }
  if (deleteResult.result.n === 1) {
    try {
      await server.db
        .collection("characters")
        .deleteMany({ user: deleteUser });
      res.json({ status: "OK" });
    } catch (err) {
      res.status(500).json({ message: `Internal Server Error, failed to delete characters: ${err}` });
    }
  } else {
    res.status(500).json({ message: `Internal Server Error, failed to delete user.` });
  }
};
