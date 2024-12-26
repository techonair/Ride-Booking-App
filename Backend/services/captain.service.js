const captainModel = require("../models/captain.model");
const captainModel = require("../models/captain.model");

modeule.exports.createCaptain = async({
    firstname, lastname, email, password,
    color, plate, capacity, vehicleType
}) => {
    if (!firstname || !email || !password || !capacity || !vehicleType) {
        throw new Error("All fields are required");
    }
    const captainModel = captainModel.create({
        fullname: {
            firstname: firstname,
            lastname: lastname,
        },
        email,
        password,
        vehicle: {
            color,
            plate,
            capacity,
            vehicleType
        }
    })

    return captain;
}