// TODO: Include packages needed for this application
const inquirer = require("inquirer");
const fs = require ("fs");
const generateMarkdown = require("./utils/generateMarkdown")

// TODO: Create an array of questions for user input
const questions = () => {
    return inquirer.prompt([
        {
            type: "input",
            name: "name",
            message: "What is the name of your project? (Required) ",
            validate: nameInput => {
                if (nameInput) {
                    return true;
         } else  {
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
                (descriptionInput) {
                    return true;
                } else {
                    console.log("You must enter a project description.");
                    return false;
                }
            }
            },
    {
        type: 'rawlist',
        name: 'lisence',
        message: 'Which license does your project need?',
        choices: ['Apache License 2.0', 'GNU GPLv3', 'MIT', 'ISC License', 'None']
        validate: license => {
            if (license) {
                return true;
            } else if (!license){
                console.log('Please enter required information');
                return false;
            }
        }
    },
    ];

// TODO: Create a function to write README file
// function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions)
    .then(questions => {

        const markupHtml = writeToFile(questions);
        fs.writeFile("./dist/README.md", markupHtml, err =>{
            if(err){
                console.log(err);
            } else {
                console.log('Success!');
            }
        })
    })
    
};

// Function call to initialize app
init();
