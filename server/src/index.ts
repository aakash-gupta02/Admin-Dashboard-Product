import "reflect-metadata"
import { Request, Response } from "express";
import cors from "cors"

import express from "express"
import { datasource } from "./config/datasource"
import ProductRoute from "./routes/product.route"

const app = express()

app.use(cors())
app.use(express.json())

const port = 3000

app.use("/product", ProductRoute)


datasource.initialize().then(() => {
    console.log("DB CONNECTED");
    app.listen(port, () => {
        console.log(`Server is running on http://localhost:${port}`);

    })

}).catch((err) => {
    console.log("Error connecting DB: ", err);

})