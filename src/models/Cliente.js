const mongoose = require("mongoose");

const EnderecoSchema = new mongoose.Schema({
  rua: String,
  numero: Number,
  bairro: String,
  cidade: String,
  estado: String,
  cep: String,
});

const ClienteSchema = new mongoose.Schema({
  cpf: {
    type: String,
    required: true,
    unique: true,
  },
  nome: {
    type: String,
    required: true,
  },
  endereco: EnderecoSchema,
  telefone: String,
  email: String,
});

module.exports = mongoose.model("Cliente", ClienteSchema);

