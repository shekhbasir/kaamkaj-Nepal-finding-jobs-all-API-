const mongoose=require('mongoose');
const hamarapplication=new mongoose.Schema({
  jobs:{
    type:mongoose.Schema.Types.ObjectId,
    ref:"ComponeyDatabase"
  },
  applicant:{type:mongoose.Schema.Types.ObjectId,ref:"UserDatabase"},
  status:{type:String,enum:["accepted","rejected","process"]}
},{timestamps:true});
const ApplicationDatabase=mongoose.model("applicantDatastore",hamarapplication);
module.exports=ApplicationDatabase;


//now i am going to wrintign the code for thee apply jobs 