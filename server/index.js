
require('dotenv').config()
const express= require('express')
const { MongoClient } = require("mongodb");
const userRouter = require("./routes/userrout.js");
const car = require('./model/car');
const user = require('./model/user')

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



app.listen(PORT,function(){
    console.log("Server starts on 3000 PORT");
})

const start = async () => {
  try {
      await run()
      app.listen(PORT, () => console.log(`Server starter on ${PORT} port`))
  } catch (e) {
      console.log(e)
  }
}
start()

