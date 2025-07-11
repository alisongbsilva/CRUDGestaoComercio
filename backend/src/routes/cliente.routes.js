const express =require("express");
const router = express.Router();
const clienteController = require("../controllers/cliente.controller");

router.post("/", clienteController.criarCliente);
router.get("/", clienteController.listarClientes);
router.get("/:id", clienteController.buscarClientePorId);
router.put("/:id", clienteController.atualizarCliente);
router.delete("/:id", clienteController.removerCliente);

module.exports = router;