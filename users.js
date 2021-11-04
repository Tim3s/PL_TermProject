const xlsx = require("xlsx");
const fs = require("fs").promises;
const parser = require("csv-parse/lib/sync");
const Report = require("./models/Report");

let userProfile,
    userActiveness,
    userCluster,
    userValidness,
    userRegularity,
    userResponse;
const reports = [];

const getData = async (filename) => {
    const fileContent = await fs.readFile(__dirname + "/public/" + filename);
    return parser(fileContent, { columns: true });
};

const getUsers = () => {
    const obj = xlsx.readFile(__dirname + "/public/user_profile.xlsx");
    return xlsx.utils.sheet_to_json(obj.Sheets["user_profile"]);
};

const populateData = async () => {
    userProfile = getUsers();
    userActiveness = await getData("activeness.csv");
    userCluster = await getData("cluster.csv");
    userValidness = await getData("overall_validness.csv");
    userRegularity = await getData("regularity.csv");
    userResponse = await getData("response.csv");
};

const findUserById = (array, id) => {
    return array.find((user) => user.id == id);
};

const createReport = (id, age, sex) => {
    const idRegularity = findUserById(userRegularity, id);
    const idActivness = findUserById(userActiveness, id);
    const report = new Report(
        id,
        age,
        sex,
        idRegularity.validness == 1 ? idRegularity.score : null,
        findUserById(userCluster, id).activity,
        idActivness.age,
        idActivness.score,
        idActivness.rank
    );
    // console.log(report);
    return report;
};

const init = async () => {
    await populateData();
    // console.log(userActiveness.length);
    userProfile.forEach((user) => {
        if (userValidness.find((u) => u.id == user.id).validness === "valid") {
            reports.push(createReport(user.id, user.age, user.sex));
        }
    });
    // console.log(reports.length);
};

const checkIfExists = (id) => {
    if (reports.filter((report) => report.id == id).length > 0) return true;
    return false;
};

const getReport = (id) => {
    return reports.find((report) => report.id == id);
};

module.exports = { init, checkIfExists, getReport };
