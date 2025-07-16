const express = require("express");
const router = express.Router();
const pedidoController = require("../controllers/pedido.controller");
const auth = require("../middlewares/auth");

router.post("/", auth, pedidoController.criarPedido);
router.get("/", auth, pedidoController.listarPedidos);
router.get("/:id", auth, pedidoController.buscarPedidoPorId);
router.put("/:id", auth, pedidoController.atualizarPedido);
router.delete("/:id", auth, pedidoController.removerPedido);

module.exports = router;