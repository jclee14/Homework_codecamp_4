let inputArr = [1,8,4,7,2,6,9,7,-5,500,48,-98,1254];

function oddEvenSquence(inputArr) {
    let oddArr = [];
    let evenArr = []

    for(let num in inputArr) {
        if(inputArr[num] % 2 === 0) {
            evenArr.push(inputArr[num]);
        } else {
            oddArr.push(inputArr[num]);
        }
    }

    //seqence array value
    let resultArr = findNum(false, evenArr).concat(findNum(true, oddArr));
    
    return resultArr;
}

function findNum(isOdd, numArr) {
    let resultArr = [];
    let arrLength = numArr.length;
    for(let i = 0 ; i < arrLength ; i++) {
        let tempNum = 0;
        let position = 0;
        for(let num in numArr) {
            if(num == 0) {
                tempNum = numArr[0];
            }
            if(isOdd) {
                if(numArr[num] >= tempNum) {
                    tempNum = numArr[num];
                    position = num;
                }
            } else {
                if(numArr[num] <= tempNum) {
                    tempNum = numArr[num];
                    position = num;
                }
            }
        }
        resultArr.push(tempNum);
        numArr.splice(position,1);
    }
    return resultArr;
}

console.log("Your new sequence is . . .");
console.log(oddEvenSquence(inputArr));