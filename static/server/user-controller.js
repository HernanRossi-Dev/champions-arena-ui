const server = require('./server');
const { ObjectID } = require("mongodb");
const { defaultCharacters } = require("./defaultCharacters");
const nodemailer = require('nodemailer');
const generator = require('generate-password');
const passwordHash = require('password-hash');

exports.createUser = async (req, res) => {
  const newUser = req.body;

  let i = 0;
  for (i; i < defaultCharacters.length; i += 1) {
    defaultCharacters[i].user = newUser.name;
    defaultCharacters[i]._id = new ObjectID(req.params.id);
  }
  server.db.collection("characters").insertMany(defaultCharacters);
  newUser.created = new Date();
  let createUser;
  try {
    createUser = await server.db
      .collection("users")
      .insertOne(newUser);
  } catch (err) {
    console.log(err);
    res.status(500).json({ message: `Failed to create new user: ${err}` });
    throw err;
  }

  const returnNewUser = await server.db
    .collection("users")
    .find({ _id: createUser.insertedId })
    .limit(1)
    .next();
  res.json(returnNewUser);
};

exports.getUsers = async (req, res) => {
  const filter = {};
  if (req.query.name) filter.name = req.query.name;
  if (req.query.email) filter.email = req.query.email;
  let users;
  try {
    users = await server.db.collection('users')
      .find(filter)
      .toArray();
  } catch (err) {
    console.log("Error: ", err);
    res.status(500).json({ message: `Internal Server Error: ${err}` });
  }

  if (req.query.sendEmail) {
    if (users.length > 0) {
      users = users[0];
    }
    const password = generator.generate({
      length: 8,
      numbers: true
    });
    const hashedTempPassword = passwordHash.generate('password');
    const text = `Hello your Arena user name is: ${users.name}\n\n your temporary password is: ${password}`;
    try {
      await server.db
        .collection('users')
        .update(
          { name: users.name },
          { password: hashedTempPassword, name: users.name, email: users.email },
          { upsert: false }
        );
    } catch (err) {
      res.json({ users });
      return;
    }
    const transporter = nodemailer.createTransport({
      service: 'Gmail',
      auth: {
        user: 'thechampionsarena@gmail.com',
        pass: 'Han4567!'
      }
    });
    const mailOptions = {
      from: 'TheChampionsArena@gmail.com',
      to: users.email,
      subject: 'The Arena Temporary Password',
      text,
    };

    transporter.sendMail(mailOptions, (error, info) => {
      if (error) {
        console.log('Sending password email error: ', error);
      } else {
        console.log(`Message sent: ${info.response}`);
      }
    });
  }
  res.json({ users });
};

exports.deleteUsers = async (req, res) => {
  const deleteUser = req.query;
  const filter = {};
  if (deleteUser.name) filter.name = req.query.name;
  if (deleteUser.email) filter.email = req.query.email;
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
