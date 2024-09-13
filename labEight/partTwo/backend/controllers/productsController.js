import sequelize from "../config/db.js";

const getAllProducts = async (req, res) => {
  try {
    let [allProducts, metaData] = await sequelize.query(
      "SELECT * FROM lab_eight_fake_store.products"
    );
    console.log(allProducts);
    res.status(200).json({ Products: allProducts });
  } catch (error) {
    res.status(500).json({ "Failed to connect to db": error });
  }
};

export default { getAllProducts };
