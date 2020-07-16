// TODO: Write code to define and export the Employee class

// Define Class
class Employee {
    //Create object
    constructor(name, id, email){
        this.name = name;
        this.id = id;
        this.email = email;
    };

    // Create functions
    returnName() {
        return(this.name)
    };

    returnId() {
        return(this.id)
    };

    returnEmail() {
        return(this.email)
    };

    returnRole() {
        return "Employee";
    };
};

// Export Class
module.exports = Employee;