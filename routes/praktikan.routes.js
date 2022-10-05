const express = require("express");
const router = express.Router();
const { praktikanController } = require("../controllers");
const { praktikanValidation } = require("../validators");
const { body, param, validationResult } = require('express-validator');

router.route("/").get(praktikanController.getPraktikans);
router.route("/getbyname").get(praktikanValidation.getPraktikanByName, praktikanController.getPraktikanByName);
router.route("/getbyemailnphone").get(praktikanValidation.getPraktikanByEmailnPhone, praktikanController.getPraktikanByEmailnPhone);
router.route("/patchbyname").patch(praktikanValidation.patchPraktikanByName, praktikanController.patchPraktikanByName);
router.route("/deletebyemail").delete(praktikanValidation.deletePraktikanByEmail, praktikanController.deletePraktikanByEmail);
router.route("/createpraktikan").post(praktikanValidation.createPraktikan, praktikanController.createPraktikan);
router.route("/bulkinsert").post(praktikanValidation.createBulkInsertPraktikan, praktikanController.createBulkInsertPraktikan);

module.exports = router;