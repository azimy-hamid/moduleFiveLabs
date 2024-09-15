import express from "express";
import swaggerUi from "swagger-ui-express";
import sequelize from "./config/db.js";
import Product from "./models/Products.js";
import productRoutes from "./routes/productsRoutes.js";
import cors from "cors";
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

app.get("/", async (req, res) => {
  try {
    res.status(200).json({ response: "This is the root endpoint" });
  } catch (error) {
    res.status(500).json({ error });
  }
});

app.use("/products", productRoutes);

export default app;
