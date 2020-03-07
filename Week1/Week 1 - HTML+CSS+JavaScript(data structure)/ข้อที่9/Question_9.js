const initArr = [0,1,2,3,4,5,6,7,8,9,10];

function removeEvenNum(initArr) {
  let i = 0;
  while( i < initArr.length ) {
    if(initArr[i] % 2 === 0) {
      initArr.splice(i,1);
    }
    i++;
  }
  return initArr;
}

console.log(removeEvenNum(initArr));