const express = require("express");
const cors = require("cors");
const connectToDB = require("./db");
const Campground = require("./models/campground");

const app = express();
const port = 3000;

app.use(express.json());
app.use(cors());

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
    ...req.body.updates,
  });

  res.send(campground);
});

app.delete("/campgrounds/:id", async (req, res) => {
  const { id } = req.params;
  await Campground.findByIdAndDelete(id);
});
