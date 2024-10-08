import sequelize from "../config/db.js";

const getAllProducts = async (req, res) => {
  try {
    let [allProducts] = await sequelize.query("SELECT * FROM products");
    res.status(200).json(allProducts);
  } catch (error) {
    console.log(error);
    res.status(500).json({ "Failed to connect to db": error });
  }
};

export default { getAllProducts };
