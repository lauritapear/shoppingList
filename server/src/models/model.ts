import { Document, model } from "mongoose";
import { schema } from "./schema";

interface IItem extends Document {
    _id: string;
	name: string;
	description: string;
}

const Item = model<IItem>("Item", schema);

export { Item, IItem };