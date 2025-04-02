class UsersEntity {
    // The single instance of the Entity class
    static instance;

    constructor() {
        // If an instance already exists, return that instance
        if (UsersEntity.instance) {
            return UsersEntity.instance;
        }

        // Set Properties of the entity
        this.name = '';

        this.role = '';

        this.id = 0;


        // Store the unique instance
        UsersEntity.instance = this;

        console.log("Constructor ok");
    }

    // Set method for attributes of entity
        setname(newname) {
            this.name = newname;
        }

        setrole(newrole) {
            this.role = newrole;
        }

        setid(newid) {
            this.id = newid;
        }
 
    
    // Get method for attributes of entity
        getname() {
            return this.name;
        }

        getrole() {
            return this.role;
        }

        getid() {
            return this.id;
        }


    // Static method to get the unique instance
    static getInstance() {
        // If the instance does not exist, create it
        if (!UsersEntity.instance) {
            UsersEntity.instance = new UsersEntity();
        }
        // Return the unique instance
        return UsersEntity.instance;
    }
}

module.exports = UsersEntity;