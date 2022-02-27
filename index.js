const inquirer = require("inquirer");
const fs = require("fs");
const chalk = require("chalk");
const employeeArray = [];

const getUserName = () => {
  return inquirer.prompt([
    {
      type: "input",
      name: "name",
      message: chalk.greenBright(
        `Hello and welcome to Team Profile Generator.\n You will be prompted with a series of questions - please fill in answers carefully!\n First things first, who am I talking to?`
      ),
      validate(answer) {
        if (!answer) {
          return chalk.red(`At least type something in!`);
        }
        return true;
      },
    },
  ]);
};

const managerInfo = (userName) => {
  return inquirer.prompt([
    {
      type: "input",
      name: "managerName",
      message: chalk.greenBright(
        `Ok ${userName.name}, let's start with the manager.\n Please type in the manager's name:`
      ),
      validate(answer) {
        if (!answer) {
          return chalk.red(`At least type something in!`);
        }
        return true;
      },
    },
    {
      type: "input",
      name: "managerId",
      message: chalk.greenBright(`Please type in the manager's ID:`),
      validate(answer) {
        if (!answer) {
          return chalk.red(`At least type something in!`);
        }
        return true;
      },
    },
    {
      type: "input",
      name: "managerEmail",
      message: chalk.greenBright(`Please type in the manager's email:`),
      validate(answer) {
        if (!answer) {
          return chalk.red(`At least type something in!`);
        }
        return true;
      },
    },
    {
      type: "input",
      name: "managerOfficeNumber",
      message: chalk.greenBright(`Please type in the manager's Office number:`),
      validate(answer) {
        if (!answer) {
          return chalk.red(`At least type something in!`);
        }
        return true;
      },
    },
    {
      type: "list",
      name: "anotherEmployee",
      choices: [
        "Add an engineer",
        "Add an intern",
        "Finish building your team",
      ],
      message: chalk.greenBright(`Would you like to add another team member?`),
    },
  ]);
};

const engineerInfo = () => {
  return inquirer.prompt([
    {
      type: "input",
      name: "engineerName",
      message: chalk.greenBright(`Please type in the engineer's name:`),
      validate(answer) {
        if (!answer) {
          return chalk.red(`At least type something in!`);
        }
        return true;
      },
    },
    {
      type: "input",
      name: "engineerId",
      message: chalk.greenBright(`Please type in the engineer's ID:`),
      validate(answer) {
        if (!answer) {
          return chalk.red(`At least type something in!`);
        }
        return true;
      },
    },
    {
      type: "input",
      name: "engineerEmail",
      message: chalk.greenBright(`Please type in the engineer's email:`),
      validate(answer) {
        if (!answer) {
          return chalk.red(`At least type something in!`);
        }
        return true;
      },
    },
    {
      type: "input",
      name: "engineerGithub",
      message: chalk.greenBright(`Please type in the engineer's GitHub:`),
      validate(answer) {
        if (!answer) {
          return chalk.red(`At least type something in!`);
        }
        return true;
      },
    },
    {
      type: "list",
      name: "anotherEmployee",
      choices: [
        "Add an engineer",
        "Add an intern",
        "Finish building your team",
      ],
      message: chalk.greenBright(`Would you like to add another team member?`),
    },
  ]);
};

const internInfo = () => {
    return inquirer.prompt([
      {
        type: "input",
        name: "internName",
        message: chalk.greenBright(`Please type in the intern's name:`),
        validate(answer) {
          if (!answer) {
            return chalk.red(`At least type something in!`);
          }
          return true;
        },
      },
      {
        type: "input",
        name: "internId",
        message: chalk.greenBright(`Please type in the intern's ID:`),
        validate(answer) {
          if (!answer) {
            return chalk.red(`At least type something in!`);
          }
          return true;
        },
      },
      {
        type: "input",
        name: "internEmail",
        message: chalk.greenBright(`Please type in the intern's email:`),
        validate(answer) {
          if (!answer) {
            return chalk.red(`At least type something in!`);
          }
          return true;
        },
      },
      {
        type: "input",
        name: "internSchool",
        message: chalk.greenBright(`Please type in the intern's School:`),
        validate(answer) {
          if (!answer) {
            return chalk.red(`At least type something in!`);
          }
          return true;
        },
      },
      {
        type: "list",
        name: "anotherEmployee",
        choices: [
          "Add an engineer",
          "Add an intern",
          "Finish building your team",
        ],
        message: chalk.greenBright(`Would you like to add another team member?`),
      },
    ]);
  };

// const generateHTML = ({}) =>
//   `
//     HTML HERE
//     `;

const init = () => {
  getUserName()
    .then(managerInfo)
    .then(addAnother)
    .then(returnArray)
    .catch((err) => console.error(err));
};

init();

function addAnother(answers) {
    employeeArray.push(answers)
  if (answers.anotherEmployee === "Add an engineer") {
    engineerInfo().then(addAnother);
  }
  if (answers.anotherEmployee === "Add an intern") {
    internInfo().then(addAnother);
  }
  if (answers.anotherEmployee === "Finish building your team") {
    console.log(employeeArray)
  }
}

