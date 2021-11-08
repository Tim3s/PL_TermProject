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
        activeTotal,
        programTotal,
        programRecom,
        programCnt,
        friendScore,
        friendRank
    ) {
        this.id = id;
        this.age = age;
        if (sex === "F") {
            this.sex = "여성";
            this.name = "영희";
        } else {
            this.sex = "남성";
            this.name = "철수";
        }

        if (regularity == null) {
            this.regularity = "유효하지 않음";
            this.regularityMessage = "";
        } else {
            this.regularity = Math.ceil(regularity);
            if (this.regularity > 80)
                this.regularityMessage =
                    "매우 규칙적인 생활 습관을 갖고 계시네요. 건강을 잘 유지하실 수 있을 것 같아요!";
            else if (this.regularity > 60)
                this.regularityMessage =
                    "생활이 조금 불규칙적이에요. 건강을 위해 조금만 더 노력해봐요!";
            else
                this.regularityMessage =
                    "매우 불규칙적인 생활을 하고 계세요. 건강을 위해 생활 습관 교정을 추천드려요!";
            this.regularity = String(this.regularity) + "점";
        }

        this.clusterActivity = clusterActivity;
        this.clusterRatio = clusterRatio;
        this.ageRange = ageRange;
        this.activness = Math.ceil(activness);
        this.activeRank = activeRank;
        this.activeTotal = activeTotal;
        this.programTotal = programTotal;
        this.programRecom = programRecom;
        this.programCnt = programCnt;
        this.friendScore = Math.ceil(friendScore);
        this.friendRank = friendRank;
        if (Number(friendRank) > 60)
            this.friendMessage = "조금 더 순이와 대화를 나눠주세요!";
        else
            this.friendMessage =
                "정말 잘 하고 계세요! 앞으로도 계속 대화를 나눠주세요!";
    }
}

module.exports = Report;
