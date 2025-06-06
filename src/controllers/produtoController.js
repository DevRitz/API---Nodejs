const Produto = require("../models/Produto");

// Criar Produto
exports.createProduto = async (req, res) => {
  try {
    const newProduto = new Produto(req.body);
    await newProduto.save();
    res.status(201).json(newProduto);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Obter Produto por ID
exports.getProdutoById = async (req, res) => {
  try {
    const produto = await Produto.findById(req.params.id).populate("categoria");
    if (!produto) {
      return res.status(404).json({ message: "Produto não encontrado" });
    }
    res.status(200).json(produto);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Obter Produto por Nome
exports.getProdutoByName = async (req, res) => {
  try {
    const produto = await Produto.findOne({ nome: req.params.nome }).populate("categoria");
    if (!produto) {
      return res.status(404).json({ message: "Produto não encontrado" });
    }
    res.status(200).json(produto);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Obter todos os Produtos
exports.getAllProdutos = async (req, res) => {
  try {
    const produtos = await Produto.find().populate("categoria");
    res.status(200).json(produtos);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Atualizar Produto
exports.updateProduto = async (req, res) => {
  try {
    const updatedProduto = await Produto.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );
    if (!updatedProduto) {
      return res.status(404).json({ message: "Produto não encontrado" });
    }
    res.status(200).json(updatedProduto);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Deletar Produto
exports.deleteProduto = async (req, res) => {
  try {
    const deletedProduto = await Produto.findByIdAndDelete(req.params.id);
    if (!deletedProduto) {
      return res.status(404).json({ message: "Produto não encontrado" });
    }
    res.status(200).json({ message: "Produto deletado com sucesso" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

