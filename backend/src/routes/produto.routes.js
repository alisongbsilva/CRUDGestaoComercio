const express = require("express");
const router = express.Router();
const produtoController = require("../controllers/produto.controller");
const auth = require("../middlewares/auth");

router.post("/", auth, produtoController.criarProduto);
router.get("/", auth, produtoController.listarProdutos);
router.get("/:id", auth, produtoController.buscarProdutoPorId);
router.put("/:id", auth, produtoController.atualizarProduto);
router.delete("/:id", auth, produtoController.removerProduto);

module.exports = router;