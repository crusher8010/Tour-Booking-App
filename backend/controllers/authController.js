const User = require("../models/User");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");


exports.Register = async (req, res) => {
    try {

        const { username, email, password, photo } = req.body;

        const salt = bcrypt.genSaltSync(5);
        const hash = bcrypt.hashSync(password, salt)

        const newUser = await User.create({ username, email, password: hash, photo });

        res.status(200).json({
            success: true,
            message: 'User Successfully Created',
            data: newUser
        })

    } catch (err) {

        res.status(500).json({
            success: false,
            message: 'Failed to create. Try again'
        })
    }
}

exports.Login = async (req, res) => {
    const { email } = req.body;

    try {

        const user = await User.find({ email });

        if (!user) {
            return res.status(404).json({
                success: false,
                message: 'User not found!'
            })
        }

        const checkCorrectPassword = await bcrypt.compare(req.body.password, user[0].password);

        if (!checkCorrectPassword) {
            return res.status(401).json({
                success: false,
                message: 'Wrong Crendentials. Try again!'
            })
        }

        const token = jwt.sign({ id: user[0]._id, role: user[0].role }, process.env.JWT_SECRET_KEY, { expiresIn: '15d' });

        const { password, role, ...rest } = user[0]._doc

        let temp = Object.assign(rest, { token });

        res.status(200).json({
            success: true,
            message: 'Successfully login',
            token,
            data: temp,
            role
        })

    } catch (err) {
        res.status(401).json({
            success: false,
            message: 'Wrong Crendentials. Try again!'
        });
    }
}