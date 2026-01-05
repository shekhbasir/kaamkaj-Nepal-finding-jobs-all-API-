// here i am going to wrting the code making the web page 

const express=require("express");
const jobsroutes=express.Router();
const isauth=require("../middleware/isauth");
const { postjobs, getalljobs , getjobByid, adminjobs} = require("../controllers/alljobs");




jobsroutes.post("/postjob",isauth,postjobs);
jobsroutes.get("/getalljobs",isauth,getalljobs);
jobsroutes.get("/getjobByid/:id",isauth, getjobByid);
jobsroutes.get("/getadminjobs",isauth,adminjobs);

module.exports=jobsroutes;

//for get all jobs mee jab kaam kareni san and then it will going to work and it will work 