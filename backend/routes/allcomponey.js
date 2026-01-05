//here i am going to wrting the code for the updating the things 
const express=require('express');
const sabcomponey=express.Router();
const {componeyRegister,getallcomponey,getsinglecompony,updatecomponey}=require("../controllers/allcomponey");
const isauth = require('../middleware/isauth');
sabcomponey.post("/registercomp",isauth,componeyRegister);
sabcomponey.get("/getallcomp",isauth,getallcomponey);
sabcomponey.get('/getsinglecomp',isauth,getsinglecompony);
sabcomponey.put("/updatecomp",isauth,updatecomponey);

module.exports=sabcomponey;