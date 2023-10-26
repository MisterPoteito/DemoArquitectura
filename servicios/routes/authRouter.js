const express = require("express");
const authController = require("./../controllers/authController");

const router = express.Router();

router.get("/test", (req, res) => {
  return res.status(200).send("Auth service API");
});
router.post("/", authController.registraUsuario);
router.post("/login", authController.login);

module.exports = router;
