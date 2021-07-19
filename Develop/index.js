// TODO: Include packages needed for this application
const inquirer = require("inquirer");
const fs = require ("fs");
const generateMarkdown = require("./utils/generateMarkdown");
const { type } = require("os");

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
               if (descriptionInput) {
                    return true;
                } else {
                    console.log("You must enter a project description.");
                    return false;
                }
            }
        },
    {
        type: "input",
        name: "lisence",
        message: "What lisence are you using?",
    },
    {

    type: "input",
    name: "githubLink",
    message: "Enter your Github profile. (Optional)",
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
// function writeToFile(fileName, data) {}
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, error => {
        if (error) {
            return console.log(error);
        } else {
            console.log("Your README has been created! Open ReadMe.md!");
        }
    })
};


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
