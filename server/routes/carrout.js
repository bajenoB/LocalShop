const CarModel = require("../model/car");
const express = require("express");


const { check, validationResult } = require("express-validator");


async function CarRouter(app){
app.post('/api/addcar',async(req,res)=>{

  
     let image=req.body.image;
     let name=req.body.name; 
     let price=req.body.price;
     let country=req.body.country;
     let description=req.body.description;
     let fuel=req.body.fuel;
     let brand=req.body.brand;
     let year=req.body.year;

    const car=new CarModel({
        brand:brand,
        price:price,
        name:name,
        country:country,
        description:description,
        fuel:fuel,
        year:year,
        image:image


    })
    await car.save();
})  

app.get('/api/getcars',async (req, res) => {
  const cars = await CarModel.find({}).lean();
  console.log(`Request's been received for data fetch`);
  res.json({cursor:cars})
});

app.get('/:_id',async (req, res) => {
  const cars = await CarModel.find({}).lean();
  console.log(`Request's been received for data fetch`);
  res.json({cursor:cars})
});


app.post("/api/delete", async (req, res) => {
    const { _id } = req.body;
    await Cars.Car.remove({ _id: _id });
    var carsArray = await Cars.Car.find({});
    res.json({ cars: carsArray });
  });
  
}
  module.exports = {CarRouter};