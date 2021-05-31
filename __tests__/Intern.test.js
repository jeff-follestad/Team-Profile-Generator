const { getMaxListeners } = require('process');
const Intern = require('../lib/Intern');
const { expectToBe, expectStr, expectNum } = require('../test-lib/expect');

const intern = new Intern('Ole', 1, 'ole@email.com', 'UMN');

test('creates an intern object', () => {
    expectStr(intern.name, 'Ole');
    expectNum(intern.id, 1);
    expectStr(intern.email, 'ole@email.com');
    expectStr(intern.school, 'UMN');
});

test('gets intern\'s name', () => {
    expectStr(intern.getName(), `${intern.name}`);
});

test('gets intern\'s ID', () => {
    expectNum(intern.getID(), `${intern.id}`);
});

test('gets intern\'s email', () => {
    expectStr(intern.getEmail(), intern.email);
});

test('gets intern\'s school', () => {
    expectStr(intern.getSchool(), intern.school);
});
