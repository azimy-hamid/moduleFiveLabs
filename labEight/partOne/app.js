import express from "express";
import cors from "cors";
import operations from "./controllers/operations.js";
import swaggerUi from "swagger-ui-express";
import { readFileSync } from "fs";

const swaggerDocument = JSON.parse(readFileSync("./swagger.json", "utf-8")); // importing it with the ES6 specification was throwing an error thats why I had to use this

const app = express();
app.use(cors()); // I have used this cause I was getting an error while trying to access my api from the frontend.

app.use(express.static("public"));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerDocument));

app.get("/", (req, res) => {
  res.sendFile(__dirname + "/public/index.html");
});

app.use("/api", operations);

export default app;
