const CarModel = require("../model/car");
const express = require("express");
const carRouter = express.Router();

carRouter.post('/api/addcar',async(req,res)=>{
    console.log("NU i Gavno");

    
     let image=req.body.image;
     let name=req.body.name; 
     let price=req.body.price;
     let country=req.body.country;
     let description=req.body.description;
     let fuel=req.body.fuel;
     let Brand=req.body.Brand;
     let year=req.body.year;
    
    
    

    const car=new CarModel({
        Brand:Brand,
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

carRouter.get("/api/getcar", async (req, res) => {
    var carsArray = await Cars.Car.find({});
    res.json({ cars: carsArray });
  });


carRouter.post("/api/delete", async (req, res) => {
    const { _id } = req.body;
    await Cars.Car.remove({ _id: _id });
    var carsArray = await Cars.Car.find({});
    res.json({ cars: carsArray });
  });
  
  
  module.exports = carRouter;