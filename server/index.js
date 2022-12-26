

const express= require('express')
const cors = require('cors')


const mongoose = require('mongoose')



const car = require('./model/car')
const router = require('./routes/gavno')
const  CarRouter  = require('./routes/carrout')


const PORT = process.env.PORT||3000

const url="mongodb+srv://bajenob:Savelstan123@cluster0.hpu47xh.mongodb.net/test"

const app=express()
app.use(express.json());
app.use(cors());
app.use(CarRouter);
app.use(router);

app.get('/', (req, res) => {
  res.send(car);
});



mongoose.connect(url, function (err, db) {
  if (!err) {
    console.log("Mongose connected");
  } else console.log(err);
});

app.listen(PORT, () => {
  console.log("Server start");
});
















