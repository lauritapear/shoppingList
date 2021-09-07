import express from "express";
import itemsRouter from "../routes/items.routes";

const router = express.Router();

router.use("/items", itemsRouter);

export default router;