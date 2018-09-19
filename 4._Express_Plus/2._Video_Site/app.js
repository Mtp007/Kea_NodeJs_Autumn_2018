const express = require("express");
const app = express();

app.use(express.static('public'));

app.get("/", function(req, res) {
    res.sendFile(__dirname + "/public/home.html");
})


const server = app.listen("3000", function(err) {
    if (err) {
        console.log("Error running server on port ", server.address().port);
    } else {
        console.log("Server running on port", server.address().port);
    }
});