const userService = require("../services/userService");
const router = require("express").Router();

router.post("/register", async (req, res) => {
  const { email, firstName, lastName, password } = req.body;

  try {
    const result = await userService.register(
      email,
      firstName,
      lastName,
      password
    );

    const token = await userService.createToken(result);

    res.cookie("user", token, { httpOnly: true });
    res.json(result);
  } catch (err) {
    console.error(err);
    res.status(400).json({ message: err.message });
  }
});

router.post("/login", async (req, res) => {
  const { email, password } = req.body;

  try {
    const result = await userService.login(email, password);
    const token = await userService.createToken(result);

    res.cookie("user", token, { httpOnly: true });
    res.json(result);
    
  } catch (err) {
    console.error(err);
    res.status(400).json({ message: err.message });
  }
});

module.exports = router;