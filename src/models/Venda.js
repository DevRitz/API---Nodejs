const mongoose = require("mongoose");

const VendaSchema = new mongoose.Schema({
  data: {
    type: Date,
    default: Date.now,
  },
  numeroNota: {
    type: String,
    required: true,
    unique: true,
  },
  cliente: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Cliente",
    required: true,
  },
  produtos: [
    {
      codigoInterno: {
        type: String,
        required: true,
      },
      nome: {
        type: String,
        required: true,
      },
      quantidade: {
        type: Number,
        required: true,
      },
      valorUnitario: {
        type: Number,
        required: true,
      },
    },
  ],
  totalVenda: {
    type: Number,
    required: true,
  },
});

module.exports = mongoose.model("Venda", VendaSchema);

