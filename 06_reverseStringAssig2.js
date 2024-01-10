

function reverseString(str){
   
    let result = "";
    for (let index = str.length-1; index >=0; index--) {
        result = result + str.charAt(index)
        
      
    }
    console.log(result);


}
reverseString("Hard work always pays back")
reverseString("Soon I will be Angular IT Champ")