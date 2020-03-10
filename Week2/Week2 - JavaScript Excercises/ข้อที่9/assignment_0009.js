let numArr = [1,5,3]; //Integer between 0 to 100 only
let sqNum = {};
let tempLow, sliceP;
let apValue = 65; //the value 65 is 'A'
let arrLength = numArr.length;
let err = "";
let result = "";

let textSq = "CAB"; //order here

console.log("Input: " + numArr);

//Sequence value first
for(let i = 0 ; i < arrLength ; i++) {
    for(let j = 0 ; j < numArr.length ; j++) {
        if(0 <= numArr[j] && numArr[j] <= 100) {
            if(numArr[j] <= tempLow || j == 0 || numArr.length == 1) {
                tempLow = numArr[j];
                sliceP = j;
            }
        } else {
            err = "Please input number between 0 to 100 only";
            break;
        }
    }
    sqNum[String.fromCharCode(apValue)] = tempLow;
    apValue++;
    numArr.splice(sliceP,1);
}

//Sequence from ordered alphabet
for(let i = 0 ; i < textSq.length ; i++) {
    result = result + sqNum[textSq.charAt(i)] + " ";
}

if(err) {
    console.log(err);
} else {
    console.log(sqNum);
    console.log(textSq + ": " + result);
}