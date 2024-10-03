const express = require("express");
const APP = express();
const tasks = require("./routes/tasks.js");
const connectDB = require("./db/connect.js");
require("dotenv").config();

// middleware
APP.use(express.json());

// routes
APP.get("/hello", (req, res) => {
    res.send("Task Mabager APP");
});

APP.use("/api/v1/tasks", tasks);

const port = 3000;

const start = async () => {
    try {
        await connectDB(process.env.MONGO_URI);
        console.log("CONNECTED TO DB!");
        APP.listen(port, console.log(`Server is listening on port ${port} ...`));
    } catch (error) {
        console.log(error);
    }
}

start();