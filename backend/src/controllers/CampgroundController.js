const Campground = require("../models/Campground");
const StatusError = require("../models/StatusError");

module.exports = {
  async fetchCampgrounds(req, res) {
    const { page, page_size } = req.query;
    const campgrounds = await Campground.find()
      .skip((page - 1) * page_size)
      .limit(page_size);
    res.send(campgrounds);
  },

  async getCampgroundAmount(req, res) {
    const amount = await Campground.count();
    res.send({ amount });
  },

  async fetchCampground(req, res, next) {
    const campground = await Campground.findById(req.params.id);

    if (!campground)
      throw new StatusError(
        404,
        "No campgrounds found with id " + req.params.id
      );

    res.send(campground);
  },

  async createCampground(req, res) {
    const campground = new Campground(req.body.campground);
    await campground.save();

    res.send(campground);
  },

  async updateCampground(req, res) {
    const { id } = req.params;
    const campground = await Campground.findByIdAndUpdate(
      id,
      {
        ...req.body.updates,
      },
      { new: true }
    );

    if (!campground)
      throw new StatusError(
        404,
        "No campgrounds found with id " + req.params.id
      );

    res.send(campground);
  },

  async deleteCampground(req, res) {
    const { id } = req.params;
    const campground = await Campground.findByIdAndDelete(id);

    if (!campground)
      throw new StatusError(
        404,
        "No campgrounds found with id " + req.params.id
      );

    res.send(campground);
  },

  catchAsync(fn) {
    return function (req, res, next) {
      fn(req, res, next).catch((e) => next(e));
    };
  },
};
