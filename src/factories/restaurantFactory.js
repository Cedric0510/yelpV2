const RestaurantEntity = require('../entities/RestaurantEntity');

class RestaurantFactory {

    static createRestaurant(req) {
        const bodyData = {
            //get attributes of body request

            // name: req.body.name,
            // email: req.body.email,
            // role: req.body.role,
            // description: req.body.description
        };

        const entityCreate = RestaurantEntity.getInstance();
        //set instance with attributes for create

        // entityCreate.setName(bodyData.name);
        // entityCreate.setEmail(bodyData.email);
        // entityCreate.setRole(bodyData.role);
        // entityCreate.setDescription(bodyData.description);

        return entityCreate;
    }

    static updateEntity(req) {
        const bodyData = {
            // name: req.body.name,
            // email: req.body.email,
            // role: req.body.role,
            // description: req.body.description
        };

        const entityUpdate = RestaurantEntity.getInstance();
        //set instance with attributes for update

        // entityUpdate.setName(bodyData.name);
        // entityUpdate.setEmail(bodyData.email);
        // entityUpdate.setRole(bodyData.role);
        // entityUpdate.setDescription(bodyData.description);

        return entityUpdate;
    }
}

module.exports = RestaurantFactory;
