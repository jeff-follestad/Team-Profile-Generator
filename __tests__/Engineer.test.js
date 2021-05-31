const Engineer = require('../lib/Engineer');
const { expectToBe, expectStr, expectNum } = require('../test-lib/expect');

const engineer = new Engineer('Alec', 2, 'alec@gmail.com', 'alecGithub');

test('creates an engineer object', () => {
    expectToBe(engineer.name, 'Alec');
    expectNum(engineer.id, 2);
    expectStr(engineer.email, 'alec@gmail.com');
    expectStr(engineer.github, 'alecGithub');

});

test('gets engineer\'s name', () => {
    expectStr(engineer.getName(), `${engineer.name}`);
});

test('gets engineer\'s ID', () => {
    expectNum(engineer.getID(), `${engineer.id}`);
});

test('gets engineer\'s email', () => {
    expectStr(engineer.getEmail(), engineer.email);
});

test('gets engineer\'s role', () => {
    expectStr(engineer.getGithub(), engineer.github);
});

test('gets engineer\'s github', () => {
    expectStr(engineer.getGithub(), engineer.github);
});
