
require('dotenv').config()
const express= require('express')
const mongoose = require("mongoose");
const PORT = process.env.PORT||3000
const app=express()

app.use(express.json());





app.get('/',function(res,req){
    
    console.log("On server!");
})

app.listen(PORT,function(){
    console.log("Server starts on 3000 PORT");
})

