const profile = require("express").Router();

const { readProfile } = require("../controller/profile.controller");

profile.get("/", readProfile);

module.exports = profile;
