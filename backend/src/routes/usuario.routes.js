const express = require("express");
const router = express.Router();
const usuarioController = require("../controllers/usuario.controller");
const auth = require("../middlewares/auth");

router.post("/usuarios", usuarioController.cadastrarUsuario);
router.post("/login", usuarioController.login);

router.put("/usuarios/:id", auth, usuarioController.atualizarUsuario);
router.delete("/usuarios/:id", auth, usuarioController.removerUsuario);

router.get("/me", auth, usuarioController.obterDadosUsuario);

module.exports = router;