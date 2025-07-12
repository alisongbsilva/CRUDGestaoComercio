const Produto = require("../models/produto.model");

//Criar produto
exports.criarProduto = async (req, res) => {
    try {
        const produto = new Produto(req.body);
        await produto.save();
        res.status(201).json(produto);
    } catch (err) {
        res.status(400).json({ erro: err.message});
    }
};

//Listar produtos
exports.listarProdutos = async (req, res) => {
    try {
        const produtos = await Produto.find().populate("empresaId");
        res.json(produtos);
    } catch (err) {
        res.status(500).json({ erro: err.message});
    }
};

//Buscar produto por ID
exports.buscarProdutoPorId = async (req, res) => {
    try {
        const produto = await Produto.findById(req.params.id).populate("empresaId");
        if (!produto) return res.status(404).json({ erro: "Produto não encontrado!"});
        res.json(produto);
    } catch (err) {
        res.status(500).json({ erro: err.message});
    }
};

//Atualizar produto
exports.atualizarProduto = async (req, res) => {
    try {
        const produto = await Produto.findByIdAndUpdate(req.params.id, req.body, { new: true});
        if(!produto) return res.status(404).json({ erro: "Produto não encontrado!"});
        res.json(produto);
    } catch (err) {
        res.status(400).json({ erro: err.message});
    }
};

//Remover produto
exports.removerProduto = async (req, res) => {
    try {
        const produto = await Produto.findByIdAndDelete(req.params.id);
        if (!produto) return res.status(404).json({ erro: "Produto não encontrado!"});
        res.json({ mensagem: "Produto removido com sucesso!"});
    } catch (err) {
        res.status(500).json({ erro: err.message});
    }
};