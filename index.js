const express = require("express");
const ejs = require("ejs");
const users = require("./users.js");

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.static(__dirname + "/public"));
app.set("view engine", "ejs");
app.set("views", __dirname + "/views");
app.use(express.json());

app.get("/", (req, res) => {
    const totalReport = users.createTotalReport();
    const pieChartData = users.createPieChartData(totalReport.cluster);
    const barChartData = users.createBarChartData(totalReport.program);
    res.render("index", {
        no_id: false,
        sumUsers: totalReport.sumUsers,
        pieChartData,
        barChartData,
    });
});

app.get("/report", (req, res) => {
    const id = req.query.id;
    // console.log(id);
    if (users.checkIfExists(id)) {
        const report = users.getReport(id);
        const pieChartData = users.createPieChartData(report.clusterRatio);
        const barChartData = users.createBarChartData(report.programCnt);
        const donutChartData = users.createDonutChartData(id);
        // console.log(report);
        res.render("report", {
            report,
            pieChartData,
            barChartData,
            donutChartData,
        });
    } else {
        res.send(
            "<script>alert('존재하지 않는 사용자입니다!'); document.location.href = '/';</script>"
        );
    }
});

app.listen(PORT, () => {
    console.log(`Listening at http://localhost:${PORT}`);
    users.init();
});
