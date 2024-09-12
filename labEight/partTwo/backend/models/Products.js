import { DataTypes } from "sequelize";
import sequelize from "../config/db";

const Product = sequelize.define(
  "Product",
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    title: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    price: {
      type: DataTypes.DECIMAL(10, 2),
      allowNull: false,
    },
    description: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
    category: {
      type: DataTypes.STRING,
      allowNull: true, // Category can be NULL
    },
    image_url: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    rating: {
      type: DataTypes.FLOAT,
      allowNull: true,
    },
    rating_count: {
      type: DataTypes.INTEGER,
      allowNull: true,
    },
  },
  {
    tableName: "products", // Specify the table name
    timestamps: false, // Set to true if you want Sequelize to manage createdAt and updatedAt fields
  }
);

export default Product;
