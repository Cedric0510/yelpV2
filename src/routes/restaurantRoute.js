const express = require('express');
const { getAllRestaurant, getRestaurantById, getRestaurantByName, createRestaurant, deleteRestaurantById, updateRestaurantById } = require('../controllers/RestaurantController');

const router = express.Router();

router.get('/', getAllRestaurant);
router.get('/:id', getRestaurantById);
router.post('/', createRestaurant);
router.delete('/:id', deleteRestaurantById);
router.put('/:id', updateRestaurantById);

module.exports = router;
