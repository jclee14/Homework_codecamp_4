let x1 = 11;
let s = 15;
let x2;

if(-1000 <= x1 && x1 <= 1000 && -1000 <= s && s <= 1000) {
    x2 = (2 * s) - x1; //According to s = (x1+x2)/2 
    console.log("x2 = " + x2);
} else {
    console.log("Please enter value between -1000 to 1000");
}