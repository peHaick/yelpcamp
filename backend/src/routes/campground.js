const { Router } = require("express");
const {
  fetchCampgrounds,
  fetchCampground,
  getCampgroundAmount,
  createCampground,
  updateCampground,
  deleteCampground,
  catchAsync,
} = require("../controllers/CampgroundController");

const router = new Router();

router.get("/campgrounds", catchAsync(fetchCampgrounds));
router.get("/campgrounds/amount", catchAsync(getCampgroundAmount));
router.get("/campgrounds/:id", catchAsync(fetchCampground));

router.post("/campgrounds", catchAsync(createCampground));

router.put("/campgrounds/:id", catchAsync(updateCampground));

router.delete("/campgrounds/:id", catchAsync(deleteCampground));

module.exports = router;
