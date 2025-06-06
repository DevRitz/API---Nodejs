const express = require("express");
const router = express.Router();
const categoriaController = require("../controllers/categoriaController");
const auth = require("../middlewares/authMiddleware");

router.post("/categorias", auth, categoriaController.createCategoria);
router.get("/categorias/:id", auth, categoriaController.getCategoriaById);
router.get("/categorias/nome/:nome", auth, categoriaController.getCategoriaByName);
router.get("/categorias", auth, categoriaController.getAllCategorias);
router.put("/categorias/:id", auth, categoriaController.updateCategoria);
router.delete("/categorias/:id", auth, categoriaController.deleteCategoria);

module.exports = router;

