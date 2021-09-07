import mongoose from "mongoose";

const Schema = mongoose.Schema;
const ObjectId = Schema.Types.ObjectId;

const schema = new Schema({
    _id: {
        type: ObjectId,
		required: true
    },
	name: {
		type: String,
		required: [true],
	},
	description: {
		type: String,
		required: [true],
	}
}, { _id: false });

export { schema };