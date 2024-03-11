// usuarios.js
const express = require('express');
const router = express.Router();
const Usuario = require('../models/usuarioModel');

const { getAllUsuarios, getUsuarioById, createUsuario, updateUsuario, deleteUsuario} = require("../controllers/usuarioController");


// Route to get the complete list of users
router.get('/', async (req, res) => {
  const users = await Usuario.getAllUsers();
  res.json(users);
});

// Route to get details of a specific user by ID
router.get('/:id', async (req, res) => {
  const userId = req.params.id;
  const user = await Usuario.getUserById(userId);
  res.json(user);
});

// Route to create a new user
router.post('/', async (req, res) => {
  const newUser = req.body;
  const createdUser = await Usuario.createUser(newUser);
  res.status(201).json(createdUser);
});

// Route to update a specific user by ID
router.put('/:id', async (req, res) => {
  const userId = req.params.id;
  const updatedUser = await Usuario.updateUser(userId, req.body);
  res.json(updatedUser);
});

// Route to delete a specific user by ID
router.delete('/:id', async (req, res) => {
  const userId = req.params.id;
  await Usuario.deleteUser(userId);
  res.json({ message: 'User deleted successfully' });
});

module.exports = router;