// packages needed for this application: fs and inquirer
// worked on index questions in study group with Ani, Shane, and Dana

const fs = require("fs");
const inquirer = require("inquirer");
const generateMarkdown = require("./utils/generateMarkdown")

//create variable where the file will be written to and copied. Must have relative file path name
// const { writeFile, copyFile } = require('./utils/generateMarkdown');


// TODO: Create an array of questions for user input (starter code)
var questionsPrompt = () => {
    return inquirer.prompt([
        {
            type: "input",
            name: "name",
            message: "What is the name of your project? (Required)",
            validate: nameInput => {
                if (nameInput) {
                    return true;
                } else {
                    console.log("You must enter the name of your project.");
                    return false;
                }
            }
        },
        {
            type: "input",
            name: "description",
            message: "Please describe your project (Required)",
            validate: descriptionInput => {
                if (descriptionInput) {
                    return true;
                } else {
                    console.log("This is required. Enter description.");
                    return false;
                }
            }
        },
        {
            type: "confirm",
            name: "confirmTable",
            message: "Type Y or Yes to have your Table of Contents generated. (Required) "
        },
        {
            type: "input",
            name: "installation",
            message: "What is the installation process for your project? (Optional)"
        },
        {
            type: "input",
            name: "usage",
            message: "Please provide instructions for use. (Required)",
            validate: usageInput => {
                if (usageInput) {
                    return true;
                } else {
                    console.log("You must provide basic instructions for use.");
                    return false;
                }
            }
        },
        {
            type: "input",
            name: "contributing",
            message: "If you would like other developers to contribute to your project, please add guidelines for how to do so. (Optional)"
        },
        {
            type: "input",
            name: "test",
            message: "What tests, if any, have you written for your application? (Optional)"
        },
        {
            type: "checkbox",
            name: "license",
            message: "If your project is licesened, please select the appropriate option (Optional)",
            choices: ["Apache", "GNU", "MIT", "ISC", "Other"]
        },
        {
            type: "input",
            name: "licenseLink",
            message: "If liscensed, please enter your license link here. (Optional)"
        },
        {
            type: "input",
            name: "github",
            message: "Please enter your Github username (Required)",
            validate: githubInput => {
                if (githubInput) {
                    return true;
                } else {
                    console.log("You must enter your Github username");
                    return false;
                }
            }
        },
        {
            type: "input",
            name: "githubLink",
            message: "If you'd like, enter the link to your Github profile. (Optional)"
        },
        {
            type: "input",
            name: "email",
            message: "Please enter your email address. (Required)",
            validate: emailInput => {
                if (emailInput) {
                    return true;
                } else {
                    console.log("You must enter your email address!")
                }
            }
        }
    ])
};




// TODO: Create a function to write README file
function writeToFile(fileName, data) {   //starter code
    fs.writeFile(fileName, data, error => {
        if (error) {
            return console.log(error);
        } else {
            console.log("Your README has been generated! Check out 'ReadMe.md' to see!");
        }
    })

};


// TODO: Create a function to initialize app
function init() {
    questionsPrompt()
        .then(userAnswers => {

            let markdown = generateMarkdown(userAnswers);
            console.log(markdown);
            writeToFile("./ReadMe.md", markdown);
        })
}                     

// Function call to initialize app
init();                             