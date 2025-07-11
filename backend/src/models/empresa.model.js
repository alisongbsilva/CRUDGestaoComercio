const mongoose = require("mongoose");

const EmpresaSchema = new mongoose.Schema(
    {
        nomeFantasia: {
            type: String,
            required: true,
        },
        razaoSocial: {
            type: String,
            required: true,
        },
        cnpj: {
            type: String,
            required: true,
            unique: true,
        },
    },
    {
    timestamps: true,
    }
);

module.exports = mongoose.model("Empresa", EmpresaSchema);