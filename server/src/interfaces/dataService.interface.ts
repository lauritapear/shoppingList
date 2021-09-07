export default interface IDataService<T> {
    get(id: string): Promise<T | null>;
    getAll(pageNumber: number, pageSize: number):any;
    create(entity: T): Promise<T>;
    update(entity: T): Promise<T | null>;
    delete(id: string): Promise<T | null>;
}