const express = require('express');
const route = express.Router();

const UserController = require('../controllers/user');

route.get('/', async (req, res) => UserController.getAllUser(req, res));

module.exports = route;