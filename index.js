import { Employee, Engineer, Intern, Manager } from "./models/employeeModels";
const inquirer = require("inquirer");
const fs = require("fs");

function mainMenu() {
    function newManager() {
        inquirer.prompt([
            {
                type: "input",
                name: "managerName",
                message: "Please enter a manager's name",
                validate: answer => {
                    if (answer.length == 0) {
                        return "Please enter a valid name"
                    }
                }
            },
            {
                type: "input",
                name: "managerId",
                message: "Please enter the manager's ID number"
            },
            {
                type: "input",
                name: "managerEmail",
                message: "Please enter the manager's email"
            },
        ])
    }
}