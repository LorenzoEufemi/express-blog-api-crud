// DATI
const express = require("express");
const router = express.Router();
const postController = require("../controllers/postcontroller");

//index
router.get("/", postController.index );

//show
router.get("/:id", postController.show );

//create
router.post("/", postController.create );

//update
router.put("/:id", postController.update );

//modify
router.patch("/:id", postController.modify );

//destroy
router.delete("/:id", postController.destroy );

module.exports = router;