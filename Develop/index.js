/** @format */

const inquirer = require("inquirer");
const fs = require("fs");
const generateMarkdown = require("./utils/generateMarkdown");

const questions = [
  {
    type: "input",
    name: "title",
    message: "Enter the title of the project",
  },
  {
    type: "input",
    name: "description",
    message: "Enter a description of the project",
  },
  {
    type: "input",
    name: "installation",
    message: "Enter the installation instructions for the project",
  },
  {
    type: "input",
    name: "usage",
    message: "Enter the usage information for the project",
  },
  {
    type: "input",
    name: "contributing",
    message: "Enter the contributions for the project",
  },
  {
    type: "input",
    name: "tests",
    message: "Enter the test instructions for the project",
  },
  {
    type: "list",
    name: "license",
    message: "Choose the appropriate license for the project",
    choices: ["Apache", "MIT", "GPL"],
  },
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
  fs.writeFile(fileName, data, (err) =>
    err ? console.log(err) : console.log("Success!")
  );
}

// TODO: Create a function to initialize app
function init() {
  inquirer.prompt(questions).then((data) => {
    const filename = `./new_READMEs/${data.title
      .split(" ")
      .join("_")}_README.md`;

    const newData = generateMarkdown(data);

    writeToFile(filename, newData);
  });
}

// Function call to initialize app
init();
