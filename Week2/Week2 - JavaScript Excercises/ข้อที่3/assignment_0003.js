let m = 3; //(1 <= m , n <= 100)
let n = 3;
let matrixM = [[1,2,3],[3,2,1],[1,3,2]];
let matrixN = [[1,1,1],[1,1,1],[1,1,1]];
let result = [];
let output;
let err = "";

console.log("The dimension of matrix is " + m + " x " + n);

console.log("Matrix M . . .");
for(let i = 0 ; i < m ; i++) {
    output = "";
    for(let j = 0 ; j < n ; j++) {
        output = output + matrixM[i][j] + " ";
    }
    console.log(output);
}

console.log("Matrix N . . .");
for(let i = 0 ; i < m ; i++) {
    output = "";
    for(let j = 0 ; j < n ; j++) {
        output = output + matrixN[i][j] + " ";
    }
    console.log(output);
}


for(let i = 0 ; i < m ; i++) {
    result[i] = [];
    for(let j = 0 ; j < n ; j++) {
        if(-2000000000 <= matrixM[i][j] && matrixM[i][j] <=2000000000) {
            if(-2000000000 <= matrixN[i][j] && matrixN[i][j] <=2000000000) {
                result[i].push(matrixM[i][j] + matrixN[i][j]);
            } else {
                err = "Please input value between -2,000,000,000 to 2,000,000,000";
            }
        } else {
            err = "Please input value between -2,000,000,000 to 2,000,000,000";
        }

    }
}

if(err) {
    console.log(err);
} else {
    console.log("Result . . .");
    for(let i = 0 ; i < m ; i++) {
        output = "";
        for(let j = 0 ; j < n ; j++) {
            output = output + result[i][j] + " ";
        }
        console.log(output);
    }
}

