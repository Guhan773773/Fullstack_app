const express = require('express');
const app = express()
const userRoute = require('./route/user')
const profileRoute = require('./route/profile')

app.set('view engine', 'ejs');


app.get('/',(req,res)=>{
    //res.status(200).send('Hello')
    res.render('index', {text:"hIhhdhhd"})
})

app.get("/user",(req,res)=>{
    res.send("UserInfo");
})
let data;
app.get("/user/:value",(req,res)=>{
    data = req.params.value;
    res.send(data);
})

app.use('/user',userRoute)
app.use('/user/:data',profileRoute)


app.listen(3000)
