// TODO: Write code to define and export the Manager class. HINT: This class should inherit from Employee.

// Inherit Employee
const Employee = require("../lib/Employee");

// Define Class
class Manager extends Employee {
    // Create object
    constructor(name, id, email, officenumber) {
        super(name, id, email);
        this.officenumber = officenumber;
    };

    // Create functions
    getOfficeNumber() {
        return(this.officenumber)
    };

    getRole() {
        return "Manager";
    };
};

// Export Class
module.exports = Manager;