const express = require('express');
const router = express.Router();
const Users = require("../schema/user")

router.get('/add', (req, res, next) => {
    res.send(
        '<form action="/users/addUser" method="POST"><input type="text" name="title"/><button type=submit">Add</button></form>'
    );
});

router.get('/getUser', (req, res) => {
    Users.findOne({ age: 27 })
        .then(data => {
            console.log(data);
            res.send(data);
        })
        .catch(error => console.log(error))
});

router.post("/addUser", (req, res) => {
    let newUser = {
        id: 03,
        name: "New User 3",
        age: 22,
        gender: "Female"
    };
    const user = new Users(newUser)
    user.save(err => {
        if (err) {
            res.send(err)
        }
        else {
            // res.send({message: "User Added To DB..."})
            res.send(user)
        }
    })
    console.log(newUser)
})

module.exports = router;