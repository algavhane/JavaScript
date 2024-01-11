console.log(`======================= step 1 =============================`);
let professor={
    firstName: "Ashish",
    LastName: "Gavhane",
    age: 22,
    city: "pune",
    country: "India",
    degrees:{
        engineering: "CSC",
        phd: "Adv computing",
        specification: "English",
        
    },
    certificates: ["Hacker Rank Participation","Certificate in IFe Course","Certificate in Adv Programming"],
    

}
console.log(professor);
console.log(`======================= step 2 =============================`);
console.log(professor.degrees);

console.log(`======================= step 3 =============================`);
console.log(professor.certificates);

console.log(`======================= step 4 =============================`);
professor.totalExperiance = `Experiance: 14 years`,
console.log(professor.totalExperiance);

console.log(`======================= step 5 =============================`);
professor.city="Mumbai";
console.log(professor);

console.log(`======================= step 6 =============================`);
professor.certificates.splice(2,0,"Oracle Certified"); //Oracle Certified
console.table(professor.certificates);

console.log(`======================= step 7 =============================`);
let result=professor.certificates[professor.certificates.length-1];
console.log(`Last Element of Array: ${result}`);

console.log(`======================= step 8 =============================`);
console.log(professor);


console.log(`======================= step 9 =============================`);
for (const iterator of professor.certificates) {
    console.log(iterator);
}

    


