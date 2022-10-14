const express = require("express")
const app = express()

// to be able to read json
app.use(express.json())


module.exports = app
