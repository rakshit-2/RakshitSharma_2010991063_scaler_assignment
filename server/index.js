const mongoose = require("mongoose")
const express = require("express")
const bodyParser = require("body-parser")
const cors = require("cors")
const db_elements = require("./connect/getENV")
const landingTest = require("./routes/landingTest")
const pathGetter = require("./routes/pathGetter")
const logger_all = require("./connect/logg")
const cabGetter = require("./routes/cabGetter")
const userBooking = require("./routes/userBooking")
const AllCabBooking = require("./routes/allCabBookings")



mongoose.set('strictQuery',true);
const app=express()
app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }))
app.use(express.json())

// creating Connection with the database
mongoose.connect(db_elements.db_url,
{

}).then(()=>
{
    // all thr routes available are activated
    app.use("/test", landingTest)
    app.use("/path", pathGetter)
    app.use("/cab", cabGetter)
    app.use("/user", userBooking)
    app.use("/allcab", AllCabBooking)
    logger_all.Logg.info("Middleware added, starting connection!!")
    app.listen(db_elements.db_port,()=>
    {
        logger_all.Logg.info("Connected to MongoDB(Atlas)!!")
        logger_all.Logg.warning(`Server running on port: ${db_elements.db_port}`)
    }
)}).catch((error)=>
{
    logger_all.Logg.error(error)
});


