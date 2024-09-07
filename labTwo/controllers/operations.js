import express from "express";
const router = express.Router();

router.post("/add", (req, res) => {
  try {
    const { num1, num2 } = req.body;
    let result = parseInt(num1) + parseInt(num2);
    res.status(200).json(result);
  } catch (error) {
    res.status(500).json("Server error");
  }
});

export default router;
