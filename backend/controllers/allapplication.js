const { application } = require("express");
const ApplicationDatabase = require("../model/application");
const JobsDatabase=require("../model/jabs");

//here i am going to wrtingi the all aplication
const applyjobs=async(req,res)=>{
  try {
    const userid=req.userId;
    const companyid=req.params.id;

    if(companyid){
      return res.status(400).json({message:"NOoo Jobs Is There with this id ",success:false});

    }

    const pahileapply=await ApplicationDatabase.findOne({jobs:companyid , applicant:userid});

    if(pahileapply){
      return res.status(400).json({message:"You Already Apply ..",success:false})
    }

    //abb apply kar dewal jaii
    const applydata=await ApplicationDatabase.create({
      jobs:companyid,
      applicant:useid,
    });

    
    JobsDatabase.application.push(applydata._id);
    await JobsDatabase.save();

    return res.status(200).json({message:"You Apply this jobs Successfully ...!"});

    
  } catch (error) {
    console.log("this is the error from the ")
  }
}