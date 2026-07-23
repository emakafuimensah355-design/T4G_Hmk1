// Prompt user for information
let name = prompt("Enter your name:");
let age = prompt("Enter your age:");
let email = prompt("Enter your email address:");

// Display the information
alert(`Hi ${name}, you are ${age} years old and we'll keep in touch via your email: ${email}`);

// A. Store your name inside a variable and log it to the console
let myName = "Emmanuella Makafui Mensah";
console.log("Name:", myName);

// B. Store your age inside a variable and log it to the console
let myAge = 20;
console.log("Age:", myAge);

// C. Add two numbers and store it in a variable and log it to the console
let addition = 10 + 5;
console.log("Addition:", addition);

// D. Subtract two numbers and store it in a variable and log it to the console
let subtraction = 10 - 5;
console.log("Subtraction:", subtraction);

// E. Divide two numbers and store it in a variable and log it to the console
let division = 10 / 5;
console.log("Division:", division);

// F. Multiply two numbers and store it in a variable and log it to the console
let multiplication = 10 * 5;
console.log("Multiplication:", multiplication);

// G. Find the remainder of 15 % 4 and store it in a variable and log it to the console
let remainder = 15 % 4;
console.log("Remainder:", remainder);

// H. Store a boolean value inside a variable and log it to the console
let isStudent = true;
console.log("Boolean Value:", isStudent);

// I. Set the value of a variable to a number and log the type of data it is
let numberValue = 100;
console.log("Type of numberValue:", typeof numberValue);

// J. Set the value of a variable to a string and log the type of data it is
let stringValue = "JavaScript";
console.log("Type of stringValue:", typeof stringValue);

// Display alert based on age entered
if (age < 12) {
    alert(`Hi ${username}, you are ${age} years old and you are too young to register. Sorry 😔😔`);
}
else if (age >= 12 && age < 18) {
    alert(`Hi ${username}, you are ${age} years old and you have limited options to register for. We will keep in touch via your email: ${email}. 👏🏽👏🏽`);
}
else {
    alert(`Hi ${username}, you are ${age} years old and you can register for any option of your choosing. We will keep in touch via your email: ${email}. 👏🏽👏🏽`);
}