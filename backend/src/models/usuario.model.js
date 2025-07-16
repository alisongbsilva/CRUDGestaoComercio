const mongoose = require("mongoose");

const usuarioSchema = new mongoose.Schema(
    {
    nome: {type: String, required: true},
    email: {type: String, required: true, unique: true},
    senha: {type: String, required: true},
    },
    { timestamp: true },
);

module.exports = mongoose.model("Usuario", usuarioSchema);