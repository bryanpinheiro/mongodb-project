import { Router } from "express";
import { bookController } from "@controllers";

const bookRouter = Router();

bookRouter.get("/", bookController.getAllBooks);
bookRouter.post("/", bookController.createBook);
bookRouter.get("/:id", bookController.getBookById);
bookRouter.put("/:id", bookController.updateBookById);
bookRouter.patch("/:id", bookController.updateBookExtraInformationById);
bookRouter.delete("/:id", bookController.deleteBookById);

export default bookRouter;