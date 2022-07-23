const userService = require("../services/userService");

async function registerUser(req, res){
  const { email, firstName, lastName, password } = req.body;

  try {
    const result = await userService.register(
      email,
      firstName,
      lastName,
      password
    );

    req.auth.createToken(result)

    res.cookie("user", token, { httpOnly: true });
    res.json(result);
  } catch (err) {
    console.error(err);
    res.status(400).json({ message: err.message });
  }
};

 async function loginUser(req, res){
  const { email, password } = req.body;
  try {
    const user = await userService.login(email, password);
    const token = await userService.createToken(user);
      
    res.cookie('user', token, { httpOnly: true });
    res.json(user);
  } catch (err) {
    console.error(err);
    res.status(400).json({ message: err.message });
  }
};

function logoutUser(req, res){
  res.clearCookie("user");
};

module.exports = {
    registerUser,
    loginUser,
    logoutUser
};
