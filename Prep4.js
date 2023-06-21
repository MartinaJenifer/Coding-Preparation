//Write a program to take input from the user and display whether the number is zero, positive or negative.

const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question("Enter a number: ", function(userInput) {
  const number = parseFloat(userInput);

  if (number === 0) {
    console.log("The number is zero.");
  } else if (number > 0) {
    console.log("The number is positive.");
  } else {
    console.log("The number is negative.");
  }

  rl.close();
});
