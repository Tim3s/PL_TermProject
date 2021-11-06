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
    res.render("index", {no_id : false});
});

app.get("/report", (req, res) => {
    const id = req.param("id");
    console.log(id);
    if (users.checkIfExists(id)) {
        const report = users.getReport(id);
        res.render("report", {
            report,
        });
    } else {
        res.render("index", {no_id : true});
    }
});

app.listen(PORT, () => {
    console.log(`Listening at http://localhost:${PORT}`);
    users.init();
});
