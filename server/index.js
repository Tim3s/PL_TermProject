const express = require("express");
const getUsers = require("./users");

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.static("client"));

app.get("/", (req, res) => {
    res.sendFile("index.html");
});

app.get("/users", (req, res) => {
    res.send(getUsers());
});

app.listen(PORT, () => {
    console.log(`Listening at http://localhost:${PORT}`);
});
