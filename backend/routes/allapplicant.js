const express=require('express');
const allApplicant=express.Router();
const { applyjobs,getappliedjob,getapplicants,updatestatus}=require("../controllers/allapplication");
const isauth=require("../middleware/isauth");
allApplicant.post("/applyjob/:id",isauth,applyjobs);
allApplicant.get("/getappliedjob",isauth,getappliedjob);
allApplicant.get("/getapplicants/:id",isauth,getapplicants);
allApplicant.put("/updatestatus/:id",isauth,updatestatus)

module.exports=allApplicant;