// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');

const licenseChoice = [
    `[![License: MIT](https://img.shields.io/badge/License-MIT-red.svg)](https://opensource.org/licenses/MIT)`,
    `[![License: Mozilla](https://img.shields.io/badge/License-Mozilla-blue.svg)](https://opensource.org/licenses/MPL-2.0)`,
    `[![License: Apache](https://img.shields.io/badge/License-Apache-2.0-green.svg)](https://opensource.org/licenses/Apache-2.0)`,
];

const [mit, mozilla, apache] = licenseChoice;

// TODO: Create an array of questions for user input
// const questions = [];

// TODO: Create a function to write README file

// TODO: Create a function to initialize app
function init() {
    inquirer
        .prompt([
            {
                type: 'input',
                message: 'What is your title',
                name: 'Title',
                validate: function (answer) {
                    if (answer.length === 0) {
                        return console.log('Please enter a valid title')
                    }; return true;
                }
            },
            {
                type: 'input',
                message: 'What is your name',
                name: 'name',
                validate: function (answer) {
                    if (answer.length === 0) {
                        return console.log('Please enter a name')
                    }; return true;
                }
            },
            {
                type: 'input',
                message: 'Write a description',
                name: 'description',
                validate: function (answer) {
                    if (answer.length === 0) {
                        return console.log('Please enter a desription')
                    }; return true;
                }
            },
            {
                type: 'input',
                message: 'What is the install instructions',
                name: 'installation',
                validate: function (answer) {
                    if (answer.length === 0) {
                        return console.log('Please enter install instructions')
                    }; return true;
                }
            },
            {
                type: 'input',
                message: 'What is your project used for',
                name: 'usage',
                validate: function (answer) {
                    if (answer.length === 0) {
                        return console.log('Please enter what your project is used for')
                    }; return true;
                }
            },
            {
                type: 'input',
                message: 'What is your contribution',
                name: 'contributions',
                validate: function (answer) {
                    if (answer.length === 0) {
                        return console.log('Please enter contributions')
                    }; return true;
                }
            },
            {
                type: 'input',
                message: 'What are the testing instructions',
                name: 'testing',
                validate: function (answer) {
                    if (answer.length === 0) {
                        return console.log('Please enter testing instructions')
                    }; return true;
                }
            },
            {
                type: 'list',
                message: 'What kind of license do you want',
                name: 'license',
                choices: [mit, mozilla, apache]
            },
            {
                type: 'input',
                message: 'What is your github username',
                name: 'username',
                validate: function (answer) {
                    if (answer.length === 0) {
                        return console.log('Please enter a username')
                    }; return true;
                }
            },
            {
                type: 'input',
                message: 'What is your email',
                name: 'email',
                validate: function (answer) {
                    if (answer.length === 0) {
                        return console.log('Please enter an email')
                    }; return true;
                }
            },
            {
                type: 'input',
                message: 'What is the link to the project',
                name: 'link',
                validate: function (answer) {
                    if (answer.length === 0) {
                        return console.log('Please enter a link')
                    }; return true;
                }
            },
        ])

        .then(({
            title,
            name,
            description,
            installation,
            usage,
            contributions,
            testing,
            license,
            username,
            email,
            link,
        }) => {
            const template =
                `# ${title}
                
${name}
                
${link}
                
${license}
                
## Table of contents
                
* [description](#description)
* [installation](#installation)
* [usage](#usage)
* [contributions](#contributions)
* [testing](#testing)
* [contact](#email)
                
## Description
                
${description}
                
## Installation
                
${installation}
                
## Usage
                
${usage}
                
## contributions
                
${contributions}
                
## Testing
                
${testing}
                
## Contact
                
${email}`;

            createNew(title, template)
        })
        function createNew(fileName, template) {
            fs.writeFile('./utils/README.md', template, (err) => {
                if (err) throw err;
            }
            )}
};


// Function call to initialize app
init();
