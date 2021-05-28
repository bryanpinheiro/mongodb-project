import { Types } from "mongoose";
import { IBook } from "@interfaces";
import { BookModel } from "@models";
import IBookRepository from "./interfaces/IBookRepository";

class BookRepository implements IBookRepository {

    getAllBooks() {
        return new Promise(async (resolve, reject) => {
            await BookModel.find()
            .exec()
            .then((results: IBook[]) => {
                resolve({
                    books: results,
                    count: results.length
                });
            })
            .catch(error => {
                reject(error);
            });
        });
    }

    createBook(book: IBook) {
        return new BookModel({
            _id: new Types.ObjectId(),
            author: book.author,
            title: book.title
        }).save();
    }

    getBookById(id: string) {
        return BookModel.findOne({
            _id: id
        }).exec();
    }

    updateBookById(id: string, book: IBook) {
        return BookModel.findOneAndUpdate({
            _id: id
        },
        {
            book
        }).exec();
    }

    updateBookExtraInformationById(id: string, extraInformation: string) {
        return BookModel.findOneAndUpdate({
            _id: id
        },
        {
            extraInformation
        }).exec();
    }

    deleteBookById(id: string) {
        return BookModel.deleteOne({
            _id: id
        }).exec();
    }

}

export default new BookRepository();
