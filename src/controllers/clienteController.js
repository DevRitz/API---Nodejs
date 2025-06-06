const Cliente = require("../models/Cliente");

// Criar Cliente
exports.createCliente = async (req, res) => {
  try {
    const newCliente = new Cliente(req.body);
    await newCliente.save();
    res.status(201).json(newCliente);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Obter Cliente por ID
exports.getClienteById = async (req, res) => {
  try {
    const cliente = await Cliente.findById(req.params.id);
    if (!cliente) {
      return res.status(404).json({ message: "Cliente não encontrado" });
    }
    res.status(200).json(cliente);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Obter Cliente por CPF
exports.getClienteByCpf = async (req, res) => {
  try {
    const cliente = await Cliente.findOne({ cpf: req.params.cpf });
    if (!cliente) {
      return res.status(404).json({ message: "Cliente não encontrado" });
    }
    res.status(200).json(cliente);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Obter todos os Clientes
exports.getAllClientes = async (req, res) => {
  try {
    const clientes = await Cliente.find();
    res.status(200).json(clientes);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Atualizar Cliente
exports.updateCliente = async (req, res) => {
  try {
    const updatedCliente = await Cliente.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );
    if (!updatedCliente) {
      return res.status(404).json({ message: "Cliente não encontrado" });
    }
    res.status(200).json(updatedCliente);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Deletar Cliente
exports.deleteCliente = async (req, res) => {
  try {
    const deletedCliente = await Cliente.findByIdAndDelete(req.params.id);
    if (!deletedCliente) {
      return res.status(404).json({ message: "Cliente não encontrado" });
    }
    res.status(200).json({ message: "Cliente deletado com sucesso" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

