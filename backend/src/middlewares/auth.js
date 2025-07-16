const jwt = require("jsonwebtoken");

module.exports = function (req, res, next) {
    const token = req.header("Authorization")?.replace("Bearer ", "");
    if (!token) return res.status(401).json({ erro: "Acesso Negado!"});

    try {
        const decodificado = jwt.verify(token, process.env.JWT_SECRET);
        req.usuario = decodificado;
        next();
    } catch {
        res.status(400).json({ erro: "Token inválido!"});
    }
};