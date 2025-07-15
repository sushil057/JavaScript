var age =21;

if(age <=18){
    console.log("You are not eligible drive");
}
else if(age >=18 || age <=60){
    console.log("You are eligible to drive");
} 
else if (age>60){
    console.log("You are eligible but too old to drive")
}
else{
    console.log("Invalid input")
}

// Questions 
let myage = 13;
if(myage >=10 && myage <= 20){
    console.log("Your age lies between the required circumstances");
}
else {
    console.log("Your age is not within the required cicumstances");
}

let number = 6;

if((number%3==0) && (number%2==0)){
    console.log("The number is divisible by 2 and 3");
}
else{
    console.log("The number is not divisible by 2 and 3")
}

