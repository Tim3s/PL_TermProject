class Report {
    constructor(
        id,
        age,
        sex,
        regularity,
        cluster,
        ageRange,
        activness,
        activeRank
    ) {
        this.id = id;
        this.age = age;
        if (sex === "F") {
            this.sex = "여성";
        } else {
            this.sex = "남성";
        }

        if (regularity == null) {
            this.regularity = "유효하지 않음";
        } else {
            this.regularity = Math.ceil(regularity);
        }

        this.cluster = cluster;
        this.ageRange = ageRange;
        this.activness = Math.ceil(activness);
        this.activeRank = activeRank;
    }
}

module.exports = Report;
