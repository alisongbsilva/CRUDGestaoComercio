const mongoose = require("mongoose");

const ClienteSchema = new mongoose.Schema(
    {
        nome: {
            type: String,
            required: true,
        },
        email: {
            type: String,
            required: true,
        },
        telefone: {
            type: String,
            required: true,
        },
        empresaId: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "Empresa",
            required: true,
        },
    },
    {
        timestamps: true,
    }
);

module.exports = mongoose.model("Cliente", ClienteSchema);