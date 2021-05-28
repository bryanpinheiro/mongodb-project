import { IBook } from "@interfaces";
import { bookRepository } from "@repositories";
import { Request, Response, NextFunction } from "express";

async function getAllBooks(req: Request, res: Response, next: NextFunction) {
    try {
        await bookRepository.getAllBooks()
        .then((data) => {
            res.status(200).json(data);
        }).catch((error) => {
            res.status(500).json({
                message: error.message,
                error: error
            });
        });
    } catch(error) {
        console.log("An error ocurred on fetching all books, error: ", error);
    }
}

async function createBook(req: Request, res: Response, next: NextFunction) {
    try {
        const newBook = req.body as IBook;

        await bookRepository.createBook(newBook)
        .then(() => {
            res.sendStatus(201);
        }).catch((error) => {
            res.status(500).json({
                message: error.message,
                error: error
            });
        });
    } catch(error) {
        console.log("An error ocurred on creating a new book, error: ", error);
    }
}

async function getBookById(req: Request, res: Response, next: NextFunction) {
    try {
        const id = req.params.id;

        await bookRepository.getBookById(id)
        .then((data) => {
            res.status(200).json(data);
        }).catch((error) => {
            res.status(500).json({
                message: error.message,
                error: error
            });
        });
    } catch(error) {
        console.log("An error ocurred on fetching all books, error: ", error);
    }
}

async function updateBookById(req: Request, res: Response, next: NextFunction) {
    try {
        if(!req.body) {
            return res.sendStatus(400);
        }

        const id = req.params.id;
        const updatedBook = req.body as IBook;

        await bookRepository.updateBookById(id, updatedBook)
        .then(() => {
            res.sendStatus(200);
        }).catch((error) => {
            res.status(500).json({
                message: error.message,
                error: error
            });
        });
    } catch(error) {
        console.log("An error ocurred on updating a book, error: ", error);
    }
}

async function updateBookExtraInformationById(req: Request, res: Response, next: NextFunction) {
    try {
        if(!req.body.extraInformation) {
            return res.sendStatus(400);
        }

        const id = req.params.id;
        const extraInformation = req.body.extraInformation as string;

        await bookRepository.updateBookExtraInformationById(id, extraInformation)
        .then(() => {
            res.sendStatus(200);
        }).catch((error) => {
            res.status(500).json({
                message: error.message,
                error: error
            });
        });
    } catch(error) {
        console.log("An error ocurred on updating a book's extra information, error: ", error);
    }
}

async function deleteBookById(req: Request, res: Response, next: NextFunction) {
    try {
        const id = req.params.id;

        await bookRepository.deleteBookById(id)
        .then(() => {
            res.sendStatus(204);
        }).catch((error) => {
            res.status(500).json({
                message: error.message,
                error: error
            });
        })
    } catch(error) {
        console.log("An error ocurred on deleting a book, error: ", error);
    }
}

export {
    createBook,
    getAllBooks,
    getBookById,
    updateBookById,
    updateBookExtraInformationById,
    deleteBookById
}