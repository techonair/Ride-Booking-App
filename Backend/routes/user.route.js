const express = require("express");
const router = express.Router();
const { body } = require('express-validator');
const userController = require('../controllers/user.contorller');

router.post('/registrer', [
    body('email').isEmail().withMessage("Invalid Email"),
    body('fullname.firstname').isLength({min: 3}).withMessage('First name must be at least 3 characters long'),
    body('fullname.lastname').isLength({min: 3}).withMessage('Last name must be at least 3 characters long'),
    body('password').isLength({min: 6}).withMessage('Password must be at least 6 characters long')
],
    userController.registerUser
)

module.exports = router;