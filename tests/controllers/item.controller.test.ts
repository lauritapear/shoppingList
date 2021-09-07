import ItemsController from '../../src/controllers/items.controller'
import itemService from '../../src/services/item.service'
import { IItem } from '../../src/models';
import { testItems } from '../utils/mockData'

describe("Items Controller", () => {  
    let itemController: ItemsController;
    let res: any;
    let nextFunction: any;

    beforeAll(() => {
        itemController = new ItemsController(itemService);
        res = {
            send: jest.fn()
        };
        nextFunction = jest.fn();
    });

    beforeEach(() => {
        jest.resetAllMocks();
    });
    

    it("gets all items", async () => { 
        itemService.getAll = jest.fn().mockImplementation(() => {
            return Promise.resolve(testItems);
        });

        const req: any = jest.fn();
        
        await itemController.getItems(req, res, nextFunction);
        expect(res.send).toHaveBeenCalledWith(testItems);
    });

    it("gets an item by id", async () => { 
        itemService.get = jest.fn().mockImplementation(() => {
            return Promise.resolve(testItems[0]);
        });

        const req: any = {
            params: {
                id: '1234',
            }
        }

        await itemController.getItemsById(req, res, nextFunction);
        expect(res.send).toHaveBeenCalledWith(testItems[0]);
    });

    it("creates a new item ", async () => { 
        const newItem = {
            name: "SomeItem",
            description: "someItem Description"
        }
        
        const req: any = {
            body: newItem
        }

        const createdItem = {
            name: newItem.name,
            description: newItem.description
        }
        
        itemService.create = jest.fn().mockImplementation((item: IItem) => {
            return Promise.resolve(item);
        });

        await itemController.createItem(req, res, nextFunction);
        expect(res.send).toHaveBeenCalledWith(createdItem);
    });

    it("updates an item", async () => { 
        itemService.update = jest.fn().mockImplementation(() => {
            return Promise.resolve(testItems[0]);
        });

        const req: any = {
            params: {
                id: '1234',
            },
            body: { 
                updatedFields: {
                    name: "SomeItemToUpdate",
                }
            }   
        }

        await itemController.updateItem(req, res, nextFunction);
        expect(res.send).toHaveBeenCalledWith({ _id: testItems[0]._id });
    });

    it("deletes an item by id", async () => { 
        itemService.delete = jest.fn().mockImplementation(() => {
            return Promise.resolve(testItems[0]);
        });

        const req: any = {
            params: {
                id: testItems[0]._id,
            }
        }

        await itemController.deleteItem(req, res, nextFunction);
        expect(res.send).toHaveBeenCalledWith(testItems[0]);
    });
});