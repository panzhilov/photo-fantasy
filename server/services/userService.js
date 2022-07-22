const User = require("../models/User");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");

const { SECRET } = require("../config/env");

 async function register(email, firstName, lastName, password) {
  const existingEmail = await User.findOne({email: new RegExp(`^${email}$`, 'i')});

  if(existingEmail) {
    throw new Error('This email is already used')
  }

  const user = new User({
    email,
    firstName,
    lastName,
    password
  });
  
  createToken(user);
  
  await user.save();
}


function createToken(user){
  const payload = {_id: user._id, email: user.email, firstName: user.firstName, lastName: user.lastName};
  const options = { expiresIn: '2d' }
  
  const tokenPromise = new Promise((resolve, reject) => {
    jwt.sign(payload, SECRET, options, (err, decodedToken) => {
        if(err) {
            return reject(err);
        }
        resolve(decodedToken);
    });
  });

  return tokenPromise;
}

module.exports = {
  register,
}