


function stringHandsOn(){
    var givenString = "   Hey you are doing good, keep it up     ";
    console.log(`(1) Given String is: ${givenString}`);
}
stringHandsOn()
var length = "   Hey you are doing good, keep it up     ";
var resultlenght = length.length;
console.log(`(2) length of string is: ${resultlenght}`);

var trailing = "   Hey you are doing good, keep it up    ";
var trimResult = trailing.trim(" ")
console.log(`(3) Afer trim given string is: ${trimResult}, And it's length is:  ${trimResult.length}`);

var extraSpaceResult = resultlenght-trimResult.length;
console.log(`(4) The Total Number Extra Spaces Removed is: ${extraSpaceResult}`);

var firstChar = trimResult.charAt(0);
var lastChar = trimResult.charAt(33);
console.log(`(5) First Char after trim is:${firstChar}, last Char after trim is: ${lastChar}`);

var count = trimResult.split(" ");
console.log(`(6) Count of total words is: ${count.length}`);

var index = trimResult.indexOf("good");
console.log(`(7) Index of word "good" is: ${index}`);

var substring = trimResult.substring("22");
var slice = trimResult.slice("22");
console.log(`(8) Substring starting from index 22 is: ${substring},Slice starting from index 22 is: ${slice}`);

var ends = trimResult.endsWith("up");
console.log(`(9) String ends with word "up" is: ${ends}`);

var starts = trimResult.startsWith("Hey");
console.log(`(10) String starts with word "up" is: ${starts}`);
 

   