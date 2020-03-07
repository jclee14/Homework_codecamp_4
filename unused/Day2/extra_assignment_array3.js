let inputArr = [9,9,7,7,6,6,7,7,7,9,1,2,3];

function findMedian(inputArr) {
    
    let seqDupArr = seqDupNum(inputArr); //seqence array value
    //console.log(seqDupArr);
    let reduArr = reduceDup(seqDupArr); //remove duplicate value
    //console.log(reduArr);
    let result = seqTrueNum(reduArr); //calculate the result
    
    return result;
}

//Seqence the array value from lower to higher
function seqDupNum(numArr) {
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

function reduceDup(seqDupArr) {
    let current = null;
    let count = 0;
    let reduArr = [];
    for (let i = 0 ; i < seqDupArr.length ; i++) {
        if(seqDupArr[i] != current) {
            if(count > 0) {
                reduArr.push([current,count]);
            }
            current = seqDupArr[i];
            count = 1;
            if(i === seqDupArr.length - 1) {
                reduArr.push([current,count]);
            }
        } else {
            count++;
            if(i === seqDupArr.length - 1) {
                reduArr.push([current,count]);
            }
        }
    }
    return reduArr;
}

function seqTrueNum(seqNum) {
    let resultArr = [];
    let tempC = null;
    let tempNum = null;
    let position = 0;
    let arrLength = seqNum.length;

    for(let i = 0 ; i < arrLength ; i++) {
        for (let index in seqNum) {
            if(index == 0) {
                tempC = seqNum[index][1];
                tempNum = seqNum[index][0];
                position = index;
            }
            if(seqNum[index][1] <= tempC ) {
                if(seqNum[index][0] >= tempNum) {
                    tempC = seqNum[index][1];
                    tempNum = seqNum[index][0];
                    position = index;
                }
            }
        }
        resultArr.push(tempNum);
        seqNum.splice(position,1);
    }

    return resultArr;
}

console.log(findMedian(inputArr));