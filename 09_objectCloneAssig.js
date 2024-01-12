

const bankSbi ={
    bankName: "State Bank Of India",
    branch: "Sangola",
    establishment: 1995,
    founder: "John Mattai",
}
console.log(`===================== step 1 ===========================`);
console.log(bankSbi);

const bankLocation ={
    street: "Wakad",
    city: "Pune",
    pin: 411001,
}
console.log(`===================== step 2 ===========================`);
console.log(bankLocation);

console.log(`===================== step 3 cloning ===========================`);
const cloning = Object.assign(bankSbi,bankLocation);
console.log(cloning);

console.log(`===================== step 4 ===========================`);

const rateOfInterest ={
    homeLoanInterest: "Eight Percent",
    personalLoanInterest: "Ten Percent",
    duelInterest: "Five Percent",
}
console.log(rateOfInterest);

console.log(`===================== step 5 merge ===========================`);
const sbiDetails = Object.assign({},bankSbi,bankLocation,rateOfInterest);
console.log(sbiDetails);


console.log(`===================== step 6 ===========================`);
for (const key in sbiDetails) {
    if (Object.hasOwnProperty.call(sbiDetails, key)) {
        const element = sbiDetails[key];
        console.log(` ${key} ==> ${element}`);
        
    }
}