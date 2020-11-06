const fs = require("fs");
const inquirer = require("inquirer");
const generateMarkdown = require("./utils/generateMarkdown");

// array of questions for user
// const questions = [
// ];
// function readmeDoc

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
                message: "What is the file name and extension of your usage screenshots?",
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
                choices: [" MIT", " Apache 2.0", " GNU v3.0"],
                name: "license"
            }
        ])
        .then(function(response) {
            console.log(response);
            let myHtmlDoc = generateMarkdown(response);
            fs.writeFile("../README.md", myHtmlDoc, function (err) {
                if (err) {
                    return console.log(err);
                }
                console.log("Success!");
            });
        });
}
init();