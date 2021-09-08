// We need to initialize the NPM with: $ npm init -y
// We need to import the 'Inquirer' library with: $ npm i inquirer --save
//for the tests we install npm i --save-dev jest
var employeeProfile = require("./employeeProfile");
var fs = require('fs');
var inquirer = require('inquirer');

let questions = [
    {
        type: 'input',
        message: "Enter the manager's name:",
        name: 'manager',
        validate: answer => {
            if(answer !== "") {
                return true;
            }
            return "Please enter the manager's name:";
        }
    },
    {
        type: 'input',
        message: "Please enter the manager's ID:",
        name: "managerID",
        validate: answer => {
            if(answer !== "") {
                return true;
            }
            return "Please enter the manager's ID:";
        }
    },
    {
        type: 'input',
        message: "Please enter the manager's e-mail:",
        name: "managerEmail",
        validate: answer => {
            const pass = answer.match(
                /\S+@\S+\.\S+/ /* \S = letters + @letters + . + letters */
              );
              if (pass) {
                return true;
              }
              return "Please enter a valid email address.";
        }
    },
    {
        type: "input",
        message: "What is the team manager's office number?",
        name: "managerPhone",
        validate: answer => {
          const pass = answer.match(
            /^[1-9]\d*$/ /* only numbers expression */
          );
          if (pass && answer.length == 10) { /* review if I can make it a 10 digit validator */
            return true;
          }
          return "Please enter a 10 digint phone number.";
        }
    },
    {
        type: "list",
        message: "Employees job title",
        name: "employeeJob",
        choices: [
            "Engineer",
            "Intern",
        ]
    },
    {
        type: 'input',
        message: "Enter the employee's name:",
        name: 'employeeName',
        validate: answer => {
            if(answer !== "") {
                return true;
            }
            return "Please enter the employee's name:";
        }
    },
    {
        type: 'input',
        message: "Please enter the employee's ID:",
        name: "employeeID",
        validate: answer => {
            if(answer !== "") {
                return true;
            }
            return "Please enter the employee's ID:";
        }
    },
    {
        type: 'input',
        message: "Please enter the employee's e-mail:",
        name: "employeeEmail",
        validate: answer => {
            const pass = answer.match(
                /\S+@\S+\.\S+/ /* \S = letters + @letters + . + letters */
              );
              if (pass) {
                return true;
              }
              return "Please enter a valid email address.";
        }
    },
    {
        type: 'input',
        message: "Please enter the employee's GitHub ID:",
        name: "employeeHub",
        validate: answer => {
            if(answer !== "") {
                return true;
            }
            return "Please enter the GitHub's ID:";
        }
    },
];

inquirer.prompt(questions).then(function(response) {
    /* console.log(response); */

    var content = employeeProfile(response);
    console.log(content);
    fs.writeFile("./index.html", content, function(err) {
        if (err) throw err
        console.log("success");
    })
});