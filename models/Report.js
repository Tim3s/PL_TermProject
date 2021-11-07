class Report {
    constructor(
        id,
        age,
        sex,
        regularity,
        clusterActivity,
        clusterRatio,
        ageRange,
        activness,
        activeRank,
        activeTotal
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

        this.clusterActivity = clusterActivity;
        this.clusterRatio = clusterRatio;
        this.ageRange = ageRange;
        this.activness = Math.ceil(activness);
        this.activeRank = activeRank;
        this.activeTotal = activeTotal;
    }
}

module.exports = Report;
