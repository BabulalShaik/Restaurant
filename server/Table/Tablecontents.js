const mongoose = require('mongoose');

const itemDetailsSchema = new mongoose.Schema({
    name: String,
    image: String,
    price: Number,
    type: String,
    ID: Number
});

const cartItemSchema = new mongoose.Schema({
    restaurant: String,
    itemDetails: [itemDetailsSchema]
});

const TableSchema= new mongoose.Schema({
    user_id: String,
    name: String,
    email: String,
    password: String,
    cartItems: [cartItemSchema]
});

const EmployeeModel = mongoose.model("employees", TableSchema);

module.exports = EmployeeModel;
