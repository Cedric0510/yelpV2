const express = require('express');
const { getAllUsers, getUsersById, getUsersByName, createUsers, deleteUsersById, updateUsersById } = require('../controllers/UsersController');

const router = express.Router();

router.get('/', getAllUsers);
router.get('/:id', getUsersById);
router.post('/', createUsers);
router.delete('/:id', deleteUsersById);
router.put('/:id', updateUsersById);

module.exports = router;
