const { login } = require("../../controllers/admin/adminAuthController");

const express = require("express");
const route = express.Router();

route.post("/auth/admin/login", login);

module.exports = route;
