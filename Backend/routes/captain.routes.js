const captainController = require("../controllers/captain.controller");
const express = require("express");
const router = express.Router();
const { body } = require("express-validator");

router.post('/register', [
    body('email').isEmail().withMessage("Invalid Email"),
    body('fullname.firstname').isLength({min: 3}).withMessage('First name must be at least 3 characters long'),
    body('fullname.lastname').isLength({min: 3}).withMessage('Last name must be at least 3 characters long'),
    body('password').isLength({min: 6}).withMessage('Password must be at least 6 characters long'),
    body('vehicle.color').isLength({min: 3}).withMessage('Color must be at least 3 character long'),
    body('vehicle.plate').isLength({min: 3}).withMessage('Plate must be at least 3 character long'),
    body('vehicle.capactity').isInt({min: 1}).withMessage('Capacity must be interger and atleast one digit long'),
    body('vehicle.vehicleType').isIn([ 'car', 'bike', 'auto' ]).withMessage('Vehicle type must be - car, bike or auto')
],
    captainController.registerCaptain
)

module.exports = router;