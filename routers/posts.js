// DATI
const express = require("express");
const router = express.Router();
const postController = require("../controllers/postcontroller");
const checkPostExist = require("../middlewares/checkpostexist");

//index
router.get("/", postController.index);

//show
router.get("/:id", checkPostExist, postController.show);

//create
router.post("/", postController.create);

//update
router.put("/:id", checkPostExist, postController.update);

//modify
router.patch("/:id", checkPostExist, postController.modify);

//destroy
router.delete("/:id", checkPostExist, postController.destroy);

module.exports = router;