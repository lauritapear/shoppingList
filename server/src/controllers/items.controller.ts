import { NextFunction, Request, RequestHandler, Response } from "express";
import createError from "http-errors";
import IDataService from "../interfaces/dataService.interface";
import { IItem } from "../models";

class ItemsController {
    constructor(private itemService: IDataService<IItem>) {}

    public getItems: RequestHandler = async (req: Request, res: Response, next: NextFunction) => {
        try {
            console.log(req.query);
            const items = await this.itemService.getAll(Number(req.query.pageNumber), Number(req.query.pageSize));
            res.send(items);
        } catch (error) {
            next(createError(500));
        }
    }

    public getItemsById: RequestHandler = async (req: Request, res: Response, next: NextFunction) => {
        try {
            const item = await this.itemService.get(req.params.id);
            res.send(item);
        } catch (error) {
            next(createError(500));
        }
    }

    public createItem: RequestHandler = async (req: Request, res: Response, next: NextFunction) => {
        if (!req.body) {
            next(createError(400, "Incomplete request"));
            return;
        }

        try {
            const newItem = {
                name: req.body.name,
                description: req.body.description || "",
            } as IItem;

            const createdItem = await this.itemService.create(newItem);
            res.send(createdItem);
        } catch (error) {
            console.log(error);
            next(createError(500));
        }
    }

    public updateItem: RequestHandler = async (req: Request, res: Response, next: NextFunction) => {
        try {
            const itemToUpdate: IItem = {
                _id: req.params.id,
                ...req.body
            };

            const updatedItem = await this.itemService.update(itemToUpdate);
            res.send({ _id: updatedItem!._id });
        } catch (error) {
            next(createError(500));
        }
    }

    public deleteItem: RequestHandler = async (req: Request, res: Response, next: NextFunction) => {
        try {
            console.log(req.params.id)
            const deletedItem = await this.itemService.delete(req.params.id);
            res.send(deletedItem);
        } catch (error) {
            next(createError(500));
        }
    }
    
}

export default ItemsController;