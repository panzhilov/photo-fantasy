const mongoose = require('mongoose');
const { DB_QUERYSTRING } = require('../config/env');

exports.dbInit = () => {
    try {
        const database = mongoose.connect(DB_QUERYSTRING);
        console.log("DB Ready");
      } catch (error) {
        console.log("Have problem with connecting to database");
      }
}