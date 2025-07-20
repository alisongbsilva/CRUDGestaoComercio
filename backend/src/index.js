const express = require("express");
const cors = require('cors');
const dotenv = require("dotenv");
const connectDB = require("./config/db");

dotenv.config();
connectDB();

const app = express();
app.use(cors());
app.use(express.json());

//Rotas
const empresaRoutes = require("./routes/empresa.routes");
app.use("/empresas", empresaRoutes);
const clienteRoutes = require("./routes/cliente.routes");
app.use("/clientes", clienteRoutes);
const produtoRoutes = require("./routes/produto.routes");
app.use("/produtos", produtoRoutes);
const pedidoRoutes = require("./routes/pedido.routes");
app.use("/pedidos", pedidoRoutes);
const usuarioRoutes = require("./routes/usuario.routes");
app.use(usuarioRoutes);

// Status temporário da API
app.get("/", (req, res) => {
    res.send("API está funcionando!");
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Servidor está ativo na porta ${PORT}`));