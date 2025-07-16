const express = require("express");
const router = express.Router();
const empresaController = require("../controllers/empresa.controller");
const auth = require("../middlewares/auth");

router.post("/", auth, empresaController.criarEmpresa);
router.get("/", auth, empresaController.listarEmpresas);
router.get("/:id", auth, empresaController.buscarEmpresaPorId);
router.put("/:id", auth, empresaController.atualizarEmpresa);
router.delete("/:id", auth, empresaController.removerEmpresa);

module.exports = router;