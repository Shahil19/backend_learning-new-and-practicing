const mongoose = require("mongoose")
// name: shahil pass: mviHfbofCNCCiYiO (ecommerce_packProgra)
const DB_URI = "mongodb+srv://shahil:mviHfbofCNCCiYiO@cluster0.4tt0sex.mongodb.net/practice?retryWrites=true&w=majority"

const connectDatabase = () => {
    try {
        mongoose
            .connect(DB_URI)
            .then(data => console.log(`Mongodb connected with server: ${data.connection.host}`))
    } catch (error) {
        console.log(error);
    }

}

module.exports = connectDatabase