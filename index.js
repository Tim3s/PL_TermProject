const express = require("express");
const ejs = require("ejs");
const users = require("./users");

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.static(__dirname + "/public"));
app.set("view engine", "ejs");
app.set("views", __dirname + "/views");
app.use(express.json());

app.get("/", (req, res) => {
    res.render("index");
});

app.get("/report/:id", (req, res) => {
    const id = req.params.id;
    if (users.checkIfExists(id)) {
        const report = users.getReport(id);
        res.render("report", {
            report,
        });
    } else {
        res.render("index");
    }
});

app.listen(PORT, () => {
    console.log(`Listening at http://localhost:${PORT}`);
    users.init();
});
