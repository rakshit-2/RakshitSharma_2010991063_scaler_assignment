const express = require("express");
const Logger=require('./../connect/logg');
const pathGetter = express.Router();
const { spawn } = require('child_process'); // using child_process to call a seprate file during execution



//fetch-shortest-path call the ShortestPath.py file which include the dijkstra algo for the shortest path
// the ShortestPath.py takes 2 arguments source and destination, then calculate the shortest path and return the desired result
pathGetter.post("/fetch-shortest-path", async (req, res) => {
    var start=req.body.start;
    var dest=req.body.dest;
    let data1;
    // check is created to fetch the shortest path for the specific source and destination
    const check= spawn('python',['ShortestPath.py',start,dest]);
    check.stderr.on('data',(data) => 
    {
        console.error(`stderr:${data}`);
    });
    check.stdout.on('data',function (data) 
    {
        console.log(data1=data);
    });


    // input is then read and send to the front-end for display
    check.on('close',(code)=>
    {
        res.send(data1)
    });
})


module.exports = pathGetter

