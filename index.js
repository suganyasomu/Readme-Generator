const fs = require("fs");
const inquirer = require("inquirer");
// fs.writeFile("Readme.md", process.argv[2], function (err) {
//     if (err) {
//         return console.log(err);
//     }
//     console.log("Success!")
// })

inquirer.prompt([{
            type: "input",
            message: "What is title of the project?",
            name: "title"
        },
        {
            type: "input",
            message: "Write a description?",
            name: "description"
        },
        {
            type: "input",
            message: "Installation Instructions",
            name: "installation"
        },
        {
            type: "input",
            message: "Describe usage?",
            name: "Usage"
        },
        {
            type: "input",
            message: "Write a description?",
            name: "description"
        },
        {
            type: "checkbox",
            message: "Choose a license.",
            name: "license",
            choices: ["MIT license", "Apache license", "GPL License", "Public Domain(unlicensed)"]
        },
        {
            type: "input",
            message: "Write are the rules for contributing?",
            name: "contributing"
        },
        {
            type: "input",
            message: "Run tests here",
            name: "tests"
        },
        {
            type: "input",
            message: "Enter the url of your profile picture",
            name: "questions1"
        },
        {
            type: "input",
            message: "Enter email",
            name: "questions2"
        },
        {
            type: "input",
            message: "Write a table of contents seperted by commas",
            name: "toc"
        }



    ])
    .then(function (response) {
        fs.appendFileSync("README.md", ("#" + response.title) + '\n', function (err) {
            if (err) {
                return console.log(err);
            }
            console.log("Success!")

        });
        fs.appendFileSync("README.md", ("## Description" + '\n' + response.description) + '\n', function (err) {
            if (err) {
                return console.log(err);
            }
            console.log("Success!")

        });
        fs.appendFileSync("README.md", ("## Table Of Contents" + '\n' + '-' + response.toc.split(", ").join('\n' + '-')) + '\n', function (err) {
            if (err) {
                return console.log(err);
            }
            console.log("Success!")

        });
        fs.appendFileSync("README.md", ("## Installation Instructions" + '\n' + response.installation) + '\n', function (err) {
            if (err) {
                return console.log(err);
            }
            console.log("Success!")

        });
        fs.appendFileSync("README.md", ("## Usage" + '\n' + response.Usage) + '\n', function (err) {
            if (err) {
                return console.log(err);
            }
            console.log("Success!")

        });
        fs.appendFileSync("README.md", ("## License" + '\n' + response.license) + '\n', function (err) {
            if (err) {
                return console.log(err);
            }
            console.log("Success!")

        });

        fs.appendFileSync("README.md", ("## How to Contribute " + '\n' + response.contributing) + '\n', function (err) {
            if (err) {
                return console.log(err);
            }
            console.log("Success!")

        });
        fs.appendFileSync("README.md", ("## How to run tests " + '\n' + response.tests) + '\n', function (err) {
            if (err) {
                return console.log(err);
            }
            console.log("Success!")

        });
        fs.appendFileSync("README.md", ("## Contact Info " + '\n' + "![alt text](" + response.question1 + ")") + '\n', function (err) {
            if (err) {
                return console.log(err);
            }
            console.log("Success!")

        });
        fs.appendFileSync("README.md", ('\n' + response.question2) + '\n', function (err) {
            if (err) {
                return console.log(err);
            }
            console.log("Success!")

        });



    });