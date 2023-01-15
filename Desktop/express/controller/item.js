const express = require('express');
const router = express.Router();

router.get('/add', (req, res, next) => {
    res.send(
        '<form action="/items/product" method="POST"><input type="text" name="title" placeholder="Items"/><button type=submit">Add</button></form>'
    );
});

router.post('/product', (req, res, next) => {
    console.log(req.body);
    res.send('Items / Products ...... ')
});

module.exports = router;