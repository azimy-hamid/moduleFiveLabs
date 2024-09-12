import express from "express";
import swaggerUi from "swagger-ui-express";
import sequelize from "./config/db";
import Product from "./models/Products";

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const syncDatabase = async () => {
  try {
    await sequelize.sync(); // You can use { force: true } during development to reset the tables
    console.log("Database & tables created!");
  } catch (error) {
    console.error("Error creating database & tables:", error);
  }
};

export default app;
