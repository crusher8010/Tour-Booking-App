const jwt = require('jsonwebtoken');


exports.verifyAdmin = (req, res, next) => {
    const token = req.cookies.accessToken

    if (!token) {
        return res.status(401).json({
            success: false,
            message: "You're not authorized"
        })
    }

    jwt.verify(token, process.env.JWT_SECRET_KEY, (err, user) => {
        if (err) {
            return res.status(401).json({
                success: false,
                message: "Invalid token!"
            })
        }

        if (user.role === "Admin") {
            next();
        } else {
            return res.status(401).json({
                success: false,
                message: "You're not authorized"
            })
        }
    })
}

exports.verifyUser = (req, res, next) => {
    const token = req.headers.authorization

    console.log(token)

    if (!token) {
        return res.status(401).json({
            success: false,
            message: "You're not authorized"
        })
    }

    jwt.verify(token, process.env.JWT_SECRET_KEY, (err, user) => {
        if (err) {
            return res.status(401).json({
                success: false,
                message: "Invalid token!"
            })
        }

        if (user.role === "user") {
            next();
        }
    })
}