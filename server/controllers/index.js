const axios = require('axios')


exports.cartList = (req, res, next) => {

    axios.get('https://fakestoreapi.com/products')
        .then((data) => {

            return res.status(200).json(data.data);
        })
        .catch((error) => {
            console.log(error);
        })
}

