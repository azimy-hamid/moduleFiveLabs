import express from "express";
import cors from "cors";
import operations from "./controllers/operations.js";

const PORT = 3000;
const app = express();
app.use(cors()); // I have used this cause I was getting an error while trying to access my api from the frontend.

app.use(express.static("public"));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  res.sendFile(__dirname + "/public/index.html");
});

app.use("/api", operations);

app.listen(PORT, () => {
  console.log(`Server Three running on port: ${PORT}`);
});
