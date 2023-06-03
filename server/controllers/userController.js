const User = require("../models/User");



exports.updateUser = async (req, res) => {
    try {
        const id = req.params.id;

        const updatedUser = await User.findByIdAndUpdate(id, req.body, {
            new: true,
            runValidators: true
        });

        res.status(200).json({
            success: true,
            message: 'Updated User Successfully',
            data: updatedUser
        });

    } catch (err) {

        res.status(500).json({
            success: false,
            message: 'Failed to update the User'
        });

    }
}

exports.deleteUser = async (req, res) => {
    try {
        const id = req.params.id;

        await User.findByIdAndDelete(id);

        res.status(200).json({
            success: true,
            message: 'Deleted User Successfully'
        });

    } catch (err) {
        res.status(500).json({
            success: false,
            message: 'Failed to delete the User'
        });
    }
}

exports.getSingleUser = async (req, res) => {
    try {
        const id = req.params.id;

        let SingleUser = await User.findById(id);

        res.status(200).json({
            success: true,
            message: 'Successfully got the User',
            data: SingleUser
        })

    } catch (err) {
        res.status(500).json({
            success: false,
            message: 'Failed to get the singleUser'
        });
    }
}

exports.getAllUsers = async (req, res) => {

    try {
        const AllUsers = await User.find({});

        res.status(200).json({
            success: true,
            message: "Successfully got all Users",
            data: AllUsers
        })

    } catch (err) {

        res.status(404).json({
            success: false,
            message: 'Failed to get allUsers'
        });
    }
}