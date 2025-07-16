const Usuario = require("../models/usuario.model");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

// Registrar um novo usuário
exports.cadastrarUsuario = async (req, res) => {
    try {
        const { nome, email, senha} = req.body;

        const usuarioExistente = await Usuario.findOne({ email });
        if(usuarioExistente) return res.status(400).json({ erro: "Já existe um usuário com este email" });
        
        const senhaHash = await bcrypt.hash(senha, 10);

        const novoUsuario = new Usuario({ nome, email, senha: senhaHash });
        await novoUsuario.save();

        res.status(201).json({ mensagem: "Usuario foi cadastrado com sucesso!" });
    } catch (err) {
        res.status(500).json({ erro: "Erro ao cadastrar usuário"});
    }
};

// Retorna dados do usuário logado
exports.obterDadosUsuario = async (req, res) => {
    try {
        const usuario = await Usuario.findById(req.usuario.id).select("-senha");
        if (!usuario) return res.status(404).json({ erro: "Usuário não encontrado!" });

        res.json(usuario);
    } catch (err) {
        res.status(500).json({ erro: err.message });
    }
};

// Atualizar usuário
exports.atualizarUsuario = async (req, res) => {
    try {
        if (!req.usuario || req.usuario.id !== req.params.id) {
            return res.status(403).json({ erro: "Acesso negado!" });
        }

        const { nome, email, senha} = req.body;

        const updateData = {};
        if (nome) updateData.nome = nome;
        if (email) updateData.email = email;
        if (senha) {
            const bcrypt = require("bcryptjs");
            updateData.senha = await bcrypt.hash(senha, 10);
        }

        const usuarioAtualizado = await Usuario.findByIdAndUpdate(req.params.id, updateData, { new: true });
        if (!usuarioAtualizado) return res.status(404).json({ erro: "Usuário não encontrado!" });

        res.json(usuarioAtualizado);
    } catch (err) {
        res.status(400).json({ erro: err.message });
    }
}

// Remover usuário
exports.removerUsuario = async (req, res) => {
    try {
        if (!req.usuario || req.usuario.id !== req.params.id) {
            return res.status(403).json({ erro: "Acesso negado!" });
        }

        const usuario = await Usuario.findByIdAndDelete(req.params.id);
        if (!usuario) return res.status(404).json({ erro: "Usuário não encontrado!" });

        res.json({ mensagem: "Usuário removido com sucesso!" });
    } catch (err){
        res.status(500).json({ erro: err.message });
    }
};

// Login de usuário
exports.login = async (req, res) => {
    try {
        const { email, senha} = req.body;

        const usuario = await Usuario.findOne({ email});
        if(!usuario) return res.status(400).json({ erro: "Login ou senha incorretos!"});

        const senhaValida = await bcrypt.compare(senha, usuario.senha);
        if(!senhaValida) return res.status(400).json({ erro: "Login ou senha incorretos!"});

        const token = jwt.sign(
            { id: usuario._id, nome: usuario.nome, email: usuario.email },
            process.env.JWT_SECRET,
            { expiresIn: "1h" }
        );

        res.json({ token });
    } catch (err) {
        res.status(500).json({ erro: err.message });
    }
};