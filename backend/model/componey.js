const mongoose=require("mongoose");
const hamarcomponey=new mongoose.Schema({
  name:{
    type:String,
    required:true
  },
  description:{
    type:String,
    required:true,
  },
  website:{type:String},
  location:{type:String,required:true},
  logo:{type:String}, 


  userId:{type:mongoose.Schema.Types.ObjectId,ref:"UserDatabase"}
},{timestamps:true});

const ComponeyDatabase=mongoose.model("Componeydatastore",hamarcomponey);
module.exports=ComponeyDatabase;

//now i am going to creating the all the things for this ok noo problem 




//now i am going to wrting the coed in which i am going to 
// 1 > regiser the componey and assignin there userid also
// 2>  get  all componies that is register by that user simply 
// 3> get single componey by id 
// 4> update the database for the componey 

//htis task i am going to done 