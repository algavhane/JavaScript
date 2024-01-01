
console.log(`    ========= Question 1 =============`);

function squareOfWordLenght(s1,s2,s3){
    var s1result = s1.length;
    console.log(`The Length of Word is: ${s1result}
Square of String Length is: ${s1.length * s1.length}`);
console.log("");
     var s2result = s2.length;
     console.log(`The Length of Word is: ${s2result}
Square of String Length is: ${s2.length * s2.length}`); 
console.log("");
var s3result = s3.length;
console.log(`The Length of Word is: ${s3result}
Square of String Length is: ${s3.length * s3.length}`); 
console.log("");

}
squareOfWordLenght("JavaScript","Google Chrome","Developer Smart")
console.log(`    ========= Question 2 =============`);

function angular(){
var result ="I am Angular Developer";
var angularlength = result.length;
console.log(`String Length is: ${angularlength}`);

var resultword = result.split(" ").length;
console.log(`The words available in string is: ${resultword}`);

var divide = angularlength / resultword;
console.log(`Division of string length and total number of words is: ${divide}`);

var multiple = angularlength * resultword;
console.log(`Multiplication of string length and total words available in string is: ${multiple}`);

}
angular()





