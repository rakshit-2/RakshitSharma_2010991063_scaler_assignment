const express = require("express");
const TEST = require("./models/Test");
const Logger=require('./connect/logg');
const router = express.Router();
const { spawn } = require('child_process');

router.get("/test", async (req, res) => {
    var start=req.query.start;
    var dest=req.query.dest;
    console.log(start,dest)
    let data1;
    const check= spawn('python',['ShortestPath.py',start,dest]);
    check.stderr.on('data',(data) => 
    {
        console.error(`stderr:${data}`);
    });
    check.stdout.on('data',function (data) 
    {
        console.log(data1=data);
    });
    check.on('close',(code)=>
    {
        res.send(data1)
    });
})


module.exports = router