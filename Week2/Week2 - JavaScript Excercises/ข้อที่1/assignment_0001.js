let a = 24; //จำนวนเต็ม a โดยที่ 0 <= a <= 30
let b = 19; //จำนวนเต็ม b โดยที่ 0 <= a <= 30
let c = 30; //จำนวนเต็ม c โดยที่ 0 <= a <= 40
let totalScore, grade;

if(0 <= a && a <= 30 && 0 <= b && b <= 30 && 0 <= c && c <= 40) {
    totalScore = a + b + c;
    switch(true) {
        case 80 <= totalScore && totalScore <= 100:
            grade = "A";
            break;
        case 75 <= totalScore && totalScore  <= 79:
            grade = "B+";
            break;
        case 70 <= totalScore && totalScore  <= 74:
            grade = "B";
            break;
        case 65 <= totalScore && totalScore  <= 69:
            grade = "C+";
            break;
        case 60 <= totalScore && totalScore  <= 64:
            grade = "C";
            break;
        case 55 <= totalScore && totalScore  <= 59:
            grade = "D+";
            break;
        case 50 <= totalScore && totalScore  <= 54:
            grade = "D";
            break;
        case 0 <= totalScore && totalScore  <= 49:
            grade = "F";
            break;
    }
    console.log("The grade is " + grade);
} else {
    console.log("Please input the student score correctly!");
}