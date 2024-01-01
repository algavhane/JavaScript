

var num = 5;
var result = num % 2;
var resultValue = result == 0 ? " Given number is Even " : "It is Odd number"; 
console.log(resultValue);

var n1 = "100";
var n2 = 100;
var result = n1 == n2 ;
console.log(` Comparision using == operator ==> ${ result } `);


var result = n1 === n2 ;
console.log(` Comparision using === operator ==> ${ result } `);

var a = 20;
var b = ++a;
console.log(b);

var result = 100 + true;
console.log(result);

console.log("========string to number============");
var resultValue = 99 - false;
console.log(resultValue);
console.log("1" + "1");

var s1 = "101";
console.log(typeof s1);

var s2 = +s1;
console.log(s2);
console.log(typeof s2);

var d = +"200";
console.log(d);
console.log(typeof d);

var z = +"ashish";
console.log(z);

var a = Number("100");
console.log(typeof a);

var s1 = "200";
var res = Number(s1);
console.log(typeof res);

var p = Boolean(10);
console.log(p);

