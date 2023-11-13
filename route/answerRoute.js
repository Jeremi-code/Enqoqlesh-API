import express from "express";
const answerRouter = express.Router();
import {
  getAnswers,
  getAnswer,
  registerAnswer,
  updateAnswer,
  deleteAnswer,
} from "../controller/answerController.js";
import { defaultRouteMiddleware} from "../middleware/authMiddleware.js";
answerRouter.get("/answers", getAnswers);
answerRouter.get("/answer/:id", getAnswer);
answerRouter.post("/answer", defaultRouteMiddleware, registerAnswer);
answerRouter.put("/answer/:id", defaultRouteMiddleware, updateAnswer);
answerRouter.delete("/answer/:id", defaultRouteMiddleware, deleteAnswer);

export default answerRouter;
