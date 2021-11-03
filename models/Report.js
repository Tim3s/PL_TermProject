class Report {
    constructor(id, age, sex, regularity) {
        this.id = id;
        this.age = age;
        if (sex === "F") {
            this.sex = "여성";
        } else {
            this.sex = "남성";
        }
        this.regularity = Math.ceil(regularity);
    }
}

module.exports = Report;
