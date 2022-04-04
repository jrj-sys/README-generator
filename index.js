// required dependencies
const fs = require('fs');
const inquirer = require('inquirer');
const generateREADME = require('./utils/generateMarkdown')

// array of questions for user input
const promptQuestions = () => {
    inquirer
    .prompt([
        {
            // NOT optional (validate)
            type: 'input',
            name: 'title',
            message: 'What is the title of your project? [REQUIRED]'
        },
        {
            type: 'input',
            name: 'description',
            message: 'Provide a short description explaining the what, why, and how of your project:'
        },
        {
            // optional (create conditional)
            type: 'confirm',
            name: 'toc',
            message: 'If you expect your README to be lengthy, you should add a table of contents. Would you like to do that now?',
            default: false
        },
        {
            type: 'input',
            name: 'install',
            message: 'Please provide user instructions for installation of your project:'
        },
        {
            type: 'input',
            name: 'usage',
            message: 'Please provide user instructions for usage of your project:'
        },
        {
            type: 'input',
            name: 'contribution',
            message: 'Please enter all who contributed to your application (name / github / primary presence links):'
        },
        {
            type: 'input',
            name: 'tests',
            message: 'Please provide instructions on testing your application:'
        },
        {
            type: 'input',
            name: 'questions',
            message: 'Please provide instructions for user questions and contribution:'
        },
        {
            type: 'checkbox',
            name: 'license',
            choices: ['MIT', 'GPL 2.0', 'Apache 2.0', 'GPL 3.0', 'BSD 2.0', 'ISC', 'LGPL 2.1', 'Ms-Pl']
        }
    ])
    .then(answers => {
        console.log(answers);
        console.log(generateREADME(answers))
    })
}


// TODO: Create a function to write README file
function writeToFile(fileName, data) {}



promptQuestions();