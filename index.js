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
            message: 'What is your GitHub username?',
            validate: githubInput => {
                if (githubInput) {
                    return true;
                } else {
                    console.log('Please enter your GitHub username!');
                }
            }
        },
        {
            type: 'input',
            name: 'email',
            message: 'What is your contact email?',
            validate: emailInput => {
                if (emailInput) {
                    return true;
                } else {
                    console.log('Please enter a title for your project!');
                }
            }
        },
        {
            // NOT optional (validate)
            type: 'input',
            name: 'title',
            message: 'What is the title of your project as it appears on GitHub? [Use dashes as spaces]',
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
            message: 'Provide a short description explaining the what, why, and how of your project:',
            validate: descInput => {
                if (descInput) {
                    return true;
                } else {
                    console.log('Please enter a title for your project!');
                }
            }
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
            name: 'tests',
            message: 'If applicable, which framework was used for testing?'
        },
        {
            type: 'input',
            name: 'credits',
            message: 'Please enter the GitHub username or names with their primary online presence of all contributors, seperated by commas:'
        },
        {
            type: 'checkbox',
            name: 'madewith',
            message: 'Which languages and/or tech stack was your project created with?',
            choices: ['HTML', 'CSS', 'JavaScript', 'jQuery', 'Bootstrap', 'Node.js', 'ES6', 'React/MERN', 'Express.js']
        },
        {
            type: 'checkbox',
            name: 'license',
            message: 'Which license is your project protected under?:',
            choices: ['MIT', 'GPL 2.0', 'Apache 2.0', 'GPL 3.0', 'BSD 2.0', 'ISC', 'LGPL 3.0', 'Mozilla 2.0']
        }
    ])
    .then(response => {
        createREADME(generateMarkdown(response));
    })
}


// writes to the README.md file with fileContent passed as generateMarkdown(response)
const createREADME = fileContent => {
    fs.writeFile('./dist/README.md', fileContent, err => {
        if (err) throw err;
        console.log('README file created!');
    })
}

promptQuestions();