
require('dotenv').config()
const express= require('express')
const mongoose = require("mongoose");
const PORT = process.env.PORT||3000
const app=express()

app.use(express.json());
    




app.get('/',function(res,req){
    
    console.log("On server!");
})

mongoose.connect(process.env.mongooseConnection, function (err, db) {
    if (!err) {
      console.log("Mongose connected");
    } else console.log(err);
  });

app.listen(PORT,function(){
    console.log("Server starts on 3000 PORT");
})

