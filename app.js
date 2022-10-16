const express = require("express")
const app = express()

// to be able to read json
app.use(express.json())

// product router
const productRouter = require("./routes/productRoutes.js")
app.use(productRouter)

module.exports = app
