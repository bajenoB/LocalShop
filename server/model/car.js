const mongoose = require("mongoose");

   
const CarScheme = mongoose.Schema({
    image: String,
    name: String,
    price: Number,
    country: String,
    description: String,
    fuel: String,
    brand: String,
    year: Number
});
 

module.exports = mongoose.model("Car",CarScheme);