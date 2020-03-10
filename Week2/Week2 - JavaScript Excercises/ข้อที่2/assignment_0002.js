let n = 7; //(1 <= n <= 1,000)
let arrNum = [54,12,78,-94,-3,540,712]; //( -2,000,000,000 <= arrNum[index] <= 2,000,000,000)
let tempLow, tempHigh;
let err = "";

for(let i = 0 ; i < arrNum.length ; i++) {
    if(-2000000000 <= arrNum[i] && arrNum[i] <= 2000000000) {
        if(tempLow > arrNum[i] || i == 0) {
            tempLow = arrNum[i];
        }
        if(tempHigh < arrNum[i] || i == 0) {
            tempHigh = arrNum[i];
        }
    } else {
        err = "Please input the value between -2,000,000,000 to -2,000,000,000";
    }
}

if(err) {
    console.log(err);
} else {
    console.log("Between " + n + " value . . .");
    console.log("The highest value is " + tempHigh);
    console.log("The lowest value is " + tempLow);
}