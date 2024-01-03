

console.log(`      =========== step 1 =============`);

function maleMarriageEligibility (gender,age,boyName){
    var result = gender=="Male" && age>=21 
     ?  `Hey ${boyName} you are eligible for Marriage` 
    : ` Hey ${boyName} You are not eligible, Please try next time.` ; 
     console.log(result);
 }
 maleMarriageEligibility("Male", 25, "Billgates");
 maleMarriageEligibility("Male", 17, "Stew");

 console.log(`      =========== step 1 =============`);

 function femaleMarriageEligibility(gender,age,girlName){
    var result = gender=="Feamle" && age>=18
    ?  `Hey ${girlName} you are eligible for Marriage` 
     : ` Hey ${girlName} You are not eligible, Please try next time.` ; 
     console.log(result);

 }
 femaleMarriageEligibility("Female", 16,"Jenifer")
 femaleMarriageEligibility("Female", 27,"Malinda Gates")

