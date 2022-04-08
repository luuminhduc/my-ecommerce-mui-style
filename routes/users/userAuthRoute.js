const {
	login,
	register,
} = require("../../controllers/users/userAuthController");
const express = require("express");

const route = express.Router();

route.post("/auth/user/login", login);

route.post("/auth/user/register", register);

module.exports = route;
