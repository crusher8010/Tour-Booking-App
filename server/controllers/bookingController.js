const Booking = require("../models/Booking");

exports.createBooking = async (req, res) => {
    try {
        let newBooking = await Booking.create(req.body);

        res.status(200).json({
            success: true,
            message: "Your tour is booked",
            data: newBooking
        })

    } catch (err) {
        console.log(err)
        res.status(500).json({
            success: false,
            message: 'Internal server error'
        })
    }
}

exports.getBooking = async (req, res) => {
    const id = req.params.id;

    try {
        const booked = await Booking.findById(id);

        res.status(200).json({
            success: true,
            message: "Saved Booking",
            data: booked
        })
    } catch (err) {

        res.status(404).json({
            success: false,
            message: "Booking not found"
        })
    }
}

exports.getAllBookings = async (req, res) => {
    try {
        const AllBookings = await Booking.find();

        res.status(200).json({
            success: true,
            message: "Successfully got all bookings",
            data: AllBookings
        })
    } catch (err) {
        res.status(404).json({
            success: false,
            message: "Don't have any booking"
        })
    }
}