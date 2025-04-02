const {
    getAllUsers,
    getUsersById,
    getUsersByName,
    createUsers,
    deleteUsers,
    updateUsers
} = require('../models/UsersModel');

const { UsersFactory } = require('../factories/UsersFactory');

exports.getAllUsers = async (request, response) => {
    try {
        const allEntities = await getAllUsers();
        response.status(200).json(allEntities);
    } catch (error) {
        console.error('Controller: getAllUsers: ', error);
        response.status(500).json({ error: "Controller: An error occurred while retrieving all entities." });
    }
};

exports.getUsersById = async (request, response) => {
    try {
        const id = parseInt(request.params.id);
        const entity = await getUsersById(id);
        if (entity.length === 0) {
            return response.status(404).json({ message: 'Entity not found' });
        }
        response.status(200).json(entity);
    } catch (error) {
        console.error('Controller: getUsersById: ', error);
        response.status(500).json({ error: "Controller: An error occurred while retrieving the entity by ID." });
    }
};

exports.createUsers = async (request, response) => {
    try {
        // Use the factory to create the entity
        const newEntity = UsersFactory.createUsers(request);
        // Save the entity to the database
        const savedEntity = await createUsers(newEntity);
        response.status(201).json(savedEntity);
    } catch (error) {
        console.error('Controller: createUsers: ', error);
        response.status(500).json({ error: "Controller: An error occurred while creating the entity." });
    }
};

exports.deleteUsersById = async (request, response) => {
    try {
        const id = parseInt(request.params.id);
        const entityDeleted = await deleteUsers(id);
        response.status(200).json(entityDeleted);
    } catch (error) {
        console.error('Controller: deleteUsersById: ', error);
        response.status(500).json({ error: "Controller: An error occurred while deleting the entity." });
    }
};

exports.updateUsersById = async (request, response) => {
    try {
        const id = parseInt(request.params.id);
        // Use the factory to update the entity
        const updatedEntity = UsersFactory.updateUsers(request);
        // Update the entity in the database
        const savedEntity = await updateUsers(updatedEntity, id);
        response.status(200).json(savedEntity);
    } catch (error) {
        console.error('Controller: updateUsersById: ', error);
        response.status(500).json({ error: "Controller: An error occurred while updating the entity." });
    }
};
