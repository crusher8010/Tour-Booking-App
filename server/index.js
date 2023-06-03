const express = require("express");
const dotenv = require("dotenv");
const mongoose = require("mongoose");
const cors = require("cors");
const cookieParser = require("cookie-parser");

const tourRouter = require("./Routes/tourRoutes");
const userRouter = require('./Routes/userRoutes');
const authRouter = require("./Routes/authRoutes");
const reviewRouter = require("./Routes/reviewRoutes");
const bookingRouter = require("./Routes/bookingRoutes");

dotenv.config();
const app = express();
const port = process.env.PORT || 8000;

// middlewares
app.use(express.json());
app.use(cors({
    origin: "*"
}));
app.use(cookieParser());

// Database Connection
const DB = process.env.URL;
mongoose.connect(DB).then(() => console.log("Database is Connected...")).catch((err) => console.log(err.message));

app.use("/tours", tourRouter);
app.use('/users', userRouter);
app.use('/auth', authRouter);
app.use('/reviews', reviewRouter);
app.use('/booking', bookingRouter);

// for testing
app.get("/", (req, res) => {
    res.send('api is working...');
});

app.listen(port, () => {
    console.log(`Server is running on ${port}...`)
});