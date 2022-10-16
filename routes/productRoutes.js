const express = require("express")
const { getAllProduct, createProduct, getSingleProduct } = require("../controllers/productControllers")

const router = express.Router()

// get all product
router.route("/products").get(getAllProduct)

// get a single product
router.route("/product/:id").get(getSingleProduct)

// create a new product
router.route("/product/new").post(createProduct)

module.exports = router