import express from "express";
import BibleController from "../controllers/biblesController.js";

const router = express.Router();

router
  .get("/bibles", BibleController.listarBibles)
  .get("/bibles/busca", BibleController.listarBiblePorEditora)
  .get("/bibles/:id", BibleController.listarBiblePorId)
  .post("/bibles", BibleController.cadastrarBible)
  .put("/bibles/:id", BibleController.atualizarBible)
  .delete("/bibles/:id", BibleController.excluirBible)

export default router;   