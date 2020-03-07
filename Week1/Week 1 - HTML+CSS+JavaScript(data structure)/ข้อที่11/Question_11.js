const initArr = [0,9,1,8,2,7,3,6,4,5];

function sortNumMinToMax(initArr) {
  let baseNum, lowestP;
  let initLength = initArr.length;
  let postArr = [];

  for(let i = 0 ; i < initLength ; i++) {
    for(let j = 0 ; j < initArr.length ; j++) {
      if(j === 0) {
        baseNum = initArr[0];
      }
      if(initArr[j] <= baseNum) {
        baseNum = initArr[j];
        lowestP = j;
      }
    }
    postArr.push(baseNum);
    initArr.splice(lowestP, 1);
  }
  return postArr;
}

console.log(sortNumMinToMax(initArr));