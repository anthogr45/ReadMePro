const inquirer = require('inquirer');
const fs = require('fs');


const licenseOpt = [  // Array contains URLs for the License and for the Badges
    {
        name: 'MIT',
        badge: '[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)'
    },
    {
        name: 'APACHE',
        badge: '[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)'
    },
    {
        name: 'GPL V3',
        badge: '[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)'
    },
    {
        name: 'BSD 3-Clause',
        badge: '[![License](https://img.shields.io/badge/License-BSD_3--Clause-blue.svg)](https://opensource.org/licenses/BSD-3-Clause)'
    },
    {
        name: 'None',
        badge: 'None'
    },
];

const questions = [ //Array for the input questions to generate the Professional Readme
        {
            type: 'input',
            message: 'What is the title of your project?',
            name: 'title',
        },

        { 
            type: 'input',
            message: 'Please provide a description of your project.',
            name: 'description',
        },
            
        {
            type: 'input',
            message: 'What are the installation instructions?',
            name: 'installation',
        },
    
        {
            type: 'input',
            message: 'What is the usage information?',
            name: 'usage',
        },
    
        {
            type: 'input',
            message: 'What are the contribution guidelines?',
            name: 'contribution',
        },
    
        {
            type: 'input',
            message: 'What are the test instructions?',
            name: 'test',
        },
    
        {
            type: 'list',
            message: 'What license did you use?',
            name: 'license',
            choices: licenseOpt.map((license) => license.name ) ,
        },
    
        {
            type: 'input',
            message: 'What is your GitHub username?',
            name: 'github',
        },
    
        {
            type: 'input',
            message: 'What is your email address?',
            name: 'email',
        },
];

    
inquirer.prompt(questions).then((answers) => { //This will prompt the questions above and then reurns the answers
   
    const { title, description, installation, usage, contribution, test, license, github, email} = answers;   //getting the answers from above


    const licenseType = licenseOpt.find((license) => license.name === answers.license) //Getting the selected license name 
  

//ReadMe Content 

    const readmeContent = `${licenseType.badge}
# Title: ${title}      
## Table of content: 
* [Description](#Description)
* [Installation](#Installation)
* [Usage](#Usage)
* [Contribution](#Contribution)
* [Test](#Test)
* [License](#License)
* [GitHub](#GitHub)
* [Email](#Email)
## Description: 
${description}
## Installation:
${installation}
## Usage:
${usage}
## Contribution: 
${contribution}
## Test:
${test}
## License:
${license}
## GitHub: 
https://github.com/${github}
## Email: 
Please contact me for any further clarifications ${email}
        `;
    

      //Write the content to the README.md 
    fs.writeFile('README.md', readmeContent, (err) => {
    
        if (err) {
            console.log(err);
        } else {
            console.log('README.md successfully created!');
        }
    });

});


   