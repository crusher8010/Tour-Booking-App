const Review = require("../models/Review");
const Tour = require("../models/Tour");

exports.createReview = async (req, res) => {
    const tourId = req.params.tourId;

    try {
        const savedReview = await Review.create({ ...req.body });

        await Tour.findByIdAndUpdate(tourId, {
            $push: { reviews: savedReview._id }
        });

        res.status(200).json({
            success: true,
            message: "Review submitted",
            data: savedReview
        })

    } catch (err) {

        res.status(500).json({
            success: false,
            message: 'failed to submit'
        })

    }
}