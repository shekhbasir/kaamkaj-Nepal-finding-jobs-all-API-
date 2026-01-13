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
  location:{type:String},
  experience:{
    type:Number,
  },
  jobsTypes:{
    type:String,
  },
  Noofposition:{type:Number},
  componey: { type: mongoose.Schema.Types.ObjectId, ref: "Componeydatastore" },
  createdby:{type:mongoose.Schema.Types.ObjectId,ref:"UserDatabase"},
 application: [{
  type: mongoose.Schema.Types.ObjectId,
  ref: "ApplicationDatabase"
}]
},{timestamps:true});


const JobsDatabase=mongoose.model("JobsDatabase",hamarjobs);
module.exports=JobsDatabase;


//now i am going to working with the 
//here i am going to making the my jobs 
