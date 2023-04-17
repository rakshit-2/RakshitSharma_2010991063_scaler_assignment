const express = require("express");
const TEST = require("./../models/Test");
const Logger=require('./../connect/logg');
const landingTest = express.Router();
const { spawn } = require('child_process');

landingTest.get("/landingTest", async (req, res) => {
    res.send("Api running Successfully!!")
})


module.exports = landingTest