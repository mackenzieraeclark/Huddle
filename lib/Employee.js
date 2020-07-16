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
    getName() {
        return(this.name)
    };

    getId() {
        return(this.id)
    };

    getEmail() {
        return(this.email)
    };

    getRole() {
        return "Employee";
    };
};

// Export Class
module.exports = Employee;