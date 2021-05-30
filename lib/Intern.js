const Employee = require('./Employee');

class Intern extends Employee {
    constructor(name, id, email, school) {
        super(name, id, email);
        this.school = school;
    };
    getRole() {
        return 'Intern';
    };
    getSchool() {
        return `<span class="has-text-weight-bold">School:</span> ${this.school}`;
    };
};

module.exports = Intern;