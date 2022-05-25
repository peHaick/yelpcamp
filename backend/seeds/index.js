const mongoose = require("mongoose");
const Campground = require("../src/models/Campground");
const cities = require("./cities");
const { places, descriptors } = require("./helpers");

mongoose.connect("mongodb://localhost:27017/yelpcamp");
const db = mongoose.connection;
db.on("error", console.error.bind(console, "connection error:"));
db.once("open", () => {
  console.log("Database connected");
});

const getRandom = (array) => array[Math.floor(Math.random() * array.length)];

const getPrice = (min, max) => {
  const price = Math.random() * (max - min) + min;
  return Math.trunc(price * 100) / 100;
};

const seedDB = async () => {
  await Campground.deleteMany({});
  for (let i = 0; i < 50; i++) {
    const city = getRandom(cities);
    const location = `${city.city}, ${city.state}`;
    const title = `${getRandom(descriptors)} ${getRandom(places)}`;

    const camp = new Campground({
      location,
      title,
      price: getPrice(100, 1000),
      imageURL: `https://picsum.photos/400/200?random=${i}`,
      description: `A ${title} located in ${location}.`,
    });

    await camp.save();
  }
};

seedDB().then(() => {
  console.log("Database seeded");
  db.close();
});
