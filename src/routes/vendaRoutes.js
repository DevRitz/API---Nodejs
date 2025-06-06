const express = require("express");
const router = express.Router();
const vendaController = require("../controllers/vendaController");
const auth = require("../middlewares/authMiddleware");

router.post("/vendas", auth, vendaController.createVenda);
router.get("/vendas/:id", auth, vendaController.getVendaById);
router.get("/vendas/numeroNota/:numeroNota", auth, vendaController.getVendaByNumeroNota);
router.get("/vendas", auth, vendaController.getAllVendas);
router.put("/vendas/:id", auth, vendaController.updateVenda);
router.delete("/vendas/:id", auth, vendaController.deleteVenda);

module.exports = router;

