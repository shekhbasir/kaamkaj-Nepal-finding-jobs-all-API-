const express=require("express");
const cookieparser=require('cookie-parser');
require('dotenv').config();
const cors=require('cors');
const app=express();
const allauthroutes=require("./routes/allauth");
const Dbconnection = require("./config/Db");
const sabcomponey=require("./routes/allcomponey");
const jobsroutes=require("./routes/alljobs");
const allApplicant = require("./routes/allapplicant");


app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use(cookieparser());
app.use(cors({
  origin:"http://localhost:5173",
  credentials:true
}))

app.use("/auth",allauthroutes)
app.use("/auth",sabcomponey);
app.use("/auth",jobsroutes);
app.use("/auth",allApplicant);




const PORT=process.env.PORT||3000;

app.listen(PORT,()=>{
  Dbconnection();
  console.log(`this is the link http://localhost:${PORT}`);
})


