import { Sequelize } from "sequelize";

// import dotenv from "dotenv";
// dotenv.config();

// const sequelize = new Sequelize(
//   process.env.DB_NAME,
//   process.env.DB_USER,
//   process.env.DB_PASS,
//   {
//     host: process.env.DB_HOST,
//     dialect: process.env.DB_DIALECT,
//   }
// );

const sequelize = new Sequelize("lab_eight_fake_store", "root", "4July2019", {
  host: "localhost",
  dialect: "mysql",
});

export default sequelize;
