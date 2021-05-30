const promptForInput = (name, message) => {
  return {
    type: 'input',
    name: name,
    message: message,
    validate: input => {
      if (input) {
        return true;
      } else {
        console.log(`You need to enter the ${name}!`);
        return false;
      }
    }
  };
};

const promptForList = (name, message, choices) => {
  return {
    type: 'list',
    name: name,
    message: message,
    choices: choices
  };
};

module.exports = { promptForInput, promptForList };