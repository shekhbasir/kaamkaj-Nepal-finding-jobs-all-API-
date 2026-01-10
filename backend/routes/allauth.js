const express=require('express');
const { Hamarsignup, Hamarlogin, Hamarlogout,ProfileUpdating } = require('../controllers/allauth');
const allauthroutes=express.Router();
const isauth=require("../middleware/isauth");
const singleupload=require("../middleware/multer");

allauthroutes.post("/signup",singleupload,Hamarsignup);
allauthroutes.post("/login",Hamarlogin);
allauthroutes.post("/logout",isauth,Hamarlogout);
allauthroutes.put("/pupdate",isauth,singleupload, ProfileUpdating)

module.exports=allauthroutes;