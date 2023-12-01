import "reflect-metadata";

import express from "express";
import * as bodyParser from "body-parser";

import { createServer } from "http";

import cors from "cors";

import { routes } from "./routes";

const app = express();

app.use(cors({
    origin: "*",
    allowedHeaders: "*",
    methods: ["GET", "PUT", "POST"]
}));

app.use(bodyParser.json());
app.use(routes);

const httpServer = createServer(app);

export { httpServer };