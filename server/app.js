const express = require("express");
const cookieParser = require('cookie-parser');



const cors = require("./middlewares/cors");


const { PORT } = require('./config/env');
const { dbInit } = require("./config/DB.JS");
const { auth } = require("./middlewares/authMiddleware");



const userRoutes = require("./routes/userRoutes");
const photoRoutes = require("./routes/photoRoutes")




  const app = express();
  

  app.use(express.urlencoded({ extended: true }));
  app.use(express.json());
  app.use(cookieParser());
  app.use(cors());
  app.use(auth);

  

  app.use('/users', userRoutes)
  app.use('/photo', photoRoutes)


  dbInit();

  app.listen(PORT, () => console.log(`Server listening on port ${PORT}`));


