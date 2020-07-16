// TODO: Write code to define and export the Engineer class.  HINT: This class should inherit from Employee.

// Inherit Employee
const Employee = require("../lib/Employee");

// Define Class
class Engineer extends Employee {
    // Create object
    constructor(name, id, email, github) {
        super(name, id, email);
        this.github = github;
    };

    // Create functions
    getGithub() {
        return(this.github)
    };

    getRole() {
        return "Engineer";
    };
};

// Export Class
module.exports = Engineer;