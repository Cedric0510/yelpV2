class RestaurantEntity {
    // The single instance of the Entity class
    static instance;

    constructor() {
        // If an instance already exists, return that instance
        if (RestaurantEntity.instance) {
            return RestaurantEntity.instance;
        }

        // Set Properties of the entity
        this.adress = '';

        this.type = '';

        this.owner = '';

        this.name = '';

        this.id = 0;


        // Store the unique instance
        RestaurantEntity.instance = this;

        console.log("Constructor ok");
    }

    // Set method for attributes of entity
        setadress(newadress) {
            this.adress = newadress;
        }

        settype(newtype) {
            this.type = newtype;
        }

        setowner(newowner) {
            this.owner = newowner;
        }

        setname(newname) {
            this.name = newname;
        }

        setid(newid) {
            this.id = newid;
        }
 
    
    // Get method for attributes of entity
        getadress() {
            return this.adress;
        }

        gettype() {
            return this.type;
        }

        getowner() {
            return this.owner;
        }

        getname() {
            return this.name;
        }

        getid() {
            return this.id;
        }


    // Static method to get the unique instance
    static getInstance() {
        // If the instance does not exist, create it
        if (!RestaurantEntity.instance) {
            RestaurantEntity.instance = new RestaurantEntity();
        }
        // Return the unique instance
        return RestaurantEntity.instance;
    }
}

module.exports = RestaurantEntity;