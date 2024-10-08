const express = require("express");
const APP = express();
const tasks = require("./routes/tasks.js");
const connectDB = require("./db/connect.js");
require("dotenv").config();

// middleware
APP.use(express.static("./public"));
APP.use(express.json());

// routes
APP.use("/api/v1/tasks", tasks);

const port = 3000;

const start = async () => {
    try {
        await connectDB(process.env.MONGO_URI, {
            useNewUrlParser: true,
            useUnifiedTopology: true
        });
        console.log("CONNECTED TO DB!");
        APP.listen(port, console.log(`Server is listening on port ${port} ...`));
    } catch (error) {
        console.log(error);
    }
}

start();