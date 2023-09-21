const express = require("express");
const mainController = require("../controllers/mainController");

const router = express.Router();

router.get("/", mainController.getMyGroup);

router
    .route("/MSSV/:id")
    .post(mainController.addToMyGroup)
    .get(mainController.getMessage);

router.get("/message/", mainController.getMyGroup);
router.get("/message/:id", mainController.getMessageHTML);

module.exports = router;