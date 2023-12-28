console.log("              ------- step 1 ---------");
function red(){
    console.log("Hello js");
    console.log("Hello my name is Ashish");
}
red();

console.log("              ------- step 2 ---------");
function personalDetails(firstName, lastName, collegeName){
    var result = firstName
    console.log("First Name: ",result);
    var lastName = lastName
    console.log("last Name: ",lastName);
    var collegeName = collegeName
    console.log("College Name: ",collegeName);
}
personalDetails("Ashish", "Gavhane","SMS")

console.log("              ------- step 3 ---------");
function swap(n1, n2){
    console.log("Before Swap: ",n1);
    console.log("Before Swap: ",n2);
    var temp = n1
    n1 = n2
    n2 = temp
    console.log("After Swap: ",n1);
    console.log("After Swap: ",n2);
}
swap("Virat", "Anushka")
swap(1000, 2000)

console.log("              ------- step 4 ---------");
 function addThreeValues(Name1,name2,name3){
    // console.log(Name1,name2,name3);
    var addition = (Name1+ name2 +name3)
    console.log("Addition: ","","","",addition);
    

 }
 addThreeValues(10.23,600,40)
 addThreeValues("Hello","Good","Morning")
 





