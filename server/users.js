const xlsx = require("xlsx");

const getUsers = () => {
    const obj = xlsx.readFile(__dirname + "/asset/user_profile.xlsx");
    // const sheets = obj.SheetNames;
    // let result = [];

    // for (let i = 0; i < sheets.length; i++) {
    //     const tmp = xlsx.utils.sheet_to_json(obj.Sheets[obj.SheetNames[i]])
    //     tmp.forEach((res) => {
    //         result.push(res);
    //     });
    // }
    return xlsx.utils.sheet_to_json(obj.Sheets["user_profile"]);

    // return result;
};

module.exports = getUsers;
