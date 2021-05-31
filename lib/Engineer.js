const Employee = require('./Employee');

class Engineer extends Employee {
    constructor(name, id, email, github) {
        super(name, id, email);
        this.github = github;
    };
    getRole() {
        return 'Engineer';
    };
    
    getGithub() {
        return `<span>GitHub:</span> <a href="https://github.com/${
            this.github}" target="_blank">${this.github}</a>`
    };
};

module.exports = Engineer;
