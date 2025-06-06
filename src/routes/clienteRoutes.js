const express = require("express");
const router = express.Router();
const clienteController = require("../controllers/clienteController");
const auth = require("../middlewares/authMiddleware");

router.post("/clientes", auth, clienteController.createCliente);
router.get("/clientes/:id", auth, clienteController.getClienteById);
router.get("/clientes/cpf/:cpf", auth, clienteController.getClienteByCpf);
router.get("/clientes", auth, clienteController.getAllClientes);
router.put("/clientes/:id", auth, clienteController.updateCliente);
router.delete("/clientes/:id", auth, clienteController.deleteCliente);

module.exports = router;

