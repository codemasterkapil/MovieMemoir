import database from '../models/index.js';
const  User= database.user;

export const checkExistingUsername = (req, res, next) => {
  User.findOne({
    where: {
      username: req.body.username
    }
  })
  .then(user => {
    if (user) {
      res.status(400).send({
        message: "Username already used!"
      });
      return;
    }
    next();
  });
};

export const checkExistingEmail = (req, res, next) => {
  User.findOne({
    where: {
      email: req.body.email
    }
  }).then(user => {
    if (user) {
      res.status(400).send({
        message: "Email already used!"
      });
      return;
    }
    next();
  });
};


