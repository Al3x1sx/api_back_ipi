const userAuthService = require("../services/userAuthService");

module.exports.login = async (req, res) => {
    userAuthService.login(req, res)
        .then((token) => res.status(200).json({ token }))
        .catch((error) => res.status(400).json({ status: 400, message: error.message }))
}

module.exports.register = async (req, res) => {
    userAuthService.register(req, res)
        .then((userAuth) => res.status(201).json({
            status: 201, data: userAuth,
            message: "Succesfully User auth Created"
        }))
        .catch((error) => res.status(400).json({status: 400, message: error.message}));
}