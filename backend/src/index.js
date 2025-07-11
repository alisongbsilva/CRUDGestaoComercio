const express = require("express");
const dotenv = require("dotenv");
const connectDB = require("./config/db");

dotenv.config();
connectDB();

const app = express();
app.use(express.json());

//Rotas
const empresaRoutes = require("./routes/empresa.routes");
app.use("/empresas", empresaRoutes);

app.get("/", (req, res) => {
    res.send("API está funcionando!");
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Servidor está ativo na porta ${PORT}`));