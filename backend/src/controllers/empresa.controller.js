const Empresa = require("../models/empresa.model");

// Criar empresa
exports.criarEmpresa = async (req, res) => {
    try {
        const empresa = new Empresa(req.body);
        await empresa.save();
        res.status(201).json(empresa);
    } catch (err) {
        res.status(400).json({ erro: err.message });
    }
};

//Listar empresas
exports.listarEmpresas = async (req, res) => {
    try {
        const empresas = await Empresa.find();
        res.json(empresas);
    } catch (err) {
        res.status(500).json({ erro: err.message });
    }
};

// Buscar por ID
exports.buscarEmpresaPorId = async (req, res) => {
    try {
        const empresa = await Empresa.findById(req.params.id);
        if (!empresa) return res.status(404).json({ erro: "Empresa não encontrada"});
        res.json(empresa);
    } catch (err) {
        res.status(500).json({ erro: err.message});
    }
};

// Atualizar empre
exports.atualizarEmpresa = async (req, res) => {
    try {
        const empresa = await Empresa.findByIdAndUpdate(req.params.id, req.body, { new: true});
        if (!empresa) return res.status(404).json({ erro: "Empresa não encontrada"});
        res.json(empresa);
    } catch (err) {
        res.status(400).json({ erro: err.message});
    }
};

// Deletar empresa
exports.deletarEmpresa = async (req, res) => {
    try {
        const empresa = await Empresa.findByIdAndDelete(req.params.id);
        if (!empresa) return res.status(404).json({ erro: "Empresa não encontrada" });
        res.json({ mensagem: "Empresa deletada com sucesso" });
    } catch (err) {
        res.status(500).json({ erro: err.message});
    }
};

