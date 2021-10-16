const xlsx = require("xlsx");

const getUsers = () => {
    const obj = xlsx.readFile(__dirname + "/asset/user_profile.xlsx");
    return xlsx.utils.sheet_to_json(obj.Sheets["user_profile"]);
};

module.exports = getUsers;
