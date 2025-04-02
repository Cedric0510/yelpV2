const {
    getAllRestaurant,
    getRestaurantById,
    getRestaurantByName,
    createRestaurant,
    deleteRestaurant,
    updateRestaurant
} = require('../models/RestaurantModel');

const { RestaurantFactory } = require('../factories/RestaurantFactory');

exports.getAllRestaurant = async (request, response) => {
    try {
        const allEntities = await getAllRestaurant();
        response.status(200).json(allEntities);
    } catch (error) {
        console.error('Controller: getAllRestaurant: ', error);
        response.status(500).json({ error: "Controller: An error occurred while retrieving all entities." });
    }
};

exports.getRestaurantById = async (request, response) => {
    try {
        const id = parseInt(request.params.id);
        const entity = await getRestaurantById(id);
        if (entity.length === 0) {
            return response.status(404).json({ message: 'Entity not found' });
        }
        response.status(200).json(entity);
    } catch (error) {
        console.error('Controller: getRestaurantById: ', error);
        response.status(500).json({ error: "Controller: An error occurred while retrieving the entity by ID." });
    }
};

exports.createRestaurant = async (request, response) => {
    try {
        // Use the factory to create the entity
        const newEntity = RestaurantFactory.createRestaurant(request);
        // Save the entity to the database
        const savedEntity = await createRestaurant(newEntity);
        response.status(201).json(savedEntity);
    } catch (error) {
        console.error('Controller: createRestaurant: ', error);
        response.status(500).json({ error: "Controller: An error occurred while creating the entity." });
    }
};

exports.deleteRestaurantById = async (request, response) => {
    try {
        const id = parseInt(request.params.id);
        const entityDeleted = await deleteRestaurant(id);
        response.status(200).json(entityDeleted);
    } catch (error) {
        console.error('Controller: deleteRestaurantById: ', error);
        response.status(500).json({ error: "Controller: An error occurred while deleting the entity." });
    }
};

exports.updateRestaurantById = async (request, response) => {
    try {
        const id = parseInt(request.params.id);
        // Use the factory to update the entity
        const updatedEntity = RestaurantFactory.updateRestaurant(request);
        // Update the entity in the database
        const savedEntity = await updateRestaurant(updatedEntity, id);
        response.status(200).json(savedEntity);
    } catch (error) {
        console.error('Controller: updateRestaurantById: ', error);
        response.status(500).json({ error: "Controller: An error occurred while updating the entity." });
    }
};
