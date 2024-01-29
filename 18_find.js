
const arrayNum = [ 55, 11, 66, 18,  20, 73]; 
console.log(`****************************************`);
const value = arrayNum.find((element) => {
    return element>60;
});

console.log(value);