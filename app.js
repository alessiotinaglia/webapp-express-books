import express from "express";
import cors from "cors";
import routerBooks from "./routes/booksRoute.js";

const app=express()

const port=3000
app.use(cors())
app.use(express.static("public"))

app.use(express.json())

app.get("/", routerBooks);

app.use("/", routerBooks);





app.listen(port, () => {
  console.log(`Server is running on localhost:${port}`)
})