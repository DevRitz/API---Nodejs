const Categoria = require("../models/Categoria");

// Criar Categoria
exports.createCategoria = async (req, res) => {
  try {
    const { nome } = req.body;
    const newCategoria = new Categoria({ nome });
    await newCategoria.save();
    res.status(201).json(newCategoria);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Obter Categoria por ID
exports.getCategoriaById = async (req, res) => {
  try {
    const categoria = await Categoria.findById(req.params.id);
    if (!categoria) {
      return res.status(404).json({ message: "Categoria não encontrada" });
    }
    res.status(200).json(categoria);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Obter Categoria por Nome
exports.getCategoriaByName = async (req, res) => {
  try {
    const categoria = await Categoria.findOne({ nome: req.params.nome });
    if (!categoria) {
      return res.status(404).json({ message: "Categoria não encontrada" });
    }
    res.status(200).json(categoria);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Obter todas as Categorias
exports.getAllCategorias = async (req, res) => {
  try {
    const categorias = await Categoria.find();
    res.status(200).json(categorias);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Atualizar Categoria
exports.updateCategoria = async (req, res) => {
  try {
    const { nome } = req.body;
    const updatedCategoria = await Categoria.findByIdAndUpdate(
      req.params.id,
      { nome },
      { new: true }
    );
    if (!updatedCategoria) {
      return res.status(404).json({ message: "Categoria não encontrada" });
    }
    res.status(200).json(updatedCategoria);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Deletar Categoria
exports.deleteCategoria = async (req, res) => {
  try {
    const deletedCategoria = await Categoria.findByIdAndDelete(req.params.id);
    if (!deletedCategoria) {
      return res.status(404).json({ message: "Categoria não encontrada" });
    }
    res.status(200).json({ message: "Categoria deletada com sucesso" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

