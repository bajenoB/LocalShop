const mongoose = require("mongoose");

   
const CarScheme = mongoose.Schema({
    image: File,
    name: String,
    price: Number,
    country: String,
    description: String
});
 

module.exports = mongoose.model("Car",CarSchema);