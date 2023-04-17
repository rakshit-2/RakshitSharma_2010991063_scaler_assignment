const mongoose = require("mongoose")
const express = require("express")
const bodyParser = require("body-parser")
const cors = require("cors")
const db_elements = require("./connect/getENV")
const routes = require("./routes")
const logger_all = require("./connect/logg")




mongoose.set('strictQuery',true);
const app=express()
app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }))
app.use(express.json())
mongoose.connect(db_elements.db_url,
{

}).then(()=>
{
    app.use("/api", routes)
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


