
import ItemsController from "./items.controller";
import itemService from "../services/item.service";

const itemsController = new ItemsController(itemService);

export {
    itemsController
}