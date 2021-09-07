import express from "express";
import { itemsController} from "../controllers";

const router = express.Router();

router.get("/", itemsController.getItems);
router.get("/:id", itemsController.getItemsById);
router.post("/", itemsController.createItem);
router.patch("/:id", itemsController.updateItem);
router.delete("/:id", itemsController.deleteItem);

export default router;