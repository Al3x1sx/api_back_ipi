const userAuth = require("../models/userAuth");
const bcrypt = require("bcrypt");
const jwt = require('jsonwebtoken');

module.exports.login = async (req, res) => {
    try {
        const { username, password } = req.body;
        let user = await getUser({ username: username });
        if (!user) {
            throw new Error("Authentication failed");
        }

        const passwordMatch = await bcrypt.compare(password, user.password);
        if (!passwordMatch) {
            throw new Error("Authentication failed");
        }
        // crée et retourne le token
        const token = jwt.sign({ userId: user._id }, process.env.JWT_SECRET, {
            expiresIn: process.env.JWT_EXPIRATION
        });
        return token;
    }
    catch (e) {
        throw e
    }
}

module.exports.register = async (req, res) => {
    try {
        console.debug(req.body);
        // crée un user d'authentification
        let user = userAuth(req.body);
        // hash le mdp avec bcrypt
        let salt = await bcrypt.genSalt(10);
        user.password = await bcrypt.hash(user.password,
            salt);
        user = await createUser(user);
        console.debug(user);
        return user;
    }
    catch (e) {
        throw e
    }
}


//récupère un user
const getUser = async (query) => {
    try {
        let user = await userAuth.findOne(query);
        return user;
    }
    catch (e) {
        throw Error("Error while query all one user : " + e);
    }
}

const createUser = async (user) => {
    try {
        return await user.save();
    }
    catch (e) {
        throw Error("Error while create user : " + e);
    }
}