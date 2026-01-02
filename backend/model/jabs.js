const { application } = require("express");
const mongoose=require("mongoose");
const { type } = require("os");

const hamarjobs=new mongoose.Schema({
  title:{
    type:String,
    required:true
  },
  description:{
    type:String,
  },
  requirement:[{
    type:String
  }],
  salary:{type:Number},
  location:{type:String,required:true},
  jobsTypes:{
    type:String,
  },
  Noofposition:{type:Number},
  componey:{type:mongoose.Schema.Types.ObjectId,ref:"ComponeyDatabase"},
  createdby:{type:mongoose.Schema.Types.ObjectId,ref:"UserDatabase"},
  application:{type:mongoose.Schema.Types.ObjectId,ref:"ApplicationDatabase"}
},{timestamps:true});


const JobsDatabase=mongoose.model("JobsDatabase",hamarjobs);
module.exports=JobsDatabase;

//simply Ham apan kaam kar saktani bahut hii eassy way mee