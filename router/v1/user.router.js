const express = require("express");

const routers = express.Router();
const userControllers = require("../../controller/user.controller");

routers.route("/random").get(userControllers.randomUser);

routers.route("/all").get(userControllers.allUser);

routers.route("/save").post(userControllers.addUser);

routers.route("/:id").get(userControllers.userDetails);

routers.route("/update/:id").patch(userControllers.updateUser);

routers.route("/delete/:id").delete(userControllers.deleteUser);

module.exports = routers;
