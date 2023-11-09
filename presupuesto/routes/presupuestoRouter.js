const express = require("express");
const presupuestoController = require("./../controllers/presupuestoController");

const router = express.Router();

router.get("/test", (req, res) => {
  return res.status(200).send("Presupuesto service API");
});
router.get("/", presupuestoController.listarPresupuesto);
router.post("/genera", presupuestoController.ingresaPresupuesto);
router.delete("/", presupuestoController.eliminaPresupuesto);

module.exports = router;
