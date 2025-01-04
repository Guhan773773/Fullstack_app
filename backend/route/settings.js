const express = require('express');
const settingRoute = express.Router();

settingRoute.get("./settings",(req,res)=>{
    res.send("Gone to setting");
})

module.exports = settingRoute;