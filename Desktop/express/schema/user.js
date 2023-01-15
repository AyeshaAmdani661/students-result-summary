const mongoose = require("mongoose");

let userInfo = new mongoose.Schema({
    id: Number,
    name: String,
    age: Number,
    gender: String
})

module.exports = userInfo = mongoose.model("Users", userInfo);