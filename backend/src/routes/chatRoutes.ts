import express from "express";

import { getLatestMessages, sendMessage } from "../controllers/chatControllers";
import { verifyJWT } from "../middleware/authenticate";

const router = express.Router();

router.get("/", verifyJWT, getLatestMessages);

router.put("/:receiverId", verifyJWT, sendMessage);

export default router;
