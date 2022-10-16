const Product = require("../models/productModel.js")

// Get all products
exports.getAllProduct = async (req, res) => {
    try {
        const products = await Product.find()
        res.status(200).json({
            success: true,
            products
        })
    } catch (error) {
        return res.send(error.message)
    }
}

// Get a single products
exports.getSingleProduct = async (req, res, next) => {
    try {
        const product = await Product.findById(req.params.id)

        if (!product) return next({ message: "something is not good", status: 404 })

        res.status(200).json({
            success: true,
            product
        })
    } catch (error) {
        return res.status(404).json({
            success: false,
            message: error.message
        })
    }
}

// create a product
exports.createProduct = async (req, res, next) => {
    try {
        const product = await Product.create(req.body)

        res.status(201).json({
            success: true,
            product
        })
    } catch (error) {
        res.status(404).json({
            success: true,
            message: error.message
        })
    }
}