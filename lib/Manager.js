// TODO: Write code to define and export the Manager class. HINT: This class should inherit from Employee.

// Inherit Employee
const Employee = require("../lib/Employee");

// Define Class
class Manager extends Employee {
    // Create object
    constructor(name, id, email, officeNumber) {
        super(name, id, email);
        this.officeNumber = officeNumber;
    };

    // Create functions
    getOfficeNumber() {
        return(this.officeNumber)
    };

    getRole() {
        return "Manager";
    };
};

// Export Class
module.exports = Manager;