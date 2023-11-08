import express from "express";
const answerRouter = express.Router();
import {
  getAnswers,
  getAnswer,
  registerAnswer,
  updateAnswer,
  deleteAnswer,
} from "../controller/answerController.js";
answerRouter.get("/answers", getAnswers);
answerRouter.get("/answer/:id", getAnswer);
answerRouter.post("/answer", registerAnswer);
answerRouter.put("/answer/:id", updateAnswer);
answerRouter.delete("/answer/:id", deleteAnswer);

export default answerRouter;
