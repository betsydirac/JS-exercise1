// 1:variables and data types

const fullname = "Betsy";
let age = 23;
var isEnrolled = true;

console.log(fullname,typeof fullname);
console.log(age,typeof age);
console.log(isEnrolled,typeof isEnrolled);

// 2:operators and type coercion

const stringNum1 = "5";
const actualNum1 = 10;

//addition
const additionresult = stringNum1 + actualNum1;
console.log(additionresult,typeof additionresult);

//multiplication
const multiplicationresult = stringNum1 * actualNum1;
console.log(multiplicationresult,typeof multiplicationresult);

// 3:conditional statements
let customerAge = 20;
let ticketPrice;

if (customerAge < 12) {
    ticketPrice = 5;
} else if (customerAge >= 12 && customerAge <= 64) {
    ticketPrice = 10;
} else {
    ticketPrice = 7;
}

console.log("Customer Age:", customerAge, "| Ticket Price: $" + ticketPrice);

// 4: Conditional Operator
let accountBalance = 50;
let accountStatus = accountBalance < 0 ? "Account Overdrawn" : "Account Active";

console.log("Account Status:", accountStatus);


// 5. Comprehensive Challenge
let numericScore = 85;
let finalGrade;

switch (true) {
    case (numericScore >= 90 && numericScore <= 100):
        finalGrade = "A";
        break;
    case (numericScore >= 80 && numericScore < 90):
        finalGrade = "B";
        break;
    case (numericScore >= 70 && numericScore < 80):
        finalGrade = "C";
        break;
    case (numericScore >= 60 && numericScore < 70):
        finalGrade = "D";
        break;
    case (numericScore >= 0 && numericScore < 60):
        finalGrade = "F";
        break;
    default:
        finalGrade = "Invalid Score";
}

console.log(`Score: ${numericScore} | Final Grade: ${finalGrade}`);

