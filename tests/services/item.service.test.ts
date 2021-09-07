import ItemService from '../../src/services/item.service'
import { IItem } from '../../src/models'
import DatabaseManager from '../../src/mongo/databaseManager'
import { populateItemInTestDb, cleanupDb } from '../utils/dbPopulation'
import { testItems } from '../utils/mockData'
import { Types } from 'mongoose';
import { MongoMemoryServer } from 'mongodb-memory-server';

describe("Items Service", () => {  
    const mongod = new MongoMemoryServer();
    let mongoDatabase: DatabaseManager;
        
    beforeAll(async (done) => {
        const uri = await mongod.getConnectionString();
        const dbName = await mongod.getDbName();

        mongoDatabase = new DatabaseManager(
            uri,
            dbName
        );

        await mongoDatabase.connect();
        await populateItemInTestDb(testItems);
        done();
    });

    afterAll(async (done) => {
        await cleanupDb();
        await mongoDatabase.disconnect();
        await mongod.stop();
        done();
    });

    it("gets an item by id", async (done) => { 
        let item = await ItemService.get(testItems[0]._id.toHexString());
        expect(item && item.name).toEqual(testItems[0].name);
        done();
    });

    it("gets all items", async (done) => {
        const items = await ItemService.getAll();
        items.forEach((item: IItem, index: number) => {
            expect(item.name).toEqual(testItems[index].name);
        });
        done();
    });

    it("creates an item", async (done) => { 
        const itemToCreate = {
            name: "newItem",
            description: "new Item Description"
        } as unknown as IItem;

        const result = await ItemService.create(itemToCreate);
        const item = result.toObject();

        expect(item.name).toEqual(itemToCreate.name);
        expect(item.description).toEqual(itemToCreate.description);

        const itemFromDb = await ItemService.get(item._id);

        expect(itemFromDb && itemFromDb.name).toEqual(itemToCreate.name);
        expect(itemFromDb && itemFromDb.description).toEqual(itemToCreate.description);

        done();
    });

    it("updates an item ", async (done) => { 
        const itemToUpdate = {
            _id: testItems[0]._id,
            name: 'newrandomname'
        } as unknown as IItem;

        await ItemService.update(itemToUpdate);
        const updatedItem = await ItemService.get(testItems[0]._id.toHexString());

        expect(updatedItem && updatedItem.name).not.toEqual(testItems[0].name);

        expect(updatedItem && updatedItem.name).toEqual('newrandomname');
        expect(updatedItem && updatedItem.description).toEqual(testItems[0].description);
        done();
    });

    it("deletes an item", async (done) => { 
        await ItemService.delete(testItems[0]._id.toHexString());

        const deletedItem = await ItemService.get(testItems[0]._id.toHexString());
        // expect(deletedItem).toBeNull();
        done();
    });
});