let inputArr = [3,4,1,2,5,6,7,8,9];

function findMedian(inputArr) {
    //seqence array value
    let seqArr = seqNum(inputArr);
    let medianPos = findMedianPos(seqArr);
    let medianValue;
    
    //Median formula
    if(medianPos % 1 == 0) {
        medianValue = seqArr[medianPos - 1];
    } else {
        medianValue = (seqArr[medianPos - 1.5] + seqArr[medianPos - 0.5]) / 2;
    }
    
    return medianValue;
}

//Seqence the array value from lower to higher
function seqNum(numArr) {
    let resultArr = [];
    let arrLength = numArr.length;
    for(let i = 0 ; i < arrLength ; i++) {
        let tempNum = 0;
        let position = 0;
        for(let num in numArr) {
            if(num == 0) {
                tempNum = numArr[0];
            }
            if(numArr[num] <= tempNum) {
                tempNum = numArr[num];
                position = num;
            }
        }
        resultArr.push(tempNum);
        numArr.splice(position,1);
    }
    return resultArr;
}

function findMedianPos(seqArr) {
    let medianPos = (seqArr.length + 1) / 2;
    return medianPos;
}

console.log("The median of these values is . . .");
console.log(findMedian(inputArr));