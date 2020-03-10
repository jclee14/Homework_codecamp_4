let order = "CBABCACCC";
let leftCup = true;
let midCup = false;
let rightCup = false;

for(let i = 0 ; i < order.length ; i++) {
    switch(order.charAt(i).toUpperCase()) {
        case "A":
            if(leftCup == true) {
                leftCup = false;
                midCup = true;
            } else if (midCup == true) {
                leftCup = true;
                midCup = false;
            }
            break;
        case "B":
            if(midCup == true) {
                midCup = false;
                rightCup = true;
            } else if (rightCup == true) {
                midCup = true;
                rightCup = false;
            }
            break;
        case "C":
            if(rightCup == true) {
                leftCup = true;
                rightCup = false;
            } else if (leftCup == true) {
                leftCup = false;
                rightCup = true;
            }
            break;
    }
    //console.log(leftCup + " / " + midCup + " / " + rightCup);
}

console.log("Input order: " + order);

if(leftCup == true) {
    console.log("Result: 1");
} else if(midCup == true) {
    console.log("Result: 2");
} else {
    console.log("Result: 3");
}