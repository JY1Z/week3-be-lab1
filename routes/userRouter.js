const express = require('express');
const router = express.Router();
const {
  getAllUsers,
  getUserById,
  createUser,
  updateUser,
  deleteUser,
} = require('../controllers/userControllers');

// GET /users
router.get('/', getAllUsers);

// POST /users
router.post('/', createUser);

// GET /users/:userId
router.get('/:carId', getUserById);

// PUT /users/:userId
router.put('/:carId', updateUser);

// DELETE /users/:userId
router.delete('/:carId', deleteUser);

module.exports = router;
