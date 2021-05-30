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
        return `<span class="has-text-weight-bold">GitHub:</span> <a href="https://github.com/${
            this.github}" target="_blank" class="has-text-primary">${this.github}</a>`
    };
};

module.exports = Engineer;
