"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var dotenv_1 = __importDefault(require("dotenv"));
var express_1 = __importDefault(require("express"));
var cors_1 = __importDefault(require("cors"));
var app = express_1.default();
dotenv_1.default.config();
var corsOptions = {
    origin: process.env.CORS_ORIGIN || "*",
};
app.use(cors_1.default(corsOptions));
app.use(express_1.default.json());
var PORT = process.env.PORT || 3000;
app.listen(PORT, function () {
    console.log("Server running on port: " + PORT);
});
app.get("/", function (req, res) {
    res.send("Hello World");
});
