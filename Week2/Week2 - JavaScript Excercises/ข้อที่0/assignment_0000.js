let a = 5; //จำนวนเต็ม a โดยที่ 0 <= a <= 10^9
let b = 4; //จำนวนเต็ม bโดยที่ 0 <= a <= 10^9
let result;

if(0 <= a && a <= Math.pow(10,9) && 0 <= b && b <= Math.pow(10,9)) {
    result = a + b;
    console.log("The result of " + a + " + " + b + " is " + result);
} else {
    console.log("Please input the value between 0 to 10^9");
}