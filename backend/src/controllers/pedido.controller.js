const Pedido = require("../models/pedido.model");
const Produto = require("../models/produto.model");

// Criar pedido
exports.criarPedido = async (req, res) => {
    try {
        const {
            clienteId, empresaId, produtos
        } = req.body;

        let produtosList = [];
        for (const item of produtos) {
            const produto = await Produto.findById(item.produtoId);
            if (!produto) {
                return res.status(404).json({ erro: `Produto com ID ${item.produtoId} não encontrado!` });
            }
            produtosList.push({
                produtoId: item.produtoId,
                quantidade: item.quantidade,
                valor: produto.valor,
            });
        }

        const total = produtosList.reduce((soma, item) => {
            return soma + item.quantidade * item.valor;
        }, 0);

        const pedido = new Pedido({
            numeroPedido: `PED-${Date.now()}`,
            clienteId,
            empresaId,
            produtos: produtosList,
            total,
            observacoes: req.body.observacoes || "",
            dataPedido: new Date(),
        });

            await pedido.save();
            res.status(201).json(pedido);

        } catch (err) {
            res.status(400).json({ erro: err.message });
        }
};