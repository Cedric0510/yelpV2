const util = require('util');
const connection = require('../configs/database');

const query = util.promisify(connection.query).bind(connection);

exports.getAllUsers = async () => {
    try {
        const entities = await query(
            "SELECT * \
            FROM Users"
        );
        return entities;
    } catch (error) {
        console.error('getAll: ' + error);
        throw new Error('An error occurred while retrieving all entities');
    }
};

exports.getUsersById = async (id) => {
    try {
        const entity = await query(
            "SELECT * \
            FROM Users \
            WHERE id_Users = ?",
             id);

        return entity;
    } catch (error) {
        console.error("getById: " + error);
        throw new Error('An error occurred while retrieving the entity by ID');
    }
};

exports.createUsers = async (entity) => {
    try {
        const newEntity = await query(
            "INSERT INTO Users SET ?",
             entity);

        return newEntity;
    } catch (error) {
        console.error("create: " + error);
        throw new Error('An error occurred while creating the entity');
    }
};

exports.deleteUsers = async (id) => {
    try {
        const entityDeleted = await query(
            "DELETE FROM Users WHERE id_Users = ?",
             id);

        return entityDeleted;
    } catch (error) {
        console.error("delete: " + error);
        throw new Error('An error occurred while deleting the entity');
    }
};

exports.updateUsers = async (entity, id) => {
    try {
        const entityUpdated = await query(
            "UPDATE Users SET ? WHERE id_Users = ?",
             [entity, id]);

        return entityUpdated;
    } catch (error) {
        console.error("update: " + error);
        throw new Error('An error occurred while updating the entity');
    }
};
