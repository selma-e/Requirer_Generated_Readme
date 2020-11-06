const fs = require("fs");
const inquirer = require("inquirer");
const generateMarkdown = require("./utils/generateMarkdown");

function init() {
    inquirer.prompt([{
                type: "input",
                message: "What is your full name?",
                name: "name"
            },
            {
                type: "input",
                message: "What is the title of your project?",
                name: "title"
            },
            {
                type: "input",
                message: "What is the description of your project?",
                name: "description"
            },
            {
                type: "input",
                message: "What is the link to your video demo of this project?",
                name: "usage"
            },
            {
                type: "input",
                message: "What are the contribution guidelines?",
                name: "contribution"
            },
            {
                type: "input",
                message: "What are the test instructions?",
                name: "test"
            },
            {
                type: "input",
                message: "What is your Github repository link?",
                name: "repository"
            },
            {
                type: "list",
                message: "What type of license do you want to add to your readme?",
                choices: ["MIT", "Apache 2.0", "GNU v3.0"],
                name: "license"
            }
        ])
        .then(function (response) {
            console.log(response);
            let myHtmlDoc = generateMarkdown(response);

            switch (response.license) {
                case "MIT":
                    var badgeLicense = "[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)";
                    break;
                case "Apache 2.0":
                    var badgeLicense = "[![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)";
                    break;
                case "GNU v3.0":
                    var badgeLicense = "[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)";
                    break;
                default:
                    var badgeLicense = "";
                    break;
            }
            
            fs.writeFile("../README.md", myHtmlDoc, function (err) {
                if (err) {
                    return console.log(err);
                }
                console.log("Success!");
            });
        });
}
init();