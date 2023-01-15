const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const app = express()
app.use(express.json())

const userRoutes = require('./controller/user');
const itemRoutes = require('./controller/item')

app.use("/users", userRoutes);
app.use("/items", itemRoutes);

mongoose.set("strictQuery", false);
mongoose.connect("mongodb+srv://admin:admin@cluster0.uvfwj5u.mongodb.net/test", {
    useNewurlParser: true,
    useUnifiedTopology: true
}, () => {
    console.log("DB Connected....")
})
app.get('/', (req, res) => {
    res.send("Hello World....");
});

app.get('/prod', (req, res) => {
    res.send("Hello Prodssssss....");
});

app.listen(4000);
console.log('Web Server is listening at port 4000');

