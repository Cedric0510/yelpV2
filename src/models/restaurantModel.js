const util = require('util');
const connection = require('../configs/database');

const query = util.promisify(connection.query).bind(connection);

exports.getAllRestaurant = async () => {
    try {
        const entities = await query(
            "SELECT * \
            FROM Restaurant"
        );
        return entities;
    } catch (error) {
        console.error('getAll: ' + error);
        throw new Error('An error occurred while retrieving all entities');
    }
};

exports.getRestaurantById = async (id) => {
    try {
        const entity = await query(
            "SELECT * \
            FROM Restaurant \
            WHERE id_Restaurant = ?",
             id);

        return entity;
    } catch (error) {
        console.error("getById: " + error);
        throw new Error('An error occurred while retrieving the entity by ID');
    }
};

exports.createRestaurant = async (entity) => {
    try {
        const newEntity = await query(
            "INSERT INTO Restaurant SET ?",
             entity);

        return newEntity;
    } catch (error) {
        console.error("create: " + error);
        throw new Error('An error occurred while creating the entity');
    }
};

exports.deleteRestaurant = async (id) => {
    try {
        const entityDeleted = await query(
            "DELETE FROM Restaurant WHERE id_Restaurant = ?",
             id);

        return entityDeleted;
    } catch (error) {
        console.error("delete: " + error);
        throw new Error('An error occurred while deleting the entity');
    }
};

exports.updateRestaurant = async (entity, id) => {
    try {
        const entityUpdated = await query(
            "UPDATE Restaurant SET ? WHERE id_Restaurant = ?",
             [entity, id]);

        return entityUpdated;
    } catch (error) {
        console.error("update: " + error);
        throw new Error('An error occurred while updating the entity');
    }
};
