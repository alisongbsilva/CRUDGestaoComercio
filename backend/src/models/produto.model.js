const mongoose = require("mongoose");

const ProdutoSchema = new mongoose.Schema(
    {
        nome: {
            type: String,
            required: true,
        },
        valor: {
            type: Number,
            required: true,
        },
        descricao: {
            type: String,
            required: true,
        },
        empresaId: {
            type: mongoose.Schema.Types.ObjectId,
            refg: "Empresa",
            required: true,
        },
    },
    {
        timestamps: true,
    }
);

module.exports = mongoose.model("Produto", ProdutoSchema);