export default interface IDataService<T> {
    get(id: string): Promise<T | null>;
    getAll(): Promise<T[] | null>;
    create(entity: T): Promise<T>;
    update(entity: T): Promise<T | null>;
    delete(id: string): Promise<T | null>;
}