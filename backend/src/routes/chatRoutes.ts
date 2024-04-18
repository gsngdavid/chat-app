import express from "express";

import { sendMessage } from "../controllers/chatControllers";
import { verifyJWT } from "../middleware/authenticate";

const router = express.Router();

router.put("/:receiverId", verifyJWT, sendMessage);

export default router;
