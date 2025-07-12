const express = require("express");
const router = express.Router();
const pedidoController = require("../controllers/pedido.controller");

router.post("/", pedidoController.criarPedido);
// router.get("/", pedidoController.listarPedidos);
// router.get("/:id", pedidoController.buscarPedidoPorId);
// router.put("/:id", pedidoController.atualizarPedido);
// router.delete("/:id", pedidoController.removerPedido);

module.exports = router;