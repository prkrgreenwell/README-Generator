/** @format */

const inquirer = require("inquirer");
const fs = require("fs");

inquirer
  .prompt([
    {
      type: "input",
      name: "title",
      message: "Enter the title of the project",
    },
    {
      type: "input",
      name: "description",
      message: "Enter the description of the project",
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
      message: "Enter the contributing information for the project",
    },
    {
      type: "input",
      name: "tests",
      message: "Enter the tests information for the project",
    },
    {
      type: "list",
      name: "license",
      message: "Select the license of the project",
      choices: ["Apache", "MIT", "GPL"],
    },
    {
      type: "list",
      name: "github",
      message: "Enter your GitHub username",
    },
    {
      type: "input",
      name: "email",
      message: "Enter your email address",
    },
  ])
  .then((data) => {
    const filename = `${data.title.toLowerCase()}.split(" ").join("").json`;

    fs.writeFile(filename, JSON.stringify(data, null, "/t"), (err) =>
      err ? console.log(err) : console.log("Success!")
    );
  });
