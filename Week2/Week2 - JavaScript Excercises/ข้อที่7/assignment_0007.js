//https://www.programming.in.th/forum/t6946.htm#x
let r = 1; //(0 <= R <= 10000)
let taxiArea, euclidArea;

if(0 <= r && r <= 10000) {
    //Formula Taxicab geometry
    // Distance from center to square edge is eqaul to r * (Math.sqrt(2)/2) 
    taxiArea = Math.pow((r * Math.sqrt(2)), 2); // or 2*r*r

    //Formula Euclidean geometry
    euclidArea = Math.PI * r * r; //Circle calculation

    console.log(euclidArea.toFixed(6));
    console.log(taxiArea.toFixed(6));
} else {
    console.log("Please input the radius between 0 to 10000")
}
