const express = require("express");
const Logger=require('./../connect/logg');
const pathGetter = express.Router();
const { spawn } = require('child_process');

pathGetter.post("/fetch-shortest-path", async (req, res) => {
    var start=req.body.start;
    var dest=req.body.dest;
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


module.exports = pathGetter

