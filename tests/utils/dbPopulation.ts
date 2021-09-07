import { Item } from '../../src/models';

const populateItemInTestDb = async (testItem: Array<object>) => {
    await Item.collection.insertMany(testItem);
}

const cleanupDb = async () => {
    await Item.remove({}).exec();
}

export {  
    cleanupDb,
    populateItemInTestDb
}