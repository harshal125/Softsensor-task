const express = require("express");
const router = express.Router();


const {
    cartList
} = require('../controllers/index')

router.route('/cartlist').get(cartList)


module.exports = router;