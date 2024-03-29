let array = [11, 22, 33, 44, 55, 66, 77];
console.log(`Traversing an array using for in loop..`);
for (const index in array) {
   console.log(array[index]);
}

let array1 = [11, 22, 33, 44, 55, 66, 77];
console.log(`sum of array using for in loop..`);
let sum = 0;
for (const index in array) {
   console.log(array1[index]);
   sum = sum +array1[index];
}
console.log(`Sum of aaray is: ${sum}`);

console.log(`Traversing an array using for of loop..`);
for (const element of array) {
   console.log(element); 
}

let arrayNum = [4, 5, 6, 7, 3]
console.log(`Traversing an array using for of loop..`);
let result = 0;
for (const element of arrayNum) {
    console.log(element);
    result = result+element;
}
console.log(`sum of array is: ${result}`);


console.log(`==== WAP to count the vowels from the given string=======`);
const str = "Developer UI and Backend";
const vowels = "aeiou";
let count = 0;
for (const char of str) {
    console.log(char);
    if (vowels.includes(char.toLowerCase())) {
        count++;
    }
}
console.log(`Vowels count is: ${count}`);


let arrayOfFriends = ["Jenny", "Elon", "Bill"];
const result1 = arrayOfFriends.join(",");
console.log(typeof result1);
console.log(result1);

const word = "Developer UI and Backend";
const arrayOfWords = word.split(" ");
console.log(arrayOfWords.length);

const reverseStr = word.split("").reverse().join("");
console.log(reverseStr);