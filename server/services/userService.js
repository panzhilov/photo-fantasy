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
  
  await user.save();
}

async function login(email, password) {
  const user = await User.findOne({email});
  
  if(!user){
    throw new Error('Incorect email or password');
  }

  const isValidPassword = await bcrypt.compare(password, user.password)
  

  if(!isValidPassword){
    throw new Error('Incorect email or password');
  }
  
  return user;
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
  login,
  createToken
}