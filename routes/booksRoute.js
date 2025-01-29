import express from "express";
import { index, show, store } from "../controllers/booksC.js"
const routerBooks = express.Router();

routerBooks.get("/books", index);

routerBooks.get("/books/:id", show)

routerBooks.post("/books/:id/reviews", store)



export default routerBooks;