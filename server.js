const app = require("./app");
const dotenv = require("dotenv");
const connectDatabase = require("./config/connectDB");

dotenv.config({ path: "./config/config.env" })

// connect to db
connectDatabase()
app.listen(process.env.PORT, () => {
    console.log(`Listening to ${process.env.PORT}`);
})
