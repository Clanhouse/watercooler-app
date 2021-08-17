import dotenv from "dotenv";
import express from "express";
import cors from "cors";
import "reflect-metadata";
import {createConnection} from "typeorm";
import config from "./config/db.config";

dotenv.config();

const corsOptions = {
    origin: process.env.CORS_ORIGIN || "*",
};

const PORT: Number = Number(process.env.PORT) || 8001;


createConnection(config).then(async connection => {

    const app = express();

    app.use(cors(corsOptions));
    app.use(express.json());
    app.use(
        express.urlencoded({
            extended: true
        })
    );

    app.get("/", (req, res) => {
        res.send({message: "Hello World"});
    });

    app.listen(PORT, () => {
        console.log(`Server running on port: ${PORT}`);
    });

}).catch(err => {
    throw err;
});

