
console.log(`      ======== step 1 =========`);
var isEvenOrOdd = function(num){
  var  returnValue = "";
  if (num % 2 == 0) {
   returnValue = "Even";
    
  } else {
    returnValue = "Odd";
  }
  return returnValue;

}
var result = isEvenOrOdd(45);
console.log(`Given 45 Number is ${result}`);

var result = isEvenOrOdd(70);
console.log(`Given 70 Number is ${result}`);

var result = isEvenOrOdd(67);
console.log(`Given 67 Number is ${result}`);

var result = isEvenOrOdd(98);
console.log(`Given 98 Number is ${result}`);

console.log(`      ======== step 2 =========`);

var Eligible = function(num){
    if ( num >= 18 ) {
        console.log("Age is",num,"eligible for vote."); 
        
    } else {
        console.log("Age is",num,"not eligible for vote.");  
    }
}
Eligible(18);
Eligible(20);
Eligible(17);
Eligible(40);

console.log(`      ======== step 3 =========`);

var contain = function(string){
    
    if (string.length>=10) {
        console.log("JavaScript - ES6 contain more than 10 characters");
        
    } else {
        console.log("JavaScript - ES6 is not contain more than 10 characters");
    }

}
contain(" Java Script - ES6")





