const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const inquirer = require("inquirer");
const path = require("path");
const fs = require("fs");

const OUTPUT_DIR = path.resolve(__dirname, "output");
const outputPath = path.join(OUTPUT_DIR, "team.html");

const render = require("./lib/htmlRenderer");

// Create an object called team
const team = [];

// Prompts for user to select the type of employee they are adding so that specific questions are returned based on their role.
function selectRole() {
    inquirer.prompt([
        {
            type: "list",
            message: "What is this team member's role?",
            name: "name",
            choices: ["Manager", "Engineer", "Intern", "View Your Team"],
        },
    ]).then( val => {
        if (val.name === "Manager") {
            managerInput();
        } else if (val.name === "Engineer") {
            engineerInput();
        } else if (val.name === "Intern") {
            internInput();
        // Call the `render` function (required above) and pass in an array containing all employee objects
        } else if (val.name === "View Your Team") {
            generateHTML(outputPath, render(team));
        };
    });
};

// Prompts for each role within team
function managerInput() {
    return inquirer.prompt([
        {
          type: "input",
          message: "What is this manager's name?",
          name: "name"
        },
        {
          type: "input",
          message: "What is this manager's id",
          name: "id",
        },
        {
          type: "input",
          message: "What is this manager's email?",
          name: "email"
        },
        {
          type: "input",
          message: "What is this manager's office number",
          name: "number",
        },
      ]).then(function(answer) {
        let manager = new Manager(answer.name, answer.id, answer.email, answer.number)
        team.push(manager);
    
        // Return to add more employees
        selectRole()
      })
};

function engineerInput() {
    return inquirer.prompt([
        {
          type: "input",
          message: "What is this engineer's name?",
          name: "name"
        },
        {
          type: "input",
          message: "What is this engineer's id?",
          name: "id",
        },
        {
          type: "input",
          message: "What is this engineer's email?",
          name: "email"
        },
        {
          type: "input",
          message: "What is this engineer's github?",
          name: "github",
        },
      ]).then(function(answer) {
        let engineer = new Engineer(answer.name, answer.id, answer.email, answer.GitHub)
        team.push(engineer);
    
        // Return to add more employees
        selectRole()
      })
};

function internInput() {
    return inquirer.prompt([
        {
          type: "input",
          message: "What is this intern's name?",
          name: "name"
        },
        {
          type: "input",
          message: "What is this intern's id?",
          name: "id",
        },
        {
          type: "input",
          message: "What is this intern's email?",
          name: "email"
        },
        {
          type: "input",
          message: "What is this intern's scool?",
          name: "school",
        },
      ]).then(function(answer) {
        let intern = new Intern(answer.name, answer.id, answer.email, answer.school)
        team.push(intern);
    
        // Return to add more employees
        selectRole()
      })
};

// Create a function to generate HTML
function generateHTML(fileName, data) {
    fs.writeFile(fileName, data, "utf8", function (err) {
      if (err) {
        throw err;
      }
      console.log("View your team by opening your team output in your local browser.");
    });
  };

// Begin Prompts
selectRole();