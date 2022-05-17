const express = require("express");
const app = express();
const connectToDB = require("./db");
const Campground = require("./models/campground");
const port = 3000;

app.listen(port, () => {
  connectToDB();
  console.log(`Server running on port ${port}`);
});

app.get("/campgrounds", async (req, res) => {
  const campgrounds = await Campground.find({});
  res.send(campgrounds);
});

app.get("/campgrounds/:id", async (req, res) => {
  const campground = await Campground.findById(req.params.id);
  res.send(campground);
});

app.post("/campgrounds", async (req, res) => {
  const campground = new Campground(req.body.campground);
  await campground.save();

  res.send(campground);
});

app.put("/campgrounds/:id", async (req, res) => {
  const { id } = req.params;
  const campground = await Campground.findByIdAndUpdate(id, {
    ...req.body.campground,
  });

  res.send(campground);
});

app.delete("campgrounds/:id", async (req, res) => {
  const { id } = req.params;
  await Campground.findByIdAndDelete(id);
});
