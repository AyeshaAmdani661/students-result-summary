const mongoose = require("mongoose");

let itemInfo = new mongoose.Schema({
    id: Number,
    title: String,
    price: Number
})

module.exports = itemInfo = mongoose.model("Items", itemInfo);