const mongoose = require("mongoose")

const productSchema = mongoose.Schema({
    name: {
        type: String,
        required: [true, "product name is required"]
    },
    price: {
        type: Number,
        required: [true, "product price is required"]
    },
    category: {
        type: String,
        required: [true, "product category is required"]
    },
    createdAt: {
        type: Date,
        required: true,
        default: Date.now()
    }
})

module.exports = mongoose.model("Product", productSchema)
