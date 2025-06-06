const express = require("express");
const router = express.Router();
const produtoController = require("../controllers/produtoController");
const auth = require("../middlewares/authMiddleware");

router.post("/produtos", auth, produtoController.createProduto);
router.get("/produtos/:id", auth, produtoController.getProdutoById);
router.get("/produtos/nome/:nome", auth, produtoController.getProdutoByName);
router.get("/produtos", auth, produtoController.getAllProdutos);
router.put("/produtos/:id", auth, produtoController.updateProduto);
router.delete("/produtos/:id", auth, produtoController.deleteProduto);

module.exports = router;

