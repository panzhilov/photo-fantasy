const express = require("express");

const cors = require("./middlewares/cors");
const { PORT } = require('./config/env');
const { dbInit } = require("./config/DB.JS");

const userController = require('./controllers/userController')


  const app = express();
  
  app.use(express.json());
  app.use(cors());

  app.use('/users', userController)

  dbInit();

  app.listen(PORT, () => console.log(`Server listening on port ${PORT}`));


