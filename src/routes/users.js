const express = require('express');

const userController = require('../controllers/users');

const router = express.Router();

//get
router.get("/",userController.getAllUsers);

//create
router.post("/",userController.createNewUser);

//update
router.patch('/:id',userController.updateUser)

//delete
router.delete('/:id',userController.deleteUser)

module.exports = router;

