#! /usr/bin/env node

import inquirer from "inquirer";

const randomNumber = Math.floor(Math.random() * 5);
const answer = await inquirer.prompt([
    {
        name: "userGuessedNumber",
        type: "number",
        message: "Enter a number between 0 to 5:"
    }
]);

if
(answer.userGuessedNumber === randomNumber)(console.log(
    "Congratulations! You've entered the correct number."
))

else
(console.log(
    "Sorry! You've entered the incorrect number."
))