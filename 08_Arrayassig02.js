



console.log(`======================== step 1 ==================================`);
const arrayNumber=[20,31,40,25,23,11,29,9,60,2,11];

      console.log(`Total Element: ${arrayNumber.length}`);
  
console.log(`======================== step 2 ==================================`);
let result = arrayNumber[0];
console.log(`First Element: ${result}`);
let results = arrayNumber[10];
console.log(`Last Element: ${results}`);

console.log(`======================== step 3 ==================================`);
let length = arrayNumber.length = 64;
console.log(`Third Last Element: ${length}`);

console.log(`======================== step 4 ==================================`);
let evenNumber = 0;
for (const evenNumber of arrayNumber) {
    if (evenNumber % 2==0) {
       console.log(`Even number: ${evenNumber}`); 
    } 
}

console.log(`======================== step 5 ==================================`);
const arrayNumbers=[20,31,40,25,23,11,29,9,60,2,11];
let oddNumber=0;
for (const oddNumber of arrayNumbers) {
    if (oddNumber%2!=0) {
        console.log(`Odd Number: ${oddNumber}`);
    }  
}

console.log(`======================== step 6 ==================================`);
let sum =0;
for (const key in arrayNumbers) {
    if (key%2==0) {
        let evenNumber=arrayNumbers[key]; 
        sum=sum+evenNumber;      
    }
}
console.log(`Total Sum of Even index Element is: ${sum}`); 

console.log(`======================== step 7 ==================================`);
let sums =0;
for (const key in arrayNumbers) {
    if (key%2!=0) {
        let evenNumber=arrayNumbers[key]; 
        sums=sums+evenNumber;      
    }
}
console.log(`Total Sum of Odd index Element is: ${sums}`);

console.log(`======================== step 8 ==================================`);
let addition=0;
for (const iterator of arrayNumbers) {
    addition=addition+iterator;
}
console.log(`Sum All Elements From Array is: ${addition}`);

console.log(`======================== step 9 ==================================`);
console.log(`Number Which are Multple of 5: `);
for (const iterator of arrayNumbers) {
   if (iterator%5==0) {
     console.log(`${iterator}`);
   }     
}

console.log(`======================== step 10 ==================================`);
let includes =arrayNumbers.includes(115);
console.log(`Given Number is 115 is Available or not: ${includes}`);

console.log(`======================== step 11 ==================================`);
let include =arrayNumbers.includes(23);
console.log(`Given Number is 23 is Available or not: ${include}`);

console.log(`======================== step 12 ==================================`);
arrayNumbers.splice(3,0,55,66)
console.log(`Insert numbers==>55,66 at index 3:  ${arrayNumbers}`);

console.log(`======================== step 13 ==================================`);
const number=[20,31,40,25,23,11,29,9,60,2,11];
let resultdelete = number.splice(4,3)
console.log(`Delete 3 elements starting from index 4: ${number}`);








    




 

    



   
