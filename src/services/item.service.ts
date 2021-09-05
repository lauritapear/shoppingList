import { Types } from "mongoose";
import IDataService from "../interfaces/dataService.interface";
import { IItem, Item } from "../models";

class ItemService implements IDataService<IItem> {
    public getAll() {
        return Item.find().lean().exec();
    }

    public getAllByFields(fields: object) {
        return  Item.find(fields).lean().exec();
    }

    public get(id: string) {
        return Item.findById(id).lean().exec();
    }

    public getByFields(fields: object) {
        return Item.findOne(fields).lean().exec();
    }

    public getByEitherFields(fields: object) {
        return Item.findOne({
            $or: fields
        }).lean().exec();
    }

    public create(entity: IItem) {
        const newItem = new Item({
            _id: Types.ObjectId(),
			name: entity.name,
			description: entity.description
		});

		return newItem.save();
    }

    public async update(entity: IItem) {
        const { _id, ...updatedFields } = entity;

        return Item.findOneAndUpdate(
			{ _id },
			updatedFields
        ).lean().exec();
    }

    public delete(id: string) {
        return Item.findByIdAndRemove(id).exec();
    }
}

export default new ItemService();