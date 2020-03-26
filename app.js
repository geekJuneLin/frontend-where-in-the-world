const express = require("express");
const app = express();

// set ejs view engine
app.set("view engine", "ejs");

// set the static folder
app.use(express.static("public"))

// home page
app.get("/", (req, res) => {
    res.sendFile(__dirname + '/index.html')
})

// set server port
app.listen(3000, (req, res) => {
    console.log('server is running on port 3000')
})