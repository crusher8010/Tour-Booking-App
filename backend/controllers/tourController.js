const Tour = require("../models/Tour");

exports.createTour = async (req, res) => {

    try {
        const newTour = await Tour.create(req.body);

        res.status(200).json({
            success: true,
            message: 'Tour Created Successfully',
            data: newTour
        })
    } catch (err) {
        console.log(err)
        res.status(500).json({
            success: false,
            message: 'Failed to create new Tour'
        })
    }
}

exports.updateTour = async (req, res) => {
    try {
        const id = req.params.id;

        const updatedTour = await Tour.findByIdAndUpdate(id, req.body, {
            new: true,
            runValidators: true
        });

        res.status(200).json({
            success: true,
            message: 'Updated Tour Successfully',
            data: updatedTour
        });

    } catch (err) {

        res.status(500).json({
            success: false,
            message: 'Failed to update the tour'
        });

    }
}

exports.deleteTour = async (req, res) => {
    try {
        const id = req.params.id;

        await Tour.findByIdAndDelete(id);

        res.status(200).json({
            success: true,
            message: 'Deleted Tour Successfully'
        });

    } catch (err) {
        res.status(500).json({
            success: false,
            message: 'Failed to delete the tour'
        });
    }
}

exports.getSingleTour = async (req, res) => {
    try {
        const id = req.params.id;

        let SingleTour = await Tour.findById(id).populate("reviews");

        res.status(200).json({
            success: true,
            message: 'Successfully got the Tour',
            data: SingleTour
        })

    } catch (err) {
        res.status(500).json({
            success: false,
            message: 'Failed to get the singleTour'
        });
    }
}

exports.getAllTours = async (req, res) => {

    const page = parseInt(req.query.page);

    try {
        const AllTours = await Tour.find({}).populate("reviews").skip(page * 8).limit(8);

        res.status(200).json({
            success: true,
            count: AllTours.length,
            message: "Successfully got all tours",
            data: AllTours
        })

    } catch (err) {

        res.status(500).json({
            success: false,
            message: 'Failed to get allTours'
        });
    }
}

exports.getTourBySearch = async (req, res) => {

    const city = new RegExp(req.query.city, 'i');
    const distance = parseInt(req.query.distance);
    const maxGroupSize = parseInt(req.query.maxGroupSize);

    try {
        let qry = Tour.find();
        if (req.query.city) {

            qry = qry.find({ city });
        }

        if (req.query.distance) {

            qry = qry.find({ distance: { $gte: distance } })
        }

        if (req.query.maxGroupSize) {

            qry = qry.find({ maxGroupSize: { $gte: maxGroupSize } })
        }

        const tours = await qry.populate("reviews");


        if (tours.length > 0) {
            res.status(200).json({
                success: true,
                count: tours.length,
                message: "Successfully got all tours",
                data: tours
            });
        } else {
            res.status(200).json({
                success: true,
                message: "Unable to find such tours",
            });
        }



    } catch (err) {
        res.status(404).json({
            success: false,
            message: 'Failed to find such tours',
        });
    }
}

// Get Featured Tours

exports.getFeaturedTour = async (req, res) => {
    try {
        const tours = await Tour.find({ featured: true }).populate("reviews").limit(8);

        res.status(200).json({
            success: true,
            message: "All featured tours",
            data: tours
        })


    } catch (err) {
        res.status(404).json({
            success: false,
            message: 'Not found'
        })
    }
}

exports.getTourCounts = async (req, res) => {
    try {
        let tourCount = await Tour.estimatedDocumentCount();

        res.status(200).json({
            success: true,
            data: tourCount
        });

    } catch (err) {

        res.status(500).json({
            success: false,
            message: 'failed to fetch'
        });

    }
}