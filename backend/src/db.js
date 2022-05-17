const mongoose = require("mongoose");

const connectToDB = () => {
  mongoose.connect("mongodb://localhost:27017/yelpcamp");
  const db = mongoose.connection;
  db.on("error", console.error.bind(console, "connection error:"));
  db.once("open", () => {
    console.log("Database connected");
  });
};

module.exports = connectToDB;
