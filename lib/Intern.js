// TODO: Write code to define and export the Intern class.  HINT: This class should inherit from Employee.

// Inherit Employee
const Employee = require("../lib/Employee");

// Define Class
class Intern extends Employee {
    // Create object
    constructor(name, id, email, school) {
        super(name, id, email);
        this.school = school;
    };

    // Create functions
    getSchool() {
        return(this.school)
    };

    getRole() {
        return "Intern";
    };
};

// Export Class
module.exports = Intern;