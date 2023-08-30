const mongoose = require('mongoose')

const Menu = new mongoose.Schema({
    image: String,
    name: String,
    price: Number,
    type: String,
    ID: Number
})
const HotelSchema = new mongoose.Schema({
    name: String,
    url: String,
    veg: String,
    nonveg: String,
    id: Number,
    menu: [Menu]
})


const HotelModel = mongoose.model("hotels", HotelSchema)

module.exports = HotelModel
