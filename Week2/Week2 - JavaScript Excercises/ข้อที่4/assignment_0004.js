let text = "asjrpowempvj";
let upperC = false;
let lowerC = false;

for(let i = 0 ; i < text.length ; i++) {
    if(text.charAt(i) === text.charAt(i).toUpperCase()) {
        upperC = true;
    } else {
        lowerC = true;
    }
}

if(upperC == true && lowerC == true) {
    console.log("Mix");
} else if(upperC == true && lowerC == false) {
    console.log("All Capital Letter");
} else {
    console.log("All Small Letter");
}