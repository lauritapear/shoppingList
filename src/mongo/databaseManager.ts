import mongoose from "mongoose";

class DatabaseManager {
	constructor(private _connectionString: string, private _databaseName: string) {}

	public async connect() {

        try {
            await mongoose.connect(this._connectionString, {
                dbName: this._databaseName,
                connectTimeoutMS: 5000
            });

            console.log(`Connection successful to ${this._databaseName} at ${this._connectionString}`);
        } catch (error) {
            console.log(`Error when trying to connect to ${this._databaseName} at ${this._connectionString}`);
        }
    }

    public async disconnect() {
        await mongoose.disconnect();
    }
}

export default DatabaseManager;