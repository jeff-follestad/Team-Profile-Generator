const inquirer = require('inquirer');

const { promptForInput, promptForList } = require('./src/prompts');
const { writeFile, copyFile } = require('./src/page-template');
const generatePage = require('./src/page-template');

const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');
const Manager = require('./lib/Manager');

var allEmployees = [];

function promptForManager() {
    return inquirer.prompt([
        promptForInput('name', 'Enter Manager\'s name:'),
        promptForInput('id', 'Enter Manager\'s ID:'),
        promptForInput('email', 'Enter Manager\'s email:'),
        promptForInput('number', 'Enter Manager\'s office number:'),
    ]);
}

function promptForEmployee() {
    return inquirer
        .prompt([
            promptForList('type', 'Next employee type (or quit)?', ['intern', 'engineer', 'quit'])
        ])
        .then(nextEmployeeInput => {
            const nextType = nextEmployeeInput.type;
            if (nextType == 'quit') {
                return allEmployees;
            } else if (nextType == 'intern') {
                return promptForIntern();
            } else {
                // The only other option is engineer...
                return promptForEngineer();
            }
        });
}

function promptForEngineer() {
    return inquirer
        .prompt([
            promptForInput('name', 'Enter Engineer\'s name:'),
            promptForInput('id', 'Enter Engineer\'s ID:'),
            promptForInput('email', 'Enter Engineer\'s email:'),
            promptForInput('github', 'Enter Engineer\'s GitHub user name:'),
        ])
        .then(data => {
            allEmployees.push(new Engineer(data.name, data.id, data.email, data.github));
            return promptForEmployee();
        });
}

function promptForIntern() {
    return inquirer
        .prompt([
            promptForInput('name', 'Enter Intern\'s name:'),
            promptForInput('id', 'Enter Intern\'s ID:'),
            promptForInput('email', 'Enter Intern\'s email:'),
            promptForInput('school', 'Enter Intern\'s school name:'),
        ])
        .then(data => {
            allEmployees.push(new Intern(data.name, data.id, data.email, data.school));
            return promptForEmployee();
        });
}

promptForManager()
    .then(data => {
        allEmployees.push(new Manager(data.name, data.id, data.email, data.number));
        return promptForEmployee();
    })
    .then(allEmployees => {
        console.log(JSON.stringify(allEmployees, null, 4));
        return generatePage(allEmployees);
    })
    .then(pageHTML => {
        return writeFile(pageHTML);
    })
    .then(writeFileResponse => {
        // Copies the CSS to dist.
        return copyFile();
    })
    .catch(err => {
        console.log(err);
    });