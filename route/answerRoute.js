import express from "express";
const answerRouter = express.Router();
import {
  getAnswers,
  getAnswer,
  registerAnswer,
  updateAnswer,
  deleteAnswer,
} from "../controller/answerController.js";
import { apiKeyMiddleware} from "../middleware/authMiddleware.js";
answerRouter.get("/answers", getAnswers);
answerRouter.get("/answer/:id", getAnswer);
answerRouter.post("/answer", apiKeyMiddleware, registerAnswer);
answerRouter.put("/answer/:id", apiKeyMiddleware, updateAnswer);
answerRouter.delete("/answer/:id", apiKeyMiddleware, deleteAnswer);

export default answerRouter;
