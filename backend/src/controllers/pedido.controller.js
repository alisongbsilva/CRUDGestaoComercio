const Pedido = require("../models/pedido.model");
const Produto = require("../models/produto.model");

// Retornar somente a data atual
function dataAtual() {
    const hoje = new Date();
    const dia = hoje.getDate();
    const mes = hoje.getMonth() + 1;
    const ano = hoje.getFullYear();

    data = `${ano}-${mes}-${dia}`;
    return data;
}

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
            dataPedido: dataAtual(),
        });

            await pedido.save();
            res.status(201).json(pedido);

        } catch (err) {
            res.status(400).json({ erro: err.message });
        }
};

// Listar pedidos
exports.listarPedidos = async (req, res) => {
    try {
        const pedidos = await Pedido.find()
            .populate("clienteId")
            .populate("empresaId")
            .populate("produtos.produtoId");
        res.json(pedidos);
    } catch (err) {
        res.status(500).json({ erro: err.message });
    }
};

// Buscar pedido por ID
exports.buscarPedidoPorId = async (req, res) => {
    try {
        const pedido = await Pedido.findById(req.params.id)
            .populate("clienteId")
            .populate("empresaId")
            .populate("produtos.produtoId");
        if (!pedido) return res.status(404).json({ erro: "Pedido não encontrado!" });
        res.json(pedido);
    } catch (err) {
        res.status(500).json({ erro: err.message});
    }
};

// Atualizar pedido
exports.atualizarPedido = async (req, res) => {
    try {
        const pedido = await Pedido.findByIdAndUpdate(req.params.id, {
            produtos: req.body.produtos,
            observacoes: req.body.observacoes || "",
        }, { new: true });
        if (!pedido) return res.status(404).json({ erro: "Pedido não encontrado!"});
        res.json(pedido);
    } catch (err) {
        res.status(400).json({ erro: err.message });
    }
};

// Remover pedido
exports.removerPedido = async (req, res) => {
    try {
        const pedido = await Pedido.findByIdAndDelete(req.params.id);
        if (!pedido) return res.status(404).json({ erro: "Pedido não encontrado!" });
        res.json({ mensagem: "Pedido removido com sucesso!" });
    } catch (err) {
        res.status(500).json({ erro: err.message });
    }
};