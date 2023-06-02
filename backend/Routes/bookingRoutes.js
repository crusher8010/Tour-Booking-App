const express = require("express");

const { createBooking, getBooking, getAllBookings } = require("../controllers/bookingController");

const { verifyUser } = require("../utils/verifyToken")

const router = express.Router();

router.route('/').post(verifyUser, createBooking).get(verifyUser, getAllBookings);

router.route('/:id').get(verifyUser, getBooking);

module.exports = router;