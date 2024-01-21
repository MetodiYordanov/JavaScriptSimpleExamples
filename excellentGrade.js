function isExcellentGrade(grade) {
    let result;
    if (grade >= 5.50) {
        result = 'Excellent'
    }
    else {
        result = 'Not excellent';
    }

    console.log(result);
}

isExcellentGrade(5.50);
isExcellentGrade(4.35);