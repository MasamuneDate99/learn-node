const express = require('express');
const router = express.Router();
const Product = require("./models/product.model.js");

const {getProducts} = require("../controllers/product.controller.js");
const {postProduct} = require("../controllers/product.controller.js");
const {deleteProduct} = require("../controllers/product.controller.js");
const {updateProduct} = require("../controllers/product.controller.js");
const {getProductsById} = require("../controllers/product.controller.js");

// Controller Function
router.get('/', getProducts)
router.post('/', postProduct)
router.delete('/:id', deleteProduct)
router.put('/:id', updateProduct)
router.get('/:id', getProductsById)

module.exports = {
    router
};