if(process.env.NODE_ENV != "production") {
    require("dotenv").config({
        path: `.env${process.env.NODE_ENV == "development" ? "" : "." + process.env.NODE_ENV}`
    });
}

import express from "express";
import mongoose from "mongoose";
import { HOSTNAME, PORT, MONGO_URI, MONGO_OPTIONS } from "@configs";
import routes from "@routes";

mongoose.connect(MONGO_URI, MONGO_OPTIONS).then(() => {
    console.log("Connected to MongoDB successfully!");
}).catch((error)=> {
    console.log(`Error message: ${error.message}, error: ${error}`);
});

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use("/api", routes);

app.listen(PORT, HOSTNAME, () => {
    console.log(`Server is running on http://${HOSTNAME}:${PORT}`);
});