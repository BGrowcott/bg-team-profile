const inquirer = require("inquirer");
const fs = require("fs");
const chalk = require("chalk");
const { resolve } = require("path");
const Employee = require("./lib/Employee");
const Manager = require("./lib/Manager");
const Intern = require("./lib/Intern");
const Engineer = require("./lib/Engineer");
const inquirerArray = [];

// get users name for a personal touch
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

//manager questions
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
// engineer questions
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
// intern questions
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

// initialize inquirer prompts
const init = () => {
  getUserName()
    .then(managerInfo)
    .then(addAnother)
    .then(makeObjects)
    .then((employeeArray) =>
      fs.writeFileSync("./dist/index.html", generateHtml(employeeArray))
    )
    .catch((err) => console.error(err));
};

init();

// recursive function for adding more team members
function addAnother(answers) {
  inquirerArray.push(answers);
  return new Promise((resolve) => {
    if (answers.anotherEmployee === "Add an engineer") {
      resolve(engineerInfo().then(addAnother));
    }
    if (answers.anotherEmployee === "Add an intern") {
      resolve(internInfo().then(addAnother));
    }
    if (answers.anotherEmployee === "Finish building your team") {
      resolve(inquirerArray);
    }
  });
}

// function that takes inquirer data and makes employee objects and puts them into an array
const employeeArray = [];
function makeObjects(array) {
  array.forEach((object) => {
    if (Object.keys(object)[0] === "managerName") {
      let { managerName, managerId, managerEmail, managerOfficeNumber } =
        object;
      employeeArray.push(
        new Manager(managerName, managerId, managerEmail, managerOfficeNumber)
      );
    }
    if (Object.keys(object)[0] === "engineerName") {
      let { engineerName, engineerId, engineerEmail, engineerGithub } = object;
      employeeArray.push(
        new Engineer(engineerName, engineerId, engineerEmail, engineerGithub)
      );
    }
    if (Object.keys(object)[0] === "internName") {
      let { internName, internId, internEmail, internSchool } = object;
      employeeArray.push(
        new Intern(internName, internId, internEmail, internSchool)
      );
    }
  });
  console.log(employeeArray);
  return employeeArray;
}

function generateHtml(array) {
  return `
    <!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <link rel="stylesheet" href="reset.css" />
    <link rel="stylesheet" href="style.css" />
    <title>Team Profile</title>
  </head>
  <body>
    <header id="pageHeader">
        <h1>My Team</h1>
    </header>
    <main>
    <!-- Employee cards -->

        <div class="employeeCard">
            <header class="cardHeader">
                <h2>${array[0].getName()}</h2>
                <p>Job Role here</p>
            </header>
            <div class="cardBody">
                <p>ID here</p>
                <p>Email here</p>
                <p>Other here</p>
            </div>
            <footer class="cardFooter"></footer>
        </div>
    </main>
  </body>
</html>
    `;
}
