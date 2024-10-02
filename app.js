const express = require("express");
const APP = express();
const tasks = require("./routes/tasks.js");

// middleware
APP.use(express.json());

// routes
APP.get("/hello", (req, res) => {
    res.send("Task Mabager APP");
});

APP.use("/api/v1/tasks", tasks);

const port = 3000;

APP.listen(port, console.log(`Server is listening on port ${port} ...`));
