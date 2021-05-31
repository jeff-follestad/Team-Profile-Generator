const { ensureExpectedIsNumber } = require('jest-matcher-utils');
const Employee = require ('../lib/Employee');
const { expectToBe, expectStr, expectNum } = require('../test-lib/expect');

const employee = new Employee('Jeff', 13, 'jeff@email.com');

test('creates a employee object', () => {
    expectToBe(employee.name,'Jeff');
    expectNum(employee.id);
    expectStr(employee.email, 'jeff@email.com');

});

test('gets employee\'s name', () => {
    expectStr(employee.getName(), `${employee.name}`);
});

test('gets employee\'s ID', () => {
    ensureExpectedIsNumber(employee.getID(), `${employee.id}`);
});

test('gets employee\'s email', () => {
    expectStr(employee.getEmail(), employee.email);
});
