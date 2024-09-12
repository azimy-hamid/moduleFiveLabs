import app from "./app.js";
import dotenv from "dotenv";

import Sequelize from "./config/db.js";

dotenv.config();

app.listen(process.env.PORT_NUMBER, () => {
  console.log(
    `Lab Eight Backend Server running on port: ${process.env.PORT_NUMBER}`
  );
});
