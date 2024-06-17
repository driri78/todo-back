const express = require("express");
const { getTodos, saveTodos } = require("../controller/todo");
const router = express.Router();

router.route("/").get(getTodos).post(saveTodos);

module.exports = router;
