//now here i am goinng to setup the code and working 
const express=require("express");
const cookieparser=require('cookie-parser');
require('dotenv').config();
const cors=require('cors');
const app=express();
const allauthroutes=require("./routes/allauth");
const Dbconnection = require("./config/Db");
const sabcomponey=require("./routes/allcomponey");

app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use(cookieparser());
app.use(cors({
  origin:"http://localhost:5173",
  credentials:true
}))

app.use("/auth",allauthroutes)
app.use("/comp",sabcomponey);

const PORT=process.env.PORT||3000;

app.listen(PORT,()=>{
  Dbconnection();
  console.log(`this is the link http://localhost:${PORT}`);
})
//now i am going to testing 