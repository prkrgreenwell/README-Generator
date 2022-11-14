const inquirer = require("inquirer");
const fs = require("fs");

// TODO: Create an array of questions for user input
const questions = [
  {
    type: "input",
    name: "title",
    message: "Enter the title of your project",
  },
  {
    type: "input",
    name: "description",
    message: "Enter a description of your project",
  },
  {
    type: "input",
    name: "installation",
    message: "Enter the installation instructions for your project",
  },
  {
    type: "input",
    name: "usage",
    message: "Enter the usage information for your project",
  },
  {
    type: "input",
    name: "contributing",
    message: "Enter the contributions for your project",
  },
  {
    type: "input",
    name: "tests",
    message: "Enter the test instructions for your project",
  },
  {
    type: "list",
    name: "license",
    message: "Choose the appropriate license for your project",
    choices: ["Apache", "MIT", "GPL"],
  },
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();
