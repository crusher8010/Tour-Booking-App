const express = require("express");

const { createTour, updateTour, deleteTour, getAllTours, getSingleTour, getTourBySearch, getFeaturedTour, getTourCounts } = require("../controllers/tourController");

const { verifyAdmin } = require("../utils/verifyToken")

const router = express.Router();

router.route("/").post(verifyAdmin, createTour).get(getAllTours);
router.route("/search/getTourBySearch").get(getTourBySearch);
router.route("/search/getFeaturedTours").get(getFeaturedTour);
router.route("/search/getTourCount").get(getTourCounts);
router.route("/:id").get(getSingleTour).patch(verifyAdmin, updateTour).delete(verifyAdmin, deleteTour)

module.exports = router;