const express = require('express');
const profileRoute = express.Router();

profileRoute.get("/profile",(req,res)=>{
    res.send("update Profile");
})
module.exports = profileRoute;  