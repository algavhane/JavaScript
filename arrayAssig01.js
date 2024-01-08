console.log(`    ========== step 1 ==========`);
const fruits_seasonal = ["Banana","Orange","Apple","Mango","Water Melon"];
const fruits =fruits_seasonal[0];
console.log(`First Element is: ${fruits}`);
const fruits1 =fruits_seasonal[4];
console.log(`Last Element is: ${fruits1}`);

console.log(`    =========== step 2 ===========`);
const fruits_seasonal1 = ["Banana","Orange","Apple","Mango","Water Melon"];
fruits_seasonal1.unshift("Pappya")
console.log(fruits_seasonal1);

console.log(`    =========== step 3 ===========`);
const fruits_seasonal2 = ["Banana","Orange","Apple","Mango","Water Melon"];
console.log(`Before Remove`);
console.log(fruits_seasonal2);
console.log(`After Remove`);
fruits_seasonal2.splice(3,1);
console.log(fruits_seasonal2);

console.log(`    =========== step 4 ===========`);
const fruits_seasonal3 = ["Banana","Orange","Apple","Mango","Water Melon"];
fruits_seasonal3.push("Pineapple")
console.log(fruits_seasonal3);

console.log(`    =========== step 5 ===========`);
console.log(`Before Insert`);
const fruits_seasonal4 = ["Banana","Orange","Apple","Mango","Water Melon"];
console.log(fruits_seasonal4);
console.log(`After Insert`);
fruits_seasonal4.splice(4,0,"Dragon Fruit")
console.log(fruits_seasonal4);

console.log(`    =========== step 6 ===========`);
console.log(`Before Replace`);
const fruits_seasonal5 = ["Banana","Orange","Apple","Mango","Water Melon"];
console.log(fruits_seasonal5);
console.log(`After Replace`);
fruits_seasonal5.splice(1,1,"Kiwi")
console.log(fruits_seasonal5);

console.log(`    =========== step 7 ===========`);
const fruits_seasonal6 = ["Banana","Orange","Apple","Mango","Water Melon"];
let result = fruits_seasonal6.slice(1,4);
console.log(result);

console.log(`    =========== step 8 ===========`);
for (let index = 2; index < fruits_seasonal6.length; index++) {
    const element = fruits_seasonal6[index];
    console.log(element);
    
}








