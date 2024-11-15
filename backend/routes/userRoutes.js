const express = require('express');
const router = new express.Router();
const { createUser, getAllUsers, getUserById, updateUserById, deleteUserById } = require('../controllers/userController');

// Create a new user
router.post('/users', createUser);

// Get all users
router.get('/users', getAllUsers);

// Get a single user by ID
router.get('/users/:id', getUserById);

// Update a user by ID
router.patch('/users/:id', updateUserById);

// Delete a user by ID
router.delete('/users/:id', deleteUserById);

module.exports = router;
