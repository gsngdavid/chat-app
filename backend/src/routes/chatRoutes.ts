import express from "express";

import { getChat, getLatestMessages, sendMessage } from "../controllers/chatControllers";
import { verifyJWT } from "../middleware/authenticate";

const router = express.Router();

router.get("/", verifyJWT, getLatestMessages);
router.get("/:contactId", verifyJWT, getChat);

router.put("/:receiverId", verifyJWT, sendMessage);

export default router;
