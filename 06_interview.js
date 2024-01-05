

var interview = function(gradScore,hscScore,sscScore,candidateName){
    if (gradScore >= 70 || hscScore >=80 || sscScore >90 && candidateName=="Ashish") {
        console.log(`Congrates ${candidateName} you are eligible for TCS interview. `);
    } else {
        console.log(`Unfortunately ${candidateName} you are not eligible for interview.`); 
    }if (gradScore >= 70 || hscScore >=80 || sscScore >90 && candidateName=="Suraj") {
        console.log(`Congrates ${candidateName} you are eligible for TCS interview. `);
    } else {
        console.log(`Unfortunately ${candidateName} you are not eligible for interview.`);  
    }if (gradScore >= 70 || hscScore >=80 || sscScore >90 && candidateName=="Akash") {
        console.log(`Congrates ${candidateName} you are eligible for TCS interview. `);
    } else {
        console.log(`Unfortunately ${candidateName} you are not eligible for interview.`); 
    }
  
}
interview(80,86,90,"Ashish");
interview(70,65,55,"Suraj");
interview(60,79,88,"Akash");
