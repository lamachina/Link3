const express = require('express');
const router = express.Router()

router.get("/dogecoin", (req, res) => {
    res.send("i'm the product")
})

module.exports = router