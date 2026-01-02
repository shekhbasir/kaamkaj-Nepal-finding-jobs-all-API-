//here i am going to wrting the code for the updating the things 
const express=require('express');
const sabcomponey=express.Router();
const {componeyRegister,getallcomponey,getsinglecompony,updatecomponey}=require("../controllers/allcomponey");
sabcomponey.post("/registercomp",componeyRegister);
sabcomponey.get("/getallcomp",getallcomponey);
sabcomponey.get('/getsinglecomp',getsinglecompony);
sabcomponey.put("/updatecomp",updatecomponey);

module.exports=sabcomponey;