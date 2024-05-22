// Question #3
let userPassword = "TechUp";

function checkPasswordStrength (count){
    if(count < 6){
        return "Weak";
    }
    else if (count >=6 && count<= 10 ){
        return 	"Medium";
    }
    else {
        return "Strong";
    }
}
console.log(checkPasswordStrength(userPassword.length)); 
