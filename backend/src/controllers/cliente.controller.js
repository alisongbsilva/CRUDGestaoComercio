const Cliente = require("../models/cliente.model");

// Criar cliente
exports.criarCliente = async (req, res) => {
    try {
        const cliente = new Cliente(req.body);
        await cliente.save();
        res.status(201).json(cliente);
    } catch (err) {
        res.status(400).json({ erro: err.message});
    }
};

// Listar clientes
exports.listarClientes = async (req, res) => {
    try {
        const clientes = await Cliente.find().populate("empresaId");
        res.json(clientes);
    } catch (err) {
        res.status(500).json({ erro: err.message});
    }
};

// Buscar cliente por Id
exports.buscarClientePorId = async (req, res) => {
    try {
        const cliente = await Cliente.findById(req.params.id).populate("empresaId");
        if (!cliente) return res.status(404).json({ erro: "Cliente não encontrado!"});
        res.json(cliente);
    } catch (err) {
        res.status(500).json({ erro: err.message});
    }
};

//Atualizar cliente
exports.atualizarCliente = async (req, res) => {
    try {
        const cliente = await Cliente.findByIdAndUpdate(req.params.id, req.body, { new: true});
        if (!cliente) return res.status(404).json({ erro: "Cliente não encontrado!"});
        res.json(cliente);
    } catch (err) {
        res.status(400).json({ erro: err.message});
    }
};

//Remover cliente
exports.removerCliente = async (req, res) => {
    try {
        const cliente = await Cliente.findByIdAndDelete(req.params.id);
        if(!cliente) return res.status(404).json({ erro: "Cliente não encontrado!"});
        res.json({ mensagem: "Cliente removido com sucesso!"});
    } catch (err) {
        res.status(500).json({ erro: err.message});
    }
};