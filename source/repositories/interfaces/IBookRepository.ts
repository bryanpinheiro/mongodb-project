import { IBook } from "@interfaces";

export default interface IBookRepository {
    createBook: (book: IBook) => Promise<IBook>;
    getAllBooks: () => Promise<any>;
}