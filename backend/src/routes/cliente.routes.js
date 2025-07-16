const express =require("express");
const router = express.Router();
const clienteController = require("../controllers/cliente.controller");
const auth = require("../middlewares/auth");

router.post("/", auth, clienteController.criarCliente);
router.get("/", auth, clienteController.listarClientes);
router.get("/:id", auth, clienteController.buscarClientePorId);
router.put("/:id", auth, clienteController.atualizarCliente);
router.delete("/:id", auth, clienteController.removerCliente);

module.exports = router;