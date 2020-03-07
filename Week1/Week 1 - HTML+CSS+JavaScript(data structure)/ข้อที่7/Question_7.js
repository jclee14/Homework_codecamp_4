const initArr = [0,1,2,3,4,5,6,7,8,9,10];

function removeEvenNum(initArr) {
  const postArr = initArr.filter((num) => {
    return num % 2 !== 0;
  })

  return postArr;
}

console.log(removeEvenNum(initArr));