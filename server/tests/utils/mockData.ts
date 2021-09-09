import { Types } from 'mongoose';

export const testItems = [
    {
        _id: new Types.ObjectId(),
        name: "Item1",
        description: "Item1 Description",
        done: false
    },
    {
        _id: new Types.ObjectId(),
        name: "Item2",
        description: "Item2 Description",
        done: true
    },
    {
        _id: new Types.ObjectId(),
        name: "Item3",
        description: "Item3 Description",
        done: false
    },
];

