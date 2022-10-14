const mongoose = require("mongoose")
// name: shahil pass: Ojateq7SdjXwTv4A (ecommerce_packProgra)
const DB_URI = "mongodb+srv://shahil:Ojateq7SdjXwTv4A@cluster0.1jksoip.mongodb.net/ecommerce?retryWrites=true&w=majority"
const connectDatabase = () => {
    console.log("connecting");
    try {
        mongoose
            .connect(DB_URI)
            .then(data => console.log(`Mongodb connected with server: ${data.connection.host}`))
    } catch (error) {
        console.log(error);
    }

}

module.exports = connectDatabase