import { IBook } from "@interfaces";

export default interface IBookRepository {
    createBook: (book: IBook) => Promise<IBook>;
    getAllBooks: () => Promise<any>;
    getBookById: () => Promise<IBook | null>;
    updateBookById: (id: string, book: IBook) => Promise<IBook | null>;
    updateBookExtraInformationById: (id: string, extraInformation: string) => Promise<IBook | null>;
    deleteBookById: (id: string) => Promise<any>;
}