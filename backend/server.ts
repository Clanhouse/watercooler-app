import dotenv from "dotenv";
import express from "express";
import cors from "cors";
const app = express();
dotenv.config();

const corsOptions = {
  origin: process.env.CORS_ORIGIN || "*",
};

app.use(cors(corsOptions));

app.use(express.json());

app.use(
  express.urlencoded({
    extended: true,
  })
);

const PORT = process.env.PORT || 8001;
app.listen(PORT, () => {
  console.log("Server running on port: " + PORT);
});

app.get("/", (req, res) => {
  res.send({ message: "Hello World" });
});
