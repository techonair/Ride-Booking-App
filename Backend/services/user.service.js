const userModel = require("../models/user.model");

module.exports.createUser = async ({
    firstname, lastname, email, password
}) => {
    if (!firstname || !email || !password) {
        throw new Error("All fields are required");
    }
    const user = await userModel.create({
        fullname: {
            firstname: firstname,
            lastname: lastname
        },
        email: email,
        password: password
    })

    return user;
}