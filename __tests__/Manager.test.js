const Manager = require ('../lib/Manager');
const { expectToBe, expectStr, expectNum } = require('../test-lib/expect');

const manager = new Manager('Jeffrey', 25, 'jeff@email.com');

test('creates a manager object', () => {
    expectToBe(manager.name, 'Jeffrey');
    expectNum(manager.id, 25);
    expectStr(manager.email, 'jeff@email.com');
});

test('gets manager\'s name', () => {
    expectStr(manager.getName(), `${manager.name}`);
});

test('gets manager\'s ID', () => {
    expectNum(manager.getID(), `${manager.id}`);
});

test('gets manager\'s email', () => {
    expectStr(manager.getEmail(), manager.email);
});


