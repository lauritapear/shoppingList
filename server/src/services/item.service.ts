import IDataService from "../interfaces/dataService.interface";
import { Types } from "mongoose";
import { IItem, Item } from "../models";

class ItemService implements IDataService<IItem> {
  public async getAll(pageNumber: number, pageSize: number) {
    const pageNumberCalculated = pageNumber * pageSize || 0;
    const pipeline = [
      {
        $facet: {
          paginatedResults: [
            { $skip: pageNumberCalculated },
            { $limit: pageSize },
          ],
          totalCount: [
            {
              $count: "count",
            },
          ],
        },
      },
    ];
    return await Item.aggregate(pipeline);
  }

  public get(id: string) {
    return Item.findById(id).exec();
  }

  public create(entity: IItem) {
    const newItem = new Item({
      _id: new Types.ObjectId().toHexString(),
      name: entity.name,
      description: entity.description,
    });

    return newItem.save();
  }

  public async update(entity: IItem) {
    const { _id, ...updatedFields } = entity;

    return Item.findOneAndUpdate({ _id }, updatedFields).exec();
  }

  public delete(id: string) {
    return Item.findByIdAndRemove(id).exec();
  }
}

export default new ItemService();
