//here  i am 
const mongoose=require("mongoose");

const Dbconnection=async()=>{
  try {
    await mongoose.connect(process.env.MONGO_URL);
    console.log("Database Connnected Succesfully ....!")
  } catch (error) {
    console.log("error from the Data base Connection ..",error)
  }
}

module.exports=Dbconnection;