const express = require("express");
const router = express.Router();
const empresaController = require("../controllers/empresa.controller");

//Rotas públicas
router.post("/", empresaController.criarEmpresa);
router.get("/", empresaController.listarEmpresas);
router.get("/:id", empresaController.buscarEmpresaPorId);
router.put("/:id", empresaController.atualizarEmpresa);
router.delete("/:id", empresaController.deletarEmpresa);

module.exports = router;