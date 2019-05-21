const nodemailer = require('nodemailer');
const generator = require('generate-password');
const passwordHash = require('password-hash');

exports.SendTempPassword = async (server, users) => {
  if (users.length < 1) {
    throw new Error('No user found.');
  }
  const password = generator.generate({
    length: 8,
    numbers: true
  });
  const hashedTempPassword = passwordHash.generate('password');
  const text = `Hello your Arena user name is: ${users.name}\n\n your temporary password is: ${password}`;
  await server.db
    .collection('users')
    .update(
      { name: users.name },
      { password: hashedTempPassword, name: users.name, email: users.email },
      { upsert: false }
    );
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
};
