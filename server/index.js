
require('dotenv').config()
const express= require('express')
const { MongoClient } = require("mongodb");
const userRouter = require("./routes/userrout.js");
const PORT = process.env.PORT||3000
const app=express()
const url="mongodb+srv://bajenob:<Savelstan123>@cluster0.hpu47xh.mongodb.net/test"
const client = new MongoClient(url);
app.use(express.json());
app.use(userRouter);
    




app.get('/',function(res,req){
    
    console.log("On server!");
})

async function run() {
  try {
    
    await client.connect();
    console.log("Mongose connected");

    
    await client.db("Bajenob").command({ ping: 1 });
    
  } finally {
    
    await client.close();
  }
}

app.use(run);


app.listen(PORT,function(){
    console.log("Server starts on 3000 PORT");
})



