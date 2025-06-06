const Venda = require("../models/Venda");
const Cliente = require("../models/Cliente");

// Criar Venda
exports.createVenda = async (req, res) => {
  try {
    const { cliente, produtos, totalVenda, numeroNota } = req.body;

    // Verificar se o cliente existe
    const existingCliente = await Cliente.findById(cliente);
    if (!existingCliente) {
      return res.status(404).json({ message: "Cliente não encontrado" });
    }

    const newVenda = new Venda({
      cliente,
      produtos,
      totalVenda,
      numeroNota,
    });
    await newVenda.save();
    res.status(201).json(newVenda);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Obter Venda por ID
exports.getVendaById = async (req, res) => {
  try {
    const venda = await Venda.findById(req.params.id).populate("cliente");
    if (!venda) {
      return res.status(404).json({ message: "Venda não encontrada" });
    }
    res.status(200).json({ venda });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Obter Venda por Numero da Nota
exports.getVendaByNumeroNota = async (req, res) => {
  try {
    const venda = await Venda.findOne({ numeroNota: req.params.numeroNota }).populate("cliente");
    if (!venda) {
      return res.status(404).json({ message: "Venda não encontrada" });
    }
    res.status(200).json({ venda });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Obter todas as Vendas
exports.getAllVendas = async (req, res) => {
  try {
    const vendas = await Venda.find().populate("cliente");
    res.status(200).json(vendas);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Atualizar Venda
exports.updateVenda = async (req, res) => {
  try {
    const updatedVenda = await Venda.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );
    if (!updatedVenda) {
      return res.status(404).json({ message: "Venda não encontrada" });
    }
    res.status(200).json(updatedVenda);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Deletar Venda
exports.deleteVenda = async (req, res) => {
  try {
    const deletedVenda = await Venda.findByIdAndDelete(req.params.id);
    if (!deletedVenda) {
      return res.status(404).json({ message: "Venda não encontrada" });
    }
    res.status(200).json({ message: "Venda deletada com sucesso" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

