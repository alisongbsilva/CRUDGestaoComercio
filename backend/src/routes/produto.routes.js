const express = require("express");
const router = express.Router();
const produtoController = require("../controllers/produto.controller");

router.post("/", produtoController.criarProduto);
router.get("/", produtoController.listarProdutos);
router.get("/:id", produtoController.buscarProdutoPorId);
router.put("/:id", produtoController.atualizarProduto);
router.delete("/:id", produtoController.removerProduto);

module.exports = router;