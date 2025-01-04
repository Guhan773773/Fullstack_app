const express = require('express');
const userRoute = express.Router();



userRoute.get("/:id",(req,res)=>{
    res.send("retrive id value" + req.params.id);
})


module.exports = userRoute;
