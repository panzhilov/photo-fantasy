const express = require("express");
const mongoose = require("mongoose");

const cors = require("./middlewares/cors");

function start() {
  try {
    const database = mongoose.connect(
      "mongodb://localhost:27017/photo-fantasy"
    );
    console.log("DB Ready");
  } catch (error) {
    console.log("Have problem with connecting to database");
  }

  const app = express();
  
  app.use(express.json());
  app.use(cors());

  app.listen(3000, () => {
    console.log("Server listening on port 3000");
  });
}

start();