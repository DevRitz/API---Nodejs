const express = require("express");
const connectDB = require("./config/db");
const authRoutes = require("./routes/authRoutes");
const categoriaRoutes = require("./routes/categoriaRoutes");
const produtoRoutes = require("./routes/produtoRoutes");
const clienteRoutes = require("./routes/clienteRoutes");
const vendaRoutes = require("./routes/vendaRoutes");

const app = express();

// Conectar ao banco de dados
connectDB;

// Middleware para parsear JSON
app.use(express.json());

// Rotas
app.use("/api", authRoutes);
app.use("/api", categoriaRoutes);
app.use("/api", produtoRoutes);
app.use("/api", clienteRoutes);
app.use("/api", vendaRoutes);

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Servidor rodando na porta ${PORT}`));

