import express from "express";
import BookController from "../controllers/booksController.js";

const router = express.Router();

router
  .get("/books", BookController.listarBooks)
  .get("/books/:id", BookController.listarBookPorId)
  .post("/books", BookController.cadastrarBook)
  .put("/books/:id", BookController.atualizarBook)
  .delete("/books/:id", BookController.excluirBook)

export default router;   