const express = require("express");
const serviciosController = require("./../controllers/serviciosController");

const router = express.Router();

router.get("/test", (req, res) => {
  return res.status(200).send("Auth service API");
});
router.get("/", serviciosController.listarServicios);

module.exports = router;
