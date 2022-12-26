const { Schema, model } = require("mongoose");

const CarScheme = new Schema({
    image: String,
    name: String,
    price: Number,
    country: String,
    description: String,
    fuel: String,
    brand: String,
    year: Number
});
 

module.exports = model('Car', CarScheme);