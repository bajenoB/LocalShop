const CarModel = require("../model/car");
const express = require("express");


const { check, validationResult } = require("express-validator");

const validation = [
  check("name")
    .notEmpty()
    .withMessage("Имя не может быть пусто!")
    .isLength({
      min: 2,
      max: 30,
    })
    .withMessage("Ошибочная длинна"),

  check("image").notEmpty().withMessage("Картинка не может быть пустой"),

  check("price")
    .notEmpty()
    .withMessage("Цена не может быть пустой")
    .isInt({ min: 0 })
    .withMessage("Цена должна быть больше 0"),

  check("year")
    .notEmpty()
    .withMessage("Год не может быть пуст")
    .isInt({ min: 1900, max: 2023 })
    .withMessage("Год должен быть между 1900 и 2023!"),
];
async function CarRouter(app){
app.post('/api/addcar',async(req,res)=>{

  
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

app.get('/api/getcars',async (req, res) => {
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