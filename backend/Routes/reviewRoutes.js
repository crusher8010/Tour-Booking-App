const express = require("express");

const { createReview } = require("../controllers/reviewController")

const router = express.Router();

router.route('/:tourId').post(createReview)

module.exports = router;