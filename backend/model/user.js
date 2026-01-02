//by the help of the term and the situation 
const mongoose=require('mongoose');

const hamaruser=new mongoose.Schema({
  fullname:{
    type:String,
    required:true
  },
  phoneNumber:{
    type:Number,
    required:true
  },
  role:{
    type:String,
    enum:["student","recruiter"],
    required:true
  },
  email:{
    type:String,
    required:true,
    unique:true
  },
  password:{
    type:String,
    required:true,
    
  },
  
  profile:{
    bio:{type:String},
    skill:[{type:String}],
    resume:{type:String},
    resumeOrgineName:{type:String},
    componey:{type:mongoose.Schema.Types.ObjectId},
    profileimg:{type:String}

  }
},{timestamps:true});

const UserDatabase=mongoose.model("UserDatastore",hamaruser);
module.exports=UserDatabase;
