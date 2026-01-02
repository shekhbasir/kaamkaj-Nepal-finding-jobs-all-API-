const express=require('express');
const { Hamarsignup, Hamarlogin, Hamarlogout,ProfileUpdating } = require('../controllers/allauth');
const allauthroutes=express.Router();
const isauth=require("../middleware/isauth");

allauthroutes.post("/signup",Hamarsignup);
allauthroutes.post("/login",Hamarlogin);
allauthroutes.post("/logout",isauth,Hamarlogout);
allauthroutes.post("/pupdate",isauth,ProfileUpdating)

module.exports=allauthroutes;