const mongoose = require("mongoose");

const PedidoSchema = new mongoose.Schema (
    {
        numeroPedido: {
            type: String,
            required: true,
        },
        clienteId: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "Cliente",
            required: true,
        },
        empresaId: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "Empresa",
            required: true,
        },
        produtos: [{
            produtoId: {
                type: mongoose.Schema.Types.ObjectId,
                ref: "Produto",
                required: true,
            },
            quantidade: {
                type: Number,
                required: true,
            },
            valor: {
                type: Number,
                required: true,
            },
         }],
        total: {
            type: Number,
            required: true,
        },
         observacoes: {
            type: String,
            required: false,
        },
        dataPedido: {
            type: Date,
            default: Date.now,
        },
    },
    { timestamps: true }
);

module.exports = mongoose.model("Pedido", PedidoSchema);