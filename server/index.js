
require('dotenv').config()
const express= require('express')
const cors = require('cors')

const { MongoClient } = require("mongodb");

const userRouter = require("./routes/userrout");

const car = require('./model/car');
const user = require('./model/user')
const router = require('./routes/gavno')

const PORT = process.env.PORT||3000
const app=express()
const url="mongodb+srv://bajenob:<Savelstan123>@cluster0.hpu47xh.mongodb.net/test"
const client = new MongoClient(url);

app.use(cors())
app.use(express.json());
app.use('/api',router);
    






async function run() {
  try {
    
    await client.connect();
    console.log("Mongose connected");

    
    await client.db("Bajenob").command({ ping: 1 });
    
  } finally {
    
    await client.close();
  }
}





const start = async () => {
  try {
      await run()
      app.listen(PORT, () => console.log(`Server starter on ${PORT} port`))
  } catch (e) {
      console.log(e)
  }
}
start()

