// required dependencies
const fs = require('fs');
const inquirer = require('inquirer');
const { generateMarkdown, renderLicenseText, renderLicenseBadge } = require('./utils/generateMarkdown')

// array of questions for user input
const promptQuestions = () => {
    inquirer
    .prompt([
        {
            // NOT optional (validate)
            type: 'input',
            name: 'github',
            message: 'What is your GitHub username? [REQUIRED]:',
            validate: githubInput => {
                if (githubInput) {
                    return true;
                } else {
                    console.log('Please enter your GitHub username!');
                }
            }
        },
        {
            // NOT optional (validate)
            type: 'input',
            name: 'title',
            message: 'What is the title of your project? [REQUIRED]:',
            validate: titleInput => {
                if (titleInput) {
                    return true;
                } else {
                    console.log('Please enter a title for your project!');
                }
            }
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
            name: 'credits',
            message: 'Please enter all who contributed to your application (name / github / primary presence links):'
        },
        {
            type: 'checkbox',
            name: 'madewith',
            message: 'Which languages and/or tech stack was your project created with?',
            choices: ['HTML', 'CSS', 'JavaScript', 'jQuery', 'Bootstrap', 'Node.js', 'ES6', 'React/MERN', 'Express.js']
        },
        {
            type: 'input',
            name: 'questions',
            message: 'Please provide instructions for user questions and contribution:'
        },
        {
            type: 'checkbox',
            name: 'license',
            message: 'Which license is your project protected under?:',
            choices: ['MIT', 'GPL 2.0', 'Apache 2.0', 'GPL 3.0', 'BSD 2.0', 'ISC', 'LGPL 3.0', 'Mozilla 2.0']
        }
    ])
    .then(response => {
        console.log(response);
        createREADME(generateMarkdown(response));
    })
}


// TODO: Create a function to write README file
const createREADME = fileContent => {
    fs.writeFile('./dist/README.md', fileContent, err => {
        if (err) throw err;
        console.log('README file created!');
    })
}



promptQuestions();